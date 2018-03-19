webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s8 offset-s2\">\r\n    <div class=\"row\">\r\n      <app-search-bar></app-search-bar>\r\n      <app-contact-list></app-contact-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_bar_search_bar_component__ = __webpack_require__("./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_list_item_contact_list_item_component__ = __webpack_require__("./src/app/contact-list-item/contact-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__ = __webpack_require__("./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_mockup_service__ = __webpack_require__("./src/app/contact.mockup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_list_item_contact_list_item_component__["a" /* ContactListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_list_contact_list_component__["a" /* ContactListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__contact_mockup_service__["a" /* ContactMockup */],
                __WEBPACK_IMPORTED_MODULE_8__query_service__["a" /* QueryService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-list-item/contact-list-item.component.css":
/***/ (function(module, exports) {

module.exports = "li {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0;\r\n}\r\n\r\nh2 {\r\n    font-size: 3ch;\r\n    margin: 0 0 5px 0;\r\n    color: #333;\r\n}\r\n\r\nli i {\r\n    margin-right: 15px;\r\n}\r\n\r\nli p {\r\n    margin: 0;\r\n    color: #777;\r\n}\r\n\r\nli p:last-child{\r\n    margin-right: 5em;\r\n}\r\n\r\n.col1 {\r\n    width: 100%;\r\n}\r\n\r\n.details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact-list-item/contact-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"collection-item\">\n  <i class=\"medium material-icons\">account_circle</i>\n  <div class=\"col1\">\n    <h2>{{contact.nome}} {{contact.sobrenome}}</h2>\n    <div class=\"details\">\n      <p>Telefone: {{contact.telefones[0].numero}}</p>\n      <p>Email: {{contact.emails[0].email}}</p>\n      <p>Empresa: {{contact.empresa}}</p>\n      <p>Endereço: {{contact.enderecos[0].endereco}}</p>\n    </div>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/contact-list-item/contact-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__("./src/app/contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListItemComponent = /** @class */ (function () {
    function ContactListItemComponent() {
    }
    ContactListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */])
    ], ContactListItemComponent.prototype, "contact", void 0);
    ContactListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-list-item',
            template: __webpack_require__("./src/app/contact-list-item/contact-list-item.component.html"),
            styles: [__webpack_require__("./src/app/contact-list-item/contact-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListItemComponent);
    return ContactListItemComponent;
}());



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <ul class=\"collection\">\n        <app-contact-list-item *ngFor=\"let contact of contacts\" [contact]=\"contact\"></app-contact-list-item>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(queryService) {
        this.queryService = queryService;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryService.getContacts$().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
        this.queryService.search('');
    };
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/contact-list/contact-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact.mockup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMockup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_contacts__ = __webpack_require__("./src/app/mock-contacts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as Rx from 'rxjs';
var ContactMockup = /** @class */ (function () {
    //private contacts: Contact[];
    function ContactMockup() {
    }
    ContactMockup.prototype.ngOnInit = function () {
    };
    ContactMockup.prototype.getContacts = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_3__mock_contacts__["a" /* CONTACTS */]);
    };
    ContactMockup.prototype.searchContacts = function (term) {
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var matches = [];
            for (var _i = 0, CONTACTS_1 = __WEBPACK_IMPORTED_MODULE_3__mock_contacts__["a" /* CONTACTS */]; _i < CONTACTS_1.length; _i++) {
                var contact = CONTACTS_1[_i];
                if (contact.search(term)) {
                    matches.push(contact);
                }
            }
            observer.next(matches);
            observer.complete();
        });
        return observable;
    };
    ContactMockup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContactMockup);
    return ContactMockup;
}());



/***/ }),

/***/ "./src/app/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(init) {
        Object.assign(this, init);
    }
    Contact.prototype.search = function (query, obj) {
        if (obj === void 0) { obj = this; }
        for (var key in obj) {
            var value = this[key];
            if (typeof value === 'object') {
                this.search(query, value);
            }
            if (value && value.toString && value.toString().indexOf(query) >= 0) {
                return true;
            }
        }
        return false;
    };
    return Contact;
}());



/***/ }),

/***/ "./src/app/mock-contacts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTACTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact__ = __webpack_require__("./src/app/contact.ts");

