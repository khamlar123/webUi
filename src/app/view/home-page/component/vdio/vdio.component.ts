import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { HomePageApiService } from '../../api/home-page-api.service';

@Component({
  selector: 'app-vdio',
  templateUrl: './vdio.component.html',
  styleUrls: ['./vdio.component.scss']
})
export class VdioComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  vdioList: any[] = [];
  vdioUrl = 'https://www.youtube.com/embed/';

  safeSrc: SafeResourceUrl[] = [];
  pos = 0;
  url = '';
  constructor(
    private homePageAPI: HomePageApiService,
    private sanitizer: DomSanitizer,
    public service: ServiceService
  ) {
    this.url = this.service.baseURL;
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const model = {
      page: 1,
      limit: 4,
      keyword: ''
    };
    this.subs.sink = this.homePageAPI.loadVdio(model).subscribe(res => {
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

  // tslint:disable-next-line:typedef
  findPlayVdio() {
    return this.vdioList.find(f => f.hasPlay === true);
  }

  // tslint:disable-next-line:typedef
  chngeVdio(id: number) {
    this.pos = id;
  }

  getImgUrl(): string {
    console.log(this.url.split('/website'));

    return this.url.split('/website')[0] + '/';
  }

  checkVdio(): boolean{
    return (this.vdioList[this.pos].status === '1')? true : false;
  }

}
