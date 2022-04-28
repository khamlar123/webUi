import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  show = false;
  prid = '0';
  jsonData: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void{
    const modal ={}
    this.api.loadProcess(modal).subscribe(res => {
      this.jsonData = res.data;
    })
  }

  getData(): any[]{
    return  this.jsonData.filter(f => f.refId === "2").reverse();
  }

}
