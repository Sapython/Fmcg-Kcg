import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  public stockId = 49052825038959470;
  public userId:any;
  public currentStockData : any;
  @Output() addToCart: EventEmitter<any> = new EventEmitter(); 
  constructor(private stock:StocksService, public user:UserService, public dataProvider:DataProviderService, public dataBase:DataBaseService) { }

  ngOnInit() {
    this.getStock()
    return this.user.getUserData.subscribe((res) => {
      this.userId = res?.uid; 
    });
  }

  public getStock(){
    console.log(this.stockId)
    this.stock.getStock(this.stockId).then((res)=>{
      this.currentStockData = res.data();
      // console.log(res.data())
    })
  }

  // trigger(this: any) {
  //   //console.log(this)
  //   let data = {
  //     id: this.id,
  //     name: this.product_name,
  //     price: this.price,
  //     category: this.category,
  //     src: this.src,
  //     quantity: this.cartQuantityValue || 1,
  //     wishlist: this.wishlist || false,
  //     productId: this.id,
  //   };

  //   this.addToCart.emit(data);
  //   this.cartItem = data;
  //   this.cartItemId = data.id;
  //   console.log(this.cartItem);
  // }

  addProductCart() {
    // this.dataBase.userCart(this.userId, this.currentStockData);
    const curentId = this.currentStockData.id
    const CartValue = this.dataProvider.cartData.find((value) => {
      console.log(curentId, 'hello', value.id);
      console.log(curentId)
      return curentId == value.id;
    });
    
    if (CartValue) {
      this.dataBase.updateCartProductQuantity(this.userId, CartValue.id);
    } else {
      console.log('else');
      this.dataBase.userCart(this.userId, this.currentStockData);
    }
  }

}
