import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class NewListApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadNews(): Observable<any> {
    const data = {
    }
    return this.http.post(this.service.baseURL + 'news.api.php', data, { headers: this.service.setHeader('listAllNews') });
  }

  public loadNewsCount(): Observable<any> {
    const data: any = {
      "page": 1,
      "limit": 4,
      "keyword": ""
    }
    return this.http.post(this.service.baseURL + 'news.api.php', data, { headers: this.service.setHeader('listPageNews') });
  }


}
