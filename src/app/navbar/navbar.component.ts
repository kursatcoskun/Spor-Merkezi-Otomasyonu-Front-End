import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUser:any={};
  name:String;
  constructor(private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {

    if (this.authService.loggedIn() == true) {

      this.name = this.authService.getCurrentUserName().unique_name;
    }

  }

  login(){
    this.authService.login(this.loginUser);
  }
  logout(){
    this.authService.logout();
  }
  isAuthenticated(){
    return this.authService.loggedIn();
  }

}
