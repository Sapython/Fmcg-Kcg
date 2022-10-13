import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.page.html',
  styleUrls: ['./add-stock.page.scss'],
})
export class AddStockPage implements OnInit {

  public userId: any;
  public addstockForm: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Quality: new FormControl(''),
    Shade: new FormControl(''),
    Backing: new FormControl(''),
    Length: new FormControl(''),
    Width: new FormControl(''),
    Thickness: new FormControl(''),
    Quantity: new FormControl(''),
    StorageLocation: new FormControl(''),
  });

  constructor(private stock: StocksService, public user: UserService, public dataProvider: DataProviderService) { }

  ngOnInit() {
    return this.user.getUserData.subscribe((res) => {
      this.userId = res?.uid; this.getUser();
    });
  }

  private getUser() {
    this.user.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); });
  }

  addStock(){
    this.stock.addStock(this.addstockForm.value);
  }





}
