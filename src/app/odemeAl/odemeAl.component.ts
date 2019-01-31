import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { AuthService } from '../Services/Auth.service';
import { AlertifyService } from '../Services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UyeOdeme } from '../Models/UyeOdeme';

@Component({
  selector: 'app-odemeAl',
  templateUrl: './odemeAl.component.html',
  styleUrls: ['./odemeAl.component.css']
})
export class OdemeAlComponent implements OnInit {
  odemeform:FormGroup;
  uyeId:number;
  uyeOdeme:UyeOdeme;
  createUyeForm(){
    this.odemeform = this.formBuilder.group({
      uyeId: [this.uyeId],
      uyelikTipi:["",Validators.required],
      uyelikSuresi:["",Validators.required],
      kayitTarihi:["",Validators.required],
      kayitTutari:["",Validators.required]
    })
  }

  constructor(
    private uyeService:UyeService,
    private authService:AuthService,
    private alertify:AlertifyService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router

  ) { }

  ngOnInit() {

    
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.activatedRoute.params.subscribe(params=>{
      this.uyeId = params["uyeId"];
  
      console.log(this.uyeId);
    });
    this.createUyeForm();
  }

  add(){
    this.odemeform.value.uyeId = this.uyeId;
    this.uyeOdeme=Object.assign({},this.odemeform.value)
    console.log(this.odemeform.value);
    this.uyeService.addOdeme(this.uyeOdeme);
   
}

}
