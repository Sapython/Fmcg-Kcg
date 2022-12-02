import {
  Component,
  OnInit,
} from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
// import { Chart, registerables } from 'chart.js';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { Camera } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Router } from '@angular/router';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  public sales: any[] = [];
  public allSales: any[] = [];
  public dailySales: any[] = [];
  loading: boolean = true;
  printers: any[] = [];
  barChart: any;
  validIds: string[] = [];
  stocksIds: string[] = [];
  purchaseIds: string[] = [];
  totalStocks: number = 0;
  totalSales: number = 0;
  mostSales: any[] = [];
  constructor(
    public dataProvider: DataProviderService,
    public dataBaseService: DataBaseService,
    private router: Router,
    private alertify: AlertsAndNotificationsService
  ) {
  }

  ngOnInit() {
    this.getDailySales();
    this.allSalesHistory();
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  }

  getCounters(){
    this.totalSales = 0;
    this.totalStocks = 0;
    this.dataBaseService.getCounters().then((res) => {
      
    })
  }

  public mySalesHistory() {
    return this.dataBaseService
      .sales()
      .then((res) => {
        res.forEach((element: any) => {
          this.sales.push({
            ...element.data(),
            id: element.id,
          });
        });
        console.log(this.sales);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public allSalesHistory() {
    return this.dataBaseService
      .allSales()
      .then((res) => {
        res.forEach((element: any) => {
          this.mostSales.push({
            ...element.data(),
            id: element.id,
          });
        });
        console.log(this.allSales);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public getDailySales() {
    return this.dataBaseService
      .getDailySales()
      .then((res) => {
        res.forEach((element: any) => {
          this.dailySales.push({
            ...element.data(),
            id: element.id,
          });
        });
        console.log(this.dailySales);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  getValidIds() {
    this.dataBaseService.getPurchases().then((res) => {
      this.validIds = []
      this.stocksIds = []
      this.purchaseIds = []
      res.forEach((element: any) => {
        element.data().purchases.forEach((purchase) => {
          // this.validIds.push(...purchase.items);
          purchase.items.forEach((item) => {
            this.validIds.push(item.split('|')[0]);
            this.stocksIds.push(item.split('|')[1]);
            this.purchaseIds.push(element.id);
          });
        });
      });
      console.log('this.validIds', this.validIds);
      console.log('this.purchaseIds', this.stocksIds);
    });
  }

  globalSearch() {
    this.getValidIds();
    // this.router.navigateByUrl('product-details/' + '49052825038959470');
    Camera.checkPermissions()
      .then(async (res) => {
        if (res) {
          const startScan = async () => {
            // Check camera permission
            // This is just a simple example, check out the better checks below
            await BarcodeScanner.checkPermission({ force: true });

            // make background of WebView transparent
            // note: if you are using ionic this might not be enough, check below
            (document.querySelector('app-root') as HTMLElement).style.display =
              'none';
            BarcodeScanner.hideBackground();

            const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

            // if the result has content
            if (result.hasContent && this.validIds.includes(result.content)) {
              console.log('result.content', result.content);
              // alert(result.content); // log the raw scanned content
              const stockId =
                this.stocksIds[this.validIds.indexOf(result.content)];
              const purchaseId = this.purchaseIds[this.validIds.indexOf(result.content)];
              console.log('purchaseId', stockId);
              (
                document.querySelector('app-root') as HTMLElement
              ).style.display = 'block';
              BarcodeScanner.showBackground();
              await BarcodeScanner.stopScan();
              this.dataProvider.purchaseProductId = result.content;
              this.dataProvider.purchaseId = purchaseId;
              this.router.navigateByUrl('product-details/' + stockId);
              setTimeout(() => {
                location.reload();
              }, 500);
              await Haptics.impact({ style: ImpactStyle.Heavy });
              this.alertify.presentToast('Product Found');
            }
          };
          await startScan();
        }
      })
      .catch((err) => {
        console.log(err);
        Camera.requestPermissions().then((res) => {
          console.log(res);
        });
      });
    // this.startScan();
  }
}
