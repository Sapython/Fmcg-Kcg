"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_get-started_get-started_module_ts"],{

/***/ 648:
/*!***********************************************************!*\
  !*** ./src/app/get-started/get-started-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPageRoutingModule": () => (/* binding */ GetStartedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _get_started_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-started.page */ 327);




const routes = [
    {
        path: '',
        component: _get_started_page__WEBPACK_IMPORTED_MODULE_0__.GetStartedPage
    }
];
let GetStartedPageRoutingModule = class GetStartedPageRoutingModule {
};
GetStartedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GetStartedPageRoutingModule);



/***/ }),

/***/ 9168:
/*!***************************************************!*\
  !*** ./src/app/get-started/get-started.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPageModule": () => (/* binding */ GetStartedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _get_started_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-started-routing.module */ 648);
/* harmony import */ var _get_started_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-started.page */ 327);







let GetStartedPageModule = class GetStartedPageModule {
};
GetStartedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _get_started_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetStartedPageRoutingModule
        ],
        declarations: [_get_started_page__WEBPACK_IMPORTED_MODULE_1__.GetStartedPage]
    })
], GetStartedPageModule);



/***/ }),

/***/ 327:
/*!*************************************************!*\
  !*** ./src/app/get-started/get-started.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedPage": () => (/* binding */ GetStartedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _get_started_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-started.page.html?ngResource */ 8750);
/* harmony import */ var _get_started_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-started.page.scss?ngResource */ 8788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GetStartedPage = class GetStartedPage {
    constructor() { }
    ngOnInit() {
    }
};
GetStartedPage.ctorParameters = () => [];
GetStartedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-get-started',
        template: _get_started_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_get_started_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GetStartedPage);



/***/ }),

/***/ 8788:
/*!**************************************************************!*\
  !*** ./src/app/get-started/get-started.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".get-started-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1zdGFydGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZ2V0LXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdldC1zdGFydGVkLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 8750:
/*!**************************************************************!*\
  !*** ./src/app/get-started/get-started.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>get-started</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div  class=\"get-started-text\">\r\n    <div>\r\n      <img src=\"../../assets/images/welcomeImg.png\" alt=\"\">\r\n    </div>\r\n    <div  class=\"get-started-text ion-padding-bottom\">\r\n      <div class=\"get-started-text text-grey\">\r\n        <div>Dedicated <span class=\"text-blue\">Warehouse</span></div>\r\n        <div><span class=\"text-blue\">Manager</span> Application</div>\r\n      </div>\r\n      <button class=\"btn-getStarted\">Get-started</button>\r\n    </div>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_get-started_get-started_module_ts.js.map