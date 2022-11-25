import { Injectable } from '@angular/core';
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
  public purchaseProductId:string = "";
  public purchaseId:string = "";
  constructor() { }
}
