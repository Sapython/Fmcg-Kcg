import { Component, OnInit, ViewChild } from '@angular/core';
import { StocksService } from 'src/services/Stock/stocks.service';
import { OverlayEventDetail } from '@ionic/core/components';

import Fuse from 'fuse.js';
import { IonModal, RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.page.html',
  styleUrls: ['./stock-list.page.scss'],
})
export class StockListPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  public color:any;

  lower:number = 0;
  upper:number = 0
  stocks: any[] = [];
  filteredStocks: any[] = [];
  searchDebounceTimer:any;
  constructor(private stockService: StocksService) {}
  loading:boolean = true;
  ngOnInit() {
    this.stockList();
  }
  debounceSearch(event:any){
    try {
      clearTimeout(this.searchDebounceTimer)
      this.searchDebounceTimer = setTimeout(() => {
        this.search(event);
      },500)
    } catch (error) {
    }
  }

  search(event: any) {
    console.log("FIRED:",event)
    if (event.target.value.length > 0) {
      let fuse = new Fuse(this.stocks, {
        keys: [
          'Backing',
          'Name',
          'Length',
          'Price',
          'Quality',
          'Quantity',
          "Shade",
          "StorageLocation"
        ],
      });
      const res = fuse.search(event.target.value);
      console.log("RESULTS:",res)
      const stocksData:any[] = []
      res.forEach((data: any) => {
        stocksData.push(data.item);
      });
      this.filteredStocks = JSON.parse(JSON.stringify(stocksData));
    } else {
      this.filteredStocks = []
    }
  }
  
  stockList() {
    this.stockService.Stocks().then((res) => {
      res.forEach((element: any) => {
        this.stocks.push({
          ...element.data(),
          id: element.id,
        });
      });
    }).finally(() => {this.loading=false});
  }

  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  
  pinFormatter(value: number) {
    return `${value} pcs`;
  }


  log(event:any){
    console.log(event)
    this.lower = event.detail.value.lower;
    this.upper = event.detail.value.upper;
  }

  chipChange(){
    this.color = !(this.color)
    console.log(this.color)
  }
}
