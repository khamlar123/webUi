import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { BannerAPIService } from './api/banner-api.service';


@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  url = ``;

  public imgUrl: any[] = [];
  public imageList: any = [];
  public loadBannerSliderDataSubscription: Subscription | undefined;
  showIndex = 0;

  constructor(
    private bannerAPIService: BannerAPIService,
    private service: ServiceService
    ) {
      this.url = this.service.getImgUrl(1);
    }


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



    });
  }


  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
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
