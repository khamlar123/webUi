import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  showSearch = false;
  lang = 'la';

    laoTitle = '';
    engTitle = '';
  constructor(
    private serveic: ServiceService
  ) { }

  ngOnInit(): void {
    this.setTitle();
  }

  getMainUrl(): string{
    return (this.serveic.baseURL === 'http://psldoic.gov.la/website/api/')? './assets/logo/logo_ponsaly.jpeg': (this.serveic.baseURL === 'http://odxdoic.gov.la/oudomxay/api/')? './assets/logo/logo_oudomsai.png' : './assets/logo/logo_leunumthar.jpeg';
  }

  setTitle(): void{
     if(this.serveic.baseURL === 'http://psldoic.gov.la/website/api/'){
        this.laoTitle = 'ພະແນກອຸດສາຫະກຳ ແລະ ການຄ້າ ແຂວງຜົ້ງສາລີ';
        this.engTitle = 'Department of Industry and Commerce of Phongsaly Province';
     }else if(this.serveic.baseURL === 'http://odxdoic.gov.la/oudomxay/api/'){
      this.laoTitle = 'ພະແນກອຸດສາຫະກຳ ແລະ ການຄ້າ ແຂວງອຸດົມໄຊ';
      this.engTitle = 'Department of Industry and Commerce of Oudomxay Province';
     }else{
      this.laoTitle = 'ພະແນກອຸດສາຫະກຳ ແລະ ການຄ້າ ແຂວງຫຼວງນ້ຳທາ';
      this.engTitle = 'Department of Industry and Commerce of Luangnamtha Province';
     }

  }

  checkMenu(): boolean{
    return (this.serveic.baseURL === 'http://psldoic.gov.la/website/api/')? true: (this.serveic.baseURL === 'http://odxdoic.gov.la/oudomxay/api/')? false : false;
  }

}
