import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { increment } from '@firebase/firestore';
import { IonSlides } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { PrintingService } from 'src/services/printing.service';
import { SellerUtilsService } from 'src/services/SellerUtils/seller-utils.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.page.html',
  styleUrls: ['./add-purchase.page.scss'],
})
export class AddPurchasePage implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  fields: any[] = [];
  units: any[] = [];
  imageVisible: boolean = true;
  sliderOptions: any = {
    allowTouchMove: false,
  };
  currentPurchaseRef: any;
  purchaseData: any;
  public addPurchaseForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    warehouse: new FormControl('',[Validators.required]),
  });

  public containers = [];
  public textIsempty: boolean = false;
  public data = ['Rohan', 'Mohan', 'Sohan', 'Ranjnikant'];
  public results = [...this.data];
  products = [];
  modals = [];
  warehouses: any[] = [];

  constructor(
    private seller: SellerUtilsService,
    private databaseService: DataBaseService,
    private dataProvider: DataProviderService,
    private alertify: AlertsAndNotificationsService,
    private router: Router,
    private printingService: PrintingService
  ) {}

  ngOnInit() {
    this.databaseService.getModals().then((res) => {
      this.modals = [];
      res.forEach((item) => {
        this.modals.push({ ...item.data(), id: item.id });
      });
    });
    this.databaseService.getWarehouses().then((res) => {
      this.warehouses = [];
      res.forEach((item) => {
        this.warehouses.push({ ...item.data(), id: item.id });
      });
    });
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    this.textIsempty = true;
  }

  setValue(searchText: string) {
    this.textIsempty = false;
    this.addPurchaseForm.controls['searchText'].setValue(searchText);
  }

  addPurchase() {
    if (this.addPurchaseForm.valid && confirm('Are you sure you want to add this purchase?')) {
      this.imageVisible = false;
      this.slides.slideNext();
      this.dataProvider.loading = true;
      this.seller
        .addPurchase({ ...this.addPurchaseForm.value, purchases: [], date: new Date(), warehouses:[this.addPurchaseForm.value.warehouse.id] })
        .then((res: any) => {
          this.purchaseData = { ...this.addPurchaseForm.value, purchases: [],date: new Date()  };
          this.currentPurchaseRef = res;
          console.log('Purchase added', res);
          this.alertify.presentToast('Modal Added Successfully');
        })
        .catch((err) => {
          this.alertify.presentToast(err.message, 'error');
        })
        .finally(() => {
          this.dataProvider.loading = false;
        });
    } else {
      this.alertify.presentToast('Purchase not added because of invalid data or cancelled request.');
    }
  }

  addField() {
    const modelControl = new FormControl('', [Validators.required]);
    const quantityControl = new FormControl('', [Validators.required]);
    this.fields.push({
      model: modelControl,
      quantity: quantityControl,
      matchingItems: [],
      disabled: false,
    });
  }
  updatePurchase() {
    this.databaseService
      .updatePurchase(this.currentPurchaseRef.id, this.purchaseData)
      .catch((res) => {
        this.alertify.presentToast(res.message, 'error');
        console.error(res);
      });
  }

  getMatchingItems(field) {
    console.log(this.currentPurchaseRef.id);
    this.purchaseData.purchases.push({
      model: field.model.value.id,
      items: [],
    });
    console.log('NEW DATA', this.purchaseData);
    this.updatePurchase();
    this.databaseService.getMatchingItems(field.model.value.id).then((res) => {
      console.log('Got something', res.docs);
      field.matchingItems = [];
      res.forEach((item) => {
        field.matchingItems.push({
          ...item.data(),
          productId: item.id,
          quantity: 0,
        });
      });
      console.log('Fields', field.matchingItems);
    });
  }

  addItem(item, field) {
    console.log('ADDING HERE', item, field);
    this.dataProvider.loading = true;
    field.disabled = true;
    this.databaseService
      .addPurchaseItem(this.currentPurchaseRef.id, item)
      .then((res) => {
        this.purchaseData.purchases.forEach((purchase, index) => {
          if (field.model.value.id == purchase.model) {
            this.purchaseData.purchases[index].items.push(res.id+'|'+item.id);
          }
        });
        this.updatePurchase();
        this.databaseService.updateStock(item.id,{
          quantity: increment(1),
        })
        item.quantity++;
        this.printLabel({ ...item, qrId: res.id });
        this.alertify.presentToast('Item Added Successfully');
      })
      .catch((err) => {
        this.alertify.presentToast(err.message, 'error');
        console.error(err);
      })
      .finally(() => {
        this.dataProvider.loading = false;
      });
  }

  removeItem(item, field) {
    if (item.quantity > 0) {
      this.dataProvider.loading = true;
      this.databaseService
        .removePurchaseItem(this.currentPurchaseRef.id, item)
        .then((res) => {
          this.purchaseData.purchases.forEach((purchase, index) => {
            if (field.model.value.id == purchase.model) {
              this.purchaseData.purchases[index].items.splice(
                this.purchaseData.purchases[index].items.indexOf(
                  item.productId
                ),
                1
              );
            }
          });
          this.updatePurchase();
          this.databaseService.updateStock(item.id,{
            quantity: increment(-1),
          })
          item.quantity--;
          this.alertify.presentToast('Item Removed Successfully');
        })
        .catch((err) => {
          this.alertify.presentToast(err.message, 'error');
          console.error(err);
        })
        .finally(() => {
          this.dataProvider.loading = false;
        });
    }
  }

  printLabel(item) {
    const labels: string[] = [];
    const qrData = item.qrId;
    item.printables.forEach((printable) => {
      labels.push(printable + ': ' + item[printable]);
    });
    console.log('labels, qrData', labels, qrData);
    this.printingService.printLabel(labels, qrData);
    // this.printingService.printLabel(labels, qrData);
    // this.printingService.printLabel(labels, qrData);
    // this.printingService.printLabel(labels, qrData);
  }
  finalizePurchase() {
    this.dataProvider.loading = true;
    this.databaseService
      .finalizePurchase(this.currentPurchaseRef.id)
      .then((res) => {
        this.alertify.presentToast('Purchase Finalized Successfully');
        this.slides.slideNext();
      })
      .catch((err) => {
        this.alertify.presentToast(err.message, 'error');
        console.error(err);
      })
      .finally(() => {
        this.dataProvider.loading = false;
      });
  }
  
}
