import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  role: any
  roleList: any
  user:any
  can:boolean = false;
 
  signUser: any = []
  sidebarExpanded = true;
  storedTheme = localStorage.getItem('theme-color')
  

  constructor() { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("user") || '{}')
    this.signUser.push(user)
  } 

  // @Input() collapsed = false
  // @Input() screenWidth = 0
  
  // getBodyClass(): string {
  //   let styleClass =  ''
  //   if (this.collapsed && this.screenWidth > 768) {
  //       styleClass = 'body-trimmed'
  //   }else if (this.collapsed && this.screenWidth >= 768 && this.screenWidth > 0) {
  //     styleClass = 'body-md-screen'
  //   }
  //   return styleClass
  // }
}
