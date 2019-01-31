import { Component, OnInit } from '@angular/core';
import { UyeService } from '../Services/uye.service';
import { Gider } from '../Models/Gider';
import { ExcelService } from '../Services/excel.service';

@Component({
  selector: 'app-giderleriGoster',
  templateUrl: './giderleriGoster.component.html',
  styleUrls: ['./giderleriGoster.component.css']
})
export class GiderleriGosterComponent implements OnInit {
giderler:Gider[];
toplam : number[] = [];
l:number;
i:number;
giderToplam:any;
  constructor(

    private uyeService:UyeService,
    private excelService:ExcelService
  ) { }

  ngOnInit() {
    this.uyeService.getGiderler().subscribe(data=>{
      this.giderler = data;
      console.log(this.giderler);
       this.l = this.giderler.length;
       for(this.i=0;this.i<this.l;this.i++){
        this.toplam.push(this.giderler[this.i].giderMiktari);
      
    }
    console.log(this.toplam);
    });

    this.uyeService.getGiderTutarlari().subscribe(data=>{
        this.giderToplam = data;
    })
    
  }

  delete(id){
    this.uyeService.deleteGider(id);
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.giderler, 'giderler');
 }

 

}
