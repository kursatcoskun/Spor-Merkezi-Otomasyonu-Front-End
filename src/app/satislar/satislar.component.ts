import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
import { Satis } from '../Models/Satis';
import { ExcelService } from '../Services/excel.service';

@Component({
  selector: 'app-satislar',
  templateUrl: './satislar.component.html',
  styleUrls: ['./satislar.component.css']
})
export class SatislarComponent implements OnInit {
satislar:Satis[] = [];
urunAdi:any;
ay:number;
urunMiktari:number;
toplam:number;
topSellerSakla=false;
topGoster = true;
  constructor(
    private uyeService:UyeService,
    private authService:AuthService,
    private router:Router,
    private excelService:ExcelService

  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    else{
      this.uyeService.getSatislar().subscribe(data=>{
        this.satislar = data;
        console.log(this.satislar);
      });
    }
  
  }

  delete(id){
    this.uyeService.deleteSatis(id);
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.satislar, 'urunler');
 }
 getTopSeller(){

   this.uyeService.getTopSellerProduct().subscribe(data=>{

      this.urunAdi = data[0][0];
      this.ay = data[0][1];
      this.urunMiktari = data[0][2];
      this.toplam = data[0][3];
   });
   this.topSellerSakla = true;
   this.topGoster = false;
 }

gizle(){
  if(this.topSellerSakla== true){
    this.topSellerSakla = false;
    this.topGoster = true;
  }
  else{
    this.topSellerSakla = true;
    this.topGoster = false;
  }
}
}
