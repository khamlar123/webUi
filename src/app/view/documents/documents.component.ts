import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  id = 0;
  searchValue = '';
  jsonData: {
    createDate: string;
    doc: string;
    docId: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [];

  masterData: {
    createDate: string;
    doc: string;
    docId: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [];

  url = '';
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api: ApiService,
    private service: ServiceService
  ) { 
    this.url = this.service.baseURL;
  }

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }
      this.loadDoc();
    });
    this.loadDoc();
  }

  loadDoc():void{
    const modal = {}
    this.api.loadDoc(modal).subscribe(res => {
      this.jsonData = res.data;
      this.masterData = res.data;
    })
  }

  getData(): any[] {
    return this.jsonData.filter(f => f.refId === this.id.toString());
  }

  getname(): string{
    if(this.id === 1){
      return 'ກົດຫມາຍ';
    }

    if(this.id === 2){
      return 'ດໍາລັດ'
    }

    if(this.id === 3){
      return 'ຄໍາສັ່ງ';
    }

    if(this.id === 4){
      return 'ຄໍາແນະນໍາ ຫຼື ບົດແນະນໍາ';
    }

    if(this.id === 5){
      return 'ຂໍ້ຕົກລົງ'
    }

    if(this.id === 6){
      return 'ແຈ້ງການ'
    }
    return '';
  }


  getImgUrl(url: string): string {
    console.log(url);
    
    const str = JSON.parse(url)[0];

    if (JSON.parse(url)[0] === null || JSON.parse(url)[0] === undefined) {
      return '';
    }
    return this.url + str.slice(7, str.length);
  }

  getLink(value: string): string{

    
    if(value !== undefined){
      return  this.url.split("/api")[0] + JSON.parse(value)[0].slice(7, value.length)
    }

    return '';
      
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
