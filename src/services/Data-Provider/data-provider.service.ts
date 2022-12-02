import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserStructure } from 'src/structures/user.structure';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public LoggedInUser:boolean;
  public user:UserStructure;
  public cartData:any[] = [];
  public product:any;
  public routeData:any;
  public loading:boolean = false;
  public purchaseProductId:string = "7Wbwwoe2HVZWPJZXzeFQ";
  public purchaseId:string = "EEA0bRQ7oChnktgYZ6Xj";
  public modalUpdated:Subject<any> = new Subject();
  constructor() { }
}
