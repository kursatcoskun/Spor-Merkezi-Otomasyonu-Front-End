import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { Uye } from '../Models/Uye';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
import { Urun } from '../Models/urun';
import { Gider } from '../Models/Gider';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  giderler:any;
uye:Uye[] = [];
urun:Urun[] = [];
len:number;

toplama;
ortalama:number;
lenUrun:number;
lenOdeme:number;
gelir: any = [];
ortalamaOdeme:number;

l:number;
i:number;


  constructor(
    private uyeService:UyeService,
    private authService:AuthService,
    private router:Router
  ) { 
    this.getGiderler();
  }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    else{
      this.uyeService.getGiderTutarlari().subscribe(data=>{
        this.giderler = data
  
          this.ortalama = this.giderler / this.len;
      });
      this.getUyeler();
      this.getUrunler();
      this.getOdeme();
    }
    
  }

  getUyeler(){
    this.uyeService.getUyeler().subscribe(data=>{
      this.uye = data;
      this.len = this.uye.length;
    });
  }

  getUrunler(){
    this.uyeService.getUrunler().subscribe(data=>{
      this.urun = data;
      this.lenUrun = this.urun.length;
    });
  }

  getGiderler(){
    this.uyeService.getGiderTutarlari().subscribe(data=>{
      this.giderler = data

        this.ortalama = this.giderler / this.len;
    });
    
    
  }


  getOdeme(){

    this.uyeService.getOdemeler().subscribe(data=>{
      this.gelir = data
      this.lenOdeme = this.gelir.length;
      var total = 0;
      if (this.gelir != null && this.gelir.length > 0) {      
        this.gelir.forEach(x => total += x);
      }
        this.ortalamaOdeme = total / this.lenOdeme;
    });
 
   
  }

}
