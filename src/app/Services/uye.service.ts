import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './Auth.service';
import { Observable } from 'rxjs';
import { Uye } from '../Models/Uye';
import { Program } from '../Models/program';
import { Urun } from '../Models/urun';
import { Gider } from '../Models/Gider';
import { UyeOdeme } from '../Models/UyeOdeme';
import { AlertifyService } from './alertify.service';
import { Satis } from '../Models/Satis';
import { UyeAktiflik } from '../Models/UyeAktiflik';

@Injectable({
  providedIn: 'root'
})
export class UyeService {

constructor(private httpClient:HttpClient,
    private router:Router,
    private authService:AuthService,
    private alertifyService:AlertifyService
  ) { }

  path = "https://localhost:44331/api/";

  getUyeler():Observable<Uye[]>{

    return this.httpClient.get<Uye[]>(this.path+"uyeler");
    
  }


  add(Uye){
    let headers = new HttpHeaders();
    headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
    this.httpClient.post(this.path+"uyeler/uyeEkle",Uye,{ headers:headers }).subscribe(data=>{
      this.alertifyService.success("Üye Başarıyla Eklendi");
      this.router.navigateByUrl('Uyelik/UyeleriListele');
    });

  }

 addProgram(UyeId){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  headers = headers.append("Content-Type","application/json");
  return this.httpClient.post(this.path+"uyeler/ProgramEkle",UyeId,{ headers:headers });
 }


 
  delete(id){
    let options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer'+ this.authService.token.toString(),
      })
    };
    let headers = new HttpHeaders();
    headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
    this.httpClient.delete(this.path+"uyeler/uyeSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
      location.reload();
      this.alertifyService.error("Üye Başarıyla Silindi");
    })
  }

  getUyeById(uyeId):Observable<Uye>{
    return this.httpClient.get<Uye>(this.path+"uyeler/detail/?id="+uyeId);

  }

 getProgramById(id):Observable<Program>{
   return this.httpClient.get<Program>(this.path+"uyeler/uyeprogram/?id="+id);
 }
 getVucutInfoById(id){
   return this.httpClient.get(this.path+"uyeler/vucutbilgi/?id="+id);
 }

 updateUye(Uye){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/uyeguncelle",Uye,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Uyelik/UyeleriListele');
    this.alertifyService.warning("Üye Bilgileri Başarıyla Güncellendi");
  });
 }



 getUrunler():Observable<Urun[]>{
  return this.httpClient.get<Urun[]>(this.path+"uyeler/urunlerigoster");
}

addUrun(urun){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/urunEkle",urun,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Urunler/UrunleriGoster');
    this.alertifyService.success("Ürün Başarıyla Eklendi");
  });
 }

 addVucutInfo(vucutbilgi){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/VucutBilgiEkle",vucutbilgi,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Uyelik/UyeleriListele');
    this.alertifyService.success("Vucüt Bilgileri Başarıyla Eklendi");
  });
 }

 addGider(gider){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/giderEkle",gider,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Giderler/GiderleriGoster');
    this.alertifyService.success("Gider Başarıyla Eklendi");
  });
 }

 getGiderler():Observable<Gider[]>{
  return this.httpClient.get<Gider[]>(this.path+"uyeler/GiderleriGoster");
}

deleteGider(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/giderSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Gider Başarıyla Silindi");
  });
}

deleteUrun(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/urunSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Ürün Başarıyla Silindi");
  });
}
getUrunById(urunId):Observable<Urun>{
  return this.httpClient.get<Urun>(this.path+"uyeler/urunlerbyid/?id="+urunId);

}

updateUrun(Urun){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/UrunGuncelle",Urun,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Urunler/UrunleriGoster');
    this.alertifyService.warning("Ürün Başarıyla Güncellendi");
  });
 }

 deleteVucutBilgi(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/vucutSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Vücut Ölçüleri Başarıyla Silindi");
  });
}

addAntrenman(Antrenman){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/antrenmanEkle",Antrenman,{ headers:headers }).subscribe(data=>{

    location.reload();
    this.alertifyService.success("Antrenman Başarıyla Eklendi");
  });

}

deleteAntrenman(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/antrenmanSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Antrenman Başarıyla Silindi");
  });
}



getOdemeById(uyeId):Observable<UyeOdeme[]>{
  return this.httpClient.get<UyeOdeme[]>(this.path+"uyeler/odemebyId/?id="+uyeId);
}

getOdemeler(){
  return this.httpClient.get(this.path+"uyeler/odemelerigor");
}

getOdemeTarihleri(){
  return this.httpClient.get(this.path+"uyeler/odemeTarihleri");
}

getGiderTutarlari(){
  return this.httpClient.get(this.path+"uyeler/giderlerTutarlari");
}

deleteOdeme(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/odemeSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Ödeme Başarıyla Silindi");
  });
}

addOdeme(Odeme){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/odemeEkle",Odeme,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('Uyelik/UyeleriListele');
    this.alertifyService.success("Ödeme Başarıyla Eklendi");
  });

}

getSatislar():Observable<Satis[]>{
  return this.httpClient.get<Satis[]>(this.path+"uyeler/satislar");
}
addSatis(Satis){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/satisEkle",Satis,{ headers:headers }).subscribe(data=>{

    this.router.navigateByUrl('satislar');
    this.alertifyService.success("Satış Başarıyla Eklendi");
  });

}

deleteSatis(id){
  let options = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer'+ this.authService.token.toString(),
    })
  };
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.delete(this.path+"uyeler/satisSil"+"/?id="+id,{headers:headers}).subscribe(data=>{
    location.reload();
    this.alertifyService.error("Satış Başarıyla Silindi");
  });
}


sendEmail(emailForm){
  let headers = new HttpHeaders();
  headers = headers.append("Authorization",'Bearer ' + this.authService.token.toString());
  this.httpClient.post(this.path+"uyeler/Sendemail",emailForm,{ headers:headers }).subscribe(data=>{
    this.alertifyService.success("Email Başarıyla Gönderildi");
    this.router.navigateByUrl('Uyelik/UyeleriListele');
  
  });
}



aktiflikById(uyeId):Observable<UyeAktiflik[]>{
  return this.httpClient.get<UyeAktiflik[]>(this.path+"uyeler/uyeAktifmi/?id="+uyeId);
}
aktiflikAll():Observable<UyeAktiflik[]>{
  return this.httpClient.get<UyeAktiflik[]>(this.path+"uyeler/uyeAktiflik");
}

aktiflikGuncelle(){

    this.httpClient.get(this.path+"uyeler/aktiflikGuncelle").subscribe(data=>{
      this.alertifyService.success("Üye Aktiflikleri Gün Bazlı Güncellenmiştir.");
      location.reload();
    },err=>{
      this.alertifyService.success("Üye Aktiflikleri Gün Bazlı Güncellenmiştir.");
      location.reload();
    }
    
    );
  
}
getTopSellerProduct(){
  return this.httpClient.get(this.path+"uyeler/topsellerproduct");
}
getAylikAktifUye(){
  return this.httpClient.get(this.path+"uyeler/monthlyAktifUye");
}

}
