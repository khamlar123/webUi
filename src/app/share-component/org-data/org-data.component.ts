import { Component, Input, OnInit } from '@angular/core';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';
@Component({
  selector: 'app-org-data',
  templateUrl: './org-data.component.html',
  styleUrls: ['./org-data.component.scss']
})
export class OrgDataComponent implements OnInit {
  @Input() modal: OrgData = {
    name: '',
    type: '',
    children: []
  }



  constructor() { }

  ngOnInit(): void {
  }

}
