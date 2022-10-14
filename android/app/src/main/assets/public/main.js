(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _buyer_details_buyer_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyer-details/buyer-details.component */ 9491);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details/product-details.component */ 776);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 6630);






const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_User_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./User/login/login.module */ 7192)).then((m) => m.LoginPageModule),
    },
    {
        path: 'flash-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_flash-screen_flash-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./flash-screen/flash-screen.module */ 3456)).then((m) => m.FlashScreenPageModule),
    },
    {
        path: 'get-started',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_get-started_get-started_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./get-started/get-started.module */ 9168)).then((m) => m.GetStartedPageModule),
    },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_User_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./User/sign-up/sign-up.module */ 1980)).then((m) => m.SignUpPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_User_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./User/profile/profile.module */ 7053)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'add-stock',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-stock_add-stock_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-stock/add-stock.module */ 7046)).then((m) => m.AddStockPageModule),
    },
    {
        path: 'qr-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_qr-page_qr-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./qr-page/qr-page.module */ 9706)).then((m) => m.QrPagePageModule),
    },
    {
        path: 'edit-stock',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-stock_edit-stock_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-stock/edit-stock.module */ 3068)).then((m) => m.EditStockPageModule),
    },
    {
        path: 'forget-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_User_forget-password_forget-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./User/forget-password/forget-password.module */ 600)).then((m) => m.ForgetPasswordPageModule),
    },
    {
        path: 'email-verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_User_email-verification_email-verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./User/email-verification/email-verification.module */ 3098)).then((m) => m.EmailVerificationPageModule),
    },
    {
        path: 'stock-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_stock-list_stock-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stock-list/stock-list.module */ 2671)).then((m) => m.StockListPageModule),
    },
    {
        path: 'product-details',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsComponent,
    },
    {
        path: 'profiles',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
    },
    {
        path: 'Buyer-Details',
        component: _buyer_details_buyer_details_component__WEBPACK_IMPORTED_MODULE_0__.BuyerDetailsComponent,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/analytics */ 2591);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_performance__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/performance */ 2494);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var src_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/Auth/auth.service */ 684);
/* harmony import */ var _buyer_details_buyer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyer-details/buyer-details.component */ 9491);


















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _buyer_details_buyer_details_component__WEBPACK_IMPORTED_MODULE_4__.BuyerDetailsComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_9__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__.provideAnalytics)(() => (0,_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__.getAnalytics)()),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.getAuth)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.getFirestore)()),
            (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_14__.providePerformance)(() => (0,_angular_fire_performance__WEBPACK_IMPORTED_MODULE_14__.getPerformance)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__.getStorage)()),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        ],
        providers: [_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__.ScreenTrackingService, _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_11__.UserTrackingService, src_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9491:
/*!**********************************************************!*\
  !*** ./src/app/buyer-details/buyer-details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyerDetailsComponent": () => (/* binding */ BuyerDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buyer_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyer-details.component.html?ngResource */ 3499);
/* harmony import */ var _buyer_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyer-details.component.scss?ngResource */ 566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BuyerDetailsComponent = class BuyerDetailsComponent {
    constructor() {
        this.productDetails = [
            {
                image: '../../assets/images/Raj/order_image.png',
                name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
                quantity: 30,
                payment: 'Paid',
            },
            {
                image: '../../assets/images/Raj/order_image.png',
                name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
                quantity: 40,
                payment: 'Pending',
            },
            {
                image: '../../assets/images/Raj/order_image.png',
                name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
                quantity: 30,
                payment: 'Paid',
            },
            {
                image: '../../assets/images/Raj/order_image.png',
                name: 'Micro SilkFiber Soft  Plain California Premium Shaggy',
                quantity: 30,
                payment: 'Pending',
            },
        ];
    }
    ngOnInit() {
        console.log('details', this.productDetails);
    }
};
BuyerDetailsComponent.ctorParameters = () => [];
BuyerDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buyer-details',
        template: _buyer_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buyer_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuyerDetailsComponent);



/***/ }),

/***/ 776:
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.component.html?ngResource */ 8511);
/* harmony import */ var _product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.component.scss?ngResource */ 3015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ProductDetailsComponent = class ProductDetailsComponent {
    constructor() { }
    ngOnInit() { }
};
ProductDetailsComponent.ctorParameters = () => [];
ProductDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product-details',
        template: _product_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductDetailsComponent);



