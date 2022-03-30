import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadProductDetail(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'product.api.php', data, { headers: this.service.setHeader('listOneProduct') });
  }

  public loadProductDetail2(data: any): Observable<any> {
    return this.http.post(this.service.Url2 + 'product.api.php', data, { headers: this.service.setHeader('listOneProduct') });
  }

  public loadProductDetail3(data: any): Observable<any> {
    return this.http.post(this.service.Url3 + 'product.api.php', data, { headers: this.service.setHeader('listOneProduct') });
  }
}
