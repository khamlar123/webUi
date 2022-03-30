import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-form-requests',
  templateUrl: './form-requests.component.html',
  styleUrls: ['./form-requests.component.scss']
})
export class FormRequestsComponent implements OnInit {
  addForm = {
    stTitle: "", 
    contactDsc: "", 
    proposName: "", 
    proposeLastName: "", 
    phone:"", 
    age:"0", 
    createDate: "",
    imgUrl : [''],
    status : '',
  }
  base64textString: any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  addFunc():void{
    var map: string[] = [];
    const header = "data:application/pdf;base64,";
    map.push(header + this.base64textString);
    this.addForm.imgUrl = map.map((m) => m);


    const newData = new Date();
    this.addForm.createDate =  newData.getFullYear().toString()+'-'+ (newData.getMonth() + 1).toString()+'-'+newData.getDate().toString();
    this.api.addForm(this.addForm).subscribe(res => {
      console.log(res);
      if(res.status === "1"){
        alert('Add Data Successfully.');

        const reset = {
          stTitle: "", 
          contactDsc: "", 
          proposName: "", 
          proposeLastName: "", 
          phone:"", 
          age:"0", 
          createDate: "",
          imgUrl : [''],
          status : '',
        }
        this.addForm = reset;
      }
    })

  }

}
