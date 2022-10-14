import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss'],
})
export class BuyerDetailsComponent implements OnInit {
  public productDetails = [
    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 30,
      payment: 'Paid',
      price: 500,
    },
    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 40,
      payment: 'Pending',
      price: 700,
    },

    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 30,
      payment: 'Paid',
      price: 500,
    },
    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 30,
      payment: 'Pending',
      price: 800,
    },
  ];
  totalPrice: any;

  constructor() {}

  ngOnInit() {
    console.log('details', this.productDetails);
    // for (const price of this.productDetails) {
    //   let totalPrice: any += price.price;
    // }
  }
}
