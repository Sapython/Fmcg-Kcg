import { Component, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.page.html',
  styleUrls: ['./sales-history.page.scss'],
})
export class SalesHistoryPage implements OnInit {
  public userId:any;
  public sales:any[]=[];
  filteredsales: any[] = [];
  searchDebounceTimer:any;
  loading:boolean = true;
  constructor(public dataBase:DataBaseService, public user:UserService, public dataProvider:DataProviderService) { }

  ngOnInit() {
    this.salesHistory() 
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

    if (event.target.value.length > 0) {
      let fuse = new Fuse(this.sales, {
        keys: [
          "Name"
        ],
      });
      const res = fuse.search(event.target.value);
      console.log("RESULTS:",res)
      const salesData:any[] = []
      res.forEach((data: any) => {
        salesData.push(data.item);
      });
      this.filteredsales = JSON.parse(JSON.stringify(salesData));
    } else {
      this.filteredsales = []
    }
  }

  salesHistory() {
    return this.dataBase.sales(this.dataProvider.user["userId"]).then((res) => {
      res.forEach((element: any) => {
        this.sales.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.sales);
    }).finally(() => {this.loading=false});
  }

}
