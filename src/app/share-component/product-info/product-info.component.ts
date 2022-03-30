import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoticeApiService } from './api/notice-api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {



  public loadNoticeSubscription: Subscription | undefined;
  public noticeList: any[] = [];
  public noticeList2: any[] = [];
  public noticeList3: any[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];

  constructor(private noticeApiService: NoticeApiService) { }

  ngOnInit(): void {
    this.loadNotice();
    this.loadNotice2();
    this.loadNotice3();
  }

  ngOnDestroy(): void {
    if (this.loadNoticeSubscription) { this.loadNoticeSubscription.unsubscribe(); }
  }

  public loadNotice() {
    const setParams: any = {
      "page": 1,
      "limit": 3,
      "keyword": ""
    }
    this.loadNoticeSubscription = this.noticeApiService.loadNotice(setParams).subscribe(res => {

      if (res.status == 1) {

        this.noticeList = res.data.Data;

        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].imgUrl = JSON.parse(this.noticeList[i].imgUrl);
        }
      }
    });
  }

  public loadNotice2() {
    const setParams: any = {
      "page": 1,
      "limit": 3,
      "keyword": ""
    }
    this.loadNoticeSubscription = this.noticeApiService.loadNotice2(setParams).subscribe(res => {
      console.log('bbbb', res);

      if (res.status == 1) {

        this.noticeList2 = res.data.Data;

        for (let i = 0; i < this.noticeList2.length; i++) {
          this.noticeList2[i].imgUrl = JSON.parse(this.noticeList2[i].imgUrl);
        }
        console.log(`789`, this.noticeList2);
      }
    });
  }

  public loadNotice3() {
    const setParams: any = {
      "page": 1,
      "limit": 3,
      "keyword": ""
    }
    this.loadNoticeSubscription = this.noticeApiService.loadNotice3(setParams).subscribe(res => {

      if (res.status == 1) {

        this.noticeList3 = res.data.Data;

        for (let i = 0; i < this.noticeList3.length; i++) {
          this.noticeList3[i].imgUrl = JSON.parse(this.noticeList3[i].imgUrl);
        }
      }
    });
  }

}
