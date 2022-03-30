import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { SubSink } from 'subsink';
import { SitelinkService } from './api/sitelink.service';

@Component({
  selector: 'app-sitelinks',
  templateUrl: './sitelinks.component.html',
  styleUrls: ['./sitelinks.component.scss']
})
export class SitelinksComponent implements OnInit {
  subs = new SubSink();

  jasonData: {
    createDate: Data;
    slLink: string;
    slName: string;
    slid: string;
  }[] = []
  constructor(public api:SitelinkService) { }

  ngOnInit(): void {
    const model = {
    }
    this.subs.sink = this.api.loadSiteLinks(model).subscribe(res => {
      this.jasonData = res.data;
    })
  }

}
