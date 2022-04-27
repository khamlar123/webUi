import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-wrapper',
  templateUrl: './news-wrapper.component.html',
  styleUrls: ['./news-wrapper.component.scss']
})
export class NewsWrapperComponent implements OnInit {
  @Input() modal: any;
  @Input() ListCunt: any;
  enpoin = `http://psldoic.gov.la`;
  url = 'https://www.youtube.com/embed/sX5StCTZpfQ';
  constructor() { }

  ngOnInit(): void {

  }

  getOneNews(): any {
    return this.modal[0];
  }

  getNewsList(): any {
    // return this.modal = this.modal.filter((f: { news_id: string; }) => f.news_id !== this.getOneNews().news_id);
    return this.modal;
  }

  getImgUrl(url: string): string {
    if (url) {
      return JSON.parse(url)[0] ? JSON.parse(url)[0] : JSON.parse(url);
    } else {
      return this.url + url;
    }
  }

}
