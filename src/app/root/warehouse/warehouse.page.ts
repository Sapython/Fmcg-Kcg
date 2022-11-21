import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss'],
})
export class WarehousePage implements OnInit {

  constructor(private databaseService:DataBaseService,public dataProvider:DataProviderService,private alertify:AlertsAndNotificationsService,private router:Router) { }
  modalOpen: boolean = false;
  addWarehouseForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    capacity: new FormControl(''),
    description: new FormControl(''),
  });
  warehouses:any[] = [];
  ngOnInit() {
    this.dataProvider.loading = true;
    this.databaseService.getWarehouses().then((data:any)=>{
      this.warehouses = [];
      data.forEach((element:any) => {
        this.warehouses.push({...element.data(),id:element.id});
      });
    }).catch((err)=>{
      this.alertify.presentToast('Error fetching warehouses','error');
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }

  addWarehouse(){
    if(this.addWarehouseForm.valid){
      this.dataProvider.loading = true;
      this.databaseService.addWarehouse(this.addWarehouseForm.value).then(()=>{
        this.alertify.presentToast('Warehouse added successfully');
        this.modalOpen = false;
        this.ngOnInit();
        this.addWarehouseForm.reset();
      }).catch((err)=>{
        console.log(err)
        this.alertify.presentToast('Error adding warehouse','error');
      }).finally(()=>{
        this.dataProvider.loading = false;
      });
    } else {
      alert('Invalid details')
    }
  }

  openDetail(){
    
  }

}
