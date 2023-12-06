import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginArray: any = {}
  public loginForm !: FormGroup
  users : any
  userStorage = [] 
  signUser: any = []
  getUser: any = []
  show_button: Boolean = false;
  show_eye: Boolean = false;

  
  constructor(private formBuilder : FormBuilder, private api: AuthService, private router: Router, private toastr: ToastrService) {}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      fullName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      login : ['true']
    })
  }
  
  login() {
    var getUserObj = JSON.parse(localStorage.getItem('registeredUser') || '{}')
    this.getUser.push(getUserObj)
    this.getUser.find((a: any) => {
      return a.fullName === this.loginForm.value.fullName && a.password === this.loginForm.value.password && a.login === this.loginForm.value.login
    })    
      
      if (this.getUser) {
        this.router.navigate(["/home"])
        // localStorage.setItem('user', JSON.stringify(user))
        this.loginForm.reset()
        this.toastr.success('Login successful');
      }else{
        alert('Something went wrong')
      } 
    
  }
  
  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }  
}
