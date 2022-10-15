import { Component, Input, OnInit } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';

@Component({
  selector: 'app-stock-list-card',
  templateUrl: './stock-list-card.component.html',
  styleUrls: ['./stock-list-card.component.scss'],
})
export class StockListCardComponent implements OnInit {

  @Input() Backing: String = '';
  @Input() Length: String = '';
  @Input() Name: String = '';
  @Input() Quality: String = '';
  @Input() Quantity: String = '';
  @Input() Shade: String = '';
  @Input() StorageLocation: any = '';
  @Input() Thickness: any = '';
  @Input() Width: any = '';
  @Input() img: any = 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  @Input() Price: any = '5000'
  @Input() Id: any = '3232323'
  moveToQr(){
    this.dataProvider.product = {
      Name: this.Name,
      Quality: this.Quality,
      Shade: this.Shade,
      Backing: this.Backing,
      Length: this.Length,
      Width: this.Width,
      Thickness: this.Thickness,
      Quantity: this.Quantity,
      StorageLocation: this.StorageLocation,
      Price: this.Price,
      id: this.Id,
      img: this.img,
    }
  }


  constructor(private dataProvider:DataProviderService) { }

  ngOnInit() { }

}