/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 6038);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 5465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        apiKey: 'AIzaSyCkK6mgBG_gUef7N60ZuA9vHDZDDPW7hqg',
        authDomain: 'fmcg-kcg.firebaseapp.com',
        projectId: 'fmcg-kcg',
        storageBucket: 'fmcg-kcg.appspot.com',
        messagingSenderId: '738798707302',
        appId: '1:738798707302:web:3f816ae17fa684f04403a7',
        measurementId: 'G-YD8HFMVRSY'
    },
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 684:
/*!*******************************************!*\
  !*** ./src/services/Auth/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../url */ 2123);






let AuthService = class AuthService {
    constructor(fs, auth, router) {
        this.fs = fs;
        this.auth = auth;
        this.router = router;
    }
    loginWithEmailPassword(email, password) {
        return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(this.auth, email, password).then((credentials) => {
            console.log(credentials);
        }).catch((err) => {
            console.log(err);
        });
    }
    signUpWithEmailAndPassword(email, password, username) {
        const data = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(this.auth, email, password).then((credentials) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.setEmailUserData(credentials.user, {
                phoneNumber: '', photoURL: '',
                displayName: username || '',
                dateOfBirth: Date.now(),
                gender: '',
                address: ''
            });
        })).catch((err) => {
            console.log(err);
        });
    }
    setEmailUserData(user, userData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const data = {
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
            };
            this.userDocument = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.fs, _url__WEBPACK_IMPORTED_MODULE_0__.urls.users + user.uid);
            yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)(this.userDocument, data).then(() => {
                alert('userDataSet');
            });
            // this.router.navigate(['/all-products'])
        });
    }
    getRandomImage() {
        return 'https://avatars.dicebear.com/api/gridy/' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '.svg';
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.Firestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 2123:
/*!*****************************!*\
  !*** ./src/services/url.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urls": () => (/* binding */ urls)
/* harmony export */ });
const urls = {
    users: `users/`,
    user: `/users/{USER_ID}`,
    stocks: `stocks/`,
    stock: `stocks/{STOCK_ID}`
};


/***/ }),

