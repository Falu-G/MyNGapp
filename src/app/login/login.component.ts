import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  initForms(){
    this.loginForm = new FormGroup({
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }

  
   loginForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForms();
  }

  onSubmit(){
    
      console.log(this.loginForm.value,"myform")

  }


  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }



}
