import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-depament-info',
  templateUrl: './depament-info.component.html',
  styleUrls: ['./depament-info.component.scss']
})
export class DepamentInfoComponent implements OnInit {
  subs = new SubSink();
  jsonData: any[] = [];

  constructor(public service: ServiceService, private api:ApiService) {
    this.service.hidenMenu = true;
  }

  ngOnInit(): void {
    const modal ={

    }
    this.subs.sink = this.api.loadDepamentInfo(modal).subscribe(res => {
     this.jsonData =res.data;

    })
  }

}
