import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { SubSink } from 'subsink';
import { BannerAPIService } from './api/banner-api.service';


@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  url = `http://216.127.173.163/`;

  public imgUrl: any[] = [];
  public imageList: any = [];
  public loadBannerSliderDataSubscription: Subscription | undefined;
  showIndex = 0;

  constructor(private bannerAPIService: BannerAPIService) { }


  ngOnDestroy(): void {
    this.subs.unsubscribe();

    if (this.loadBannerSliderDataSubscription) { this.loadBannerSliderDataSubscription.unsubscribe(); }
  }

  ngOnInit(): void {
    this.loadBannerSliderData();
    this.autoplay();
  }

  public loadBannerSliderData(): void {
    const data = {};
    this.loadBannerSliderDataSubscription = this.bannerAPIService.loadBannerRef1(data).subscribe(res => {


        console.log('zzzzzz',res);

        this.imageList = this.sortFunc(res.data.filter((f: { ref_id: string; }) => f.ref_id === '1'), 'orderIndex');
        // sort last ref 1 active because response data not range from biggest to small
        // this.imgUrl = res.data;
        // this.imgUrl = this.imgUrl.filter(item => {
        //   return item.ref_id == 1;
        // });

        // let getLastId: any[] = [];
        // for (let i = 0; i < this.imgUrl.length; i++) {
        //   getLastId.push(this.imgUrl[i].bann_id);
        // }

        // getLastId = getLastId.sort((a, b) => b - a);

        // this.imgUrl = this.imgUrl.filter(item => {
        //   return item.bann_id == getLastId[0]
        // });


        // this.imgUrl = this.imgUrl[0].imgUrl;
        // const imageStr = this.imgUrl.toString();
        // const imageArr: any = Array(imageStr);
        // this.imageList = JSON.parse(imageArr);
        // let createImageList: any = [];

        // for (let i = 0; i < this.imageList.length; i++) {
        //   createImageList.push({ imgUrl: `http://216.127.173.163/${this.imageList[i]}` });
        // }

        // this.imageList = createImageList;


    });
  }

  getImgUrl(url: string): string {
    if (url) {
      return JSON.parse(url)[0] ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return this.url + url;
    }
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


  autoplay(): void {
    interval(3000).pipe().subscribe(x =>
      this.slider()
    );
  }

  switchBanner(index: number): void {
    this.showIndex = index;
  }

  nextFunc(): void {
    this.showIndex += 1;
  }

  blackFunc(): void {
    this.showIndex -= 1;
  }

  slider(): void {
    if (this.showIndex + 1 <= this.imageList.length - 1) {
      this.showIndex++;
    } else {
      this.showIndex = 0;
    }
  }

}
