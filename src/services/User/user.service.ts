import { Injectable } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { EMPTY, Observable } from 'rxjs';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { urls } from '../url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly user: Observable<User | null> = EMPTY;
  constructor(private auth: Auth, public dataProvider: DataProviderService, private fs: Firestore) {
    if (this.auth) {
      this.user = authState(this.auth);

      this.user.subscribe((user: any) => {
        if (user) {
          console.log(user);
          this.dataProvider.LoggedInUser = true;
          this.dataProvider.user = user;
          // this.dataProvider.user.next(user);
          console.log(this.dataProvider.user);
        }
        else {
          this.dataProvider.LoggedInUser = false;
        }
      });
    }
  }



  public get getUserData(): Observable<User | null> {
    console.log(this.user);
    return this.user;

  }


  public addUser(data: any) {
    return addDoc(collection(this.fs, urls.users), data);
  }

  public getUser(USER_ID: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return getDoc(doc(this.fs, userIDUrl));
  }

  public getAllUsers() {
    return getDocs(collection(this.fs, '/users'));
  }

  public updateUser(USER_ID: any, data: any) {
    const userIDUrl = urls.user.replace('{USER_ID}', USER_ID);
    return updateDoc(doc(this.fs, userIDUrl), data);
  }

}
