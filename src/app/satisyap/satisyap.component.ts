import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { UyeService } from '../Services/uye.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Urun } from '../Models/urun';
import { Satis } from '../Models/Satis';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-satisyap',
  templateUrl: './satisyap.component.html',
  styleUrls: ['./satisyap.component.css']
})
export class SatisyapComponent implements OnInit {
urunler:Urun[]=[];
satisform:FormGroup;
hide=false;
selectedId:any;
satis:Satis;
selectedPrice:any;
toplam:any;
selectedToplam:any;
selectedName:string;
deneme="Ürün Id Giriniz...";
createUyeForm(){
  this.satisform = this.formBuilder.group({
    urunId: this.selectedId,
    urunAdi:this.selectedName,
    urunFiyati:this.selectedPrice,
    toplamUrunAdedi:["",Validators.required],
    toplamTutar:this.toplam
  })
}
  constructor(
    private authService:AuthService,
    private uyeService:UyeService,
    private formBuilder:FormBuilder,
    private router:Router,
    private alertify:AlertifyService

  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()==false){
      this.router.navigateByUrl("/welcome");
    }
    else{

      this.uyeService.getUrunler().subscribe(data=>{
        this.urunler = data;

      });
      this.createUyeForm();
      
    }
  
  }


  select(){
    this.satisform.controls['urunAdi'].valueChanges.subscribe(data=>{
      if(data == null){
        console.log("empty");
        this.satisform.value.urunFiyati = this.selectedPrice;
      }
      else{
        
        this.selectedId = data;
        this.uyeService.getUrunById(this.selectedId).subscribe(data=>{
          this.selectedPrice = data["urunFiyati"];
          this.selectedToplam = data["toplamUrunAdedi"];
        this.selectedName = data["urunAdi"];
        this.satisform.value.urunAdi = this.selectedName;
 
        });
        console.log(this.selectedId);
       
      }
      this.satisform.value.urunFiyati = this.selectedPrice;

    });
    this.satisform.patchValue({
      urunId: this.selectedId,
      urunFiyati:this.selectedPrice,
      toplamTutar:this.toplam
      // formControlName2: myValue2 (can be omitted)
    });
  }
change2(){
  var miktar = this.satisform.controls['toplamUrunAdedi'].value;
  this.toplam = miktar*this.selectedPrice;
  this.satisform.patchValue({
    urunId: this.selectedId,
    urunFiyati:this.selectedPrice,
    toplamTutar:this.toplam
   
    
  });

  
}

  add(){
    if(this.authService.token==null){
    
    }
    else if(this.satisform.valid){
      this.satisform.value.urunAdi = this.selectedName;
      this.satisform.value.urunId = this.selectedId;
      this.satis=Object.assign({},this.satisform.value)
      console.log(this.satis);
      this.uyeService.addSatis(this.satis);
  
      
    }
  }




}
