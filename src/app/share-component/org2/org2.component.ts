import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-org2',
  templateUrl: './org2.component.html',
  styleUrls: ['./org2.component.scss']
})
export class Org2Component implements OnInit {
  @Input() modal: any[];
  detailData: any;
  constructor() { }

  ngOnInit(): void {
  }

  getDetail(dt: any): void {
    this.detailData = dt;
  }

  close(): void {
    this.detailData = null;
  }

}
