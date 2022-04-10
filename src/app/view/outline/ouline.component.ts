import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-ouline',
  templateUrl: './ouline.component.html',
  styleUrls: ['./ouline.component.scss']
})
export class OulineComponent implements OnInit {
  id = 0;
  searchValue = '';
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api: ApiService
  ) { }


  jsonData: {
    createDate: string;
    emAddress: string;
    emId: string;
    emJoinDate: string;
    emLastName: string;
    emName: string;
    emPhone: string;
    emPosition: string;
  }[] = [];

  masterData: {
    createDate: string;
    emAddress: string;
    emId: string;
    emJoinDate: string;
    emLastName: string;
    emName: string;
    emPhone: string;
    emPosition: string;
  }[] = [];

  masterOrgList1: OrgData = {
    name: '',
    type: '',
    children: [],
  };

  masterOrgList2: OrgData = {
    name: '',
    type: '',
    children: [],
  };

  CouncilList:{
    cou_id: string;
    createDate: string;
    doc: string;
    title: string;
  }[] = [];

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadStaff();
    this.loadOrgList1();
    this.loadOrgList2();
    this.loadCouncil();
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.loadStaff();
        this.loadOrgList1();
        this.loadOrgList2();
        this.loadCouncil();
      }

    });
 
  }

  loadStaff(): void {
    const modal = {

    }
    this.api.loadStaff(modal).subscribe(res => {
      this.jsonData = res.data;
      this.masterData = res.data;
    })

  }

  loadCouncil(): void{
    this.api.loadCouncil('').subscribe(res => {
     
      this.CouncilList = res.data
    })
  }

  searchFunc(): void {
    if (this.searchValue !== '') {
      const searchData = this.masterData.filter(f => f.emName.includes(this.searchValue.toLocaleLowerCase())
        || f.emLastName.includes(this.searchValue.toLocaleLowerCase())
        || f.emPhone.includes(this.searchValue));
      console.log(searchData);

      this.jsonData = searchData;
    } else {
      this.jsonData = this.masterData;
    }
  }

  loadOrgList1(): void{
    this.api.loadStructures('').subscribe(res => {          
      const map = res.data.filter((f: { org_id: string; }) => f.org_id === "2").map((m:OrgData) => {return {
        name: m.name,
        type : m.type,
        children: m.children.map(e => { return{
            name: e.name,
            type : e.type,
            children: (e.children)? e.children.map(ee => { return {
                 name: ee.name, 
                 type:ee.type, 
                 children:(ee.children)? ee.children.map(eee => {return {
                   name: eee.name,
                   type:eee.type,
                   children: (eee.children)? eee.children.map(eeee => {return {
                     name: eeee.name,
                     type: eeee.type,
                     children: (eeee.children)? eeee.children.map(eeeee => {return {
                       name: eeeee.name,
                       type: eeeee.type,
                       children: (eeeee.children)? eeeee.children.map(eeeeee => {return {
                         name: eeeeee.name,
                         type: eeeeee.type,
                         children: (eeeeee.children)? eeeeee.children.map(eeeeeee => {return {
                           name: eeeeeee.name,
                           type: eeeeeee.type,
                           children: (eeeeeee.children)? eeeeeee.children.map(eeeeeeee => {return {
                             name: eeeeeeee.name,
                             type: eeeeeeee.type,
                             children: (eeeeeeee.children)? eeeeeeee.children : []
                           }}) : [] 
                         }}) : []
                       }}) : []
                     }}) : []
                   }}) : []
                  }}) : [] 
                }}): []
          }
        })
      }});
     this.masterOrgList1 = map[0];
    })
  }

  loadOrgList2(): void{
    this.api.loadStructures('').subscribe(res => {          
      const map = res.data.filter((f: { org_id: string; }) => f.org_id === "3").map((m:OrgData) => {return {
        name: m.name,
        type : m.type,
        children: m.children.map(e => { return{
            name: e.name,
            type : e.type,
            children: (e.children)? e.children.map(ee => { return {
                 name: ee.name, 
                 type:ee.type, 
                 children:(ee.children)? ee.children.map(eee => {return {
                   name: eee.name,
                   type:eee.type,
                   children: (eee.children)? eee.children.map(eeee => {return {
                     name: eeee.name,
                     type: eeee.type,
                     children: (eeee.children)? eeee.children.map(eeeee => {return {
                       name: eeeee.name,
                       type: eeeee.type,
                       children: (eeeee.children)? eeeee.children.map(eeeeee => {return {
                         name: eeeeee.name,
                         type: eeeeee.type,
                         children: (eeeeee.children)? eeeeee.children.map(eeeeeee => {return {
                           name: eeeeeee.name,
                           type: eeeeeee.type,
                           children: (eeeeeee.children)? eeeeeee.children.map(eeeeeeee => {return {
                             name: eeeeeeee.name,
                             type: eeeeeeee.type,
                             children: (eeeeeeee.children)? eeeeeeee.children : []
                           }}) : [] 
                         }}) : []
                       }}) : []
                     }}) : []
                   }}) : []
                  }}) : [] 
                }}): []
          }
        })
      }});
     this.masterOrgList2 = map[0];
    })
  }





}
