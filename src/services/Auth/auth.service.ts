import { Injectable } from '@angular/core';
import { ExtraLoginEmailInfo, UserStructure } from 'src/structures/user.structure';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, DocumentReference, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { urls } from '../url';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDocument: DocumentReference;
  constructor(private fs: Firestore, private auth: Auth, private router: Router) { }

  public loginWithEmailPassword(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then((credentials: UserCredential) => {
      console.log(credentials)
    }).catch((err) => {
      console.log(err)
    })
  }

  public signUpWithEmailAndPassword(email: any, password: any, username: any) {
    let data = createUserWithEmailAndPassword(this.auth, email, password).then(async (credentials: UserCredential) => {
      await this.setEmailUserData(credentials.user, {
        phoneNumber: '', photoURL: '',
        displayName: username || '',
        dateOfBirth: Date.now(),
        gender: '',
        address: ''
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  public async setEmailUserData(user: User, userData: ExtraLoginEmailInfo) {
    let data: UserStructure = {
      userId: user.uid || '',
      email: user.email || '',
      displayName: userData.displayName || '',
      photoURL: userData.photoURL || this.getRandomImage(),
      phoneNumber: userData.phoneNumber || '',
      emailVerified: true,
      access: { access: 'user' },
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender || '',
      address: userData.address || ''
    }
    this.userDocument = doc(this.fs, urls.users + user.uid);
    await setDoc(this.userDocument, data).then(() => {
      alert('userDataSet')
    });

    // this.router.navigate(['/all-products'])
  }

  getRandomImage(): string {
    return 'https://avatars.dicebear.com/api/gridy/' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '.svg';
  }

}
