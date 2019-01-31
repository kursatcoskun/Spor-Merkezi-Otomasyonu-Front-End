import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UyeEkleComponent } from './UyeEkle/UyeEkle.component';
import { UyelerComponent } from './Uyeler/Uyeler.component';
import { UyeDetayComponent } from './UyeDetay/UyeDetay.component';
import { UrunlerComponent } from './urunler/urunler.component';
import { UrunEkleComponent } from './urunEkle/urunEkle.component';
import { VucutBilgiEklemeComponent } from './VucutBilgiEkleme/VucutBilgiEkleme.component';
import { GiderEkleComponent } from './giderEkle/giderEkle.component';
import { GiderleriGosterComponent } from './giderleriGoster/giderleriGoster.component';
import { GelirGiderDurumuComponent } from './GelirGiderDurumu/GelirGiderDurumu.component';
import { UyeDuzenleComponent } from './uyeDuzenle/uyeDuzenle.component';
import { UrunDuzenleComponent } from './urunDuzenle/urunDuzenle.component';
import { ProgramEkleComponent } from './programEkle/programEkle.component';
import { ProgramDuzenleComponent } from './programDuzenle/programDuzenle.component';
import { OdemeAlComponent } from './odemeAl/odemeAl.component';
import { GirisComponent } from './giris/giris.component';
import { SatislarComponent } from './satislar/satislar.component';
import { SatisyapComponent } from './satisyap/satisyap.component';


const routes: Routes = [
  {path:"giris",component:WelcomeComponent},
  {path:"welcome",component:GirisComponent},
  {path:"Uyelik/UyeEkle",component:UyeEkleComponent},
  {path:"Uyelik/UyeleriListele",component:UyelerComponent},
  {path:"UyeDetay/:uyeId",component:UyeDetayComponent},
  {path:"Urunler/UrunleriGoster",component:UrunlerComponent},
  {path:"Urunler/UrunEkle",component:UrunEkleComponent},
  {path:"vucutBilgiEkle/:uyeId",component:VucutBilgiEklemeComponent },
  {path:"Giderler/GiderEkle",component:GiderEkleComponent},
  {path:"Giderler/GiderleriGoster",component:GiderleriGosterComponent},
  {path:"GelirGiderDurumu",component:GelirGiderDurumuComponent},
  {path:"UyeDuzenle/:uyeId",component:UyeDuzenleComponent},
  {path:"UrunDuzenle/:uyeId",component:UrunDuzenleComponent},
  {path:"ProgramEkle/:uyeId",component:ProgramEkleComponent},
  {path:"ProgramDuzenle/:programId",component:ProgramDuzenleComponent},
  {path:"odemeEkle/:uyeId",component:OdemeAlComponent},
  {path:"satislar",component:SatislarComponent},
  {path:"satisyap",component:SatisyapComponent},
  {path:"**",redirectTo:"welcome",pathMatch:"full"}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
    
   ]
})
export class AppRoutingModule { }
