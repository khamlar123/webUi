import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { SubSink } from 'subsink';
import { HomePageApiService } from '../home-page/api/home-page-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  prodId = 0;
  subs = new SubSink();
  prodList1: any[] = [];
  prodList2: any[] = [];
  prodList3: any[] = [];
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private homePageAPI: HomePageApiService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadProduct2();
    this.loadProduct3();
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


}
