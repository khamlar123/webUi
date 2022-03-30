import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-donor-flag',
  templateUrl: './donor-flag.component.html',
  styleUrls: ['./donor-flag.component.scss']
})
export class DonorFlagComponent implements OnInit {
  url = `http://216.127.173.163/`;
  donorList: {
    donor_id: string;
    dsc: string;
    imgUrl: string;
    orderIndex: string;
    title: string;
  }[] = [];
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.loadDonor();
  }

  loadDonor():void{
    this.api.loadDonor('').subscribe(res => {
      this.donorList = res.data;
    })
  }

  imgUrl(url: string): string {

    if (url) {
      return (JSON.parse(url)[0]) ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return url;
    }
  }

}
