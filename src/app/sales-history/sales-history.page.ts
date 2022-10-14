import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.page.html',
  styleUrls: ['./sales-history.page.scss'],
})
export class SalesHistoryPage implements OnInit {
  public userId:any;
  public sales:any[]=[]
  constructor(public dataBase:DataBaseService, public user:UserService) { }

  ngOnInit() {
    return this.user.getUserData.subscribe((res) => {
      this.userId = res?.uid; 
      this.salesHistory()
    });
    
  }


  salesHistory() {
    return this.dataBase.sales(this.userId).then((res) => {
      res.forEach((element: any) => {
        this.sales.push({
          ...element.data(),
          id: element.id,
        });
      });
      console.log(this.sales);
    });
  }

}
