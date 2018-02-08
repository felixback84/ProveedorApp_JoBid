webpackJsonp([14],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOkPageModule", function() { return ServiceOkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ok__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceOkPageModule = (function () {
    function ServiceOkPageModule() {
    }
    return ServiceOkPageModule;
}());
ServiceOkPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_ok__["a" /* ServiceOkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_ok__["a" /* ServiceOkPage */]),
        ],
    })
], ServiceOkPageModule);

//# sourceMappingURL=service-ok.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ServiceOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceOkPage = (function () {
    function ServiceOkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadView();
    }
    ServiceOkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceOkPage');
    };
    ServiceOkPage.prototype.goVote = function () {
        var dataService = { 'service': this.DataService, "user": this.DataUser };
        this.navCtrl.setRoot('ServiceVotePage', dataService);
    };
    ServiceOkPage.prototype.loadView = function () {
        //-load data
        this.DataService = this.navParams.get('service');
        this.DataUser = this.navParams.get('user');
        console.log(this.DataUser);
        console.log(this.DataService);
        //-localStorage
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.userActual);
    };
    return ServiceOkPage;
}());
ServiceOkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-ok',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/service-ok/service-ok.html"*/'<!--\n\n  Generated template for the ServiceOkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/img/JoBidProveedor.jpg" />\n\n  <div class="centrarIcon">\n\n    <ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n\n  </div>\n\n  <p>The customer has finished his rating.</p>\n\n  <p>A total of\n\n    <span>${{DataUser.sale}}</span> has been credited to your account.</p>\n\n  <div class="btnBottom" padding>\n\n    <button ion-button color="danger" block (click)="goVote()">Continue\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/service-ok/service-ok.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ServiceOkPage);

//# sourceMappingURL=service-ok.js.map

/***/ })

});
//# sourceMappingURL=14.js.map