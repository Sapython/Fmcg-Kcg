import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class SellerUtilsService {

  constructor(public fs: Firestore) { }


  // POST
  public addPurchase(data) {
    return addDoc(collection(this.fs, urls.purchase), data);
  }



}
