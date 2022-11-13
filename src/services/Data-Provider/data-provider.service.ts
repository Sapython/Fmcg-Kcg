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
  public loading:boolean = false;
  constructor() { }
}
