import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UyeService } from '../Services/uye.service';
import { Uye } from '../Models/Uye';
import { Program } from '../Models/program';
import { DatePipe } from '@angular/common';
import { UyeOdeme } from '../Models/UyeOdeme';
import { AlertifyService } from '../Services/alertify.service';
import { EmailForm } from '../Models/emailForm';
import { UyeAktiflik } from '../Models/UyeAktiflik';



@Component({
  selector: 'app-UyeDetay',
  templateUrl: './UyeDetay.component.html',
  styleUrls: ['./UyeDetay.component.css']
})
export class UyeDetayComponent implements OnInit {
  emailForm:EmailForm;
uye:Uye;
program:Program;
vucutinfo:any;
hide = false;
hide2 = false;
Id:any;
tarihler: string[]=[];
programId:any;
programAdd:Program = null;
uyeOdeme:UyeOdeme[] = [];
antrenmanlar : string[];
email:string;
antrenmanSent:string;
aktiflikDurumlari:UyeAktiflik[];
aktiflikDurumlar2:UyeAktiflik[];
i:number;
l:number;
aktiflik:string;
bitisTarihi:any;
@ViewChildren('ce') ces:QueryList<ElementRef>;
  constructor(
    private activatedRoute:ActivatedRoute,
    private uyeService:UyeService,
    private router:Router,
    private datePipe: DatePipe,
    private alertifyService:AlertifyService

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getUyeById(params["uyeId"]);
      this.getProgramById(params["uyeId"]);
      this.getVucutInfoById(params["uyeId"]);
      this.Id = params["uyeId"];
      this.getOdemeler(params["uyeId"]);
      this.getAktiflik(params["uyeId"]);
    });
   
  }

  getUyeById(uyeId){
    this.uyeService.getUyeById(uyeId).subscribe(data=>{
      this.uye = data;
      this.email = data["email"];

    })
  }

  getProgramById(uyeId){
    this.uyeService.getProgramById(uyeId).subscribe(data=>{
      this.program = data;
      console.log(this.program);

      
     
      if(this.program == null){
        this.uyeService.addProgram(this.Id).subscribe(data=>{
          console.log("Basarili");
        });
      }
      this.programId = data['id'];

   

    });
  }

  getVucutInfoById(uyeId){
    this.uyeService.getVucutInfoById(uyeId).subscribe(data=>{
      this.vucutinfo = data;   
      console.log(this.vucutinfo);

    })
  }
  deleteVucutBilgi(id){
    this.uyeService.deleteVucutBilgi(id);
  }

  programiGoster(){
    if(this.hide == true){
      this.hide = false;
    }
    else if(this.programId == null){
      this.hide = false;

      console.log("PROGRAM YOK EKLEYİN.");
    }
    else{
      this.hide =true;
    }
  }

  deleteAntrenman(id){
    this.uyeService.deleteAntrenman(id);
  }

  getOdemeler(uyeId){
    this.uyeService.getOdemeById(uyeId).subscribe(data=>{
      this.uyeOdeme = data;
      console.log(this.uyeOdeme);
    })
  }

  odemeleriGoster(){
    if(this.hide2 == true){
      this.hide2 = false;
    }
    else if(this.uyeOdeme == null){
      this.hide2 = false;
      console.log("ÖDEME BULUNAMADI.");
     
    }
    else{
      this.hide2 =true;
    }
  }

  deleteOdeme(id){
    this.uyeService.deleteOdeme(id);
  }

  sendMail(){
    this.l=this.program.antrenmans.length;
  
    for(this.i=0;this.i<this.l;this.i++){
     
        this.antrenmanSent +="<br>"+ document.getElementById("deneme"+this.i).innerHTML +"<br>"+  document.getElementById("deneme2"+this.i).innerHTML+"<br>";
      }
      console.log(this.antrenmanSent);
      this.emailForm = new EmailForm("ADAM SPOR MERKEZİ - Program Bilgileriniz Hk.","Kürşat COŞKUN",this.email,this.antrenmanSent.substring(9) +'<br>');
    
     this.uyeService.sendEmail(this.emailForm);
      
      console.log(this.emailForm);
    }
getAktiflik(id){
  this.uyeService.aktiflikById(id).subscribe(data=>{
      this.aktiflikDurumlari = data;
      this.aktiflikDurumlar2 = this.aktiflikDurumlari.reverse();
      if(this.aktiflikDurumlar2[0].aktiflikDurumu == true){
          this.aktiflik = "Aktif";
          this.bitisTarihi = this.datePipe.transform(this.aktiflikDurumlar2[0].bitisTarihi, 'yyyy-MM-dd');
      }
      else{
        this.aktiflik = "Aktif Değildir.";
      }
  });
}
 
  }




