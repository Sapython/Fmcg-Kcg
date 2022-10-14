"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_User_sign-up_sign-up_module_ts"],{

/***/ 6917:
/*!********************************************************!*\
  !*** ./src/app/User/sign-up/sign-up-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 6076);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 1980:
/*!************************************************!*\
  !*** ./src/app/User/sign-up/sign-up.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 6917);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 6076);







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule,
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 6076:
/*!**********************************************!*\
  !*** ./src/app/User/sign-up/sign-up.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page.html?ngResource */ 719);
/* harmony import */ var _sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss?ngResource */ 8116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/Auth/auth.service */ 684);






let SignUpPage = class SignUpPage {
    constructor(auth) {
        this.auth = auth;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
        });
    }
    ngOnInit() { }
    signUpWithEmailAndPassword() {
        if (this.signupForm.value.email == '') {
            alert('please enter your email');
            return;
        }
        if (this.signupForm.value.password == '') {
            alert('please enter your Password');
            return;
        }
        this.auth.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.username);
    }
};
SignUpPage.ctorParameters = () => [
    { type: src_services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sign-up',
        template: _sign_up_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sign_up_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpPage);



/***/ }),

/***/ 8116:
/*!***********************************************************!*\
  !*** ./src/app/User/sign-up/sign-up.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 16px;\n  gap: 10px;\n  width: 328px;\n  height: 45px;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n\n.or {\n  position: relative;\n  width: 328px;\n  height: 0px;\n  border: 1px solid #BEBEBE;\n  margin-bottom: 15px;\n}\n\n.login-box {\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 30px;\n}\n\n.login-box .login-box-bootom {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.login-box .login-box-top {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 100%;\n}\n\n.input-padding {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURSOztBQUlJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFGUjs7QUFNQTtFQUNJLG9CQUFBO0FBSEoiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMzI4cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzI4cHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCRUJFQkU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG5cclxuICAgIC5sb2dpbi1ib3gtYm9vdG9tIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tYm94LXRvcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 719:
/*!***********************************************************!*\
  !*** ./src/app/User/sign-up/sign-up.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>sign-up</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"login-box\">\r\n    <div class=\"login-box-top uk-margin-medium-bottom\">\r\n      <div class=\"fs-24 Fredoka500 uk-margin-medium-top uk-margin-medium-bottom\">LOGo</div>\r\n      <div class=\"fs-24 Fredoka500 t-blue\">Welcome Back</div>\r\n      <div class=\"fs-16 Nunito500\">Please Enter your Details</div>\r\n    </div>\r\n    <div class=\"login-box-bootom\">\r\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"signUpWithEmailAndPassword()\">\r\n        <div class=\"uk-margin\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16 \">Name</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"Enter your Email\"  formControlName=\"username\">\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16 \">Email</label>\r\n          <input class=\"input\" type=\"email\" placeholder=\"Enter your Email\"  formControlName=\"email\">\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Password</label>\r\n          <input class=\"input\" type=\"password\" placeholder=\"Enter Your Password\"  formControlName=\"password\">\r\n        </div>\r\n        <div class=\"uk-margin\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Confirm Password</label>\r\n          <input class=\"input\" type=\"password\" placeholder=\"Enter Your Password\">\r\n        </div>\r\n        \r\n        <div>\r\n          <button class=\"login-btn\">Sign Up</button>\r\n        </div>\r\n      </form>\r\n  \r\n      <div class=\"or\"></div>\r\n  \r\n      <div class=\"uk-flex uk-align-center uk-flex-center\">\r\n        <img class=\"uk-padding-small\" src=\"assets/icon/google.png\" alt=\"\">\r\n        <img class=\"uk-padding-small\" src=\"assets/icon/facebook.png\" alt=\"\">\r\n        <img class=\"uk-padding-small\" src=\"assets/icon/twitter.png\" alt=\"\">\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_User_sign-up_sign-up_module_ts.js.map