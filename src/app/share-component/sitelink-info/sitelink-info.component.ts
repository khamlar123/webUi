import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { SitelinkService } from 'src/app/view/sitelinks/api/sitelink.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sitelink-info',
  templateUrl: './sitelink-info.component.html',
  styleUrls: ['./sitelink-info.component.scss']
})
export class SitelinkInfoComponent implements OnInit, OnDestroy {
  jasonData: {
    createDate: Data;
    slLink: string;
    slName: string;
    slid: string;
    imgUrl: string;
  }[] = [];
  subs = new SubSink();
  url = '';
  constructor(private api: SitelinkService, private service: ServiceService) {
    this.url = this.service.getImgUrl(1);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const model = {
    };
    this.subs.sink = this.api.loadSiteLinks(model).subscribe(res => {
      this.jasonData = res.data;

    });
  }

  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
