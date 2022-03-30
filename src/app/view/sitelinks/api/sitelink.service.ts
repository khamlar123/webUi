import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Injectable({
  providedIn: 'root'
})
export class SitelinkService {

  constructor(private http: HttpClient, private service: ServiceService) { }

  public loadSiteLinks(data: any): Observable<any> {
    return this.http.post(this.service.baseURL + 'sitelinks.api.php', data, { headers: this.service.setHeader('listAllSitelinks') });
  }
}
