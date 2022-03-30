import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {
  asModalId = 0;
  url = 'http://216.127.173.163/website';
  jsonData: {
    asId: string;
    createDate: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [
    // {
    //   asId: '1',
    //   asName: ' Lorem ipsum dolor sit amet.',
    //   asDes: 'ເຢຍລະມັນ ສະໜອງທຶນ 7,25 ລ້ານເອີໂຣ ຊ່ວຍພັດທະນາອາຊີວະສຶກສາໃນລາວ',
    //   createDate: '2020/03/15',
    //   asLaDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   asEnDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   asId: '2',
    //   asName: ' Lorem ipsum dolor sit amet.',
    //   asDes: '25ປີ ມະຫາວິທະຍາໄລແຫ່ງຊາດ ສ້າງບຸກຄະລາກອນອອກຮັບໃຊ້ສັງຄົມໄດ້ 120.171 ຄົນ',
    //   createDate: '2020/03/15',
    //   asLaDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   asEnDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   asId: '3',
    //   asName: ' Lorem ipsum dolor sit amet.',
    //   asDes: 'ພິທີສະເຫຼີມສະຫຼອງວັນສ້າງຕັ້ງ ມະຫາວິທະຍາໄລແຫ່ງຊາດ (ມຊ) ຄົບຮອບ 25 ປີ (5 ພະຈິກ 1996 – 5 ພະຈິກ 2021) ໄດ້ຈັດຂຶ້ນໃນວັນທີ 22 ທັນວາ 2021 ທີ່ສະຖາບັນຂົງຈື ມຊ ພາຍໃຕ້ການເປັນປະທານຂອງ ທ່ານ ອຸດົມ ພອນຄໍາເພັງ ຮັກສາການອະທິການບໍດີ ມະຫາວິທະຍາໄລແຫ່ງຊາດ ຊຶ່ງໄດ້ຮັບກຽດເຂົ້າຮ່ວມຂອງ ທ່ານ ທອງລຸນ ສີສຸລິດ ເລຂາທິການໃຫຍ່ ຄະນະບໍລິຫານງານສູນກາງພັກ ປະທານປະເທດ ແຫ່ງ ສປປ ລາວ; ມີລັດຖະມົນຕີ, ຮອງລັດຖະມົນຕີ, ອະດີດປະທານສະພາ ມຊ ແລະ ອະດີດອາທິການບໍດີ ພ້ອມດ້ວຍບັນດາຄູ-ອາຈານ, ນັກສຶກສາ ເຂົ້າຮ່ວມ.',
    //   createDate: '2020/03/15',
    //   asLaDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   asEnDoc: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // }
  ];

  asModal: any = {
    asId: '',
    asName: '',
    asDes: '',
    logo: '',
    createDate: '',
    asTitle: ''
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadAssistance();
  }

  findAssis(id: any): void {
    this.asModalId = id;
    this.asModal = this.jsonData.find(f => f.asId === id.toString());
    console.log(this.asModal);

  }

  loadAssistance():void{
    const moda ={}
    this.api.loadAssistance(moda).subscribe(res => {
      this.jsonData = res.data;
      
    })
  }

  getImgUrl(url: string):string{
    let str = JSON.parse(url)[0];
    return this.url + str.slice(7, str.length);
  }

  getItems(){
    return this.jsonData.filter(f => f.refId === "1");
  }

}
