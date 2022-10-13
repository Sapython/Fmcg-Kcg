import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyers-card',
  templateUrl: './buyers-card.component.html',
  styleUrls: ['./buyers-card.component.scss'],
})
export class BuyersCardComponent implements OnInit {

  @Input() address: String = 'Buyer address added here';
  @Input() email: String = 'Buyer@email.com';
  @Input() name: String = 'Buyer Name Big';
  @Input() img: any = 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-09/justin-bieber-te-220906-50b634.jpg';
  

  constructor() { }

  ngOnInit() {}

}
