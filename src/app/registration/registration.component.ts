import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrForm !: FormGroup
  registrArray: any = {}
  
  show_button: Boolean = false;
  show_eye: Boolean = false;
  
  constructor(private formBuilder : FormBuilder, private api: AuthService, private router: Router) {}
  
  
  ngOnInit(): void {
    this.registrForm = this.formBuilder.group({
      fullName : this.formBuilder.control('', Validators.required),
      mobile : this.formBuilder.control('', [Validators.required]),
      password : this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      login: this.formBuilder.control('true')
    })       
  }
  
  registr() {
    let data = {
      fullName: this.registrForm.value.fullName,
      mobile: this.registrForm.value.mobile,
      password: this.registrForm.value.password,
      login: this.registrForm.value.login
    }
    
    this.api.registr(data)
    .subscribe( res => {
      console.log(res);
      this.registrForm.reset()
      this.router.navigate(["/login"])
      
    },err => {
      alert("something went wrong")
    }
    )
  }
  
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }  
  
  get firstName(){ 
    return this.registrForm.get('fullName')
  }
}
