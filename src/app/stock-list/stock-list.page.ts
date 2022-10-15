import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/services/Stock/stocks.service';

import Fuse from 'fuse.js';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.page.html',
  styleUrls: ['./stock-list.page.scss'],
})
export class StockListPage implements OnInit {
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
      console.log(this.stocks);
    }).finally(() => {this.loading=false});
  }
}
