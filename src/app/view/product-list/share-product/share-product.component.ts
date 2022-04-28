import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-share-product',
  templateUrl: './share-product.component.html',
  styleUrls: ['./share-product.component.scss']
})
export class ShareProductComponent implements OnInit, OnDestroy {
  @Input() prodList: any[] = [];
  @Input() title: string = '';
  public productListSubscription: Subscription | undefined;
  public productList: any[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];
  url = ''
  constructor(
    public service: ServiceService,
  ) {
    this.url = service.getImgUrl(1);
  }

  ngOnDestroy(): void {
    if (this.productListSubscription) { this.productListSubscription.unsubscribe(); }
  }

  ngOnInit(): void {
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
