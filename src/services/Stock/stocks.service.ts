import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private fs: Firestore) { }

  public addStock(data: any) {
    return addDoc(collection(this.fs, urls.stocks), data);
  }

  public editStock(STOCK_ID: any, data: any) {
    const editStockUrl = urls.stock.replace('{STOCK_ID}', STOCK_ID);
    return updateDoc(doc(this.fs, editStockUrl), data)
  }

  public getStock(STOCK_ID: any) {
    const getStockUrl = urls.stock.replace('{STOCK_ID}', STOCK_ID);
    return getDoc(doc(this.fs, getStockUrl));
  }
}
