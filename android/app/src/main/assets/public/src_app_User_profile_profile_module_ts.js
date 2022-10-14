"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_User_profile_profile_module_ts"],{

/***/ 5519:
/*!********************************************************!*\
  !*** ./src/app/User/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 9837);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 7053:
/*!************************************************!*\
  !*** ./src/app/User/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 5519);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 9837);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 9837:
/*!**********************************************!*\
  !*** ./src/app/User/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 9493);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 6235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/Data-Provider/data-provider.service */ 3470);
/* harmony import */ var src_services_User_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/User/user.service */ 3180);







let ProfilePage = class ProfilePage {
    constructor(dataProvider, userService) {
        this.dataProvider = dataProvider;
        this.userService = userService;
        this.updateUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            // photoURL: new FormControl(''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
    }
    ngOnInit() {
        return this.userService.getUserData.subscribe((res) => {
            this.userId = res === null || res === void 0 ? void 0 : res.uid;
            this.getUser();
        });
    }
    getUser() {
        this.userService.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); });
    }
    updateUser() {
        console.log(this.updateUserForm.value);
        this.userService.updateUser(this.userId, this.updateUserForm.value).then((res) => {
            console.log(res);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__.DataProviderService },
    { type: src_services_User_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 6235:
/*!***********************************************************!*\
  !*** ./src/app/User/profile/profile.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 16px;\n  gap: 10px;\n  width: 328px;\n  height: 45px;\n  border: 1px solid #CBCBCB;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n\n.outer-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0;\n}\n\n.img-outer {\n  display: flex;\n  justify-content: center;\n  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15));\n  width: 80px;\n  height: 80px;\n  align-items: center;\n  margin: 20px 0;\n}\n\n.img-outer img {\n  width: 100%;\n  height: 100%;\n  border: 3px #2D6BF1 solid;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICB0b3A6IDdweDtcclxufVxyXG5cclxuLnRleHQtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAzMjhweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQkNCQ0I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLm91dGVyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uaW1nLW91dGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDNweCAjMkQ2QkYxIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 9493:
/*!***********************************************************!*\
  !*** ./src/app/User/profile/profile.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <img src=\"/icon/headerNagivation.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"text-header\">Profile</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\r\n    <div class=\"outer-box\">\r\n\r\n      <div class=\"Nunito500 t-blue uk-text-left\">Hello, Sudipta!</div>\r\n\r\n      <div class=\"img-outer\">\r\n        <img [src]=\"this.dataProvider.user?.photoURL\" alt=\"\">\r\n      </div>\r\n      <div>\r\n\r\n        <input class=\"input\" type=\"text\" placeholder=\"Full Name\" formControlName=\"displayName\"\r\n          [value]=\"this.dataProvider.user?.displayName\">\r\n        <input class=\"input\" type=\"number\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\"\r\n          [value]=\"this.dataProvider.user?.phoneNumber\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Address\" formControlName=\"address\"\r\n          [value]=\"this.dataProvider.user?.address\">\r\n        <input class=\"input\" type=\"email\" placeholder=\"Email Address\" formControlName=\"email\"\r\n          [value]=\"this.dataProvider.user?.email\">\r\n        <input class=\"input\" type=\"datetime\" placeholder=\"Birthdate\" formControlName=\"dateOfBirth\"\r\n          [value]=\"this.dataProvider.user?.dateOfBirth\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Gender\" formControlName=\"gender\"\r\n          [value]=\"this.dataProvider.user?.gender\">\r\n\r\n      </div>\r\n      <div class=\"Nunito600 t-blue fs-16 pt-4 \">Change Password</div>\r\n      <button class=\"btn-profile\" type=\"submit\">Save</button>\r\n\r\n\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_User_profile_profile_module_ts.js.map