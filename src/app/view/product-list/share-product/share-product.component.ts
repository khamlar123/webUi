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
  @Input() url = '';
  @Input() pageId = 0;
  public productListSubscription: Subscription | undefined;
  public productList: any[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];

  constructor(
    public service: ServiceService,
  ) {

  }

  ngOnDestroy(): void {
    if (this.productListSubscription) { this.productListSubscription.unsubscribe(); }
  }

  ngOnInit(): void {
  }

  
  productLink(id: number) {

   return `/product-detail/${id}/${this.pageId}`;

  }

}
