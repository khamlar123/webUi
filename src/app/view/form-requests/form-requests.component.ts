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

  fileToUpload: File = null;
  imagePath;
  imgURL: any;
  message: string;
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



  handleFileInput(el: any) {
    this.fileToUpload = el.files.item(0);
    this.preview(this.fileToUpload);
    this.handleFileSelect(el);
  }


  preview(files) {
    if (files.length === 0) return;

    var mimeType = files.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  handleFileSelect(evt) {
    var files = evt.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

}
