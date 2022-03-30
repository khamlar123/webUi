import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class BannerAPIService {

  constructor(private http: HttpClient, private service: ServiceService) { }



  public loadBannerRef1(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'banner.api.php', data, { headers: this.service.setHeader('listByActiveBanner') });
  }
}
