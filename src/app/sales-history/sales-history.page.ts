import { Component, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { UserService } from 'src/services/User/user.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.page.html',
  styleUrls: ['./sales-history.page.scss'],
})
export class SalesHistoryPage implements OnInit {
  public userId:any;
  public sales:any[]=[];
  public multiSales:any[]=[]
  filteredsales: any[] = [];
  searchDebounceTimer:any;
  loading:boolean = true;
  constructor(public dataBase:DataBaseService, public user:UserService, public dataProvider:DataProviderService,private platform:Platform,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() {
    this.salesHistory() 
  }
  debounceSearch(event:any){
    try {
      clearTimeout(this.searchDebounceTimer)
      this.searchDebounceTimer = setTimeout(() => {
        this.search(event);
      },500)
    } catch (error) {
    }
  }

  search(event: any) {

    if (event.target.value.length > 0) {
      let fuse = new Fuse(this.sales, {
        keys: [
          "Name"
        ],
      });
      const res = fuse.search(event.target.value);
      console.log("RESULTS:",res)
      const salesData:any[] = []
      res.forEach((data: any) => {
        salesData.push(data.item);
      });
      this.filteredsales = JSON.parse(JSON.stringify(salesData));
    } else {
      this.filteredsales = []
    }
  }

  async salesHistory(event?) {
    this.sales = []
    try {
	    const sales =  await this.dataBase.sales()
      const multiSales = await this.dataBase.getMultiItemSales()
      sales.forEach((element: any) => {
        if(element.data().status!='deleted'){
          this.sales.push({
            ...element.data(),
            id: element.id,
          });
        }
      });
      multiSales.forEach((element: any) => {
        if(element.data().status!='deleted'){
          this.multiSales.push({
            ...element.data(),
            id: element.id,
          });
        }
      })
      console.log(this.sales);
    } catch (error) {
      
    }
      
    if (event){
      event.target.complete();
    }
    this.loading=false
  }

  deletePurchase(id){
    if(confirm("Are you sure you want to delete this purchase?")){
      this.dataBase.deleteSales(id).then(()=>{
        this.salesHistory()
      })
    }
  }

  async exportSales(){
    // convert this.sales array to csv
    let data = ""
    this.sales.forEach((element:any)=>{
      data += `${element.Name},${element.Amount},${element.Date},${element.Type},${element.Description}\n`
    })
    // create a blob
    const blob = new Blob([data], { type: 'text/csv' });
    // create a link
    if (this.platform.is('capacitor')) {
      console.log('KCG Sales.csv')
      try {
        await Filesystem.writeFile({
          path: 'Download/KCG Sales.csv',
          data: data,
          encoding: Encoding.UTF8,
          directory: Directory.External,
          recursive: true
        });
        this.alertify.presentToast('File exported successfully');
      } catch (error) {
        Filesystem.mkdir({
          path: 'Download',
          directory: Directory.External
        })
        this.alertify.presentToast(error);
      }
      this.dataProvider.loading = false;
    } else {
      var encodedUri = encodeURI(data);
      var link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'my_data.csv');
      document.body.appendChild(link); // Required for FF
      link.click(); // This will download the data file named "my_data.csv".
      this.dataProvider.loading = false;
    }
  }

  addManualSales(){
    
  }

}
