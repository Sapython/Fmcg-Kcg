import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Camera } from '@capacitor/camera'
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  productId:string = ''
  interval:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private alertify:AlertsAndNotificationsService,private platform:Platform) {
    this.activatedRoute.params.subscribe(params=>{
      this.productId = params['productId'];
    })
  }
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }
  
  // Helper functions
  async showQrToast() {
    if (confirm('Do you want to ')) {
      window.open(this.scanResult, '_system', 'location=yes');
    }
  }

  reset() {
    this.scanResult = null;
  }

  stopScan() {
    this.scanActive = false;
  }

  ngOnInit() {
    Camera.checkPermissions().then(async (res)=>{
      if (res){
        const startScan = async () => { 
          // Check camera permission
          // This is just a simple example, check out the better checks below
          await BarcodeScanner.checkPermission({ force: true });
        
          // make background of WebView transparent
          // note: if you are using ionic this might not be enough, check below
          (document.querySelector('app-root') as HTMLElement).style.display = 'none';
          BarcodeScanner.hideBackground();
        
          const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
        
          // if the result has content
          if (result.hasContent) {
            console.log(result.content); // log the raw scanned content
            if (result.content==this.productId){
              // alert(window.location.href) 
              // alert('./product-details/'+this.productId);
              this.router.navigateByUrl('product-details/'+this.productId);
              await Haptics.impact({ style: ImpactStyle.Heavy });
              this.alertify.presentToast("Product Found");
              (document.querySelector('app-root') as HTMLElement).style.display = 'block';
              BarcodeScanner.showBackground();
              await BarcodeScanner.stopScan()
            }
          }
        };
        await startScan();
      }
    }).catch((err)=>{
      console.log(err)
      Camera.requestPermissions().then((res)=>{
        console.log(res)
      })
    })
    // this.startScan();
  }
  
}
