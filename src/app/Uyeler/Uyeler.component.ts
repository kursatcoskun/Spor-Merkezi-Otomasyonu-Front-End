import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { Uye } from '../Models/Uye';
import {ExcelService} from '../Services/excel.service';
import { UyeAktiflik } from '../Models/UyeAktiflik';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-Uyeler',
  templateUrl: './Uyeler.component.html',
  styleUrls: ['./Uyeler.component.css']
})
export class UyelerComponent implements OnInit {

  constructor(private uyeService:UyeService,
      private excelService:ExcelService,
      private datePipe: DatePipe
    ) { }

public searchText : string;
  uyeler:Uye[];
  uyeler2:Uye[];
hide = true;
hide2 = false
aktifmi: boolean = null;
aktiflikDurumlari:UyeAktiflik[];
AllAktiflik:UyeAktiflik[];
aktiflikDurumlari2 : UyeAktiflik[];
topSellerSakla = false;
topGoster = true;
UyeSayisi:number;
Ay:number;
  ngOnInit() {
    this.uyeService.getUyeler().subscribe(data=>{
      this.uyeler = data;
      this.uyeler2 = this.uyeler.reverse();
    });

   

  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.uyeler, 'uyeler');
 }

  delete(id){
    this.uyeService.delete(id);
  }

  changeList(){
    if(this.hide == true || this.hide2 == false){
      this.hide2 = true;
      this.hide = false;
   
    }
  else{
    this.hide = true;
    this.hide2 = false;
  }
  }

aktiflik(id){

  this.uyeService.aktiflikById(id).subscribe(data=>{
      this.aktiflikDurumlari = data
      this.aktiflikDurumlari2 = this.aktiflikDurumlari.reverse();
      console.log(this.aktiflikDurumlari2[0]);
      this.aktifmi =  this.aktiflikDurumlari2[0].aktiflikDurumu;
      if(this.aktifmi == true){
        alert("ÜYE AKTİFTİR. "+'\n'+"Kalan Gün Sayısı:"+(-this.aktiflikDurumlari2[0].kalanGun)+"\n"+"Bitiş Tarihi: " + this.datePipe.transform(this.aktiflikDurumlari2[0].bitisTarihi, 'yyyy-MM-dd'));
      }
 
      else{
        alert("ÜYE ŞUANDA AKTİF DEĞİLDİR !");
      }
 
  });
};

 
getAllAktiflik(){
  this.uyeService.aktiflikAll().subscribe(data=>{
    this.AllAktiflik = data;
  });
}


guncelle(){
  this.uyeService.aktiflikGuncelle();
}

getTopSeller(){

  this.uyeService.getAylikAktifUye().subscribe(data=>{
      this.UyeSayisi = data[0][0];
      this.Ay = data[0][1];
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
