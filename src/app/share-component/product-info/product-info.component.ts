import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { NoticeApiService } from './api/notice-api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {



  public loadNoticeSubscription: Subscription | undefined;
  public noticeList: {
    dsc: string;
    gen_id: string;
    imgUrl: string;
    notice_id: string;
    price: string;
    title: string;
    web_id: string;
    province: string;
  }[] = [];
  public noticeList2: {
    dsc: string;
    gen_id: string;
    imgUrl: string;
    notice_id: string;
    price: string;
    title: string;
    web_id: string;
    province: string;
  }[] = [];
  public noticeList3: {
    dsc: string;
    gen_id: string;
    imgUrl: string;
    notice_id: string;
    price: string;
    title: string;
    web_id: string;
    province: string;
  }[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];

  constructor(private noticeApiService: NoticeApiService, private main : ServiceService) { }

  ngOnInit(): void {
    this.loadNotice();
    this.loadNotice2();
    this.loadNotice3();
    this.getData();
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

  getData(): any[]{
    console.log(this.main);
    
    const newList:any[] = [];
    this.noticeList.slice(0, 3).forEach(e => {
      e.province = 'ແຂວງຜົ້ງສາລີ';
        newList.push(e);
    });

    this.noticeList2.slice(0, 3).forEach(e => {
      e.province = 'ແຂວງອຸດົມໄຊ';
      newList.push(e);
  });

    this.noticeList3.slice(0, 3).forEach(e => {
      e.province = 'ແຂວງຫຼວງນ້ຳທາ';
      newList.push(e);
  });    
    return newList;
  }

}
