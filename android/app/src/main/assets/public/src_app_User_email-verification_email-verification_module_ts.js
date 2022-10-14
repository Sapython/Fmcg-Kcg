"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_User_email-verification_email-verification_module_ts"],{

/***/ 5221:
/*!******************************************************************************!*\
  !*** ./src/app/User/email-verification/email-verification-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationPageRoutingModule": () => (/* binding */ EmailVerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _email_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-verification.page */ 4398);




const routes = [
    {
        path: '',
        component: _email_verification_page__WEBPACK_IMPORTED_MODULE_0__.EmailVerificationPage
    }
];
let EmailVerificationPageRoutingModule = class EmailVerificationPageRoutingModule {
};
EmailVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmailVerificationPageRoutingModule);



/***/ }),

/***/ 3098:
/*!**********************************************************************!*\
  !*** ./src/app/User/email-verification/email-verification.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationPageModule": () => (/* binding */ EmailVerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _email_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-verification-routing.module */ 5221);
/* harmony import */ var _email_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-verification.page */ 4398);







let EmailVerificationPageModule = class EmailVerificationPageModule {
};
EmailVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _email_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailVerificationPageRoutingModule
        ],
        declarations: [_email_verification_page__WEBPACK_IMPORTED_MODULE_1__.EmailVerificationPage]
    })
], EmailVerificationPageModule);



/***/ }),

/***/ 4398:
/*!********************************************************************!*\
  !*** ./src/app/User/email-verification/email-verification.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailVerificationPage": () => (/* binding */ EmailVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _email_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-verification.page.html?ngResource */ 4596);
/* harmony import */ var _email_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-verification.page.scss?ngResource */ 2548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EmailVerificationPage = class EmailVerificationPage {
    constructor() { }
    ngOnInit() {
    }
};
EmailVerificationPage.ctorParameters = () => [];
EmailVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-email-verification',
        template: _email_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_email_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailVerificationPage);



/***/ }),

/***/ 2548:
/*!*********************************************************************************!*\
  !*** ./src/app/User/email-verification/email-verification.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 16px;\n  gap: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid #CBCBCB;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n\n.box-outer {\n  width: 220px;\n  height: auto;\n  object-fit: cover;\n}\n\n.box-outer img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJlbWFpbC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICB0b3A6IDdweDtcclxufVxyXG5cclxuLnRleHQtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NCQ0JDQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uYm94LW91dGVye1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 4596:
/*!*********************************************************************************!*\
  !*** ./src/app/User/email-verification/email-verification.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <img src=\"assets/icon/headerNagivation.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"text-header\">Chek your mail</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"d-flex justify-content-center align-items-center flex-column px-4\">\r\n    <div class=\"box-outer py-5\">\r\n      <img src=\"assets/illustrations/emailVerification.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"Nunito400 fs-16 w-75 pb-5 text-center\">we sent a password resent link to your email</div>\r\n    \r\n    <div class=\"w-100\">\r\n      <button class=\"login-btn \">Open email</button>\r\n    </div>\r\n    <div class=\"Nunit0500 fs-14\">Don’t recive the email? <span class=\"t-blue\">Click to resend</span></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_User_email-verification_email-verification_module_ts.js.map