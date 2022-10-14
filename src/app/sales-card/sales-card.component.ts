import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss'],
})
export class SalesCardComponent implements OnInit {

  @Input() Backing: String = '';
  @Input() Length: String = '';
  @Input() Name: String = 'Micro SilkFiber Soft  Plain California Premium Shaggy';
  @Input() Quality: String = '';
  @Input() Quantity: String = '44';
  @Input() Shade: String = '';
  @Input() StorageLocation: any = '';
  @Input() Thickness: any = '';
  @Input() Width: any = '';
  @Input() img: any = 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  @Input() Price: any = '5000'
  @Input() Id: any = '3232323'
  @Input() productId: any;
  @Input() productQuantity: any = '2'

  constructor() { }

  ngOnInit() {}

}
