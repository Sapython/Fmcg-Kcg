import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
// import { Chart, registerables } from 'chart.js';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { Camera } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Router } from '@angular/router';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { Chart, registerables } from 'chart.js';

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
  purchaseIds: string[] = [];
  // doughnutChart: Chart;
  // lineChart: Chart;

  constructor(
    public dataProvider: DataProviderService,
    public dataBaseService: DataBaseService,
    private router: Router,
    private alertify: AlertsAndNotificationsService
  ) {
    // Chart.register(...registerables);
  }

  ngOnInit() {
    this.getDailySales();
    this.allSalesHistory();
    // this.getValidIds()
    // this.mySalesHistory()
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    // const myChart = new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: [
    //       '10-10-12',
    //       '22-10-12',
    //       '22-10-12',
    //       '30-10-12',
    //       '3-11-12',
    //       '6-11-12',
    //     ],
    //     datasets: [
    //       {
    //         label: 'No. of Sales',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },
    // });
    // setTimeout(()=>{this.initPrinting()},50)
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
          this.allSales.push({
            ...element.data(),
            id: element.id,
          });
        });
        console.log(this.allSales);
      })
      .finally(() => {
        // alert("Loaded "+this.allSales.length)
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
      res.forEach((element: any) => {
        element.data().purchases.forEach((purchase) => {
          // this.validIds.push(...purchase.items);
          purchase.items.forEach((item) => {
            this.validIds.push(item.split('|')[0]);
            this.purchaseIds.push(item.split('|')[1]);
          });
        });
      });
      console.log('this.validIds', this.validIds);
      console.log('this.purchaseIds', this.purchaseIds);
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
              const purchaseId =
                this.purchaseIds[this.validIds.indexOf(result.content)];
              console.log('purchaseId', purchaseId);
              (
                document.querySelector('app-root') as HTMLElement
              ).style.display = 'block';
              BarcodeScanner.showBackground();
              await BarcodeScanner.stopScan();
              this.router.navigateByUrl('product-details/' + purchaseId);
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
