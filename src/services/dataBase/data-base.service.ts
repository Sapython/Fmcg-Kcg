import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, increment, setDoc, updateDoc } from '@angular/fire/firestore';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(public fs: Firestore) { }

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
    return setDoc(doc(this.fs, `${userIDUrl}${urls.cart}${cartId}`), { ...data, cartId: cartId, cartQuantity:1 })
  }


}
