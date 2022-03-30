import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-depament-report',
  templateUrl: './depament-report.component.html',
  styleUrls: ['./depament-report.component.scss']
})
export class DepamentReportComponent implements OnInit {

  constructor(private api: ApiService) { }
  asModalId = 0;
  url = 'http://216.127.173.163/website';
  asModal: any = {
    asId: '',
    asName: '',
    asDes: '',
    logo: '',
    createDate: '',
    asTitle: ''
  }
  jsonData: {
    asId: string;
    createDate: string;
    dsc: string;
    fileEn: string;
    fileLa: string;
    refId: string;
    title: string;
  }[] = [
    // {
    //   doId : '1',
    //   dodsc: 'ຕໍ່ມາປີ ຄ.ສ 1913 ຄູຄໍາ ໄດ້ສອນຢູ່ໂຮງຮຽນ ຕັບໂຟແຣງ (ປີແອ ຕັບໂຟແຣງ) ລວມມີຄູລາວ 3 ຄົນ ມາເຖີງກາງເດືອນພະຈິກ ປີ ຄ.ສ 1920 ຂະບວນການຕໍ່ສູ້ຂອງປະຊາຊົນລາວ ນຳໂດຍນາຍຄູຄຳໄດ້ລະເບິດຂື້ນຢູ່ວຽງຈັນ, ການຕໍ່ສູ້ໄດ້ດຳເນີນໄປຢ່າງຮູນແຮງ ຄູຄຳໄດ້ຖຶກພວກຝຣັ່ງຈັບ ແລະ ນຳຕົວໄປຂັງຄຸກ ພາຍຫຼັງຖຶກຄຸມຂັງໄດ້ໄລຍະໜື່ງ ນາຍຄູຄຳໄດ້ໂຕນອອກຈາກຄຸກ ແລ້ວຂ້າມແມ່ນຳ້ຂອງໄປອາໄສຢູ່ນຳພີ່ນ້ອງທີ່ບາງກອກ(ປະເທດໄທ) ຕໍ່ມາປີ 1949 ນາຍຄູຄຳໄດ້ເຈັບປ່ວຍ ແລະ ໄດ້ເສຍຊີວິດຍ້ອນພະຍາດຂອງເພີ່ນຢູ່ທີ່ ວັດສີທາຣາມ(ປະເທດໄທ).',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ພາຍຫຼັງປະຊາຊົນລາວໄດ້ລຸກຮື້ຂື້ນຍຶດອຳນາດ ໃນວັນທີ 12 ຕຸລາ 1945 ເປັນຕົ້ນມາ ການສຶກສາມີລັກສະນະຊາດ ຈື່ງຄອ່ຍໆປະກົດຕົວເປັນຮູບເປັນຮ່າງຂື້ນມາ ການຕໍ່ສູ້ຂອງປະຊາຊົນລາວບັນດາເຜົ່າ ເພື່ອຕ້ານກັບລັດທິລ່າເມືອງຂື້ນແບບໃໝ່ຂອງຈັກກະພັດພາຍນອກ ແລະ ຜູ້ຮຸກຮານ ໄດ້ຮັບໄຊຊະນະ ແລະ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ ໄດ້ຮັບການສະຖາປານາຂື້ນໃນວັນທີ 2 ທັນວາ 1975',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ເຫດການປະຫວັດສາດດັ່ງກ່າວກໍ່ໄດ້ເປັນເງືອນໄຂເອື້ອອຳນວຍໃຫ້ແກ່ການສຶກສາຂອງລາວ ໄດ້ຮັບການພັດທະນາ,ໂຮງຮຽນໄດ້ຂະຫຍາຍຕົວຢ່າງໄວວາຈາກຕົວເມືອງໄປສູ່ຊົນນະບົດ ລູກຫຼານຂອງປະຊາຊົນບັນດາເຜົ່າໄດ້ເຂົ້າຮໍ່າຮຽນຢູ່ໂຮງຮຽນ, ພວກເຮົາໄດ້ມີຖັນແຖວຄູ ທີ່ມີນຳ້ໃຈຮັກຫອມປະເທດຊາດ, ມີຄວາມຮູ້ ຄວາມສາມາດ ຊື່ງໄດ້ຜ່ານການອົບຮົມມາຈາກຫຼາຍປະເທດ ໃນພາກພື້ນແຫ່ງໂລກຕາເວັນຕົກ, ຕາເວັນ',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ອອກ ແລະ ຈາກການຊຸບກໍ່ສ້າງ ຢູ່ພາຍໃນປະເທດຢ່າງພຽງພໍ ເຂົາເຈົ້າເຫຼົ່ານັ້ນໄດ້ນຳເອົາຄວາມຮູ້ ຄວາມສາມາດປະກອບສ່ວນກໍ່ສ້າງປະເທດຊາດ ເພື່ອນຳເອົາຄວາມສົມບູນພູນສຸກມາສູ່ປະຊາຊົນບັນດາເຜົ່າ,ຊື່ສຽງຂອງຄູໄດ້ຕິດພັນກັບຂະບວນວິວັດແຫ່ງການພັດທະນາປະເທດຊາດມາແຕ່ລະສະໄໝ.',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ດັ່ງນັ້ນ, ເພື່ອເຮັດໃຫ້ຄວາມສຳນຶກເຖີງຄຸນງາມຄວາມດີຂອງຄູໃນສັງຄົມ ໄດ້ກາຍເປັນພຶດຕິກຳໃນຕົວຈິງ ຈື່ງເຫັນມີຄວາມຈຳເປັນຈະຕ້ອງກຳນົດໃຫ້ມີວັນຄູແຫ່ງຊາດລາວ ໂດຍກຳນົດເອົາວັນເຂົ້າຮັບລາຊະການ ເພື່ອເປັນຄູຂອງນາຍຄູຄຳ, ຊື່ງແມ່ນຄູຜູ້ທີ່ມີສັນຊາດລາວຄົນທຳອິດ ແລະ ກຳນົດວັນທີ 7 ຕຸລາ ເພື່ອເປັນວັນຄູແຫ່ງຊາດລາວ ວັນຄູແຫ່ງຊາດລາວໄດ້ຖືກປະກາດໃຊ້ຕັ້ງແຕ່ວັນທີ 7 ຕຸລາ ປີ 1994 ເປັນຕົ້ນມາ ຈົນຮອດປັດຈຸບັນ ແລະ ເມື່ອຮອດວັນທີ 7 ຕຸລາ ຂອງທຸກໆປີຈະມີພິທີການເລົ່າປະຫວັດ ແລະ ອວຍພອນຄູຂຶ້ນໃນທຸກໂຮງຮຽນ ແລະ ສະຖາບັນການສຶກສາຂອງລາວໃນທົ່ວປະເທດ',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },

  ];

  ngOnInit(): void {
    this.loadAssistance();
  }

  findAssis(id: any): void {
    this.asModalId = id;
    this.asModal = this.jsonData.find(f => f.asId === id.toString());
    console.log(this.asModal);

  }

  loadAssistance():void{
    const moda ={}
    this.api.loadAssistance(moda).subscribe(res => {
      this.jsonData = res.data;
      
    })
  }

  getImgUrl(url: string):string{
    let str = JSON.parse(url)[0];
    return this.url + str.slice(7, str.length);
  }

  getItems(){
    return this.jsonData.filter(f => f.refId === "3");
  }

}
