import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, increment, setDoc, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { query, where } from '@firebase/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  storage = getStorage();

  constructor(public fs: Firestore) {
  }

  generateId() {
    return Math.floor(Math.random() * 100000000000000000);
  }

  updateCartProductQuantity(userid: string, cartId: string, mode: 'increase' | 'decrease' = 'increase', value: number = 1) {
    if (mode === 'increase') {
      return updateDoc(doc(this.fs, `${urls.users}${userid}${urls.cart}${cartId}`), { cartQuantity: increment(value) });
    } else {
      return updateDoc(doc(this.fs, `${urls.users}${userid}${urls.cart}${cartId}`), { cartQuantity: increment(-value) }
      );
    }
  }

  userCart(USER_ID: any, data: any) {
    const cartId = this.generateId()
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return setDoc(doc(this.fs, `${userIDUrl}${urls.cart}${cartId}`), { ...data, cartId: cartId, cartQuantity: 1 })
  }

  async upload(
    path: string,
    file: File | ArrayBuffer | Blob | Uint8Array
  ): Promise<any> {

    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        await task;
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (e: any) {
        console.error(e);
        return e;
      }
    } else {
      // handle invalid file
      return false;
    }
  }

  public billing(USER_ID: any, data: any) {
    const billingUrl = urls.user.replace('{USER_ID}', USER_ID,);
    this.dailySales(data);
    this.mainSales(data)
    return addDoc(collection(this.fs, billingUrl, urls.billing), data)

  }

  public sales() {
    return getDocs(collection(this.fs, urls.billing))
  }

  // Public
  public allSales() {
    return getDocs(collection(this.fs, urls.billing))
  }

  getSales(id){
    return getDoc(doc(this.fs, urls.billing+'/'+id))
  }

  public mainSales(data) {
    return addDoc(collection(this.fs, urls.billing), data)
  }

  // Contact us
  public contactUs(data) {
    return addDoc(collection(this.fs, urls.contactUs), data);
  }

  // Sales Charts 
  public async dailySales(data: any,) {
    const date = new Date();
    const todayData = await getDocs(query(collection(this.fs, urls.sales), where('date', '==', date.toLocaleDateString())))
    if (todayData.docs.length > 0) {
      updateDoc(doc(this.fs, urls.sale + '/' + todayData.docs[0].id), { sales: increment(1) })
    }
    else {
      addDoc(collection(this.fs, urls.sales), { sales: 1, date: date.toLocaleDateString() })

    }
  }

  public getDailySales() {
    return getDocs(collection(this.fs, urls.sales))
  }

  public getModals(){
    return getDocs(collection(this.fs, 'modals'))
  }

  public getModal(MODAL_ID){
    const editModalUrl = urls.modal.replace('{MODAL_ID}', MODAL_ID);
    return getDoc(doc(this.fs, editModalUrl))
  }

  public addModal(data:any){
    return addDoc(collection(this.fs, 'modals'),data)
  }

  public addUnit(data:any){
    return addDoc(collection(this.fs, 'units'), data)
  }

  public getUnits(){
    return getDocs(collection(this.fs, 'units'))
  }


  public addWarehouse(data){
    return addDoc(collection(this.fs, 'warehouses'), data)
  }

  getWarehouses(){
    return getDocs(collection(this.fs, 'warehouses'))
  }
}
