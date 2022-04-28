import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  show = false;
  prid = '0';
  constructor(private api: ApiService) { }
  title = 'ພະແນກສັງລວມ';

  jsonData: any[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  setName(value: string): void {
    this.title = value;
  }

  loadData():void{
    const modal ={}
    this.api.loadProcess(modal).subscribe(res => {
      this.jsonData = res.data;
    })
  }

  getData(): any[]{
    return  this.jsonData.filter(f => f.refId === "1").reverse();
  }

}
