webpackJsonp([17],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoPageModule", function() { return ServiceInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_info__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceInfoPageModule = (function () {
    function ServiceInfoPageModule() {
    }
    return ServiceInfoPageModule;
}());
ServiceInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_info__["a" /* ServiceInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_info__["a" /* ServiceInfoPage */]),
        ],
    })
], ServiceInfoPageModule);

//# sourceMappingURL=service-info.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Component, ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams, Navbar, AlertController} from 'ionic-angular';


/**
 * Generated class for the ServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceInfoPage = (function () {
    function ServiceInfoPage(navCtrl, navParams, saleService, offerService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        this.offerService = offerService;
        this.alertCtrl = alertCtrl;
        // @ViewChild(Navbar) navBar: Navbar;
        //-data
        this.DataService = [];
        this.NoGoSale = false;
        //-default
        this.serviceImage = 'assets/img/User/FotoServiceInfo.JPG';
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        this.callInfo();
        this.userActual = localStorage.getItem('verificacion');
        this.LoadTimmer();
        // this.navBar.setBackButtonText('hola');
        // this.navBar.backButtonClick = this.goShowPage;
        // this.navBar.backButtonClick = (e:UIEvent)=>{
        //   // todo something
        //   this.navCtrl.pop();
        //  }
    }
    ServiceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceInfoPage');
        // console.log(localStorage);
    };
    ServiceInfoPage.prototype.goSale = function () {
        this.saleService.setSaleProvider(this.DataService.idUser, this.DataService.idOff, this.userActual, '-');
        var Data = { 'datos': this.DataService };
        this.navCtrl.setRoot('ServiceSalePage', Data);
    };
    ServiceInfoPage.prototype.callInfo = function () {
        this.imagenUser = this.DataService.img;
        this.offer = this.DataService.sale;
        this.userName = this.DataService.name;
        this.info = this.DataService.info;
        if (this.DataService.imgOffer != undefined && this.DataService.imgOffer != '') {
            this.serviceImage = this.DataService.imgOffer;
        }
        this.loadDescripcion();
    };
    ServiceInfoPage.prototype.LoadTimmer = function () {
        var _this = this;
        // console.log('tiempo');
        // console.log(this.DataService.idOff);
        // console.log(this.DataService.idUser);
        this.statusSubs = this.saleService.getStatus(this.DataService.idUser, this.DataService.idOff).subscribe(function (status) {
            console.log('statusSubs-S service-info');
            // console.log(status);
            // console.log(status['$value']);
            if (status['$value'] == 'Published') {
                _this.timerSubs = _this.offerService.getTimmer(_this.DataService.idOff).subscribe(function (timer) {
                    console.log('timerSubs-S service-info');
                    // console.log(timer);
                    if (timer['$value'] != null) {
                        _this.contador = timer['$value'];
                        if (_this.contador == "00:15" ||
                            _this.contador == "00:14" ||
                            _this.contador == "00:13" ||
                            _this.contador == "00:12" ||
                            _this.contador == "00:10" ||
                            _this.contador == "00:09" ||
                            _this.contador == "00:08" ||
                            _this.contador == "00:07" ||
                            _this.contador == "00:06" ||
                            _this.contador == "00:05" ||
                            _this.contador == "00:04" ||
                            _this.contador == "00:03" ||
                            _this.contador == "00:02" ||
                            _this.contador == "00:01") {
                            console.log('bloquear');
                            _this.NoGoSale = true;
                        }
                    }
                });
            }
            else {
                _this.contador = "00:00";
                _this.NoGoSale = true;
                if (status['$value'] == 'Cancelled') {
                    _this.AlertCancelOffer();
                    _this.goShowPage();
                }
            }
        });
    };
    ServiceInfoPage.prototype.loadDescripcion = function () {
        var _this = this;
        this.offerDetailSub = this.offerService.getOffer(this.DataService.idOff).subscribe(function (DetailBD) {
            if (_this.offerDetailSub != undefined) {
                console.log('offerDetailSub-S service-info');
                console.log(DetailBD);
                if (DetailBD) {
                    if (_this.serviceImage == 'assets/img/User/FotoServiceInfo.JPG' || _this.serviceImage == null || _this.serviceImage == undefined) {
                        if (DetailBD.Clasificacion.informacion.foto != undefined) {
                            _this.serviceImage = DetailBD.Clasificacion.informacion.foto;
                            console.log(_this.serviceImage = DetailBD.Clasificacion.informacion.foto);
                            _this.DataService.imgOffer = _this.serviceImage;
                        }
                    }
                }
            }
        });
    };
    ServiceInfoPage.prototype.goShowPage = function () {
        this.navCtrl.setRoot('ShowPage');
    };
    //- alert
    ServiceInfoPage.prototype.AlertCancelOffer = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            // message: 'The auction was canceled by the Client :' + this.DataService.idOff + 'en info page',
            message: 'The auction was canceled by the Client',
            buttons: ['OK']
        });
        alert.present();
    };
    //terminamos las subscripciones con firebase
    ServiceInfoPage.prototype.ionViewWillLeave = function () {
        console.log('statusSubs-US service-info');
        console.log('timerSubs-US service-info');
        if (this.offerDetailSub != undefined) {
            this.offerDetailSub.unsubscribe();
        }
        if (this.statusSubs != undefined) {
            this.statusSubs.unsubscribe();
        }
        if (this.timerSubs != undefined) {
            this.timerSubs.unsubscribe();
        }
    };
    return ServiceInfoPage;
}());
ServiceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-info',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/service-info/service-info.html"*/'<!--\n\n  Generated template for the ServiceInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <!-- <button ion-button (click)="goShowPage()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> -->\n\n    <!-- <ion-buttons left>\n\n      <button ion-button icon-only (click)="goShowPage()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <img src="assets/img/fondoLineas.jpg" class="imageFull imagenContent">\n\n  <div class="contenedor">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <img src="{{imagenUser}}" class="imagenUser" />\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <h3>${{offer}}</h3>\n\n          <p>{{userName}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <div class="barraRoja">\n\n    <h4>Service Information</h4>\n\n  </div>\n\n  <img src="{{serviceImage}}" class="imageFull" />\n\n  <div padding>\n\n    <p>{{info}}</p>\n\n    <h4 class="tituloCondator">\n\n      Time to start the sale.\n\n    </h4>\n\n    <h4 class="contador">{{contador}}</h4>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div class="btnBottom">\n\n      <button ion-button color="danger" block (click)="goSale()" [disabled]="NoGoSale">\n\n        Enter the sale\n\n        <ion-icon name="arrow-dropright"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/service-info/service-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ServiceInfoPage);

//# sourceMappingURL=service-info.js.map

/***/ })

});
//# sourceMappingURL=17.js.map