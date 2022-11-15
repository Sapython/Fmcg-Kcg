import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService } from 'src/services/dataBase/data-base.service';

@Component({
  selector: 'app-product-scanned-details',
  templateUrl: './product-scanned-details.page.html',
  styleUrls: ['./product-scanned-details.page.scss'],
})
export class ProductScannedDetailsPage implements OnInit {
  ids = '';
  currentStockData : any;
  dataKeys: string[] = [];
  constructor(private router:ActivatedRoute,private databaseService:DataBaseService) {
    this.router.params.subscribe((params) => {
      // alert("Changed route "+params.id); 
      this.ids = params.scannedId.split('-');
      if(this.ids){
        this.getStock();
      }
    })
  }

  getStock(){
    this.databaseService.getPurchaseItem(this.ids[0],this.ids[1]).then((res)=>{
      console.log(res.data())
      this.currentStockData = res.data();
      this.dataKeys = Object.keys(this.currentStockData);
    })
  }

  ngOnInit() {
  }

}
