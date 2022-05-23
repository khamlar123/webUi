import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  hidenMenu = false;
  showSlider = false;
  routActive = '';

  constructor() { }

  // public baseURL = 'http://216.127.173.163/website/api/';
  // public Url2 = 'http://216.127.173.163/oudomxay/api/';
  // public Url3 = 'http://216.127.173.163/louangnamtha/api/';


  public baseURL = 'http://psldoic.gov.la/website/api/';
  public Url2 = 'http://odxdoic.gov.la/oudomxay/api/';
  public Url3 = 'http://lntdoic.gov.la/louangnamtha/api/ ';

  getImgUrl(id: number): string{
    return (id === 1)? 'http://psldoic.gov.la/':(id === 2)? 'http://odxdoic.gov.la/': 'http://lntdoic.gov.la/'
  }


  public setHeader(method: string): HttpHeaders {

    const loginData = JSON.parse(localStorage.getItem('loginData') + '');
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsYW9hcHBzLmNvbSIsImF1ZCI6Imp3dC5sYW9hcHBzLmNvbSIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7InVzZXJfaWQiOiIxIiwidXNlcm5hbWUiOiJOdWVuZyIsImVtYWlsIjoibWFtaXBva29AZ21haWwuY29tIiwicm9sZSI6InN1cGVyYWRtaW4iLCJjcmVhdGVEYXRlIjoiMjAyMS0xMi0yMiAyMDo1MTowOCIsImxhc3RVcGRhdGUiOiIyMDIxLTEyLTIyIDIwOjUxOjA4IiwicHVibGljIjoiMSIsIndlYl9pZCI6IjEifSwidXBkYXRldGltZSI6MTY0MzU0NTY3NDc0Njh9.U4j50UDyWDesPUD5vYoUtHhboYw5b033nGoto29mqAk';

    return new HttpHeaders({ 'content-type': 'application/json' }).set('token', token + '').set('method', method + '');
  }
}
