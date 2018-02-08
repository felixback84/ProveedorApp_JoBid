webpackJsonp([24],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServicesPageModule", function() { return MyServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_services__ = __webpack_require__(668);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyServicesPageModule = (function () {
    function MyServicesPageModule() {
    }
    return MyServicesPageModule;
}());
MyServicesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_services__["a" /* MyServicesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_services__["a" /* MyServicesPage */]),
        ],
    })
], MyServicesPageModule);

//# sourceMappingURL=my-services.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(296);
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
 * Generated class for the MyServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyServicesPage = (function () {
    function MyServicesPage(navCtrl, navParams, professionalsService, userService, offerService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        this.userService = userService;
        this.offerService = offerService;
        this.alertCtrl = alertCtrl;
        this.ListService = [];
        //-- default
        this.imgUserDefault = "assets/img/User/UserService.png";
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        this.loadView();
    }
    MyServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyServicesPage');
    };
    MyServicesPage.prototype.goInfoService = function (list) {
        console.log(list);
        var Data = { 'datos': list };
        this.navCtrl.push('MyServiceInfoPage', Data);
    };
    MyServicesPage.prototype.loadView = function () {
        var _this = this;
        console.log('loadView');
        this.contractSubs = this.professionalsService.getContract(this.UserActual).subscribe(function (dataList) {
            console.log('professionalsService-S my-services');
            // console.log('datalist');
            console.log(dataList);
            var _loop_1 = function (key) {
                // console.log(dataList[key]);
                // console.log(key);
                if ('$value' == key) {
                    _this.showAlertNoServices();
                    console.log('professionalsService-US my-services');
                    _this.contractSubs.unsubscribe();
                }
                else {
                    // console.log(dataList[key]['User']);
                    // console.log(dataList[key]['$key']);
                    //--buscamos la informacion de la oferta.
                    _this.offerSubs = _this.offerService.getOffer(key).subscribe(function (offerBD) {
                        console.log('professionalsService-S my-services');
                        if (offerBD) {
                            if (offerBD != undefined) {
                                // console.log(offerBD);
                                if (offerBD.name != undefined) {
                                    //--buscamos los datos actualizados del usuario
                                    _this.userSubs = _this.userService.getUser(dataList[key]['User']).subscribe(function (userDB) {
                                        console.log('userSubs-S my-services');
                                        // console.log(userDB);
                                        if (userDB) {
                                            if (userDB != undefined) {
                                                if (userDB['user_username'] != undefined) {
                                                    var nameUser = userDB['user_username'];
                                                    var addresU = userDB['user_address'];
                                                    var addresUser = void 0;
                                                    var imgUser = void 0;
                                                    for (var key_1 in addresU) {
                                                        addresUser = addresU[key_1]['addr_info'];
                                                    }
                                                    var phoneUser = userDB['user_tel'];
                                                    // console.log(userDB['user_picture']);
                                                    if (userDB['user_picture'] == undefined || userDB['user_picture'] == null || userDB['user_picture'] == "") {
                                                        imgUser = _this.imgUserDefault;
                                                    }
                                                    else {
                                                        imgUser = userDB['user_picture'];
                                                    }
                                                    var DataUser = { 'id': dataList[key]['User'], "nameUser": nameUser, "address": addresUser, "tel": phoneUser, "img": imgUser };
                                                    var DataService = { "Service": offerBD.name, "SubService": offerBD.Clasificacion.categoria };
                                                    _this.ListService.push({ 'id': key, 'info': dataList[key]['info'], 'sale': dataList[key]['sale'], 'status': dataList[key]['status'], DataUser: DataUser, DataService: DataService });
                                                }
                                            }
                                            else {
                                                console.log('userSubs-US my-services');
                                                _this.userSubs.unsubscribe();
                                                console.log('offerSubs-US my-services');
                                                _this.offerSubs.unsubscribe();
                                            }
                                        }
                                        else {
                                            console.log('userSubs-US my-services');
                                            _this.userSubs.unsubscribe();
                                            console.log('offerSubs-US my-services');
                                            _this.offerSubs.unsubscribe();
                                        }
                                    });
                                }
                            }
                            else {
                                console.log('offerSubs-US my-services');
                                _this.offerSubs.unsubscribe();
                                console.log('professionalsService-US my-services');
                                _this.contractSubs.unsubscribe();
                            }
                        }
                        else {
                            console.log('offerSubs-US my-services');
                            _this.offerSubs.unsubscribe();
                            console.log('professionalsService-US my-services');
                            _this.contractSubs.unsubscribe();
                        }
                    });
                }
            };
            for (var key in dataList) {
                _loop_1(key);
            }
            console.log('professionalsService-US my-services');
            _this.contractSubs.unsubscribe();
        });
        console.log(this.ListService);
    };
    MyServicesPage.prototype.showAlertNoServices = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: 'User does not have services',
            buttons: ['OK']
        });
        alert.present();
    };
    return MyServicesPage;
}());
MyServicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-services',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/my-services/my-services.html"*/'<!--\n\n  Generated template for the MyServicesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>My services</h3>\n\n  <h4>List:</h4>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let list of ListService" (click)="goInfoService(list)" class="btnItem">\n\n      <h4>\n\n        <strong>Services: </strong>{{list.id}}</h4>\n\n      <h4>\n\n        <strong>{{list.DataService.Service}}: </strong>{{list.DataService.SubService}}</h4>\n\n      <h4>\n\n        <strong>Customer: </strong>{{list.DataUser.nameUser}}</h4>\n\n      <p>\n\n        <strong>Status:</strong> {{list.status}}</p>\n\n      <p>\n\n        <strong>Sale:</strong> {{list.sale}}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/carlos/ionicPruebas/ProveedorApp_JoBid/src/pages/my-services/my-services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyServicesPage);

//# sourceMappingURL=my-services.js.map

/***/ })

});
//# sourceMappingURL=24.js.map