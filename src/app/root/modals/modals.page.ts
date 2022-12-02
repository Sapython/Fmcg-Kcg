import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {
  modalOpen:boolean = false;
  unitModal:boolean = false;
  fields:any[] = []
  modals: any[] = []
  units:any[] = [
    {
      name:'Text',
      value:'text'
    },
    {
      name:'Number',
      value:'number'
    },
    {
      name:'Date',
      value:'date'
    },
    {
      name:'Time',
      value:'time'
    },
    {
      name:'Select',
      value:'select'
    },
    {
      name:'Checkbox',
      value:'checkbox'
    },
    {
      name:'Radio',
      value:'radio'
    },
    {
      name:'File',
      value:'file'
    },
    {
      name:'Email',
      value:'email'
    },
    {
      name:'Phone',
      value:'tel'
    },
    {
      name:'Link',
      value:'url'
    },
  ]
  addUnitForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.maxLength(200)]),
  });
  addModalForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.maxLength(200)]),
  })
  constructor(private databaseService:DataBaseService,public dataProvider:DataProviderService,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() {
    this.refresh()
    this.dataProvider.modalUpdated.subscribe((res)=>{
      this.refresh()
    })
  }

  refresh(event?:any){
    this.dataProvider.loading = true;
    this.databaseService.getModals().then((res)=>{
      // this.modals = res
      this.modals = []
      res.forEach((item)=>{
        this.modals.push({...item.data(),id:item.id})
      })
      if(event){
        event.target.complete();
      }
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }

  addUnit(){
    this.dataProvider.loading = true;
    this.databaseService.addUnit(this.addUnitForm.value).then((res:any)=>{
      console.log(res)
      this.alertify.presentToast('Unit Added Successfully')
      this.unitModal = false;
      this.ngOnInit();
    }).catch((err)=>{
      this.alertify.presentToast(err.message,'error')
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }

  addModal(){
    console.log(this.fields)
    this.dataProvider.loading = true;
    const data = {
      ...this.addModalForm.value,
    }
    let fieldsData = []
    let printables:string[] = []
    this.fields.forEach((field)=>{
      // data[field.name.value] = field.unit.value;
      if(field.printable.value){
        printables.push(field.name.value)
      }
      fieldsData.push({
        name:field.name.value,
        unit:field.unit.value
      })
    })
    data.fields = fieldsData;
    data.printables = printables;
    this.databaseService.addModal(data).then((res:any)=>{
      this.alertify.presentToast('Modal Added Successfully')
      this.modalOpen = false;
      this.ngOnInit();
    }).catch((err)=>{
      this.alertify.presentToast(err.message,'error')
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }
  addField(){
    const nameControl = new FormControl('',[Validators.required])
    const unitControl = new FormControl('',[Validators.required])
    this.fields.push({
      name: nameControl,
      unit:unitControl,
      printable:new FormControl(false)
    })
  }

}
