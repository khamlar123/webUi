import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { SitelinkService } from './api/sitelink.service';

@Component({
  selector: 'app-sitelinks',
  templateUrl: './sitelinks.component.html',
  styleUrls: ['./sitelinks.component.scss']
})
export class SitelinksComponent implements OnInit {
  subs = new SubSink();
  searchValue = '';
  jasonData: {
    createDate: Data;
    slLink: string;
    slName: string;
    slid: string;
    imgUrl: string;
  }[] = [];

  masterData: {
    createDate: Data;
    slLink: string;
    slName: string;
    slid: string;
    imgUrl: string;
  }[] = [];
  url = '';
  constructor(public api: SitelinkService, private service: ServiceService) {
    this.url = this.service.getImgUrl(1);
  }

  ngOnInit(): void {
    const model = {
    };
    this.subs.sink = this.api.loadSiteLinks(model).subscribe(res => {
      this.jasonData = res.data;
      this.masterData = res.data;
    });
  }

  searchFunc(): void {
    if (this.searchValue !== '') {
      const searchData = this.masterData.filter(f => f.slName.includes(this.searchValue.toLocaleLowerCase()));


      this.jasonData = searchData;
    } else {
      this.jasonData = this.masterData;
    }
  }


  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
