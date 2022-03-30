import { Component, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  subs = new SubSink();
  jsonDaTa: {
    createDate: string;
    dpcDsc: string;
    dpcId: string;
    dpcTitle: string;
    refId: string;
  }[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const moddal ={

    }
    this.subs.sink = this.api.loadContact(moddal).subscribe(res => {
      this.jsonDaTa = res.data;

    })
  }

}
