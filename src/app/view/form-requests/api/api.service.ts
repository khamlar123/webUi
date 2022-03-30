import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }



  public addForm(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'propose.api.php', data, { headers: this.service.setHeader('addPropose') });
  }
}
