import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

import { HomePageApiService } from '../../api/home-page-api.service';

@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.scss']
})
export class HotProductComponent implements OnInit, OnDestroy {
  @Input() prodList: any[] = [];
  @Input() title: string = '';
  public productListSubscription: Subscription | undefined;
  public productList: any[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];
  constructor(
    public service: ServiceService,
    private homePageAPI: HomePageApiService
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.productListSubscription) { this.productListSubscription.unsubscribe(); }
  }

  checkTitle() {
    if (this.title === 'ສີນຄ້າຜົ້ງສາລີ') return '/product-list/1';
    if (this.title === 'ສີນຄ້າອຸດົມໄຊ') return '/product-list/2';
    if (this.title === 'ສີນຄ້າຫຼວງນ້ຳທາ') return '/product-list/3';
    return '';

  }

  productLink(id: number) {
    if (this.title === 'ສີນຄ້າຜົ້ງສາລີ') return `/product-detail/${id}/1`;
    if (this.title === 'ສີນຄ້າອຸດົມໄຊ') return `/product-detail/${id}/2`;
    if (this.title === 'ສີນຄ້າຫຼວງນ້ຳທາ') return `/product-detail/${id}/3`;
    return '';

  }


}
