"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_flash-screen_flash-screen_module_ts"],{

/***/ 9079:
/*!*************************************************************!*\
  !*** ./src/app/flash-screen/flash-screen-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlashScreenPageRoutingModule": () => (/* binding */ FlashScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _flash_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flash-screen.page */ 4665);




const routes = [
    {
        path: '',
        component: _flash_screen_page__WEBPACK_IMPORTED_MODULE_0__.FlashScreenPage
    }
];
let FlashScreenPageRoutingModule = class FlashScreenPageRoutingModule {
};
FlashScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FlashScreenPageRoutingModule);



/***/ }),

/***/ 3456:
/*!*****************************************************!*\
  !*** ./src/app/flash-screen/flash-screen.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlashScreenPageModule": () => (/* binding */ FlashScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _flash_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flash-screen-routing.module */ 9079);
/* harmony import */ var _flash_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flash-screen.page */ 4665);







let FlashScreenPageModule = class FlashScreenPageModule {
};
FlashScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _flash_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.FlashScreenPageRoutingModule
        ],
        declarations: [_flash_screen_page__WEBPACK_IMPORTED_MODULE_1__.FlashScreenPage]
    })
], FlashScreenPageModule);



/***/ }),

/***/ 4665:
/*!***************************************************!*\
  !*** ./src/app/flash-screen/flash-screen.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlashScreenPage": () => (/* binding */ FlashScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _flash_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flash-screen.page.html?ngResource */ 9269);
/* harmony import */ var _flash_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flash-screen.page.scss?ngResource */ 7894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FlashScreenPage = class FlashScreenPage {
    constructor() { }
    ngOnInit() {
    }
};
FlashScreenPage.ctorParameters = () => [];
FlashScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-flash-screen',
        template: _flash_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_flash_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FlashScreenPage);



/***/ }),

/***/ 7894:
/*!****************************************************************!*\
  !*** ./src/app/flash-screen/flash-screen.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".splashLogo {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXNoLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImZsYXNoLXNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsYXNoTG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 9269:
/*!****************************************************************!*\
  !*** ./src/app/flash-screen/flash-screen.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"splashLogo Fredoka500\">LOGo</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_flash-screen_flash-screen_module_ts.js.map