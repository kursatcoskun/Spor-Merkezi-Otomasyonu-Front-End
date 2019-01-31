import { Injectable } from '@angular/core';
import {JwtHelper,tokenNotExpired} from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUser } from '../Models/LoginUser';
import { HttpHeaders } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path = "https://localhost:44331/api/auth/";
  userToken:any;
  decodedToken:any;
  jwtHelper:JwtHelper = new JwtHelper();
  TOKEN_KEY = "token";

constructor(private httpClient:HttpClient,
  private router:Router,
  private alertify:AlertifyService
  ) { }


  login(loginUser:LoginUser){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    this.httpClient.post(this.path+"login",loginUser,{headers:headers})
    .subscribe(data=>{
      this.saveToken(data["tokenString"]);
      this.userToken = data["tokenString"];
      this.decodedToken = this.jwtHelper.decodeToken(data["tokenString"]);
      this.alertify.success("Başarıyla giriş yapıldı");
      this.router.navigateByUrl('/giris');
      location.reload();
      
      
    }, (err) => {

     this.alertify.error("Kullanıcı Adı veya Şifre Hatalı");
      
    
    }
    
    
    
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);

    this.router.navigateByUrl("/welcome");
  }
  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token);
  }
  loggedIn(){
    return tokenNotExpired(this.TOKEN_KEY);
  }
  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(this.token).nameid;
  }
  getCurrentUserName(){
    return this.jwtHelper.decodeToken(this.token);
  }
}
