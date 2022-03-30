import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class NoticeApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadNotice(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'notice.api.php', data, { headers: this.service.setHeader('listPageNotice') });
  }

  public loadNotice2(data: any): Observable<any> {
    return this.http.post(this.service.Url2 + 'notice.api.php', data, { headers: this.service.setHeader('listPageNotice') });
  }

  public loadNotice3(data: any): Observable<any> {
    return this.http.post(this.service.Url3 + 'notice.api.php', data, { headers: this.service.setHeader('listPageNotice') });
  }
}
