"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stock-list_stock-list_module_ts"],{

/***/ 3576:
/*!*************************************************************************!*\
  !*** ./src/app/stock-list/stock-list-card/stock-list-card.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockListCardComponent": () => (/* binding */ StockListCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stock_list_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-list-card.component.html?ngResource */ 688);
/* harmony import */ var _stock_list_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-list-card.component.scss?ngResource */ 9832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StockListCardComponent = class StockListCardComponent {
    constructor() { }
    ngOnInit() { }
};
StockListCardComponent.ctorParameters = () => [];
StockListCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stock-list-card',
        template: _stock_list_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stock_list_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StockListCardComponent);



/***/ }),

/***/ 6161:
/*!*********************************************************!*\
  !*** ./src/app/stock-list/stock-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockListPageRoutingModule": () => (/* binding */ StockListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stock_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-list.page */ 1358);




const routes = [
    {
        path: '',
        component: _stock_list_page__WEBPACK_IMPORTED_MODULE_0__.StockListPage
    }
];
let StockListPageRoutingModule = class StockListPageRoutingModule {
};
StockListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StockListPageRoutingModule);



/***/ }),

/***/ 2671:
/*!*************************************************!*\
  !*** ./src/app/stock-list/stock-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockListPageModule": () => (/* binding */ StockListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stock_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-list-routing.module */ 6161);
/* harmony import */ var _stock_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-list.page */ 1358);
/* harmony import */ var _stock_list_card_stock_list_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-list-card/stock-list-card.component */ 3576);








let StockListPageModule = class StockListPageModule {
};
StockListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _stock_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockListPageRoutingModule,
        ],
        declarations: [
            _stock_list_page__WEBPACK_IMPORTED_MODULE_1__.StockListPage,
            _stock_list_card_stock_list_card_component__WEBPACK_IMPORTED_MODULE_2__.StockListCardComponent
        ]
    })
], StockListPageModule);



/***/ }),

/***/ 1358:
/*!***********************************************!*\
  !*** ./src/app/stock-list/stock-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockListPage": () => (/* binding */ StockListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stock_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-list.page.html?ngResource */ 768);
/* harmony import */ var _stock_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-list.page.scss?ngResource */ 5857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StockListPage = class StockListPage {
    constructor() { }
    ngOnInit() {
    }
};
StockListPage.ctorParameters = () => [];
StockListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stock-list',
        template: _stock_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_stock_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StockListPage);



/***/ }),

/***/ 9832:
/*!**************************************************************************************!*\
  !*** ./src/app/stock-list/stock-list-card/stock-list-card.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".addStockCard {\n  background: #FFFFFF;\n  border: 1px solid #CBCBCB;\n  border-radius: 20px;\n  padding: 10px;\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-outer {\n  width: 104px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.img-outer img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLWxpc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3RvY2stbGlzdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZFN0b2NrQ2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NCQ0JDQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLW91dGVyIHtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 5857:
/*!************************************************************!*\
  !*** ./src/app/stock-list/stock-list.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.searchBox {\n  width: 100%;\n  height: 42px;\n  left: 16px;\n  top: 86px;\n  background: #FFFFFF;\n  border: 1px solid #CBCBCB;\n  box-shadow: 0px 2px 12px 0.5px rgba(0, 0, 0, 0.15);\n  border-radius: 20px;\n  outline: none;\n  border: none;\n  padding: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRkoiLCJmaWxlIjoic3RvY2stbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGV4dC1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5zZWFyY2hCb3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgdG9wOiA4NnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQkNCQ0I7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4vLyAuc2VhcmNoYmFyIHtcclxuLy8gICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbi8vICAgICB0b3A6IDMwcHg7XHJcbi8vIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 688:
/*!**************************************************************************************!*\
  !*** ./src/app/stock-list/stock-list-card/stock-list-card.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"addStockCard\">\r\n  <div class=\"img-outer\">\r\n    <img\r\n      src=\"https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80\"\r\n      alt=\"\">\r\n  </div>\r\n  <div class=\"ps-2\">\r\n    <div class=\"Nunito600\">Micro SilkFiber Soft Plain California Premium Shaggy.</div>\r\n    <div class=\"Nunito700 fs-14 t-blue\">Rs 5000</div>\r\n    <div class=\"d-flex justify-content-between align-items-center\">\r\n      <div class=\"t-grey fs-14\">Product Code <span class=\"Nunito500\">3258444</span></div>\r\n      <a href=\"\" uk-icon=\"icon: file-edit\"></a>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 768:
/*!************************************************************!*\
  !*** ./src/app/stock-list/stock-list.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <img src=\"assets/icon/headerNagivation.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"text-header\">Product List</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"d-flex align-items-center justify-content-center searchbar\">\r\n    <input type=\"text\" class=\"searchBox me-2\">\r\n    <button class=\"filter-btn\">Filter</button>\r\n  </div>\r\n  <app-stock-list-card></app-stock-list-card>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_stock-list_stock-list_module_ts.js.map