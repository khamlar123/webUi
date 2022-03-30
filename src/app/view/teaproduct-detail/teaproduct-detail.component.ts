import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-teaproduct-detail',
  templateUrl: './teaproduct-detail.component.html',
  styleUrls: ['./teaproduct-detail.component.scss']
})
export class TeaproductDetailComponent implements OnInit {
id = 0;
url = '';
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api : ApiService,
    private service: ServiceService
  ) { 
    this.url = this.service.baseURL;
  }

  jsonData: {
    reateDate: string;
    teaDsc: string;
    teaId: string;
    teaTitle: string;
    teacLogo: string;
    videoLink: string;
  } ={
    reateDate: '',
    teaDsc: '',
    teaId: '',
    teaTitle: '',
    teacLogo: '',
    videoLink: '',
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }

    });

    this.loadDetail();
  }

  loadDetail():void{
    const modal = { 
      teaId: this.id
    }
    this.api.loadProductTeaDetail(modal).subscribe(res => {
      this.jsonData = res.data[0];
      console.log(res);
      
    })
  }

  getImg(url: string): string{
    if(url !== undefined){
      return  this.url.split("/api")[0] + JSON.parse(url)[0].slice(7, url.length)
    }
    return '';
  }

}
