import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0,[Validators.required]),
  });

  constructor(
    private stock: StocksService,
    public user: UserService,
    public dataProvider: DataProviderService,
    public dataBase: DataBaseService,
    private alertify: AlertsAndNotificationsService,
    public router: Router
  ) {}

  ngOnInit() {
    this.dataBase.getModals().then((res) => {
      this.modals = [];
      res.forEach((item) => {
        this.modals.push({ ...item.data(), id: item.id });
      });
    });
  }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0];
      const url = await this.dataBase.upload('stock/' + file.name, file);
      this.url = url;
    }
  }

  async addStock() {
    if (confirm('Are you sure you want to add this stock?')) {
      this.dataProvider.loading = true;
      this.stock.addStock({...this.addstockForm.value,type:this.selectedModel.id,printables:this.selectedModel.printables,date:new Date()}).then((doc) => {
        this.alertify.presentToast('Stock Added Successfully');
        this.router.navigateByUrl('/'); 
      }).finally(() => {
        this.dataProvider.loading = false;
      });
    }
  }
  setModel(model: any) {
    let fields = [];
    model.fields.forEach((field) => {
      if (field.required) {
        var control = new FormControl('', [Validators.required]);
      } else {
        var control = new FormControl('');
      }
      this.addstockForm.addControl(field.name, control);
      fields.push({
        name: field.name,
        unit: field.unit,
        required: field.required,
        control: control,
      });
    });
    this.selectedModel = {...model,fields:fields};
  }
}
