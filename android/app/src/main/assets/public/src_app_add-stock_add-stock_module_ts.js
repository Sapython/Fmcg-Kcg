"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-stock_add-stock_module_ts"],{

/***/ 3326:
/*!*******************************************************!*\
  !*** ./src/app/add-stock/add-stock-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStockPageRoutingModule": () => (/* binding */ AddStockPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_stock_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-stock.page */ 889);




const routes = [
    {
        path: '',
        component: _add_stock_page__WEBPACK_IMPORTED_MODULE_0__.AddStockPage
    }
];
let AddStockPageRoutingModule = class AddStockPageRoutingModule {
};
AddStockPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddStockPageRoutingModule);



/***/ }),

/***/ 7046:
/*!***********************************************!*\
  !*** ./src/app/add-stock/add-stock.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStockPageModule": () => (/* binding */ AddStockPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-stock-routing.module */ 3326);
/* harmony import */ var _add_stock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-stock.page */ 889);







let AddStockPageModule = class AddStockPageModule {
};
AddStockPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_stock_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddStockPageRoutingModule
        ],
        declarations: [_add_stock_page__WEBPACK_IMPORTED_MODULE_1__.AddStockPage]
    })
], AddStockPageModule);



/***/ }),

/***/ 889:
/*!*********************************************!*\
  !*** ./src/app/add-stock/add-stock.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStockPage": () => (/* binding */ AddStockPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-stock.page.html?ngResource */ 5302);
/* harmony import */ var _add_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-stock.page.scss?ngResource */ 5721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/Data-Provider/data-provider.service */ 3470);
/* harmony import */ var src_services_Stock_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/Stock/stocks.service */ 31);
/* harmony import */ var src_services_User_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/User/user.service */ 3180);








let AddStockPage = class AddStockPage {
    constructor(stock, user, dataProvider) {
        this.stock = stock;
        this.user = user;
        this.dataProvider = dataProvider;
        this.addstockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
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
        return this.user.getUserData.subscribe((res) => {
            this.userId = res === null || res === void 0 ? void 0 : res.uid;
            this.getUser();
        });
    }
    getUser() {
        this.user.getUser(this.userId).then((res) => { this.dataProvider.user = res.data(); });
    }
    addStock() {
        this.stock.addStock(this.addstockForm.value);
    }
};
AddStockPage.ctorParameters = () => [
    { type: src_services_Stock_stocks_service__WEBPACK_IMPORTED_MODULE_3__.StocksService },
    { type: src_services_User_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_services_Data_Provider_data_provider_service__WEBPACK_IMPORTED_MODULE_2__.DataProviderService }
];
AddStockPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-stock',
        template: _add_stock_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_stock_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddStockPage);



/***/ }),

/***/ 5721:
/*!**********************************************************!*\
  !*** ./src/app/add-stock/add-stock.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".header {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\n.back {\n  padding-left: 10px;\n  position: absolute;\n  left: 3px;\n  top: 7px;\n}\n\n.text-header {\n  font-family: \"Nunito\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.input {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 14px 16px;\n  gap: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid #CBCBCB;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n\n.box-outer {\n  padding: 20px 20px;\n  margin-top: 25px;\n}\n\n.uk-button-default {\n  background-color: transparent;\n  color: #333;\n  border: 1px solid #CBCBCB;\n  border-style: dashed;\n  text-align: left;\n  padding: 0 15px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdG9jay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FBQUo7O0FBS0E7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUZKIiwiZmlsZSI6ImFkZC1zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4udGV4dC1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NCQ0JDQjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uYm94LW91dGVye1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVrLWJ1dHRvbi1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0JDQkNCO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59Il19 */";

/***/ }),

/***/ 5302:
/*!**********************************************************!*\
  !*** ./src/app/add-stock/add-stock.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <div class=\"header\">\r\n    <div class=\"back\">\r\n      <img src=\"assets/icon/headerNagivation.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"text-header\">Add stock</div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addstockForm\"  (ngSubmit)=\"addStock()\">\r\n    <div class=\"box-outer\">\r\n      <div class=\"uk-margin\">\r\n        <div class=\"uk-form-custom w-100\">\r\n          <input type=\"file\" #file>\r\n          <button class=\"uk-button uk-button-default w-100\" type=\"button\" tabindex=\"-1\">Upload Image</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Name</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Spike/32/D\" formControlName=\"Name\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Quality</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Spike/32/D\" formControlName=\"Quality\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Shade</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Grey (Dark)\" formControlName=\"Shade\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Backing</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Black\" formControlName=\"Backing\">\r\n      </div>\r\n      <div class=\"uk-margin d-flex justify-content-center align-item-center\">\r\n        <div class=\"pe-1\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Length</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"12.00 Mt\" formControlName=\"Length\">\r\n        </div>\r\n        <div class=\"pe-1\">\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Width</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"1.22 Mt\" formControlName=\"Width\">\r\n        </div>\r\n        <div>\r\n          <label for=\"\" class=\"Fredoka400 fs-16\">Thickness</label>\r\n          <input class=\"input\" type=\"text\" placeholder=\"8 mm\" formControlName=\"Thickness\">\r\n        </div>\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Quantity</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"213\" formControlName=\"Quantity\">\r\n      </div>\r\n      <div class=\"uk-margin\">\r\n        <label for=\"\" class=\"Fredoka400 fs-16\">Storage Location</label>\r\n        <input class=\"input\" type=\"text\" placeholder=\"Section A\" formControlName=\"StorageLocation\">\r\n      </div>\r\n      <div class=\"d-flex justify-content-center align-item-center py-3\">\r\n        <button class=\"btn-addStock\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_add-stock_add-stock_module_ts.js.map