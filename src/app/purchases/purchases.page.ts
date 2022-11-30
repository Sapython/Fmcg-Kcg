import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.page.html',
  styleUrls: ['./purchases.page.scss'],
})
export class PurchasesPage implements OnInit {
  purchases: any[] = [];
  constructor(
    private databaseService: DataBaseService,
    private platform: Platform,
    private alertify: AlertsAndNotificationsService,
    private dataProvider: DataProviderService,
    private detectorRef: ChangeDetectorRef
  ) {}
  stocks: any[] = [];
  isModalOpen: boolean = false;
  selectedPurchase: any;
  warehouses: any[] = [];
  ngOnInit() {
    this.purchases = [];
    this.getPurchases();
    this.getWarehouse();
  }

  async getWarehouse() {
    let data = await this.databaseService.getWarehouses();
    this.warehouses = [];
    data.forEach((warehouse) => {
      this.warehouses.push({ ...warehouse.data(), id: warehouse.id });
    });
  }

  async getPurchases() {
    let data = await this.databaseService.getPurchases();
    this.purchases = [];
    data.forEach((purchase: any) => {
      let purchaseData = { ...purchase.data(), id: purchase.id };
      let items = [];
      let stocks = [];
      purchaseData.purchases.forEach((element) => {
        items.push(...element.items);
        element.items.forEach((item) => {
          if (!stocks.includes(item.split('|')[1])) {
            stocks.push(item.split('|')[1]);
          }
        });
      });
      purchaseData.items = items;
      purchaseData.stocks = stocks;
      this.purchases.push(purchaseData);
    });
  }

  async export() {
    this.dataProvider.loading = true;
    let csvContent =
      [
        'Seller Name',
        'Seller Address',
        'Seller Phone Number',
        'Date',
        'Models',
        'Warehouse Name',
        'Warehouse Location',
        'Items Name',
        'Item Quantity',
      ].join(',') + '\n';
    let allData = [];
    for (const e of this.purchases) {
      let data = [
        e.name,
        e.address,
        e.phoneNumber,
        e.date.toDate().toLocaleString().replace(',', ' '),
        e.purchases.length,
        e.warehouse.name,
        e.warehouse.location,
        'Name',
        'Quantity',
      ];
      let items = [];
      let stocks = [];
      e.purchases.forEach((item) => {
        // items.push(item.split(''))
        item.items.forEach((item) => {
          items.push(item.split('|')[0]);
          stocks.push(item.split('|')[1]);
        });
      });
      let entries = [];
      // console.log('items,stocks', items, stocks);
      for (const item of stocks) {
        // console.log(
        //   'ENTRY checker',
        //   entries,
        //   entries.find((value) => {
        //     return value.id == item;
        //   })
        // );
        // console.log('item bl', item);
        if (
          entries.find((value) => {
            return value.id == item;
          }) == undefined
        ) {
          // alert("not found")
          let indexes = [];
          stocks.forEach((item2, index2) => {
            if (item == item2) {
              indexes.push(index2);
            }
          });
          let relatedItems = [];
          indexes.forEach((item3) => {
            relatedItems.push(items[item3]);
          });
          let index = this.stocks.findIndex((stock) => {
            return stock.id == item;
          });
          if (index != -1) {
            entries.push({
              id: item,
              stock: this.stocks[index],
              items: relatedItems,
            });
          } else {
            let stockData = await this.databaseService.getStock(item);
            entries.push({
              id: item,
              stock: stockData.data(),
              items: relatedItems,
            });
            this.stocks.push({ ...stockData.data(), id: stockData.id });
          }
        }
      }
      e.entries = entries;
      console.log('this.purchaseData', e);
      let mainData = ['\n' + data.join(',')];
      entries.forEach((entry) => {
        mainData.push(
          ',,,,,,,,' +
            [entry.stock.name.replace(',', ' '), entry.items.length].join(',')
        );
      });
      mainData.push(
        ',,,,,,,,' + 'Total,' + entries.reduce((a, b) => a + b.items.length, 0)
      );
      console.log('mainData', mainData);
      allData.push(mainData.join('\n'));
    }
    // Filesystem.mkdir('')
    if (this.platform.is('capacitor')) {
      await Filesystem.writeFile({
        path: 'Purchase' + new Date().toLocaleString() + '.csv',
        data: csvContent + '\n' + allData,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: true,
      });
      this.alertify.presentToast('File exported successfully');
      this.dataProvider.loading = false;
    } else {
      var encodedUri = encodeURI(csvContent + '\n' + allData);
      var link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'my_data.csv');
      document.body.appendChild(link); // Required for FF
      link.click(); // This will download the data file named "my_data.csv".
      this.dataProvider.loading = false;
    }
  }

  seePurchase() {}

  deletePurchase() {}

  transferPurchase(purchase: any) {
    this.selectedPurchase = purchase;
    this.detectorRef.detectChanges();
    this.dataProvider.loading = true;
    setTimeout(() => {
      console.log('this.selectedPurchase', this.selectedPurchase);
      this.isModalOpen = true;
      this.dataProvider.loading = false;
    }, 500);
  }

  setWarehouse(selectedPurchase: any, warehouse: any) {
    if (selectedPurchase) {
      this.dataProvider.loading = true;
      console.log('selectedPurchase.id', selectedPurchase.id);
      this.databaseService
        .updatePurchase(selectedPurchase.id, { warehouse: warehouse })
        .then(() => {
          this.alertify.presentToast('Purchase transferred successfully');
          this.isModalOpen = false;
          this.selectedPurchase = null;
          this.getPurchases();
        })
        .catch((err) => {
          this.alertify.presentToast(
            'Error occured while transferring purchase'
          );
        })
        .finally(() => {
          this.dataProvider.loading = false;
        });
    } else {
      console.log('selectedPurchase is null');
      this.alertify.presentToast('Error occured while transferring purchase');
    }
  }

  async refresh(event) {
    await this.getPurchases();
    event.target.complete();
  }
}
