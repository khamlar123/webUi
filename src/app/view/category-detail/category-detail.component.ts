import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './api/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  id = 0;
  bandDetail: any;
  enpoin = `http://216.127.173.163/`;
  constructor(
    private route: ActivatedRoute,
    private api: CategoryService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBandByid();
  }


  loadBandByid(): void {
    const model = {
      bann_id: this.id
    };
    this.api.loadBannerByid(model).subscribe(res => {

      this.bandDetail = res.data[0];

      console.log(this.bandDetail);

    });
  }


  getImgUrl(url: string): string {
    if (url) {
      return JSON.parse(url)[0] ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return '';
    }
  }

}
