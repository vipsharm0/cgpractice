import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  rForm!:FormGroup;

  constructor() { }

  addControl(){
    this.rForm.addControl('place', new FormControl());
  }
  get place() {
    return this.rForm.get('place') as FormControl;
  }
  get addresslist(){
    return (<FormArray>this.rForm.get('address')).controls;
  }

  ngOnInit(): void {
    this.rForm = new FormGroup({
      "username":new FormControl(null, Validators.required),
      "useremail":new FormControl(null, [Validators.required, Validators.email]),
      "usergender":new FormControl(null),
      "usersalary":new FormControl(null, [this.validateSalary.bind(this),Validators.required]),
      "address": new FormArray([])
    })
  }

  addAddress(){
     let ctrl = new FormControl(null);
     let addresses= this.rForm.get('address') as FormArray;
     addresses.push(ctrl);
  }

  formSubmit(){
     console.log(this.rForm)
  }

  validateSalary(frmctrl:FormControl):{ [s:string]:boolean }{   
    if(frmctrl.value < 10000){
      return {isSalaryValid:true}
    }
    return {isSalaryValid:false};
  }

}
