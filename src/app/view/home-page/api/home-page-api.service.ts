import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadNews(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'news.api.php', data, { headers: this.service.setHeader('listPageNews') });
  }

  public loadBannerRef2(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'banner.api.php', data, { headers: this.service.setHeader('listAllBanner') });
  }

  public loadProduct(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'product.api.php', data, { headers: this.service.setHeader('listPageProduct') });
  }

  public loadProduct2(data: any): Observable<any> {
    return this.http.post(this.service.Url2 + 'product.api.php', data, { headers: this.service.setHeader('listPageProduct') });
  }

  public loadProduct3(data: any): Observable<any> {
    return this.http.post(this.service.Url3 + 'product.api.php', data, { headers: this.service.setHeader('listPageProduct') });
  }

  public loadVdio(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'video.api.php', data, { headers: this.service.setHeader('listPageVideo') });
  }


}
