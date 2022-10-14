"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-stock_edit-stock_module_ts"],{

/***/ 3429:
/*!*********************************************************!*\
  !*** ./src/app/edit-stock/edit-stock-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStockPageRoutingModule": () => (/* binding */ EditStockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _edit_stock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-stock.page */ 9642);




const routes = [
    {
        path: '',
        component: _edit_stock_page__WEBPACK_IMPORTED_MODULE_0__.EditStockPage
    }
];
let EditStockPageRoutingModule = class EditStockPageRoutingModule {
};
EditStockPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditStockPageRoutingModule);



/***/ }),

/***/ 3068:
/*!*************************************************!*\
  !*** ./src/app/edit-stock/edit-stock.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStockPageModule": () => (/* binding */ EditStockPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-stock-routing.module */ 3429);
/* harmony import */ var _edit_stock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-stock.page */ 9642);







let EditStockPageModule = class EditStockPageModule {
};
EditStockPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditStockPageRoutingModule
        ],
        declarations: [_edit_stock_page__WEBPACK_IMPORTED_MODULE_1__.EditStockPage]
    })
], EditStockPageModule);



/***/ }),

/***/ 9642:
/*!***********************************************!*\
  !*** ./src/app/edit-stock/edit-stock.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStockPage": () => (/* binding */ EditStockPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-stock.page.html?ngResource */ 5980);
/* harmony import */ var _edit_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-stock.page.scss?ngResource */ 6998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/Data-Provider/data-provider.service */ 3470);
/* harmony import */ var src_services_Stock_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/Stock/stocks.service */ 31);
/* harmony import */ var src_services_User_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/User/user.service */ 3180);








let EditStockPage = class EditStockPage {
    constructor(stock, user, dataProvider) {
        this.stock = stock;
        this.user = user;
        this.dataProvider = dataProvider;
        this.stockId = '6y5Z5cp4V4TopJdd4QfW';
        this.editstockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Quality: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Shade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Backing: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Length: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Width: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Thickness: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            StorageLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
        });
    }
    ngOnInit() {
        this.getStock();
        return this.user.getUserData.subscribe((res) => {
            this.userId = res === null || res === void 0 ? void 0 : res.uid;
            this.getUser();
        });
    }
    getUser() {
        this.user.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); });
    }
    editStock() {
        this.stock.editStock(this.stockId, this.editstockForm.value).then((res) => {
            console.log(res);
        });
    }
    getStock() {
        console.log(this.stockId);
        this.stock.getStock(this.stockId).then((res) => {
            this.currentStockData = res.data();
            console.log(res.data());
        });
    }
};
EditStockPage.ctorParameters = () => [
    { type: src_services_Stock_stocks_service__WEBPACK_IMPORTED_MODULE_3__.StocksService },
    { type: src_services_User_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__.DataProviderService }
];
EditStockPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-stock',
        template: _edit_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditStockPage);



/***/ }),

/***/ 6998:
/*!************************************************************!*\
  !*** ./src/app/edit-stock/edit-stock.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 16px;\n  gap: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid #CBCBCB;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n\n.box-outer {\n  padding: 20px 20px;\n  margin-top: 25px;\n}\n\n.uk-button-default {\n  background-color: transparent;\n  color: #333;\n  border: 1px solid #CBCBCB;\n  border-style: dashed;\n  text-align: left;\n  padding: 0 15px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc3RvY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFGSiIsImZpbGUiOiJlZGl0LXN0b2NrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogM3B4O1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuXHJcbi50ZXh0LWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLmlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5ib3gtb3V0ZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWstYnV0dG9uLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQkNCQ0I7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 5980:
/*!************************************************************!*\
  !*** ./src/app/edit-stock/edit-stock.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <img src=\"assets/icon/headerNagivation.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"text-header\">Edit stock</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"editstockForm\"  (ngSubmit)=\"editStock()\">\r\n    <div class=\"box-outer\">\r\n      <div class=\"uk-margin\">\r\n        <div class=\"uk-form-custom w-100\">\r\n          <input type=\"file\" #file>\r\n          <button class=\"uk-button uk-button-default w-100\" type=\"button\" tabindex=\"-1\">Upload Image</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Name</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Spike/32/D\" formControlName=\"Name\" [value]=\"this.currentStockData?.Name\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Quality</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Spike/32/D\" formControlName=\"Quality\" [value]=\"this.currentStockData?.Quality\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Shade</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Grey (Dark)\" formControlName=\"Shade\" [value]=\"this.currentStockData?.Shade\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Backing</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Black\" formControlName=\"Backing\" [value]=\"this.currentStockData?.Backing\">\r\n      </div>\r\n      <div class=\"uk-margin d-flex justify-content-center align-item-center\">\r\n        <div class=\"pe-1\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Length</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"12.00 Mt\" formControlName=\"Length\" [value]=\"this.currentStockData?.Length\">\r\n        </div>\r\n        <div class=\"pe-1\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Width</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"1.22 Mt\" formControlName=\"Width\" [value]=\"this.currentStockData?.Width\">\r\n        </div>\r\n        <div>\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Thickness</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"8 mm\" formControlName=\"Thickness\" [value]=\"this.currentStockData?.Thickness\">\r\n        </div>\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Quantity</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"213\" formControlName=\"Quantity\" [value]=\"this.currentStockData?.Quantity\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Storage Location</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Section A\" formControlName=\"StorageLocation\" [value]=\"this.currentStockData?.StorageLocation\">\r\n      </div>\r\n      <div class=\"d-flex justify-content-center align-item-center py-3\">\r\n        <button class=\"btn-addStock\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-stock_edit-stock_module_ts.js.map