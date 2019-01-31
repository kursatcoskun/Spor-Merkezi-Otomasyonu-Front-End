import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GrdFilterPipe } from './grd-filter.pipe';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
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
import { AktifUyelerComponent } from './aktifUyeler/aktifUyeler.component';



@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      WelcomeComponent,
      FooterComponent,
      UyeEkleComponent,
      UyelerComponent,
      UyeDetayComponent,
      UrunlerComponent,
      UrunEkleComponent,
      VucutBilgiEklemeComponent,
      GiderEkleComponent,
      GiderleriGosterComponent,
      GelirGiderDurumuComponent,
      UyeDuzenleComponent,
      UrunDuzenleComponent,
      ProgramEkleComponent,
      ProgramDuzenleComponent,
      OdemeAlComponent,
      GirisComponent,
      SatislarComponent,
      SatisyapComponent,
      AktifUyelerComponent,
      GrdFilterPipe
    

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   exports:[
      
   ],
   providers: [
      DatePipe,
    
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
