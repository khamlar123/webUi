import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { CategoryApiService } from './api/category-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  enpoin = '';
  brannList: any[] = [];

  constructor(
    private router: Router,
    private api: CategoryApiService,
    public service: ServiceService
  ) {
    this.enpoin = this.service.getImgUrl(1);
  }

  ngOnInit(): void {
    this.loadBnner();



  }

  goLink(id: number): void {
    this.router.navigateByUrl(`/category-detail/${id}`);
  }

  loadBnner(): void {
    const data = {
    }
    this.api.loadBannerRef2(data).subscribe(res => {
      if (res.status == 1) {
        // this.brannList = res.data.filter(f => f.ref_id == "2");

        res.data.filter((f: { ref_id: string; }) => f.ref_id == "2").forEach((e: any) => {
          this.brannList.push(e);
        });

        console.log(this.brannList);

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


  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
