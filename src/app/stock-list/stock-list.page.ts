import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/services/Stock/stocks.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.page.html',
  styleUrls: ['./stock-list.page.scss'],
})
export class StockListPage implements OnInit {

  public stocks:any[] = []
  constructor(private stock:StocksService) { }

  ngOnInit() {
    this.stockList()
  }

  stockList() {
    return this.stock.Stocks().then((res) => {
      res.forEach((element: any) => {
        this.stocks.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.stocks);
    });
  }
}
