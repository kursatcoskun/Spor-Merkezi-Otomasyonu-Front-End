import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UyeService } from '../Services/uye.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth.service';
import { Urun } from '../Models/urun';

@Component({
  selector: 'app-urunEkle',
  templateUrl: './urunEkle.component.html',
  styleUrls: ['./urunEkle.component.css']
})
export class UrunEkleComponent implements OnInit {

  urunEklemeForm:FormGroup;
  urun:Urun;

  createUyeForm(){
    this.urunEklemeForm = this.formBuilder.group({
      urunAdi: ["",Validators.required],
      urunFiyati:["",Validators.required],
      toplamUrunAdedi:["",Validators.required]
    })
  }
  constructor(
    private router:Router,
    private uyeService:UyeService,
    private formBuilder:FormBuilder,
    private authService:AuthService

  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.createUyeForm();
  }


  add(){
    if(this.authService.token==null){
    
    }
    else if(this.urunEklemeForm.valid){
      this.urun=Object.assign({},this.urunEklemeForm.value)

      this.uyeService.addUrun(this.urun);
     
      
    }
  }

}
