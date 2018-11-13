(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_search_events_search_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-events/search-events.component */ "./src/app/components/search-events/search-events.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: _components_search_events_search_events_component__WEBPACK_IMPORTED_MODULE_5__["SearchEventsComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'about',
        component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  padding-top: 70px;\n  margin: 1%; }\n\nbody .jumbotron.text-center {\n    padding: 1%;\n    margin-left: 5%;\n    margin-right: 5%; }\n\nbody .resultBox {\n    margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaGMvRGVza3RvcC9CVS8yMDE4IEZhbGwvQ1M0MTEvcHJvamVjdC9FdmVudFBsYW5uZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1QkFBc0IsRUFDdEI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFNakIsV0FBVSxFQUliOztBQVhEO0lBR1EsWUFBVztJQUNYLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25COztBQU5MO0lBU1EsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgLmp1bWJvdHJvbi50ZXh0LWNlbnRlciB7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgfVxuICAgIG1hcmdpbjogMSU7XG4gICAgLnJlc3VsdEJveCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_search_events_search_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-events/search-events.component */ "./src/app/components/search-events/search-events.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]('98581285762-sgucgbp03ov8m7v2qc2kq1v7cr7hdt8d.apps.googleusercontent.com')
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"]("1847582138660967")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _components_search_events_search_events_component__WEBPACK_IMPORTED_MODULE_10__["SearchEventsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1>\n    ABOUT US\n  </h1>\n  <p>\n    Event planner is a one-stop event planning solution.\n  </p>\n  <p>\n    We strive to make our product better.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 70px;\n  margin: auto;\n  text-align: center;\n  font-size: 100%; }\n\nh1 {\n  padding: 3%;\n  font-size: 8em; }\n\np {\n  padding-top: 1%;\n  font-size: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaGMvRGVza3RvcC9CVS8yMDE4IEZhbGwvQ1M0MTEvcHJvamVjdC9FdmVudFBsYW5uZXIvc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cbiAgXG5oMSB7XG4gIHBhZGRpbmc6IDMlO1xuICBmb250LXNpemU6IDhlbTtcbn1cblxucCB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/components/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\n<div class='row'>\n  <div *ngIf='loggedIn'>\n    <img src=\"{{ user.photoUrl }}\">\n    <div>\n      <h4>{{ user.name }}</h4>\n      <p>{{ user.email }}</p>\n    </div>\n  </div>\n</div>\n<div class='row'>\n    <button class=\"btn btn-primary\" (click)=\"signInWithGoogle()\" *ngIf=\"!loggedIn\">Google Login</button>\n    <button class=\"btn btn-primary\" (click)=\"signInWithFB()\" *ngIf=\"!loggedIn\">Facebook Login</button>\n</div>\n<button class=\"btn btn-primary\" (click)=\"signOut()\" *ngIf=\"loggedIn\">Log Out</button>\n</div>\n  <!-- <div class=\"col-sm-6\"> -->\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n  padding-top: 70px; }\n\n.btn-primary {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaGMvRGVza3RvcC9CVS8yMDE4IEZhbGwvQ1M0MTEvcHJvamVjdC9FdmVudFBsYW5uZXIvc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    // GOOGLE_PROVIDER_ID = 'const GOOGLE_PROVIDE_ID = 98581285762-kvkc2mk733dbqosb5d1tnjanj2r467c8.apps.googleusercontent.com';
    // FACEBOOK_PROVIDER_ID = '';
    LoginComponent.prototype.signInWithGoogle = function () {
        console.log('signin with google triggered!');
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID).then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.signInWithFB = function () {
        console.log('signin with Facebook triggered!');
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID).then(function (x) { return console.log(x); });
    };
    LoginComponent.prototype.signOut = function () {
        console.log('signout triggered!');
        this.authService.signOut().then(function (x) { return console.log(x); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class= \"container\">\n  <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"\">EventPlanner</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><li><a href=\"\">Search Events <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"newproblem\">Add problem</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"about\">About Us</a></li>\n        <li><a href=\"login\">Log In</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n</div> -->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"\">EventPlanner</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"\">Home</a></li>\n        <li><a href=\"\">Profile</a></li>\n        <li><a href=\"\">Calendar</a></li>\n        <li><a href=\"about\">About Us</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- <li><a href=\"\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li> -->\n        <li><a href=\"login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1>\n  404\n  </h1>\n  <h2>\n  Sorry!\n  </h2>\n  <p>\n    The page you are trying to access does not exist.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 70px;\n  margin: auto;\n  text-align: center;\n  font-size: 100%; }\n\nh1 {\n  padding-top: 2%;\n  font-size: 12em; }\n\nh2 {\n  font-size: 4em; }\n\np {\n  padding-top: 1%;\n  font-size: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaGMvRGVza3RvcC9CVS8yMDE4IEZhbGwvQ1M0MTEvcHJvamVjdC9FdmVudFBsYW5uZXIvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmgxIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDEyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG4gIFxucCB7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgZm9udC1zaXplOiAzZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/search-events/search-events.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-events/search-events.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"jumbotron text-center\">\n      <h1>EventPlanner</h1>\n      <p>Much more than event search.</p>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"col-sm-6\">\n        <div>\n          <label for=\"location\"> Location</label>\n          <input\n          type=\"text\"\n          id=\"Location\"\n          ngModel\n          name=\"location\"/>\n        </div>\n\n        <div>\n          <label for=\"searh_range\"> Search Range: within </label>\n          <input type=\"text\"\n          id=\"SearchRange\"\n          ngModel\n          name=\"search_range\"/>\n          miles\n        </div>\n\n        <div>\n          <label for=\"start_date\"> Start Date </label>\n          <input type=\"text\"\n          id=\"StartDate\"\n          ngModel\n          name=\"start_date\"/>\n          <p>(format: YYYY-MM-DD)</p>\n        </div>\n\n\n        <div>\n          <label for=\"end_date\"> End Date </label>\n          <input type=\"text\"\n          id=\"EndDate\"\n          ngModel\n          name=\"end_date\"/>\n          <p>(format: YYYY-MM-DD)</p>\n        </div>\n\n        <button type=\"submit\"class=\"btn btn-default\">\n            <span class=\"glyphicon glyphicon-search\"></span> Search </button>\n      </form>\n\n      <div class=\"col-sm-6\">\n        <div *ngIf=\"submitted\">\n        <h4>You have entered this:</h4>\n        <p>Location: {{ location }}</p>\n        <p>Search Range: {{ search_range }} miles</p>\n        <p>Start Date: {{ display_start_date }}</p>\n        <p>End Date: {{ display_end_date }}</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row resultBox\" *ngIf=\"submitted\">\n      <div class=\"col-sm-6\">\n        <h4>EventBrite Events:</h4>\n        <div class = \"panel-group\">\n          <div class = \"panel panel-default\"  *ngFor=\"let EB_event of EB_events; let i = index\">\n            <div class = \"panel-heading\">\n            <h3>{{i+1}} {{ EB_event.name.text }}</h3></div>\n            <div class = \"panel-body\">\n            <p>Date: {{ EB_event.date }}</p>\n            <p>{{ EB_event.description_text }}</p>\n            <p>Source: <label>{{ EB_event.website }}</label></p>\n            <a href={{EB_event.url}} target=\"_blank\">Event Link</a></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <h4>TicketMaster Events:</h4>\n        <div class = \"panel-group\">\n          <div class = \"panel panel-default\" *ngFor=\"let TM_event of TM_events; let i = index\">\n            <div class = \"panel-heading\">\n            <h3>{{i+1}} {{ TM_event.name }}</h3></div>\n            <div class = \"panel-body\">\n            <p>Date: {{ TM_event.date }}</p>\n            <p>{{ TM_event.description_text }}</p>\n            <p>Source: <label>{{ TM_event.website }}</label></p>\n            <a href={{TM_event.url}} target=\"_blank\">Event Link</a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/components/search-events/search-events.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-events/search-events.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  padding-top: 70px;\n  margin: 1%; }\n\nbody .jumbotron.text-center {\n    padding: 1%;\n    margin-left: 5%;\n    margin-right: 5%; }\n\nbody .resultBox {\n    margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaGMvRGVza3RvcC9CVS8yMDE4IEZhbGwvQ1M0MTEvcHJvamVjdC9FdmVudFBsYW5uZXIvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1ldmVudHMvc2VhcmNoLWV2ZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHVCQUFzQixFQUN0Qjs7QUFDRDtFQUNJLGtCQUFpQjtFQU1qQixXQUFVLEVBSWI7O0FBWEQ7SUFHUSxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDbkI7O0FBTkw7SUFTUSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZXZlbnRzL3NlYXJjaC1ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIC5qdW1ib3Ryb24udGV4dC1jZW50ZXIge1xuICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIH1cbiAgICBtYXJnaW46IDElO1xuICAgIC5yZXN1bHRCb3gge1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/search-events/search-events.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-events/search-events.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEventsComponent", function() { return SearchEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchEventsComponent = /** @class */ (function () {
    function SearchEventsComponent(http) {
        this.http = http;
        this.title = 'EventPlanner';
        this.location = "";
        this.start_date = "";
        this.display_start_date = "";
        this.end_date = "";
        this.display_end_date = "";
        this.location_within = 10;
        this.EB_events = [];
        this.TM_events = [];
        // getCat() {
        //   const headerDict = {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'Access-Control-Allow-Headers': 'Content-Type',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS'
        //   };
        //   const requestOptions = {
        //     headers: new HttpHeaders(headerDict),
        //   };
        //   return this.http.get('localhost:8000/api/cats', requestOptions).subscribe(data => {
        //     console.log(data);
        //     this.cats = data;
        //   });
        // }
        this.submitted = false;
    }
    SearchEventsComponent.prototype.ngOnInit = function () {
    };
    SearchEventsComponent.prototype.get_substr = function (s) {
        return s.substring(0, 500);
    };
    SearchEventsComponent.prototype.callServer = function (port) {
        var _this = this;
        var EB_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            // .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Headers', 'Content-Type')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
            .set('location.address', this.location)
            .set('location.within', this.location_within + 'mi')
            .set('start_date.range_start', this.start_date)
            .set('start_date.range_end', this.end_date);
        // ports:
        // :3000 - to call nodejs server
        // :3001 - to call aspnet core server
        // this.http.post<Message>(`http://127.0.0.1:${port}/ping`, JSON.stringify(this.user), {
        //   headers: headers
        // })
        // .subscribe(data => {
        //   console.log(data);
        // const params = new HttpParams()
        //               .set('location.address','Boston, MA 02215')
        //               .set('start_date.range_start', '2018-11-08T15:41:05Z')
        //               .set('start_date.range_end', '2018-11-10T15:41:05Z');
        this.http.get("http://localhost:" + port + "/api/events/EB", { headers: EB_headers })
            .subscribe(function (data) {
            console.log(typeof (data));
            console.log(data);
            var events = [];
            Object.keys(data).forEach(function (key) {
                // console.log(data[key].description.text.length);
                events.push({ url: data[key].url,
                    name: data[key].name,
                    date: data[key].start.local.substring(0, 10),
                    description_text: (data[key].description.text.length > 500) ?
                        data[key].description.text.substring(0, 500) :
                        data[key].description.text,
                    website: "EventBrite" });
            });
            console.log(events);
            _this.EB_events = events;
        });
        var TM_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            // .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Headers', 'Content-Type')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
            .set('location.address', this.location)
            .set('location.within', this.location_within.toString())
            .set('start_date.range_start', this.start_date)
            .set('start_date.range_end', this.end_date);
        this.http.get("http://localhost:" + port + "/api/events/TM", { headers: TM_headers })
            .subscribe(function (data) {
            console.log(typeof (data));
            console.log(data);
            var events = [];
            Object.keys(data).forEach(function (key) {
                // console.log(data[key].description.text.length);
                events.push({ url: data[key].url,
                    name: data[key].name,
                    date: data[key].dates.start.localDate,
                    description_text: data[key].info ? ((data[key].info.length > 500) ?
                        data[key].info.substring(0, 500) :
                        data[key].info) : "",
                    website: "TicketMaster" });
            });
            console.log(events);
            _this.TM_events = events;
        });
    };
    SearchEventsComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        this.location = form.form.value.location;
        this.location_within = (form.form.value.search_range == "") ? this.location_within : form.form.value.search_range;
        this.display_start_date = form.form.value.start_date;
        this.start_date = (form.form.value.start_date == "") ? "" : form.form.value.start_date + 'T00:00:00Z';
        this.display_end_date = form.form.value.end_date;
        this.end_date = (form.form.value.end_date == "") ? "" : form.form.value.end_date + 'T00:00:00Z';
        console.log(this.location);
        console.log(this.location_within);
        console.log(this.display_start_date);
        console.log(this.display_end_date);
        this.callServer(8000);
    };
    SearchEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-events',
            template: __webpack_require__(/*! ./search-events.component.html */ "./src/app/components/search-events/search-events.component.html"),
            styles: [__webpack_require__(/*! ./search-events.component.scss */ "./src/app/components/search-events/search-events.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchEventsComponent);
    return SearchEventsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jhc/Desktop/BU/2018 Fall/CS411/project/EventPlanner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map