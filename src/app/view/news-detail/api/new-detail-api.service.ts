import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class NewDetailApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadNewsDetail(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'news.api.php', data, { headers: this.service.setHeader('listOneNews') });
  }

  public loadCover(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'cover.api.php', data, { headers: this.service.setHeader('listOneCover') });
  }
}
