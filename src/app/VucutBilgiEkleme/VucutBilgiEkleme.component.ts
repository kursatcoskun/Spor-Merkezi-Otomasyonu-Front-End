import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/Auth.service';
import { UyeService } from '../Services/uye.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { VucutBilgi } from '../Models/vucutBilgi';

@Component({
  selector: 'app-VucutBilgiEkleme',
  templateUrl: './VucutBilgiEkleme.component.html',
  styleUrls: ['./VucutBilgiEkleme.component.css']
})
export class VucutBilgiEklemeComponent implements OnInit {
UyeId:number;

vucutBilgiForm:FormGroup;
vucutBilgi:VucutBilgi;

  constructor(
    private activatedRoute:ActivatedRoute,
    private authService:AuthService,
    private uyeService:UyeService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.UyeId = params["uyeId"];
     
     
    
    });
    this.createUyeForm();
    
   
  }

  createUyeForm(){
    this.vucutBilgiForm = this.formBuilder.group({
      UyeId: [{ value: this.UyeId, disabled:false }],
      Boy:["",Validators.required],
      Kilo:["",Validators.required],
      SolKol:["",Validators.required],
      SagKol:["",Validators.required],
      Omuz:["",Validators.required],
      Gogus:["",Validators.required],
      Bel:["",Validators.required],
      SolBacak:["",Validators.required],
      SagBacak:["",Validators.required]
    });
  }

  add(){
    if(this.authService.token==null){
    
    }
    else if(this.vucutBilgiForm.valid){
      this.vucutBilgiForm.value.uyeId = this.UyeId;
      this.vucutBilgi=Object.assign({},this.vucutBilgiForm.value)

      this.uyeService.addVucutInfo(this.vucutBilgi);
     
      
    }
  }



}
