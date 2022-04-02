import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  id = 0;
  searchValue = '';
  jsonData: {
    createDate: string;
    refId: string;
    spDsc: string;
    stEngLink: string;
    stId: string;
    stLaoLink: string;
    stTitle: string;
  }[] = [];

  masterData: {
    createDate: string;
    refId: string;
    spDsc: string;
    stEngLink: string;
    stId: string;
    stLaoLink: string;
    stTitle: string;
  }[] = [];
  url = ''
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api: ApiService,
    private service: ServiceService
  ) { 
    this.url =  this.service.baseURL;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }

    });

    this.loadStatisrics();
  }

  loadStatisrics():void{
    this.api.loadStatistics('').subscribe(res => {
      if(res.status === "1"){
        this.jsonData = res.data;
        this.masterData = res.data;
      }
    })
  }

  getData(): any[] {
    return this.jsonData.filter(f => f.refId === this.id.toString());
  }

  getName(): string{

    if(this.id === 1){
      return 'ສະຖິຕິພະນັກງານລັດຖະກອນ';
    }
    if(this.id === 2){
      return 'ສະຖິຕິອຸດສາຫະກໍາ ແລະ ຫັດຖະກໍາ';
    }

    if(this.id === 3 ){
      return 'ສະຖິຕິການຄ້າພາຍໃນ';
    }

    if(this.id === 4 ){
      return 'ສະຖິຕິທະບຽນວິສາຫະກິດ';
    }

    if(this.id === 5){
      return 'ສະຖິຕິນໍາເຂົ້າ ແລະ ສົ່ງອອກ'
    }

    if(this.id === 6){
      return 'ສະຖິຕິວິສາຫະກິດຂະໜາດນ້ອຍ ແລະ ກາງ'
    }
    return '';

  }

  getImgUrl(url: string):string{     
    let str = JSON.parse(url)[0];
    return this.url + str.slice(8, str.length);
  }

  searchFunc(): void {
    if (this.searchValue !== '') {
      const searchData = this.masterData.filter(f => f.stTitle.includes(this.searchValue.toLocaleLowerCase())
      || f.spDsc.includes(this.searchValue.toLocaleLowerCase())
      );
      this.jsonData = searchData;
    } else {
      this.jsonData = this.masterData;
    }
  }

}
