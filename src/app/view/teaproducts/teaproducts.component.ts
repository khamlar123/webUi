import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-teaproducts',
  templateUrl: './teaproducts.component.html',
  styleUrls: ['./teaproducts.component.scss']
})
export class TeaproductsComponent implements OnInit {
  jsonData: {
    createDate: string;
    teaDsc: string;
    teaId: string;
    teaTitle: string;
    teacLogo: string;
    videoLink: string;
  }[] = [


  ];
  url = '';
  constructor(
    private api: ApiService,
    private service: ServiceService
    ) {
      this.url = service.getImgUrl(1);
     }

  ngOnInit(): void {
    this.loadProductTea();

  }

  loadProductTea():void{
    this.api.loadProductTea('').subscribe(res => {
      console.log(res);
      this.jsonData = res.data;
    })
  }

  getImgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
