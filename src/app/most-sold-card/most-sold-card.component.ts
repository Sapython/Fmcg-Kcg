import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-sold-card',
  templateUrl: './most-sold-card.component.html',
  styleUrls: ['./most-sold-card.component.scss'],
})
export class MostSoldCardComponent implements OnInit {

  @Input() name: String = 'Micro SilkFiber Soft  Plain California Premium Shaggy';
  @Input() pcSold: String = '24242';
  @Input() img: any = 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  @Input() id: any = '';

  constructor() { }

  ngOnInit() { }

}
