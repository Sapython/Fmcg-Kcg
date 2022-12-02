import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DataBaseService } from 'src/services/dataBase/data-base.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  fields:any[] = []
  addModalForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.maxLength(200)]),
  })
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
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DataBaseService,public dataProvider:DataProviderService,private alertify:AlertsAndNotificationsService) {
    this.activatedRoute.params.subscribe((params) => {
      if(params.modalId){
        console.log(params.modalId)
        if(params.modalId == this.dataProvider.routeData.id){
          console.log("Same",params.modalId,this.dataProvider.routeData)
        }
      }
    })
  }

  ngOnInit() {
    // patch values and create form controls
    this.addModalForm.patchValue(this.dataProvider.routeData)
    this.dataProvider.routeData.fields.forEach((key) => {
      console.log(key)
      this.addField(key.name,key.unit.value,this.dataProvider.routeData.printables.includes(key.name))
    })
    console.log(this.fields)
  }

  updateModal(){
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
        unit: this.units.find((unit) => unit.value == field.unit.value)
      })
    })
    data.fields = fieldsData;
    data.printables = printables;
    console.log(data)
    this.databaseService.updateModal(this.dataProvider.routeData.id,data).then((res:any)=>{
      this.dataProvider.modalUpdated.next(true)
      this.alertify.presentToast('Modal Updated Successfully')
      window.history.back()
    }).catch((err)=>{
      this.alertify.presentToast(err.message,'error')
    }).finally(()=>{
      this.dataProvider.loading = false;
    })
  }
  addField(name?:string,unit?:any,printable?:boolean){
    const nameControl = new FormControl(name,[Validators.required])
    const unitControl = new FormControl(unit,[Validators.required])
    this.fields.push({
      name: nameControl,
      unit:unitControl,
      printable:new FormControl(printable || false)
    })
    unitControl.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }
}
