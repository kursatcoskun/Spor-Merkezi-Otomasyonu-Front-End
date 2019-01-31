import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";
import { UyeService } from '../Services/uye.service';
import { Gider } from '../Models/Gider';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { UyeOdeme } from '../Models/UyeOdeme';
import { OdemeAlComponent } from '../odemeAl/odemeAl.component';
@Component({
  selector: 'app-GelirGiderDurumu',
  templateUrl: './GelirGiderDurumu.component.html',
  styleUrls: ['./GelirGiderDurumu.component.css'],
  providers:[UyeService]
})
export class GelirGiderDurumuComponent implements OnInit {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('barCanvas2') barCanvas2;
  giderler:Gider[];
  toplam : number[] = [];
  odemeler:UyeOdeme[] = [];
  gelir: any = [];
  l:number;
  i:number;
  barChart;
  barChart2;
  tarih:Date[] = [];
  editDate:any[]=[];
  tarih2:any =[];
  editDate2:any[]=[];


  constructor(
    private uyeService:UyeService,
    private datePipe: DatePipe,
    private router:Router

  ) {
  
 

   }

  ngOnInit() {
   
    this.getGiderler();

    this.getOdeme();

  }

  initializeChart(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
     
      type: 'line',
      data: {
          labels: this.editDate,
          datasets: [{
              label: 'GİDERLER(TL)',
              data: this.toplam,
              borderColor: 'rgb(255,0,0)',
              fill: false,
              borderWidth: 2
          }]
          
        
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
     

  });
  }

  initializeChart2(){
    this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
     
      type: 'line',
      data: {
          labels:this.editDate2,
          datasets: [{
              label: 'GELİRLER(ÜYE ÖDEMELERİ)(TL)',
              data: this.gelir,
              borderColor: 'rgb(0,255,0)',
              fill: false,
              borderWidth: 2
          }]
          
        
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
     

  });
  }

  getGiderler(){
    this.uyeService.getGiderler().subscribe(data=>{
      this.giderler = data;
      console.log(this.giderler);
       this.l = this.giderler.length;
       for(this.i=0;this.i<this.l;this.i++){
        this.toplam.push(this.giderler[this.i].giderMiktari);
        this.tarih.push(this.giderler[this.i].tarih);
    }
    console.log(this.toplam);
    console.log(this.tarih);
    var i;
    for(i=0;i<this.l;i++){
      this.editDate.push(this.datePipe.transform(this.tarih[i], 'yyyy-MM-dd'));

    }
   
 
    this.initializeChart();

    });
    
  }


  getOdeme(){

    this.uyeService.getOdemeler().subscribe(data=>{
      this.gelir = data
      console.log(this.gelir);
      this.uyeService.getOdemeTarihleri().subscribe(data=>{
          this.tarih2 = data;
        
          var i;
          for(i=0;i<this.tarih2.length;i++){
            this.editDate2.push(this.datePipe.transform(this.tarih2[i], 'yyyy-MM-dd'));
      
          }

          this.initializeChart2();
      });
  
    
  
    });
 
   
  }



}
