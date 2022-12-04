import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, increment, limit, orderBy, setDoc, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { query, where } from '@firebase/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  storage = getStorage();

  constructor(public fs: Firestore) {
    // console.log("Running")
    // getDocs(collection(this.fs, 'purchase')).then((data)=>{
    //   for(let document of data.docs){
    //     if (document.data().status != 'finalized') {
    //       continue
    //     }
    //     console.log("DAMMMNNN", document.id)
    //     document.data().purchases.forEach((item:any)=>{
    //       item.items.forEach((id:string)=>{
    //         updateDoc(doc(this.fs,'stocks/'+id.split('|')[1]), {quantity: increment(1)})
    //       })
    //     })
    //   }
    // })
    if(false){
      let totalQuantity = 0;
      getDocs(collection(this.fs, 'stocks')).then((data)=>{
        for(let document of data.docs){
          if (document.data().quantity) {
            totalQuantity += document.data().quantity
          }
        }
        updateDoc(doc(this.fs,'counters/counters'),{totalQuantity: totalQuantity})
      })
      let totalSales = 0;
      let totalNoSales = 0;
      getDocs(collection(this.fs, 'billing')).then((data)=>{
        for(let document of data.docs){
          if (document.data().price) {
            totalSales += (document.data().price)
          }
        }
        totalNoSales = data.docs.length
        updateDoc(doc(this.fs,'counters/counters'),{totalSales: totalSales, totalNoSales: totalNoSales})
      })
      let totalModals = 0;
      getDocs(collection(this.fs,'purchase')).then((data)=>{
        totalModals = data.docs.length
        updateDoc(doc(this.fs,'counters/counters'),{totalModals: totalModals})
      })
      let totalUsers = 0;
      getDocs(collection(this.fs,'users')).then((data)=>{
        totalUsers = data.docs.length
        updateDoc(doc(this.fs,'counters/counters'),{totalUsers: totalUsers})
      })
    }
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

  public getMultiItemSales(){
    return getDocs(collection(this.fs, 'multipartySales'))
  }

  // Public
  public allSales() {
    return getDocs(collection(this.fs, urls.billing))
  }

  public topSales(){
    return getDocs(query(collection(this.fs, 'billing'),limit(5),orderBy('date','desc')))
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

  addSales(data){
    return addDoc(collection(this.fs, 'billing'), data)
  }

  public addMultipartySales(data){
    return addDoc(collection(this.fs, 'multipartySales'), data)
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

  public updateModal(MODAL_ID: any, data: any) {
    const editModalUrl = urls.modal.replace('{MODAL_ID}', MODAL_ID);
    return updateDoc(doc(this.fs, editModalUrl), data);
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

  deleteWarehouse(id:string){
    return deleteDoc(doc(this.fs, 'warehouses/'+id))
  }

  getWarehouses(){
    return getDocs(collection(this.fs, 'warehouses'))
  }

  getMatchingItems(id:string){
    return getDocs(query(collection(this.fs, 'stocks'), where('type', '==', id)))
  }

  updatePurchase(id:string,data:any){
    return updateDoc(doc(this.fs, 'purchase/'+id), data)
  }

  addPurchaseItem(purchaseId:string,itemData:any){
    return addDoc(collection(this.fs, 'purchase/'+purchaseId+'/items'), itemData)
  }

  removePurchaseItem(purchaseId:string,itemId:string){
    return deleteDoc(doc(this.fs, 'purchase/'+purchaseId+'/items/'+itemId))
  }

  finalizePurchase(purchaseId:string){
    return updateDoc(doc(this.fs, 'purchase/'+purchaseId), {status:'finalized',endDate:new Date() })
  }

  getPurchases(){
    return getDocs(collection(this.fs, 'purchase'))
  }

  getPurchaseItem(purchaseId:string,itemId:string){
    return getDoc(doc(this.fs, 'purchase/'+purchaseId+'/items/'+itemId)) 
  }

  getPurchaseItems(purchaseId:string){
    return getDocs(collection(this.fs, 'purchase/'+purchaseId+'/items'))
  }

  getPurchase(purchaseId:string){
    return getDoc(doc(this.fs, 'purchase/'+purchaseId))
  }

  getStock(stockId:string){
    return getDoc(doc(this.fs, 'stocks/'+stockId))
  }

  updateStock(stockId:string,data:any){
    return updateDoc(doc(this.fs, 'stocks/'+stockId), data)
  }

  getStocks(){
    return getDocs(collection(this.fs, 'stocks'))
  }

  updatePurchaseItem(purchaseId:string,itemId:string,data:any){
    return updateDoc(doc(this.fs, 'purchase/'+purchaseId+'/items/'+itemId), data)
  }


  getMatchingWarehousePurchases(warehouseId:string){
    return getDocs(query(collection(this.fs, 'purchase'), where('warehouses', 'array-contains', warehouseId)))
  }

  deletePurchase(purchaseId:string){
    return updateDoc(doc(this.fs, 'purchase/'+purchaseId),{status:'deleted'})
  }

  deleteSales(salesId:string){
    return updateDoc(doc(this.fs, 'billing/'+salesId),{status:'deleted'})
  }

  getCounter(){
    return getDoc(doc(this.fs, 'counters/counters'))
  }
}
