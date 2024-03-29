import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadStructures(data: any): Observable<any> {
    return this.http.post<any>(this.service.baseURL + 'structures.api.php', data, { headers: this.service.setHeader('listTreeStructures') });
  }
}
