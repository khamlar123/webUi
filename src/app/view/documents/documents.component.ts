import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  id = 0;
  jsonData: any[] = [
    {
      doId : '1',
      dodsc: 'ໄດ້ແລ້ວຜູ້ຊະນະການແຂ່ງຂັນສືມີແຮງງານ ສາຂາລົດຍົນ 2022 ຈິດຕະພົງ ປັນຍານຸວົງ',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ໄດ້ແລ້ວຜູ້ຊະນະການແຂ່ງຂັນສືມີແຮງງານ ສາຂາລົດຍົນ 2022 ທ້າວ ຈິດຕະພົງ ປັນຍານຸວົງ',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '1',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '9',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '8',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '7',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '6',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '5',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '4',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '3',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
    {
      doId : '1',
      dodsc: 'ແຊັມ ລາວລີກ 1 ປີ 2022 ຈະໄດ້ຮັບຂັນແຊ້ມ ພ້ອມເງິນລາງວັນ 300 ລ້ານກີບ, ຈະບໍ່ມີທີມຕົກຊັ້ນປີນີ້',
      refId : '2',
      createDate: '2022/03/15',
      doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
      doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    },
  ];
  url = '';
  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private api: ApiService,
    private service: ServiceService
  ) { 
    this.url = this.service.baseURL;
  }

  ngOnInit(): void {
    
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.routes.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
      }
      this.loadDoc();
    });
    this.loadDoc();
  }

  loadDoc():void{
    const modal = {}
    this.api.loadDoc(modal).subscribe(res => {
      this.jsonData = res.data;
      
    })
  }

  getData(): any[] {
    return this.jsonData.filter(f => f.refId === this.id.toString());
  }

  getname(): string{
    if(this.id === 1){
      return 'ກົດຫມາຍ';
    }

    if(this.id === 2){
      return 'ດໍາລັດ'
    }

    if(this.id === 3){
      return 'ຄໍາສັ່ງ';
    }

    if(this.id === 4){
      return 'ຄໍາແນະນໍາ ຫຼື ບົດແນະນໍາ';
    }

    if(this.id === 5){
      return 'ຂໍ້ຕົກລົງ'
    }

    if(this.id === 6){
      return 'ແຈ້ງການ'
    }
    return '';
  }


  getImgUrl(url: string): string {
    console.log(url);
    
    const str = JSON.parse(url)[0];

    if (JSON.parse(url)[0] === null || JSON.parse(url)[0] === undefined) {
      return '';
    }
    return this.url + str.slice(7, str.length);
  }

  getLink(value: string): string{

    
    if(value !== undefined){
      return  this.url.split("/api")[0] + JSON.parse(value)[0].slice(7, value.length)
    }

    return '';
      
  }

  

}
