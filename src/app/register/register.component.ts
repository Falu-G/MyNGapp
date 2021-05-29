import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators, AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles:any[] = ["admin","regular user", "super admin"];
  registerForm:FormGroup;
  initForm(){
    this.registerForm = new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      selectRoles: new FormControl('',[Validators.required]),
      confirmPass: new FormControl('',[Validators.required, this.confirmEquals])
    })
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.registerForm.value.password = "oknow";
    console.log(this.password);
  }
  get password() {
    console.log(this.registerForm.get('password').value,"pass", this.confirmPass);
    
    return this.registerForm.get('password').value;
    
  }

  
  get confirmPass(){return this.registerForm.get('confirmPass').value}

  confirmEquals(): ValidatorFn {
    
    return (control: AbstractControl): { [key: string]: any } | null => 
        control.value?.toLowerCase() === this.password.toLowerCase() 
            ? null : {noMatch: true};
  }


  
}