var a = new __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* Contact */]();
var CONTACTS = [
    new __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* Contact */]({
        nome: "Fernando",
        data_de_nascimento: new Date(1992, 8, 4),
        empresa: "Caesb",
        empresa_fonetico: "Caesb",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Brazlandia" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Aguas Claras" }
        ],
        nome_fonetico: "Fernando",
        redes_sociais: [
            { rede: "Facebook", url: "http://www.facebook.com/fferreira12" },
            { rede: "Twitter", url: "http://www.twitter.com/FernandoRodr" }
        ],
        sobrenome: "Ferreira",
        sobrenome_fonetico: "Ferreira",
        telefones: [
            { tipo: "Residencial", numero: "+5561012345678" },
            { tipo: "Trabalho", numero: "+556101234567" }
        ],
        urls: [
            { tipo: "Site Pessoal", url: "http://www.site.com" },
            { tipo: "Site Trabalho", url: "http://www.site2.com" }
        ],
        emails: [
            { tipo: "Pessoal", email: "fernando@gmail.com" },
            { tipo: "Trabalho", email: "fernando@trabalho.com" }
        ]
    }),
    new __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* Contact */]({
        nome: "Lucas",
        data_de_nascimento: new Date(1995, 1, 1),
        empresa: "Ceub",
        empresa_fonetico: "Ceub",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Taguatinga" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Ceilandia" }
        ],
        nome_fonetico: "Lucas",
        redes_sociais: [
            { rede: "Facebook", url: "http://www.facebook.com/luis" },
            { rede: "Twitter", url: "http://www.twitter.com/luis" }
        ],
        sobrenome: "Silva",
        sobrenome_fonetico: "Silva",
        telefones: [
            { tipo: "Residencial", numero: "+5561012345678" },
            { tipo: "Trabalho", numero: "+556101234567" }
        ],
        urls: [
            { tipo: "Site Pessoal", url: "http://www.site.com" },
            { tipo: "Site Trabalho", url: "http://www.site2.com" }
        ],
        emails: [
            { tipo: "Pessoal", email: "Lucas@gmail.com" },
            { tipo: "Trabalho", email: "Lucas@trabalho.com" }
        ]
    }),
    new __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* Contact */]({
        nome: "Alessandro",
        data_de_nascimento: new Date(1944, 1, 1),
        empresa: "Ceub",
        empresa_fonetico: "Ceub",
        enderecos: [
            { tipo: "Residencial", endereco: "Quadra 0 Lote 0, Taguatinga" },
            { tipo: "Trabalho", endereco: "Avenida Castanheiras, Ceilandia" }
        ],
        nome_fonetico: "Alessandro",
        redes_sociais: [
            { rede: "Facebook", url: "http://www.facebook.com/Alessandro" },
            { rede: "Twitter", url: "http://www.twitter.com/Alessandro" }
        ],
        sobrenome: "Viadinho",
        sobrenome_fonetico: "Viadinho",
        telefones: [
            { tipo: "Residencial", numero: "+5561012345678" },
            { tipo: "Trabalho", numero: "+556101234567" }
        ],
        urls: [
            { tipo: "Site Pessoal", url: "http://www.site.com" },
            { tipo: "Site Trabalho", url: "http://www.site2.com" }
        ],
        emails: [
            { tipo: "Pessoal", email: "Alessandro@gmail.com" },
            { tipo: "Trabalho", email: "Alessandro@trabalho.com" }
        ]
    })
];


/***/ }),

/***/ "./src/app/query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_mockup_service__ = __webpack_require__("./src/app/contact.mockup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryService = /** @class */ (function () {
    // // Observable string streams
    // queryString$ = this.queryString.asObservable();
    function QueryService(contactService) {
        this.contactService = contactService;
        this.queryString = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Service message commands
    QueryService.prototype.search = function (term) {
        console.log('term: ' + term);
        this.queryString.next(term);
    };
    QueryService.prototype.ngOnInit = function () {
        var _this = this;
        this.contacts$ = this.queryString.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* switchMap */])(function (term) { return _this.contactService.searchContacts(term); }));
        //this.getContacts$();
        //this.queryString.next('');
    };
    QueryService.prototype.getContacts$ = function () {
        if (!this.contacts$) {
            this.ngOnInit();
        }
        return this.contacts$;
    };
    QueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contact_mockup_service__["a" /* ContactMockup */]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n}\r\n\r\n.form {\r\n    text-align: center;\r\n    width: 80%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Agenda Online</h1>\n\n<form>\n  <div class=\"input-field col s10\">\n    <input type=\"text\" #searchBox name=\"search-box\" placeholder=\"Pesquisar\" id=\"search-box\" [(ngModel)]=\"query\" (keyup)=\"filter(searchBox.value)\">\n  </div>\n  <div class=\"input-field col s2\">\n    <a class=\"waves-effect waves-light btn\">Pesquisar</a>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(queryService) {
        this.queryService = queryService;
        this.query = '';
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.filter(this.query);
    };
    SearchBarComponent.prototype.filter = function (term) {
        this.queryService.search(term);
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__("./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("./src/app/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map