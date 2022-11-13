import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { SellerUtilsService } from 'src/services/SellerUtils/seller-utils.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.page.html',
  styleUrls: ['./add-purchase.page.scss'],
})
export class AddPurchasePage implements OnInit {

  fields: any[] = [];
  units: any[] = [];

  public addModalForm: FormGroup = new FormGroup({
    name: new FormControl('test'),
    quantity: new FormControl('test'),
    searchText: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
  });


  public containers = [];
  public textIsempty: boolean = false
  public data = ['Rohan', 'Mohan', 'Sohan', 'Ranjnikant'];
  public results = [...this.data];
  products = []
  modals = []

  constructor(private seller: SellerUtilsService, private databaseService: DataBaseService, private dataProvider: DataProviderService, private alertify: AlertsAndNotificationsService) { }

  ngOnInit() {

    this.databaseService.getModals().then((res) => {
      this.modals = []
      res.forEach((item) => {
        this.modals.push({ ...item.data(), id: item.id })
      })
    })
  }



  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    this.textIsempty = true;
  }


  setValue(searchText: string) {
    this.textIsempty = false;
    this.addModalForm.controls["searchText"].setValue(searchText);
  }



  addPurchase() {
    this.dataProvider.loading = true;
    const arr = [];

    this.fields.forEach((field) => {

      arr.push({
        model: field.model.value,
        quantity: field.quantity.value
      });
    })
    const data = {
      ...this.addModalForm.value,
      items: arr
    }
    this.seller.addPurchase(data).then((res: any) => {
      this.alertify.presentToast('Modal Added Successfully')
      // this.modalOpen = false;
      this.ngOnInit();
    }).catch((err) => {
      this.alertify.presentToast(err.message, 'error')
    }).finally(() => {
      this.dataProvider.loading = false;
    })
    console.log(data, this.fields)
  }





  addField() {
    const modelControl = new FormControl('', [Validators.required])
    const quantityControl = new FormControl('', [Validators.required])
    this.fields.push({
      model: modelControl,
      quantity: quantityControl,
    })
  }

}


