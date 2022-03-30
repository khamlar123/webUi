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
    // {
    //   cnid : 1,
    //   cnName: 'Company1',
    //   cnlogo: '../../../assets/company/company1.png',
    //   cnDcs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, vero aperiam earum assumenda beatae reprehenderit quia illum nesciunt sit quam voluptatibus quae magni et quo cum. Sint minima quam voluptatem consequatur tempore, laboriosam nulla, libero odit ducimus eos quisquam fugit? Id dolorum amet nostrum optio molestiae, explicabo corporis hic.',
    // },
    // {
    //   cnid : 2,
    //   cnName: 'Company2',
    //   cnlogo: '../../../assets/company/company2.png',
    //   cnDcs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, vero aperiam earum assumenda beatae reprehenderit quia illum nesciunt sit quam voluptatibus quae magni et quo cum. Sint minima quam voluptatem consequatur tempore, laboriosam nulla, libero odit ducimus eos quisquam fugit? Id dolorum amet nostrum optio molestiae, explicabo corporis hic.',
    // },
    // {
    //   cnid : 3,
    //   cnName: 'Company3',
    //   cnlogo: '../../../assets/company/company3.jpeg',
    //   cnDcs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, vero aperiam earum assumenda beatae reprehenderit quia illum nesciunt sit quam voluptatibus quae magni et quo cum. Sint minima quam voluptatem consequatur tempore, laboriosam nulla, libero odit ducimus eos quisquam fugit? Id dolorum amet nostrum optio molestiae, explicabo corporis hic.',
    // },

  ];
  url = '';
  constructor(
    private api: ApiService,
    private service: ServiceService
    ) {
      this.url = service.baseURL;
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

  getImg(url: string): string{
    if(url !== undefined){
      return  this.url.split("/api")[0] + JSON.parse(url)[0].slice(7, url.length)
    }
    return '';
  }

}
