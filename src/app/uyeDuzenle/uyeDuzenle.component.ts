import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { Uye } from '../Models/Uye';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth.service';

@Component({
  selector: 'app-uyeDuzenle',
  templateUrl: './uyeDuzenle.component.html',
  styleUrls: ['./uyeDuzenle.component.css']
})
export class UyeDuzenleComponent implements OnInit {
uye:Uye;
Id:number;
uyeAddForm:FormGroup;
name:string;
surname:string;
phone:string;
email:string;
hide=false;
  constructor(
    private uyeService:UyeService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthService

  ) { }
  createUyeForm(){
    this.uyeAddForm = this.formBuilder.group({
      Id:this.Id,
      name: ["",Validators.required],
      surname:["",Validators.required],
      email:["",Validators.required],
      phone:["",Validators.required]
      
    });
    this.getUyeById();
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.Id = params["uyeId"];
    });
    this.getUyeById()
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
   
    this.createUyeForm();

    
    
  }

  getUyeById(){
    this.uyeService.getUyeById(this.Id).subscribe(data=>{
      this.name = data["name"];
      this.surname = data["surname"];
      this.phone = data["phone"];
      this.email = data["email"];
    });
  }

  update(){
    this.uyeAddForm.value.Id = this.Id;
    this.uye=Object.assign({},this.uyeAddForm.value);
    console.log(this.uyeAddForm.value);
   if(this.uye.email == undefined || this.uye.surname==undefined || this.uye.phone ==undefined || this.uye.email == undefined){
    this.hide = true;
   }
   else{
     this.hide = false;
     this.uyeService.updateUye(this.uye);

   }
  }

 

}
