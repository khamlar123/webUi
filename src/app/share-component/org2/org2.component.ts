import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss']
})
export class Org2Component implements OnInit {
  @Input() modal: {
    children: any[];
    createDate: string;
    dsc: string;
    imgUrl: string[];
    name: string;
    org_id: string;
    parent: string;
    stId: string;
    type: string;
  }[];
  url = '';
  detailData: any;
  constructor(private service : ServiceService) {
    this.url = this.service.getImgUrl(1);
  }

  ngOnInit(): void {

  }

  getDetail(dt: any): void {
    this.detailData = dt;
  }

  close(): void {
    this.detailData = null;
  }

  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
