import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from 'src/services/dataBase/data-base.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {
  sale:any;
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DataBaseService) {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params)
      this.databaseService.getSales(params.saleId).then((data:any)=>{
        this.sale = data.data();
        console.log(params.saleId,this.sale)
        alert("Got sale")
      })
    })
  }

  ngOnInit() {
  }

}
