import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';
@Component({
  selector: 'app-development-plan',
  templateUrl: './development-plan.component.html',
  styleUrls: ['./development-plan.component.scss']
})
export class DevelopmentPlanComponent implements OnInit {

  constructor(private api: ApiService, public service: ServiceService) {
    this.url = this.service.getImgUrl(1);
  }
  asModalId = 0;
  url = '';
  searchValue = '';
  jsonData: {
    asId: string;
    createDate: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [];

  masterData : {
    asId: string;
    createDate: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [];
  asModal: any = {
    asId: '',
    asName: '',
    asDes: '',
    logo: '',
    createDate: '',
    asTitle: ''
  }

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
      this.masterData = res.data;
    })
  }

  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

  getItems(){
    return this.jsonData.filter(f => f.refId === "2");
  }

  searchFunc(): void {
    if (this.searchValue !== '') {
      const searchData = this.masterData.filter(f => f.title.includes(this.searchValue.toLocaleLowerCase())
      || f.dsc.includes(this.searchValue.toLocaleLowerCase())
      );
      this.jsonData = searchData;
    } else {
      this.jsonData = this.masterData;
    }
  }

}
