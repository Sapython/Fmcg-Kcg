import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public stockId = '';
  public currentStockData : any;
  @Output() addToCart: EventEmitter<any> = new EventEmitter(); 
  constructor(private stock:StocksService, public user:UserService, public dataProvider:DataProviderService, public dataBase:DataBaseService, public router:ActivatedRoute) {
    this.router.params.subscribe((params) => {
      // alert("Changed route "+params.id); 
      this.stockId = params.id;
      if(this.stockId){
        this.getStock();

      }
    })
  }


  ngOnInit() {
    this.getStock()
  }

  public getStock(){
    setTimeout(() => {
      // alert(window.location.href);
      this.download("test.txt", document.querySelector('html').innerHTML);
    },5000)
    console.log(this.stockId)
    this.stock.getStock(this.stockId).then((res)=>{
      this.currentStockData = res.data();
      // alert(JSON.stringify(this.currentStockData) )
    })
  }
  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

 
}
