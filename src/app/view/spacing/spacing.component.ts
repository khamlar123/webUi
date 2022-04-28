import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent implements OnInit {
  org1 = {
    name: 'ທ່ານ ທະນູຄໍາ ປິດຈະວົງ',
    type: '(ຫົວໜ້າພະແນກ)',
    children: [
      {
        name: '',
        type: '',
        children: [
          {
            name: 'ຂະແໜງກວດກາລົດ',
            type: '',
            children: [

            ]
          },
          {
            name: 'ຂະແໜງນໍາເຂົ້າແລະສົ່ງອອກ',
            type: '',
            children: [

            ]
          }
        ]
      },
      {
        name: 'ທ່ານ ຄໍາເຫຼັກ ແສນທະພູມ',
        type: '(ຮອງຫົວໜ້າພະແນກ)',
        children: [
          {
            name: 'ຫ້ອງການສັງລວມບໍລິຫານແລະຈັດຕັ້ງພະນັກງານ',
            type: '',
            children: [

            ]
          },
          {
            name: 'ຂະແໜງການແລະການຮວມມື',
            type: '',
            children: [

            ]
          },
          {
            name: 'ຂະແໜງສົ່ງເສີມວິສາຫະກິດຂະໜາດນ້ອຍແລະກາງແລະການຄ້າ',
            type: '',
            children: [

            ]
          }
        ]
      },
      {
        name: 'ທ່ານ ບຸນລົງ ຫົງຄໍາ',
        type: '(ຮອງຫົວໜ້າພະແນກ)',
        children: [
          {
            name: 'ຂະແໜງການຄ້າພາຍໃນ',
            type: '',
            children: [
            ]
          },
          {
            name: 'ຂະແໜງທະບຽນແລະຄຸມຄອງວິສາຫະກິດ',
            type: '',
            children: [

            ]
          },

        ]
      },
      {
        name: 'ທ່ານ ອຸດອນ ມະນີຈັນ',
        type: '(ຮອງຫົວໜ້າພະແນກ)',
        children: [
          {
            name: 'ຂະແໜງຊັບສີນທາງປັນຍາ,ມາດຕະຖານແລະວັດແທກ',
            type: '',
            children: [

            ]
          },
          {
            name: 'ຂະແໜງອຸສາຫະກໍາແລະຫັດທະກໍາ',
            type: '',
            children: [

            ]
          }
        ]
      },
    ]
  };

  masterOrgList: OrgData = {
    name: '',
    type: '',
    children: [],
  };

  newData: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadOrgList();
   
    
  }

  loadOrgList(): void {
    this.api.loadStructures('').subscribe(res => {
      this.newData = res.data.filter((f: { org_id: string; }) => f.org_id === '1');
      console.log(this.newData);
      const map = res.data.filter((f: { org_id: string; }) => f.org_id === '1').map((m: OrgData) => {
        return {
          name: m.name,
          type: m.type,
          children: m.children.map(e => {
            return {
              name: e.name,
              type: e.type,
              children: (e.children) ? e.children.map(ee => {
                return {
                  name: ee.name,
                  type: ee.type,
                  children: (ee.children) ? ee.children.map(eee => {
                    return {
                      name: eee.name,
                      type: eee.type,
                      children: (eee.children) ? eee.children.map(eeee => {
                        return {
                          name: eeee.name,
                          type: eeee.type,
                          children: (eeee.children) ? eeee.children.map(eeeee => {
                            return {
                              name: eeeee.name,
                              type: eeeee.type,
                              children: (eeeee.children) ? eeeee.children.map(eeeeee => {
                                return {
                                  name: eeeeee.name,
                                  type: eeeeee.type,
                                  children: (eeeeee.children) ? eeeeee.children.map(eeeeeee => {
                                    return {
                                      name: eeeeeee.name,
                                      type: eeeeeee.type,
                                      children: (eeeeeee.children) ? eeeeeee.children.map(eeeeeeee => {
                                        return {
                                          name: eeeeeeee.name,
                                          type: eeeeeeee.type,
                                          children: (eeeeeeee.children) ? eeeeeeee.children : []
                                        };
                                      }) : []
                                    };
                                  }) : []
                                };
                              }) : []
                            };
                          }) : []
                        };
                      }) : []
                    };
                  }) : []
                };
              }) : []
            };
          })
        };
      });
      this.masterOrgList = map[0];
    });
  }



}
