import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { ProductDetailApiService } from './api/product-detail-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  prodId = 0;
  web = 0;
  public loadProductDetailSubscription: Subscription | undefined;
  public producrDetailList: any[] = [];
  url = '';
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private productDetailApiService: ProductDetailApiService
  ) {
    this.url = this.service.getImgUrl(1);
  }

  ngOnInit(): void {
    this.prodId = Number(this.route.snapshot.paramMap.get('id'));
    this.web = Number(this.route.snapshot.paramMap.get('web'));
    (this.web == 3) ? this.loadProductDetail3() : (this.web == 2) ? this.loadProductDetail2() : this.loadProductDetail()

  }

  public loadProductDetail() {
    const setParams: any = {
      "prod_id": this.prodId,
    }
    this.loadProductDetailSubscription = this.productDetailApiService.loadProductDetail(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res.data)
        this.producrDetailList = res.data;
        for (let i = 0; i < this.producrDetailList.length; i++) {
          this.producrDetailList[i].imgUrl = JSON.parse(this.producrDetailList[i].imgUrl);
          console.log(this.producrDetailList[i].imgUrl);
        }
      }
    });
  }

  public loadProductDetail2() {
    const setParams: any = {
      "prod_id": this.prodId,
    }
    this.loadProductDetailSubscription = this.productDetailApiService.loadProductDetail2(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res.data)
        this.producrDetailList = res.data;
        for (let i = 0; i < this.producrDetailList.length; i++) {
          this.producrDetailList[i].imgUrl = JSON.parse(this.producrDetailList[i].imgUrl);
          console.log(this.producrDetailList[i].imgUrl);
        }
      }
    });
  }

  public loadProductDetail3() {
    const setParams: any = {
      "prod_id": this.prodId,
    }
    this.loadProductDetailSubscription = this.productDetailApiService.loadProductDetail3(setParams).subscribe(res => {

      if (res.status == 1) {

        console.log(res.data)
        this.producrDetailList = res.data;
        for (let i = 0; i < this.producrDetailList.length; i++) {
          this.producrDetailList[i].imgUrl = JSON.parse(this.producrDetailList[i].imgUrl);
          console.log(this.producrDetailList[i].imgUrl);
        }
      }
    });
  }






}
