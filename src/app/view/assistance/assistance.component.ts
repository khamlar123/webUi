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

  masterData: {
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
      this.masterData = res.data;
    })
  }

  getImgUrl(url: string):string{
    let str = JSON.parse(url)[0];
    return this.url + str.slice(7, str.length);
  }

  getItems(){
    return this.jsonData.filter(f => f.refId === "1");
  }

  searchFunc(): void {
    if (this.searchValue !== '') {
      const searchData = this.masterData.filter(f => f.title.includes(this.searchValue.toLocaleLowerCase())
        || f.dsc.includes(this.searchValue.toLocaleLowerCase()));


      this.jsonData = searchData;
    } else {
      this.jsonData = this.masterData;
    }
  }

}
