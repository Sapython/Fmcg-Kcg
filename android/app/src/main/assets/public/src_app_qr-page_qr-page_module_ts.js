"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_qr-page_qr-page_module_ts"],{

/***/ 9790:
/*!***************************************************!*\
  !*** ./src/app/qr-page/qr-page-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePageRoutingModule": () => (/* binding */ QrPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _qr_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-page.page */ 7631);




const routes = [
    {
        path: '',
        component: _qr_page_page__WEBPACK_IMPORTED_MODULE_0__.QrPagePage
    }
];
let QrPagePageRoutingModule = class QrPagePageRoutingModule {
};
QrPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrPagePageRoutingModule);



/***/ }),

/***/ 9706:
/*!*******************************************!*\
  !*** ./src/app/qr-page/qr-page.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePageModule": () => (/* binding */ QrPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _qr_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-page-routing.module */ 9790);
/* harmony import */ var _qr_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-page.page */ 7631);







let QrPagePageModule = class QrPagePageModule {
};
QrPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qr_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrPagePageRoutingModule
        ],
        declarations: [_qr_page_page__WEBPACK_IMPORTED_MODULE_1__.QrPagePage]
    })
], QrPagePageModule);



/***/ }),

/***/ 7631:
/*!*****************************************!*\
  !*** ./src/app/qr-page/qr-page.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPagePage": () => (/* binding */ QrPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _qr_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-page.page.html?ngResource */ 1995);
/* harmony import */ var _qr_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-page.page.scss?ngResource */ 97);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let QrPagePage = class QrPagePage {
    constructor() { }
    ngOnInit() {
    }
};
QrPagePage.ctorParameters = () => [];
QrPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qr-page',
        template: _qr_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_qr_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrPagePage);



/***/ }),

/***/ 97:
/*!******************************************************!*\
  !*** ./src/app/qr-page/qr-page.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.box {\n  background: #FFFFFF;\n  border: 1px solid #CBCBCB;\n  box-shadow: 0px 4px 12px 1px rgba(37, 37, 37, 0.15);\n  border-radius: 15px;\n  gap: 12px;\n  margin: 70px 20px 0 20px;\n  padding: 20px;\n}\n\n.box-img {\n  margin: 0 auto;\n  margin-top: -70px;\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.box-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNSIiwiZmlsZSI6InFyLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbiAgICB0b3A6IDdweDtcclxufVxyXG5cclxuLnRleHQtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IDFweCByZ2JhKDM3LCAzNywgMzcsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbjogNzBweCAyMHB4IDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICA7XHJcbn1cclxuXHJcbi5ib3gtaW1nIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogLTcwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 1995:
/*!******************************************************!*\
  !*** ./src/app/qr-page/qr-page.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <!-- <img src=\"assets/icon/headerNagivation.png\" alt=\"\"> -->\r\n    </div>\r\n    <div class=\"text-header\">Product QR</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"box-outer\">\r\n  <div class=\"box\">\r\n    <div class=\"box-img\">\r\n      <img src=\"https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80\" alt=\"\">\r\n    </div>\r\n    <div class=\"Nunito500 \">Micro SilkFiber Soft Plain California Premium Shaggy.</div>\r\n    <div class=\"d-flex align-item-center justify-content-start py-3\">\r\n      <div class=\"Nunito500 fs-14\">Product Code : </div>\r\n      <div class=\"Nunito600 fs-14\">3258444</div>\r\n    </div>\r\n    <div class=\"d-flex align-item-center justify-content-center py-3\">\r\n      <button class=\"qr-button Nunito600 t-blue\">Edit Product</button>\r\n    </div>\r\n    <div class=\"Nunito600 fs-18 text-center mt-3\">Want to Print this QR Code ?</div>\r\n    <div class=\"py-5\">\r\n      <img src=\"assets/images/qr.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"d-flex justify-content-center align-item-center\">\r\n      <button class=\"skip-btn t-blue w-100 me-3\">Skip</button>\r\n      <button class=\"btn-print\">Print</button>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_qr-page_qr-page_module_ts.js.map