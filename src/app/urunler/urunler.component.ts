import { Component, OnInit } from '@angular/core';
import { Urun } from '../Models/urun';
import { UyeService } from '../Services/uye.service';
import { Router } from '@angular/router';
import { ExcelService } from '../Services/excel.service';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})
export class UrunlerComponent implements OnInit {
urunler:Urun[];

  constructor(private uyeService:UyeService,
    private router:Router,
    private excelService:ExcelService
    ) { }

  ngOnInit() {

    this.uyeService.getUrunler().subscribe(data=>{
      this.urunler = data;
      console.log(this.urunler);
    })
  }

  delete(id){
    this.uyeService.deleteUrun(id);
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.urunler, 'urunler');
 }
}



