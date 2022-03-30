import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ProductApiService } from './api/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public productListSubscription: Subscription | undefined;
  public productList: any[] = [];
  public imgUrl: any[] = [];
  public imageList: any[] = [];
  id = 0;

  constructor(
    public service: ServiceService,
    private productApiService: ProductApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    (this.id == 1) ? this.loadProduct() : (this.id == 2) ? this.loadProduct2() : this.loadProduct3();


  }

  ngOnDestroy(): void {
    if (this.productListSubscription) { this.productListSubscription.unsubscribe(); }
  }

  public loadProduct() {
    const setParams: any = {
      "page": 1,
      "limit": 12,
      "keyword": ""
    }
    this.productListSubscription = this.productApiService.loadProduct(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res);
        this.productList = res.data.Data;

        for (let i = 0; i < this.productList.length; i++) {
          this.productList[i].imgUrl = JSON.parse(this.productList[i].imgUrl);
        }

      }
    });
  }


  public loadProduct2() {
    const setParams: any = {
      "page": 1,
      "limit": 12,
      "keyword": ""
    }
    this.productListSubscription = this.productApiService.loadProduct2(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res);
        this.productList = res.data.Data;

        for (let i = 0; i < this.productList.length; i++) {
          this.productList[i].imgUrl = JSON.parse(this.productList[i].imgUrl);
        }

        console.log(`1`, this.productList);
      }
    });
  }


  public loadProduct3() {
    const setParams: any = {
      "page": 1,
      "limit": 12,
      "keyword": ""
    }
    this.productListSubscription = this.productApiService.loadProduct3(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res);
        this.productList = res.data.Data;

        for (let i = 0; i < this.productList.length; i++) {
          this.productList[i].imgUrl = JSON.parse(this.productList[i].imgUrl);
        }

        console.log(`1`, this.productList);
      }
    });
  }


  productLink(pid: number) {
    if (this.id == 1) return `/product-detail/${pid}/1`;
    if (this.id == 2) return `/product-detail/${pid}/2`;
    if (this.id == 3) return `/product-detail/${pid}/3`;
    return '';

  }


}
