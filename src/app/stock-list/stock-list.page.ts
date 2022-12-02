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
  public color: any;
  lower: number = 0;
  upper: number = 0;
  filters: any[] = [];
  stocks: any[] = [];
  filteredStocks: any[] = [];
  searchDebounceTimer: any;
  ignoredFields = ['id', 'name','img'];
  constructor(private stockService: StocksService) {}
  loading: boolean = true;
  ngOnInit() {
    this.stockList();
  }
  async refresh(event) {
    await this.stockList();
    event.target.complete();
  }

  debounceSearch(event: any) {
    try {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => {
        this.search(event);
      }, 500);
    } catch (error) {}
  }

  search(event: any) {
    console.log('FIRED:', event);
    if (event.target.value.length > 0) {
      let fuse = new Fuse(this.stocks, {
        keys: [
          'name',
        ],
      });
      const res = fuse.search(event.target.value);
      console.log('RESULTS:', res);
      const stocksData: any[] = [];
      res.forEach((data: any) => {
        stocksData.push(data.item);
      });
      this.filteredStocks = JSON.parse(JSON.stringify(stocksData));
    } else {
      this.filteredStocks = [];
    }
  }

  async stockList() {
    const res = await this.stockService.Stocks();
    this.stocks = [];
    res.forEach((element: any) => {
      this.stocks.push({
        ...element.data(),
        id: element.id,
      });
    });
    this.loading = false;
    let itemAttributes = {};
    this.stocks.forEach((item) => {
      for (var key of Object.keys(item)) {
        if (this.ignoredFields.includes(key) || Number(item[key])) {
          continue;
        }
        if (itemAttributes[key]) {
          itemAttributes[key].counter++;
          // check if item is already in the array
          var found = false;
          itemAttributes[key].items.forEach((itemVal: any) => {
            if (itemVal.value == item[key]) {
              found = true;
            }
          });
          if (!found) {
            itemAttributes[key].items.push({
              value: item[key],
              key: key,
              counter: 1,
              active: false,
            });
          }
        } else {
          itemAttributes[key] = {
            counter: 1,
            title: key,
            value: item[key],
            items: [{ value: item[key], active: false, counter: 1, key: key }],
            active: false,
          };
        }
      }
    });
    console.log("itemAttributes",itemAttributes);
    // sort itemAttributes by key name
    let sortedItemAttributes = {};
    Object.keys(itemAttributes)
      .sort()
      .forEach(function (key) {
        sortedItemAttributes[key] = itemAttributes[key];
      });

    let filteredKeys = [];
    Object.values(itemAttributes).forEach((item: any) => {
      if (item.counter > 2 && item.counter < 10) {
        filteredKeys.push(item);
      }
    });
    console.log(filteredKeys);
    this.filters = filteredKeys;
  }

  filterOptions() {
    let filteredStocks = [];
    this.filters.forEach((filter: any) => {
      filter.items.forEach((item: any) => {
        if (item.active) {
          filteredStocks.push(item);
        }
      });
    });
    console.log(filteredStocks);
    if (this.filteredStocks.length > 0) {
      this.filteredStocks = this.filteredStocks.filter((stock: any) => {
        let found = false;
        filteredStocks.forEach((filter: any) => {
          if (stock[filter.key].toLowerCase() == filter.value.toLowerCase()) {
            found = true;
          }
        });
        return found;
      });
    } else {
      this.filteredStocks = this.stocks.filter((stock: any) => {
        let found = false;
        filteredStocks.forEach((filter: any) => {
          if (stock[filter.key].toLowerCase() == filter.value.toLowerCase()) {
            found = true;
          }
        });
        return found;
      });
    }
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

  log(event: any) {
    console.log(event);
    this.lower = event.detail.value.lower;
    this.upper = event.detail.value.upper;
  }

  chipChange() {
    this.color = !this.color;
    console.log(this.color);
  }
}
