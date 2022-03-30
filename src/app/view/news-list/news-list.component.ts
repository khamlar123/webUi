import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { HomePageApiService } from '../home-page/api/home-page-api.service';
import { NewListApiService } from './api/new-list-api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  url = 'https://www.youtube.com/embed/sX5StCTZpfQ';
  subs = new SubSink();
  id = 0;
  pos = 0;
  newsList: any[] = [];
  newsListCount: any[] = [];
  bannerRef1List: any[] = [];
  enpoin = `http://216.127.173.163/`;

  vdioList: any[] = [];
  vdioUrl = 'https://www.youtube.com/embed/';

  safeSrc: SafeResourceUrl[] = [];
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api: NewListApiService,
    private bandApi: HomePageApiService,
    private sanitizer: DomSanitizer
  ) { }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }

    });

    this.loadNewList();
    this.loadNewListCount();
    this.loadBannerSliderData();
    this.loadVdio();
  }


  loadNewList(): void {
    this.subs.sink = this.api.loadNews().subscribe(res => {
      this.newsList = res.data;
    });
  }

  loadNewListCount(): void {
    this.subs.sink = this.api.loadNewsCount().subscribe(res => {
      this.newsListCount = res.data.Data;
    });
  }

  public loadBannerSliderData() {
    const data = {

    }
   this.bandApi.loadBannerRef2(data).subscribe(res => {
      if (res.status == 1) {
        this.bannerRef1List = this.sortFunc(res.data.filter((f: { ref_id: string; }) => f.ref_id == "2"), "orderIndex")

      }
    });
  }

  sortFunc(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    array.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return 1;
      } else {
        return -1;
      }
    });
    return array;
  }

  getImgUrl(url: string): string {
    if (url) {
      return JSON.parse(url)[0] ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return this.url + url;
    }
  }

  loadVdio(): void{
    const model = {
      page: 1,
      limit: 4,
      keyword: ''
    };
    this.subs.sink = this.bandApi.loadVdio(model).subscribe(res => {
      this.vdioList = res.data.Data;
      this.pushVdioList(res.data.Data);
    });
  }

  pushVdioList(vdio: any[]): void {
    vdio.forEach(e => {
      this.safeSrc.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.getYoutubeUrl(e.video_url)));
    });
  }

  getYoutubeUrl(value: string): string {
    const skipLink = value.split('?v=');
    return this.vdioUrl + skipLink[1];
  }


}
