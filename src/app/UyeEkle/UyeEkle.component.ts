import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { Uye } from '../Models/Uye';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Program } from '../Models/program';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-UyeEkle',
  templateUrl: './UyeEkle.component.html',
  styleUrls: ['./UyeEkle.component.css']
})
export class UyeEkleComponent implements OnInit {


  constructor(
    private uyeService:UyeService,
    private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder,
    private alertify:AlertifyService
    ) { }

    uye:Uye;
    program:Program
    uyeAddForm:FormGroup;
    createUyeForm(){
      this.uyeAddForm = this.formBuilder.group({
        name: ["",Validators.required],
        surname:["",Validators.required],
        email:["",Validators.required],
        phone:["",Validators.required]
      })
    }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.createUyeForm();
   
  }


  add(){
    if(this.authService.token==null){
    
    }
    else if(this.uyeAddForm.valid){
      this.uye=Object.assign({},this.uyeAddForm.value)

      this.uyeService.add(this.uye);
  
      
    }
  }
  
  }


