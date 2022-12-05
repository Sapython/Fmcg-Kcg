import { Injectable } from '@angular/core';
import {
  ExtraLoginEmailInfo,
  UserStructure,
} from 'src/structures/user.structure';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { urls } from '../url';
import { DataProviderService } from '../Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from '../uiService/alerts-and-notifications.service';
import { Platform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDocument: DocumentReference;
  constructor(
    private fs: Firestore,
    private auth: Auth,
    private router: Router,
    private dataprovider: DataProviderService,
    private alertify: AlertsAndNotificationsService,
    private platform: Platform
  ) {}

  public loginWithEmailPassword(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((credentials: UserCredential) => {
        console.log(credentials);
        this.alertify.presentToast('Logged In Successfully');
        this.router.navigateByUrl('/root/homepage');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public signUpWithEmailAndPassword(email: any, password: any, username: any) {
    let data = createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (credentials: UserCredential) => {
        await this.setEmailUserData(credentials.user, {
          phoneNumber: '',
          photoURL: '',
          displayName: username || '',
          dateOfBirth: Date.now(),
          gender: '',
          address: '',
        });
      })
      .catch((err) => {
        console.log(err);
        this.dataprovider.loading = false;
        this.alertify.presentToast(err);
      });
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
      address: userData.address || '',
    };
    this.userDocument = doc(this.fs, urls.users + user.uid);
    await setDoc(this.userDocument, data).then(() => {
      this.alertify.presentToast('Account created Successfully');
      this.router.navigateByUrl('/root/homepage');
    });
    this.dataprovider.loading = false;
    // this.router.navigate(['/all-products'])
  }

  public async setGoogleUserData(user: User, userData: ExtraLoginEmailInfo) {
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
      address: userData.address || '',
    };
    this.userDocument = doc(this.fs, urls.users + user.uid);
    await setDoc(this.userDocument, data).then(() => {
      this.alertify.presentToast('Account created Successfully');
      this.router.navigateByUrl('/root/homepage');
    });

    // this.router.navigate(['/all-products'])
  }

  getRandomImage(): string {
    return (
      'https://avatars.dicebear.com/api/gridy/' +
      (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)) +
      '.svg'
    );
  }

  public async logout() {
    this.dataprovider.LoggedInUser = false;
    this.dataprovider.user = undefined;

    return await signOut(this.auth);
  }

  public async signUpwithGoogle() {
    if (this.platform.is('capacitor')) {
      GoogleAuth.signIn()
        .then((googleUser) => {
          alert("Google User: " + googleUser.id);
          const credential = GoogleAuthProvider.credential(
            googleUser.authentication.idToken,
            googleUser.authentication.accessToken
          );
          signInWithCredential(this.auth, credential)
            .then((credentials: UserCredential) => {
              console.log('Credentials ', credentials);
              getDoc(doc(this.fs, urls.users + credentials.user.uid))
                .then((userDocument: any) => {
                  if (!userDocument.exists()) {
                    this.setEmailUserData(credentials.user, {
                      phoneNumber: credentials.user.phoneNumber,
                      photoURL: credentials.user.photoURL,
                      displayName: credentials.user.displayName,
                      dateOfBirth: Date.now(),
                      gender: '',
                      address: '',
                    }).then(() => {
                      this.router.navigate(['']);
                    });
                  } else {
                    this.alertify.presentToast(
                      'Logged In.',
                      'info',
                      5000,
                      [],
                      true,
                      ''
                    );
                    this.router.navigate(['']);
                  }
                })
                .catch((error) => {
                  console.log('ErrorCatched getting data', error);
                  this.alertify.presentToast(
                    error.message,
                    'error',
                    5000,
                    [],
                    true,
                    ''
                  );
                });
            })
            .catch((error) => {
              console.log('ErrorCatched authorizing', error);
              this.alertify.presentToast(
                error.message,
                'error',
                5000,
                [],
                true,
                ''
              );
            });
        })
        .catch((error) => {
          console.log('ErrorCatched', error);
          this.alertify.presentToast(
            error.message,
            'error',
            5000,
            [],
            true,
            ''
          );
        });
    } else {
      const gauth = new GoogleAuthProvider();
      signInWithPopup(this.auth, gauth).then(
        (credentials: UserCredential) => {
          console.log('Credentials ', credentials);
          getDoc(doc(this.fs, urls.users + credentials.user.uid))
            .then((userDocument: any) => {
              if (!userDocument.exists()) {
                this.setEmailUserData(credentials.user, {
                  phoneNumber: credentials.user.phoneNumber,
                  photoURL: credentials.user.photoURL,
                  displayName: credentials.user.displayName,
                  dateOfBirth: Date.now(),
                  gender: '',
                  address: '',
                }).then(() => {
                  this.router.navigate(['/root/homepage']);
                });
              }
            })
            .catch((error) => {
              console.log('ErrorCatched getting data', error);
              this.alertify.presentToast(
                error.message,
                'error',
                5000,
                [],
                true,
                ''
              );
            });
        }
      ).catch((error) => {
        // console.log(error.message);
        console.log('Error when signing in')
      }).finally(() => {
        console.log('Finally')
      });
    }
  }
}
