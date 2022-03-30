import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadStatistics(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'statistics.api.php', data, { headers: this.service.setHeader('listAllStatistics') });
  }
}
