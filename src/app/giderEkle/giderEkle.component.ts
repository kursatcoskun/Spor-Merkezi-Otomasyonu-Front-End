import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UyeService } from '../Services/uye.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Gider } from '../Models/Gider';

@Component({
  selector: 'app-giderEkle',
  templateUrl: './giderEkle.component.html',
  styleUrls: ['./giderEkle.component.css']
})
export class GiderEkleComponent implements OnInit {

  giderEklemeForm:FormGroup;
  gider:Gider;
  constructor(
    private authService:AuthService,
    private activatedRoute:ActivatedRoute,
    private uyeService:UyeService,
    private router:Router,
    private formBuilder:FormBuilder

  ) { }

  createGiderForm(){
    this.giderEklemeForm = this.formBuilder.group({
      GiderAciklama: ["",Validators.required],
      GiderMiktari:["",Validators.required]
    })
  }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    this.createGiderForm();
  }


  add(){
    if(this.authService.token==null){
    
    }
    else if(this.giderEklemeForm.valid){
      this.gider=Object.assign({},this.giderEklemeForm.value)

      this.uyeService.addGider(this.gider);
     
      
    }
  }

}
