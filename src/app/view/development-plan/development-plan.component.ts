import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
@Component({
  selector: 'app-development-plan',
  templateUrl: './development-plan.component.html',
  styleUrls: ['./development-plan.component.scss']
})
export class DevelopmentPlanComponent implements OnInit {

  constructor(private api: ApiService) { }
  asModalId = 0;
  url = 'http://216.127.173.163/website';
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
    //   dodsc: 'ປີ 2021 ແຂວງສະຫວັນນະເຂດ ສາມາດສົ່ງອອກເຂົ້າ ທັງໝົດ 16.250 ໂຕນ, ມູນຄ່າ 8,18 ລ້ານໂດລາສະຫາລັດ, ໃນນັ້ນເຂົ້າສານໜຽວ 16.100 ໂຕນ, ມູນຄ່າ 8,05 ລ້ານໂດລາສະຫາລັດ ແລະເຂົ້າສານຈ້າວ 150 ໂຕນ, ມູນຄ່າ 0,13 ລ້ານໂດ ລາສະຫາລັດ.',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ພະແນກອຸດສາຫະກຳ ແລະ ການຄ້າແຂວງສະຫວັນນະເຂດ ໄດ້ຈັດກອງປະຊຸມຜ່ານຮ່າງເນື້ອໃນຄັ້ງສຸດທ້າຍ ເພື່ອຮັບຮອງຮ່າງຍຸດທະສາດການສົ່ງອອກເຂົ້າ ແລະ ສະພາບການດຳເນີນທຸລະກິດກ່ຽວກັບການສົ່ງອອກເຂົ້າໃນໄລຍະຜ່ານມາ ຂຶ້ນໃນວັນທີ 24 ກຸມພາ 2022 ເປັນປະທານຂອງທ່ານ ບຸນເຖິງ ດວງສະຫວັນ ຮອງລັດຖະມົນຕີກະຊວງອຸດສາຫະກຳ ແລະການຄ້າ, ທ່ານ ໄຊສົມເພັດ ນໍລະສິງ ຫົວໜ້າກົມສົ່ງເສີມການຄ້າ,',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ທ່ານ ໂພສີສ້ອຍ ກຸທິລາດ ຫົວໜ້າພະແນກອຸດສາຫະກຳ ແລະການຄ້າແຂວງສະຫວັນນະເຂດ, ມີຄະນະກົມ, ຄະນະພະແນກອຸດສາຫະກຳ ແລະການ ຄ້າ 06 ແຂວງຄື: ນະຄອນຫຼວງວຽງຈັນ, ວຽງຈັນ, ໄຊຍະບູລີ, ຄໍາມ່ວນ, ສະຫວັນນະເຂດ ແລະບໍລິຄຳໄຊເຂົ້າຮ່ວມ.',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ເມື່ອກ່າວເຖິງປະຫວັດຄວາມເປັນມາຂອງວັນຄູແຫ່ງຊາດ ໃນສະໄຫມກ່ອນຄົນລາວທີ່ໄດ້ເຂົ້າຮຽນແມ່ນ   ມີໜ້ອຍເຕັມທີ່ ໃນຈຳນວນດັ່ງກ່າວ ໄດ້ມີຄົນລາວຊື່ ທ້າວຄຳ ໄດ້ຮຽນຈົບຫ້ອງທີ I (ປ.6). -ປີ ຄ.ສ 1907 ທ້າວຄຳໄດ້ເຂົ້າຮ່ວມຮັບການອົບຮົມຄູເຊີ່ງຖືວ່າ ເປັນຄັ້ງທຳອິດໃນປະຫວັດສາດຂອງຊາດລາວ ທີ່ໄດ້ມີການຈັດອົບຮົມຄູ, ພາຍຫຼັງການອົບຮົມສຳເລັດ ມາເຖີງວັນທີ 7 ຕຸລາ 1907 ທ້າວຄຳ ເລີ່ມເປັນຄູສອນ',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },
    // {
    //   doId : '1',
    //   dodsc: 'ຍ້ອນພວກລ່າເມືອງຂື້ນຝຣັ່ງເຫັນອິດທິພົນຂອງພະສົງໃນວຽກງານການສຶກສາ ພວກເຂົາຈຶ່ງຫັູະນນະໂຍບາຍເພື່ອຜັນຂະຫຍາຍໂຮງຮຽນໃຫ້ກວ້າງອອກກວ່າເກົ່າ ດ້ວຍຮູບການເປິດໃຫ້ມີໂຮງຮຽນສ້າງຄູສົງຂື້ນໃນປີ 1907 ທີ່ວັດຈັນ, ເຊີ່ງປະກອບມີພະສົງ 50 ກວ່າອົງໄດ້ເຂົ້າຮຽນ.',
    //   refId : '1',
    //   createDate: '2022/03/15',
    //   doEn: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf',
    //   doLa: '../../../assets/doc/Final-IP-Law-28-03-2018-Copy-ປັບມາດຕາ-121122-Copy.pdf'
    // },

  ];
  asModal: any = {
    asId: '',
    asName: '',
    asDes: '',
    logo: '',
    createDate: '',
    asTitle: ''
  }

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
