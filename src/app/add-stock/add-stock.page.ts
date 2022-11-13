import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { StocksService } from 'src/services/Stock/stocks.service';
import { UserService } from 'src/services/User/user.service';
import QrCreator from 'qr-creator';
import { Router } from '@angular/router';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.page.html',
  styleUrls: ['./add-stock.page.scss'],
})
export class AddStockPage implements OnInit {
  public modalOpen: boolean = true;
  public modals: any[] = [];
  public selectedModel: any;
  public url: any;
  public file: any;
  public addstockForm: FormGroup = new FormGroup({
    Name: new FormControl('test'),
    Quality: new FormControl('random'),
    Shade: new FormControl('black'),
    Backing: new FormControl('red'),
    Length: new FormControl('24'),
    Width: new FormControl('12'),
    Thickness: new FormControl('2'),
    Quantity: new FormControl('1'),
    StorageLocation: new FormControl('Garage'),
    Price: new FormControl('4450'),
    id: new FormControl(''),
    img: new FormControl(''),
  });

  constructor(private stock: StocksService, public user: UserService, public dataProvider: DataProviderService, public dataBase: DataBaseService, private alertify: AlertsAndNotificationsService, public router: Router) { }

  ngOnInit() {
    this.dataBase.getModals().then((res) => {
      this.modals = []
      res.forEach((item) => {
        this.modals.push({ ...item.data(), id: item.id })
      })
      console.log(this.modals)
    })
    this.getModel()

  }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0]
      const url = await this.dataBase.upload('stock/' + file.name, file);
      this.url = url

    }
  }



  async addStock() {
    await this.uploadFile(this.file.target.files);
    this.addstockForm.value['img'] = this.url
    if (this.url) {
      this.stock.addStock(this.addstockForm.value).then((doc) => {
        this.alertify.presentToast('Stock Added Successfully');
        this.router.navigateByUrl("/")
      })
    }
  }


  public getModel() {
    const data = 'amnhQhPIjcDAL9jUSLjc';
    console.log(data)
    this.dataBase.getModal(data).then((res) => {
      this.selectedModel = res.data();
      console.log(this.selectedModel)
    })
  }





}
