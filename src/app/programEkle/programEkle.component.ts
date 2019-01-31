import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { UyeService } from '../Services/uye.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Antrenman } from '../Models/antrenman';

@Component({
  selector: 'app-programEkle',
  templateUrl: './programEkle.component.html',
  styleUrls: ['./programEkle.component.css']
})
export class ProgramEkleComponent implements OnInit {
  antrenman:Antrenman
  antrenmanAddForm:FormGroup;
  UyeProgramId:number;
  createAntrenman(){
    this.antrenmanAddForm = this.formBuilder.group({
      UyeProgramId:[this.UyeProgramId],
      AntrenmanAdi:["",Validators.required],
      SetSayisi:["",Validators.required],
      TekrarSayisi:["",Validators.required]
    })
  }
  constructor(
    private authService:AuthService,
    private uyeService:UyeService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder

  ) { }

  ngOnInit() {
  
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.activatedRoute.params.subscribe(params=>{
      this.UyeProgramId = params["uyeId"];
  
      console.log(this.UyeProgramId);
    });
    this.createAntrenman();
    
  }

  add(){
    this.antrenmanAddForm.value.UyeProgramId = this.UyeProgramId;
      this.antrenman=Object.assign({},this.antrenmanAddForm.value)
      console.log(this.antrenmanAddForm.value);
      this.uyeService.addAntrenman(this.antrenman);
     
  }

}