/***/ 9163:
/*!************************************************!*\
  !*** ./node_modules/@firebase/util/dist/ sync ***!
  \************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 9163;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 566:
/*!***********************************************************************!*\
  !*** ./src/app/buyer-details/buyer-details.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Nunito\", sans-serif;\n}\n\nh2 {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 600;\n}\n\nh3 {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 400;\n}\n\nsection {\n  width: 100%;\n  height: auto;\n  border: 1px solid #ccc;\n  padding: 1.375rem 1rem;\n}\n\nheader {\n  display: flex;\n  position: relative;\n}\n\n.logo {\n  position: absolute;\n}\n\n.heading {\n  width: 100%;\n  text-align: center;\n}\n\n.buyer_detail {\n  margin-top: 1.75rem;\n  padding: 0.875rem 0.75rem 0.75rem 1rem;\n  border: 1px solid #CBCBCB;\n  border-radius: 1.25rem;\n}\n\n.buyer_container {\n  display: flex;\n  position: relative;\n}\n\n.details {\n  padding-left: 0.5625rem;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  color: #434244;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n\n.social_icons img {\n  height: 24px;\n  width: 24px;\n}\n\n#gmail {\n  margin: 0 0.75rem;\n}\n\n#delete {\n  position: absolute;\n  right: 0;\n}\n\n.contact_container_img {\n  padding-right: 0.375rem;\n  height: 15px;\n  width: 15px;\n}\n\n.contact_container {\n  margin-top: 0.75rem;\n  font-size: 0.625rem;\n  color: #888888;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.contact {\n  display: flex;\n  margin-bottom: 0.5rem;\n  margin-right: 0.75rem;\n}\n\n.order {\n  margin-top: 1rem;\n  margin-bottom: 0.75rem;\n}\n\n.order_container {\n  padding: 1rem;\n  border: 1px solid #CBCBCB;\n  border-radius: 1.25rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.order_stats {\n  display: flex;\n  justify-content: space-between;\n}\n\n.order_status_div {\n  display: flex;\n}\n\n#left {\n  margin-left: 0.5rem;\n}\n\n.num_orders_div {\n  color: #828282;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n\n.total {\n  padding: 0 0.5rem;\n  background: #F0F4FF;\n  border: 1px solid #2D6BF1;\n  color: #2D6BF1;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n}\n\n.total_amount {\n  font-family: \"Poppins\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.5rem;\n  line-height: 0.75rem;\n}\n\n.total_div {\n  text-align: center;\n}\n\n.total_heading {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 0.625rem;\n  font-weight: 600;\n}\n\n.history_container {\n  margin-top: 0.75rem;\n}\n\n.history {\n  display: flex;\n  border: 1px solid #CBCBCB;\n  border-radius: 1rem;\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n}\n\n.order_image img {\n  margin-right: 1rem;\n  display: block;\n  height: 52px;\n  width: 74px;\n}\n\n.order_details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.product_name {\n  font-weight: 500;\n  font-size: 0.625rem;\n  line-height: 120%;\n}\n\n.text {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  color: #6A6A6A;\n}\n\n.quantity_div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.quantity {\n  margin-left: 0.5rem;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 120%;\n  color: #252525;\n}\n\n.process {\n  display: flex;\n  align-items: center;\n  padding: 0 0.5rem;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n  font-size: 0.625rem;\n  line-height: 0.9375rem;\n  border-radius: 0.4375rem;\n}\n\n.paid {\n  color: #366A52;\n  background: #EBFCF3;\n  border: 0.8px solid #366A52;\n}\n\n.pending {\n  color: #FF0000;\n  background: #FFE6E6;\n  border: 0.8px solid #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBSUE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUtKIiwiZmlsZSI6ImJ1eWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5oMiB7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMS4zNzVyZW0gMXJlbTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmhlYWRpbmcgeyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLmJ1eWVyX2RldGFpbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC44NzVyZW0gMC43NXJlbSAwLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxufVxyXG5cclxuLmJ1eWVyX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjU2MjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY29sb3I6ICM0MzQyNDQ7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIGltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuI2dtYWlsIHtcclxuICAgIG1hcmdpbjogMCAwLjc1cmVtO1xyXG59XHJcblxyXG4jZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY29udGFjdF9jb250YWluZXJfaW1nIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0X2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjYyNXJlbTtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4ub3JkZXJfY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5vcmRlcl9zdGF0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ub3JkZXJfc3RhdHVzX2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4ubnVtX29yZGVyc19kaXYge1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNGMEY0RkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2QkYxO1xyXG4gICAgY29sb3I6ICMyRDZCRjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRvdGFsX2Ftb3VudCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbi50b3RhbF9kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG90YWxfaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhpc3RvcnlfY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5oaXN0b3J5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5vcmRlcl9pbWFnZSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aDogNzRweDtcclxufVxyXG5cclxuLm9yZGVyX2RldGFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdF9uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDAuNjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbn1cclxuLnRleHQge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xyXG4gICAgY29sb3I6ICM2QTZBNkE7XHJcbn1cclxuXHJcbi5xdWFudGl0eV9kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ucXVhbnRpdHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG59XHJcbi5wcm9jZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMC45Mzc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xyXG59XHJcblxyXG4ucGFpZCB7XHJcbiAgICBjb2xvcjogIzM2NkE1MjtcclxuICAgIGJhY2tncm91bmQ6ICNFQkZDRjM7XHJcbiAgICBib3JkZXI6IDAuOHB4IHNvbGlkICMzNjZBNTI7XHJcbn1cclxuXHJcbi5wZW5kaW5nIHtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRTZFNjtcclxuICAgIGJvcmRlcjogMC44cHggc29saWQgI0ZGMDAwMDtcclxufSJdfQ== */";

/***/ }),

