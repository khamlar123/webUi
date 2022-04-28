import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { NewDetailApiService } from './api/new-detail-api.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  id = 0;

  public loadNewsDetailSubscription: Subscription | undefined;
  public loadCoverSubscription: Subscription | undefined;
  public newsDetailList: any[] = [];
  public coverList: any[] = [];
  url = '';
  constructor(
    private route: ActivatedRoute,
    public service: ServiceService,
    private newDetailApiService: NewDetailApiService
  ) {
    this.url = this.service.getImgUrl(1);
   }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProductDetail();
  }

  ngOnDestroy(): void {
    if (this.loadNewsDetailSubscription) { this.loadNewsDetailSubscription.unsubscribe(); }
  }

  // getDetail(): {id: number, title:string, url: string, info: string,cover:{id: number, img: string}[]}{
  //   const findItem =  this.service.newsList.find(f => f.id === this.id)
  //   return  (findItem)?findItem: {id: 0, title:'', url: '', info: '',cover: []};
  // }

  public loadProductDetail() {
    const setParams: any = {
      "news_id": this.id,
    }
    this.loadNewsDetailSubscription = this.newDetailApiService.loadNewsDetail(setParams).subscribe(res_newsDetail => {
      if (res_newsDetail.status == 1) {
        this.newsDetailList = res_newsDetail.data;
        console.log(this.newsDetailList[0].title)
        for (let i = 0; i < this.newsDetailList.length; i++) {
          this.newsDetailList[i].imgUrl = JSON.parse(this.newsDetailList[i].imgUrl);
        }

        this.newDetailApiService.loadCover({ cover_id: this.newsDetailList[0].cover_id }).subscribe(res_cover => {
          console.log(res_cover.data);
          this.coverList = res_cover.data;
          for (let i = 0; i < this.coverList.length; i++) {
            this.coverList[i].imgUrl = JSON.parse(this.coverList[i].imgUrl);
          }
        });
      }
    });
  }







}
