import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public LoggedInUser:any;
  public user:any;
  public cartData:any[] = [];
  public product:any;
  constructor() { }
}
