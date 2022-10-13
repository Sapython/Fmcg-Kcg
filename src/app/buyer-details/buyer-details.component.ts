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
    },
    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 40,
      payment: 'Pending',
    },

    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 30,
      payment: 'Paid',
    },
    {
      image: '../../assets/images/Raj/order_image.png',
      name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
      quantity: 30,
      payment: 'Pending',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log('details', this.productDetails);
  }
}
