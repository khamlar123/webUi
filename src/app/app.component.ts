import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web-kaseung';
  private subs = new SubSink();
  constructor(
    public service : ServiceService,
    private router: Router,
  ){ }

  ngOnInit(): void {
    this.subs.sink = fromEvent(document, 'scroll').subscribe(() => {
      // (window.scrollY >= 1700) ? this.showGotoTop = true : this.showGotoTop = false;

      if (window.scrollY >= 180) {
        this.service.hidenMenu = true;
      } else {
        this.service.hidenMenu = false;
      }

    })

    this.subs.sink = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
          console.log(this.router.url.split('/'));
        if(this.router.url.split('/')[1] == 'home'){
          this.service.hidenMenu = false;
          this.service.routActive = this.router.url.split('/')[1];
        }else{
          this.service.hidenMenu = true;
          this.service.routActive = this.router.url.split('/')[1];
        }
      }
    });


  }

}
