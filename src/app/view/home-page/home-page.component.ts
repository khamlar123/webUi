import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { HomePageApiService } from './api/home-page-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  url = 'https://www.youtube.com/embed/sX5StCTZpfQ';
  subs = new SubSink();
  imgIndex = 0;
  sliderEfficeIndex = 0;
  enpoin = `http://psldoic.gov.la/`;

  public loadNewSubscription: Subscription | undefined;
  public loadBannerRef2Subscription: Subscription | undefined;

  public newsList: any[] = [];
  public bannerRef1List: any[] = [];
  public imgUrl: any[] = [];

  prodList1: any[] = [];
  prodList2: any[] = [];
  prodList3: any[] = [];

  constructor(
    public service: ServiceService,
    private homePageAPI: HomePageApiService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadProduct2();
    this.loadProduct3();
    this.loadNews();
    this.loadBannerSliderData();
    this.autoplay();

  }

  ngOnDestroy(): void {
    if (this.loadNewSubscription) { this.loadNewSubscription.unsubscribe(); }
  }

  public loadNews() {
    const setParams: any = {
      "page": 1,
      "limit": 4,
      "keyword": ""
    }
    this.loadNewSubscription = this.homePageAPI.loadNews(setParams).subscribe(res => {

      if (res.status == 1) {

        this.newsList = res.data.Data;
        for (let i = 0; i < this.newsList.length; i++) {
          this.newsList[i].imgUrl = JSON.parse(this.newsList[i].imgUrl);
        }

      }
    });
  }

  public loadBannerSliderData() {
    const data = {

    }
    this.loadBannerRef2Subscription = this.homePageAPI.loadBannerRef2(data).subscribe(res => {
      if (res.status == 1) {
        this.bannerRef1List = this.sortFunc(res.data.filter((f: { ref_id: string; }) => f.ref_id == "2"), "orderIndex")

      }
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
    interval(5000).pipe().subscribe(x =>
      this.slider()
    );
  }

  slider(): void {
    if (this.imgIndex + 1 <= this.bannerRef1List.length - 1) {
      this.imgIndex++;
    } else {
      this.imgIndex = 0;
    }
  }

  nextAndBlackFunc(id: number): void {
    if (id === 0) {
      (this.imgIndex > 0) ? this.imgIndex-- : this.imgIndex = this.bannerRef1List.length - 1;
    } else {
      (this.imgIndex < this.bannerRef1List.length - 1) ? this.imgIndex++ : this.imgIndex = 0;

    }
  }

  dotFunc(i: number): void {
    this.imgIndex = i;
  }

  loadProduct() {
    const setParams: any = {
      "page": 1,
      "limit": 6,
      "keyword": ""
    }

    this.subs.sink = this.homePageAPI.loadProduct(setParams).subscribe(res => {
      console.log('prod1', res);
      if (res.status == 1) {


        this.prodList1 = this.sortFunc(res.data.Data, "ranking");
        for (let i = 0; i < this.prodList1.length; i++) {
          this.prodList1[i].imgUrl = JSON.parse(this.prodList1[i].imgUrl);
        }
      }
    });
  }

  loadProduct2() {
    const setParams: any = {
      "page": 1,
      "limit": 6,
      "keyword": ""
    }

    this.subs.sink = this.homePageAPI.loadProduct2(setParams).subscribe(res => {
      console.log('prod2', res);
      if (res.status == 1) {
        this.prodList2 = this.sortFunc(res.data.Data, "ranking");
        for (let i = 0; i < this.prodList2.length; i++) {
          this.prodList2[i].imgUrl = JSON.parse(this.prodList2[i].imgUrl);
        }
      }
    });
  }

  loadProduct3() {
    const setParams: any = {
      "page": 1,
      "limit": 6,
      "keyword": ""
    }

    this.subs.sink = this.homePageAPI.loadProduct3(setParams).subscribe(res => {
      console.log('prod3', res);
      if (res.status == 1) {
        this.prodList3 = this.sortFunc(res.data.Data, "ranking");
        for (let i = 0; i < this.prodList3.length; i++) {
          this.prodList3[i].imgUrl = JSON.parse(this.prodList3[i].imgUrl);
        }
      }
    });
  }

}
