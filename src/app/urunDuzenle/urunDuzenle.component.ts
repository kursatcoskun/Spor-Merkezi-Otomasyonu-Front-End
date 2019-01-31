import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/Auth.service';
import { UyeService } from '../Services/uye.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Urun } from '../Models/urun';

@Component({
  selector: 'app-urunDuzenle',
  templateUrl: './urunDuzenle.component.html',
  styleUrls: ['./urunDuzenle.component.css']
})
export class UrunDuzenleComponent implements OnInit {
id:number;
urunAdi:string;
urunFiyati:number;
toplamUrunAdedi:number;
uyeAddForm:FormGroup;
urun:Urun;
hide=false;
  constructor(

    private activatedRoute:ActivatedRoute,
    private router:Router,
    private authService:AuthService,
    private uyeService:UyeService,
    private formBuilder:FormBuilder
  ) { }

  createUyeForm(){
    this.uyeAddForm = this.formBuilder.group({
      id:[""],
      urunAdi: ["",Validators.required],
      urunFiyati:["",Validators.required],
      toplamUrunAdedi:["",Validators.required]
      
    });
    this.getUrunById();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params["uyeId"];
    });
    this.getUrunById()
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.createUyeForm();
   
  }

  getUrunById(){
    this.uyeService.getUrunById(this.id).subscribe(data=>{
      this.urunAdi = data["urunAdi"];
      this.urunFiyati = data["urunFiyati"];
      this.toplamUrunAdedi = data["toplamUrunAdedi"];
    });
  }

  update(){
    this.uyeAddForm.value.id = this.id;
    this.urun=Object.assign({},this.uyeAddForm.value);
    console.log(this.uyeAddForm.value);
   if(this.urun.toplamUrunAdedi == undefined || this.urun.urunAdi==undefined || this.urun.urunFiyati ==undefined){
    this.hide = true;
   }
   else{
     this.hide = false;
     this.uyeService.updateUrun(this.urun);

   }

  }

}
