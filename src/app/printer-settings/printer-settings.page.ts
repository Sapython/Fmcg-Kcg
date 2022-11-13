import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { ThermalPrinterPlugin } from 'thermal-printer-cordova-plugin/src';

declare let ThermalPrinter: ThermalPrinterPlugin;
import { registerPlugin } from '@capacitor/core';


export interface PrinterIntegration {
  echo(): Promise<{ addresses: string }>;
  connectToPrinter(options: { address: string, type:'bt'|'ble' }): Promise<{ status: string }>;
  printLabel(): Promise<{ status: string }>;
  checkStatus(): Promise<{ status: string }>;
}

const PrinterIntegration = registerPlugin<PrinterIntegration>('PrinterIntegration');
export default PrinterIntegration;

@Component({
  selector: 'app-printer-settings',
  templateUrl: './printer-settings.page.html',
  styleUrls: ['./printer-settings.page.scss'],
})
export class PrinterSettingsPage implements OnInit {
  currentPrinter: any;
  currentPrinterType: 'bluetooth' | 'usb' = 'bluetooth';
  printers: any[] = [];
  loading: boolean = false;
  constructor(
    private alertify: AlertsAndNotificationsService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.loading = true;
    if (this.platform.is('capacitor')) {
      ThermalPrinter.listPrinters(
        { type: this.currentPrinterType },
        (printers) => {
          console.log(printers);
          this.printers = printers;
          this.loading = false;
        },
        (error) => {
          this.alertify.presentToast(error.error, 'error');
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
    }
  }

  checkStatus(){
    PrinterIntegration.checkStatus().then((data)=>{
      alert(data)
    })
  }
  setPrinter(event) {
    this.currentPrinter = event.detail.value;
  }
  printLabel(){
    PrinterIntegration.printLabel().then((data)=>{
      alert(data)
    })
  }
  connectBluetoothFour(){
    alert(this.currentPrinter.address)
    PrinterIntegration.connectToPrinter({ address: this.currentPrinter.address,type:'bt' }).then((data)=>{
      alert('Received')
      alert(data)
    })
  }
  connectBluetoothTwo() {
    alert(this.currentPrinter.address)
    PrinterIntegration.connectToPrinter({ address: this.currentPrinter.address,type:'ble' }).then((data)=>{
      alert('Received')
      alert(data)
    })
  }
}
