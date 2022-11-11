import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { ThermalPrinterPlugin } from 'thermal-printer-cordova-plugin/src';

declare let ThermalPrinter: ThermalPrinterPlugin;
import { Plugins } from "@capacitor/core";
const { BluetoothSerial } = Plugins;

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
    // this.searchBluetoothPrinter().then((data) => {
    //   console.log(data)
    //   alert(JSON.stringify(data))
    // }, (err) => {
    //   alert('Error'+err)
    // })

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

  setPrinter(event) {
    this.currentPrinter = event.detail.value;
  }

  testPrint() {
    alert(JSON.stringify(this.currentPrinter))
    alert(this.currentPrinterType)
    alert(JSON.stringify( {
      type: this.currentPrinterType,
      id: this.currentPrinter.address,
      text: `[C]<u><font size='big'>Hello World</font></u>\n`,
    }))
    ThermalPrinter.printFormattedText(
      {
        type: this.currentPrinterType,
        id: this.currentPrinter.address,
        dotsFeedPaper:500,
        mmFeedPaper:80,
        text: "[C]<u><font size='big'>Hello World</font></u>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
      },
      ()=>{
        console.log('Successfully printed!');
      },
      (error)=>{
        console.error('Printing error', error);
        alert('Print error ' + error.error);
      }
    );
    // ThermalPrinter.requestPermissions(
    //   this.currentPrinter,
    //   (callback) => {
    //     alert('Got permission');
    //     ThermalPrinter.printFormattedText(
    //       {
    //         type: this.currentPrinterType,
    //         id: this.currentPrinter.id,
    //         text: `[C]<u><font size='big'>Hello World</font></u>' // new lines with "\n`,
    //       },
    //       function () {
    //         console.log('Successfully printed!');
    //       },
    //       function (error) {
    //         console.error('Printing error', error);
    //       }
    //     );
    //   },
    //   (error) => {
    //     alert(error.error);
    //   }
    // );
  }

  // searchBluetoothPrinter() {
  //   return this.btSerial.list();
  // }

  // connectToBluetoothPrinter(macAddress) {
  //   return this.btSerial.connect(macAddress);
  // }

  // disconnectBluetoothPrinter() {
  //   return this.btSerial.disconnect();
  // }

  // sendToBluetoothPrinter(macAddress, data_string) {
  //   this.connectToBluetoothPrinter(macAddress).subscribe(
  //     (_) => {
  //       this.btSerial.write(data_string).then(
  //         (_) => {
  //           this.disconnectBluetoothPrinter();
  //         },
  //         (err) => {
  //           alert('Error sending data to printer');
  //         }
  //       );
  //     },
  //     (err) => {
  //       alert('Error connecting to printer');
  //     }
  //   );
  // }
}
