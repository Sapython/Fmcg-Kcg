import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private fs: Firestore) { }

  generateId() {
    return Math.floor(Math.random() * 100000000000000000);
  }

  public  addStock(data: any) {
    const id = this.generateId()
    return setDoc(doc(this.fs, urls.stocks + id), { ...data, id: id });
     
  }

  public editStock(STOCK_ID: any, data: any) {
    const editStockUrl = urls.stock.replace('{STOCK_ID}', STOCK_ID);
    return updateDoc(doc(this.fs, editStockUrl), data)
  }

  public getStock(STOCK_ID: any) {
    const getStockUrl = urls.stock.replace('{STOCK_ID}', STOCK_ID);
    // alert('Getting stock from '+getStockUrl)
    return getDoc(doc(this.fs, getStockUrl));
  }

  public Stocks() {
    return getDocs(collection(this.fs, urls.stocks));
  }




}