/***/ 3015:
/*!***************************************************************************!*\
  !*** ./src/app/product-details/product-details.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".card {\n  font-family: arial;\n  margin: 5%;\n}\n\n.price {\n  color: grey;\n  font-size: 22px;\n}\n\n.card button {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: blue;\n  text-align: center;\n  cursor: pointer;\n  width: 65%;\n  font-size: 18px;\n  border-radius: 10px;\n}\n\n.card button:hover {\n  opacity: 0.7;\n}\n\n.quntity-icon, img {\n  width: 15px;\n}\n\n.quntity-value {\n  width: 30px;\n  height: 30px;\n  padding: 2%;\n}\n\n.css02 {\n  display: inline;\n  padding: 2%;\n}\n\n.css03 {\n  display: flex;\n  justify-content: space-between;\n  margin: 5%;\n}\n\n.header {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gIG1hcmdpbjogNSU7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY2FyZCBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNjUlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZCBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4ucXVudGl0eS1pY29uLCBpbWcge1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLnF1bnRpdHktdmFsdWUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4uY3NzMDIge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxuLmNzczAzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 5465:
/*!***********************************************************!*\
  !*** ./src/app/profile/profile.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".header {\n  text-align: center;\n  margin: 15px auto;\n}\n\n.col-md-12 {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.form-control {\n  width: 100%;\n  padding: 12px 15px;\n  margin-bottom: 18px;\n  border-radius: 10px;\n}\n\n.profile-button {\n  background: blue;\n  border: none;\n  height: 40px;\n  width: 100%;\n  border-radius: 10px;\n  color: white;\n}\n\n.rounded-circle {\n  display: block;\n  margin: 0px auto 0px auto !important;\n}\n\n.text-center {\n  padding: 0% 20% 0% 20% !important;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDUSxXQUFBO0VBQ0osa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNGLG9DQUFBO0FBS0Y7O0FBSEE7RUFDSSxpQ0FBQTtFQUNBLHNCQUFBO0FBTUoiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuLmNvbC1tZC0xMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnByb2ZpbGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMCUgMjAlIDAlIDIwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 3499:
/*!***********************************************************************!*\
  !*** ./src/app/buyer-details/buyer-details.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section>\r\n            <header>\r\n                <div class=\"logo\"><img src=\"../../assets/images/Raj/backarrow.svg\" alt=\"backarrow\"></div>\r\n                <div class=\"heading\"><h2>Buyers Details</h2></div>\r\n            </header>\r\n\r\n            <div class=\"buyer_detail\">\r\n                <div class=\"buyer_container\">\r\n                    <div id=\"display_pic\"><img src=\"../../assets/images/Raj/dispay_pic.png\" alt=\"dispay_pic\" height=\"56px\" width=\"56px\"></div>\r\n                    <div class=\"details\">\r\n                        <div id=\"buyer_name\">Esther Howard</div>\r\n                        <div class=\"social_icons\">\r\n                            <a href=\"#\" id=\"whatsapp\"><img src=\"../../assets/images/Raj/whatsapp.png\" alt=\"whatsapp\"></a>\r\n                            <a href=\"#\" id=\"gmail\"><img src=\"../../assets/images/Raj/gmail.png\" alt=\"gmail\"></a>\r\n                            <a href=\"#\" id=\"phone\"><img src=\"../../assets/images/Raj/phone.png\" alt=\"phone\"></a>\r\n                        </div>\r\n                    </div>\r\n                    <img src=\"../../assets/images/Raj/edit.png\" id=\"edit\" alt=\"edit\" height=\"18px\" width=\"18px\">\r\n                    <img src=\"../../assets/images/Raj/delete.png\" id=\"delete\" alt=\"delete\" height=\"24px\" width=\"24px\">\r\n                </div>\r\n                <div class=\"contact_container\">\r\n                    <div class=\"contact\"><img class=\"contact_container_img\" src=\"../../assets/images/Raj/mail.png\" alt=\"mail\"><span>georgia.young@example.com</span></div>\r\n                    <div class=\"contact\"><img class=\"contact_container_img\" src=\"../../assets/images/Raj/phone2.png\" alt=\"phone\"><span>+91 9374638201</span></div>\r\n                    <div class=\"contact\"><img class=\"contact_container_img\" src=\"../../assets/images/Raj/location.png\" alt=\"location\"><span>xyz shop; near street B, Ludhiana.</span></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"order\"><h2>Order history</h2></div>\r\n\r\n            <div class=\"order_container\">\r\n                <div class=\"order_stats\">\r\n                    <div class=\"order_status_div\">\r\n                        <img src=\"../../assets/images/Raj/percent.png\" alt=\"percent\" width=\"67px\" height=\"67px\"/>\r\n                        <div class=\"num_orders_div\"><span id=\"num_of_orders\">23,000</span><span id=\"left\">left</span></div>\r\n                    </div>\r\n                    <div class=\"total\">\r\n                        <div class=\"total_div\">\r\n                            <div class=\"total_heading\">Total order amount</div>\r\n                            <div class=\"total_amount\">₹ <span class=\"amount\">1,34,107</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div *ngFor=\"let details of productDetails\"> -->\r\n                <h2> {{productDetails[3].name}} </h2>\r\n                <!-- <img src=\"{{productDetails[3].image}}\" alt=\"order_image\"> -->\r\n                <!-- </div> -->\r\n\r\n                <div class=\"history_container\">\r\n                    <div class=\"history\" *ngFor=\"let details of productDetails\">\r\n                      <p>{{details.image}}</p>\r\n                        <div *ngIf=\"details.image\" class=\"order_image\">\r\n                            <img src=\"{{details.image}}\" alt=\"order_image\">\r\n                        </div>\r\n                        <div class=\"order_details\">\r\n                            <div *ngIf=\"details.name\" class=\"product_name\"> {{details.name}} </div>\r\n                            <div class=\"quantity_div\">\r\n                                <div *ngIf=\"details.quantity\" class=\"qnty\"><span class=\"text\"> {{details.quantity}} </span><span class=\"quantity\">30</span></div>\r\n                                <div *ngIf=\"details.payment === 'Paid'\" class=\"paid process\"><p> {{details.payment}} </p></div>\r\n                                <div class=\"pending process\"><p> {{details.payment}} </p></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </section>\r\n";

/***/ }),

