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


  openModalHistory = false;
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

  historyList: any[] = [];

  masterList:{
    dsc: string;
    gen_id: string;
    imgUrl: string;
    notice_id: string;
    price: string;
    title: string;
    web_id: string;
    province: string;
    pvName : string;
  }[] = [];
  showDataList: {
    dsc: string;
    gen_id: string;
    imgUrl: string;
    notice_id: string;
    price: string;
    title: string;
    web_id: string;
    province: string;
    pvName : string;
  }[] = [];

  constructor(private noticeApiService: NoticeApiService, private main: ServiceService) { }

  ngOnInit(): void {
    this.loadNotice();
    this.loadNotice2();
    this.loadNotice3();
    this.getData();
  }

  ngOnDestroy(): void {
    if (this.loadNoticeSubscription) { this.loadNoticeSubscription.unsubscribe(); }
  }

  public loadNotice(): void {
    const setParams: any = {
      page: 1,
      limit: 10,
      keyword: '',
    };
    this.loadNoticeSubscription = this.noticeApiService.loadNotice(setParams).subscribe(res => {
      if (res.status === '1') {
        this.noticeList = res.data.Data;
        res.data.Data.forEach(e => {
          e.pvName = (this.main.baseURL === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.baseURL === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
          this.masterList.push(e);

          
        });
        
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.noticeList.length; i++) {
          this.noticeList[i].imgUrl = JSON.parse(this.noticeList[i].imgUrl);
        }
      }
    });
  }

  public loadNotice2(): void {
    const setParams: any = {
      page: 1,
      limit: 10,
      keyword: '',
    };
    this.loadNoticeSubscription = this.noticeApiService.loadNotice2(setParams).subscribe(res => {
      if (res.status === '1') {
        this.noticeList2 = res.data.Data;        
        res.data.Data.forEach(e => {
          e.pvName = (this.main.Url2 === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.Url2 === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
          this.masterList.push(e)
        });
        for (let i = 0; i < this.noticeList2.length; i++) {
          this.noticeList2[i].imgUrl = JSON.parse(this.noticeList2[i].imgUrl);
        }
      }
    });
  }

  public loadNotice3(): void {
    const setParams: any = {
      page: 1,
      limit: 10,
      keyword: '',
    };
    this.loadNoticeSubscription = this.noticeApiService.loadNotice3(setParams).subscribe(res => {
      if (res.status === '1') {
        this.noticeList3 = res.data.Data;
        res.data.Data.forEach(e => {
          e.pvName = (this.main.Url3 === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.Url3 === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
          this.masterList.push(e)
        });
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.noticeList3.length; i++) {
          this.noticeList3[i].imgUrl = JSON.parse(this.noticeList3[i].imgUrl);
        }
      }
    });
  }

  getData(): any[] {
    const newList: any[] = [];
    this.noticeList.forEach(e => {
      newList.push(e);
    });
    let i = -1;
    newList.forEach(e => {
      i++;
      e.price2 = this.noticeList2.map(m => m.price)[i];
    });

    let p = -1;
    newList.forEach(e => {
      p++;
      e.price3 = this.noticeList3.map(m => m.price)[p];
    });
    return newList.filter(f => f.status !== '0');
  }

  setHistory(model: any): void {

    console.log(model);
    
 
  this.showDataList = this.masterList.filter(f => f.gen_id === model.gen_id);


    // let i = -1;
    // this.historyList.forEach(e => {
    //   i++;


    //   e.price2 = this.noticeList2.filter(f => f.gen_id === model.gen_id).map(m => m.price)[i];
    // });

    // let p = -1;
    // this.historyList.forEach(e => {
    //   p++;
    //   e.price3 = this.noticeList3.filter(f => f.gen_id === model.gen_id).map(m => m.price)[p];
    // });

    this.openModalHistory = true;
  }

  getHistory(): any[] {    
    console.log('larrrrrrr',this.showDataList);
    
    return this.showDataList;
  }

  closeFunc(): void {
    this.openModalHistory = false;
    this.historyList = [];

  }

  getItle1():string{
    return (this.main.baseURL === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.baseURL === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
  }

  getTitle2(): string{
    return (this.main.Url2 === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.Url2 === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
  }

  getTitle3(): string{
    return (this.main.Url3 === 'http://psldoic.gov.la/website/api/')? 'ແຂວງຜົ້ງສາລີ': (this.main.Url3 === 'http://odxdoic.gov.la/oudomxay/api/')? 'ແຂວງອຸດົມໄຊ': 'ແຂວງຫຼວງນໍ້າທາ';
  }



}
