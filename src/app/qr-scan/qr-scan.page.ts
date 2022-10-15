import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsQR from 'jsqr';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
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
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private alertify:AlertsAndNotificationsService) {
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
  async startScan() {
    // Not working on iOS standalone mode!
    console.log("DEBUG")
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });
    console.log(stream)
    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.videoElement.play();
    this.interval = setInterval(()=>{
      this.scan()
    },300)
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
   
      this.canvasContext.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(0,0,this.canvasElement.width,this.canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
      console.log(code)
      
      if (code) {
        if (code.data==this.productId){
          this.router.navigate(['/product-details/',this.productId]);
          await Haptics.impact({ style: ImpactStyle.Heavy });
          this.alertify.presentToast("Product Found");
          clearInterval(this.interval)
        }
      }
      //   if (this.scanActive) {
      //     requestAnimationFrame(this.scan.bind(this));
      //   }
      // }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }
  captureImage() {
    this.fileinput.nativeElement.click();
  }

  handleFile(files: any) {
    files = files.files;
    const file = files.item(0);
    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img,0,0,this.canvasElement.width,this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(0,0,this.canvasElement.width,this.canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {inversionAttempts: 'dontInvert' });
      console.log(code)
      if (code) {
        this.scanResult = code.data;
        this.showQrToast();
      }
    };
    img.src = URL.createObjectURL(file);
  }

  ngOnInit() {
    this.startScan();
  }
  back(){
    window.history.back();
  }
}