/***/ 8511:
/*!***************************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"css03\">\r\n  <img style=\"width: 25px;\" src=\"../../assets/images/left-arrow.png\" alt=\"\">\r\n  <h2 class=\"header\">Product Details</h2>\r\n  <img style=\"width: 25px;\" src=\"../../assets/images/shopping-cart.png\" alt=\"\">\r\n  </div>\r\n<div class=\"card\">\r\n  <img\r\n    src=\"https://i.pinimg.com/originals/e0/2d/06/e02d06a246e95aef5374649acd4bdad1.jpg\"\r\n    alt=\"Denim Jeans\"\r\n    style=\"width: 100%; border-radius: 20px\"\r\n  />\r\n  <h1>Carpet Texture Pack (12380) | Textures | Design Bundles</h1>\r\n  <p class=\"price\">Rs 5000</p>\r\n  <p>Product Code : 3250444</p>\r\n  <p>Created Date : 02 Oct 2022</p>\r\n  <div class=\"css01\">\r\n  <div class=\"css02\">\r\n    <a style=\"margin-right: 8px\" class=\"plus-icon quntity-icon\">\r\n      <img src=\"../../assets/images/minus-sign.png\" alt=\"\">\r\n    </a>\r\n\r\n    <input type=\"text\" name=\"quantity\" value=\"2\" class=\"quntity-value\" disabled />\r\n\r\n    <a style=\"margin-left: 8px\" class=\"minus-icon quntity-icon\">\r\n      <img src=\"../../assets/images/plus.png\" alt=\"\">\r\n      </a>\r\n  </div>\r\n  <p style=\"display: inline;padding-left: 6%;\"><button>Add to Cart</button></p>\r\n  </div>\r\n</div>\r\n</div>\r\n";

/***/ }),

/***/ 6038:
/*!***********************************************************!*\
  !*** ./src/app/profile/profile.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <h2 class=\"header\">Profile</h2>\r\n  <div class=\"col-md-3 border-right\">\r\n<h3 style=\"margin: 15px; color: royalblue;\">Hello Raj</h3>\r\n            <div class=\"d-flex flex-column align-items-center text-center p-3 py-5\"><img class=\"rounded-circle mt-5\" width=\"150px\" src=\"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg\"><span> </span></div>\r\n        </div>\r\n        <div>\r\n          <div class=\"row mt-3\">\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" value=\"\"></div>\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" value=\"\"></div>\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Address\" value=\"\"></div>\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" value=\"\"></div>\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Birthdate\" value=\"\"></div>\r\n                    <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" placeholder=\"Gender\" value=\"\"></div>\r\n                </div>\r\n                <div class=\"mt-5 text-center\"><button class=\"btn btn-primary profile-button\" type=\"button\">Save Profile</button></div>\r\n        </div>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map