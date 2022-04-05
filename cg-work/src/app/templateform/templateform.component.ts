import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  @ViewChild('frm') userForm?: NgForm;
  sal?:number;

  constructor() { 
    this.sal=1000;
  }

  ngOnInit(): void {
  }

  formSubmit(f:any){
    //console.log(f);
    //console.log(this.userForm);//this is another way of 
  }

  setValues(f:NgForm){
    f.form.setValue({
      emailGenderGroup:{
        email:"vipin.sharma@gmail.com",
        gender:"m"
      },
      name:"vipin",
      salary:100
    })
  }

  patchValues(f:NgForm){
    f.form.patchValue({     
      name:"vipin",
      salary:100
    })
  }

}
