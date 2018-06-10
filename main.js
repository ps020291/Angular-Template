(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts",
		"modules-admin-admin-module"
	],
	"../modules/invoice/invoice.module": [
		"./src/app/modules/invoice/invoice.module.ts",
		"modules-invoice-invoice-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app/app.menu.model.ts":
/*!***************************************!*\
  !*** ./src/app/app/app.menu.model.ts ***!
  \***************************************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
var ADMIN_PREFIX = "/home/admin/";
var MENU = {
    ADMIN: [
        // {
        // label:"Clients", children:[
        { routerLink: ADMIN_PREFIX + "clients", label: "Clients", icon: 'fa fa-user' },
        { routerLink: ADMIN_PREFIX + "projects", label: "Projects", icon: 'fa fa-briefcase' },
        { routerLink: ADMIN_PREFIX + "members", label: "Members", icon: 'fa fa-user' },
        { routerLink: ADMIN_PREFIX + "task", label: "Task", icon: 'fa fa-task' },
        { routerLink: ADMIN_PREFIX + "pdf", label: "PDF", icon: 'fa fa-file-pdf-o' }
        // ]
        // }
    ]
};


/***/ }),

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/app/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/app/components/home/home.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app/app.routes.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui-toolkit/ui-toolkit.module */ "./src/app/ui-toolkit/ui-toolkit.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/app/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_9__["routes"]),
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_11__["UiToolkitModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/app.routes.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.routes.ts ***!
  \***********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/app/components/home/home.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/app/components/aboutus/aboutus.component.ts");


var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], children: [
            { path: "admin", loadChildren: "../modules/admin/admin.module#AdminModule" },
            { path: "invoice", loadChildren: "../modules/invoice/invoice.module#InvoiceModule" }
        ]
    },
    { path: 'about', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_1__["AboutusComponent"] }
];


/***/ }),

/***/ "./src/app/app/components/aboutus/aboutus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/app/components/aboutus/aboutus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/components/aboutus/aboutus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/app/components/aboutus/aboutus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n<!-- <app-nav></app-nav> -->\n<mat-drawer-container class=\"example-container\" autosize>\n  <app-header></app-header>\n   <div class=\"container-fluid\">\n        \n     <div class=\"row\">\n       <!-- <div class=\"col-md-2\">\n         <app-nav></app-nav>\n       </div> -->\n       <div class=\"col-md-12\">\n         <div class=\"page-wrapper\">\n           <div class=\"container-fluid\">\n             <div class=\"row heading-bg\">\n               <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\n                 <h5 class=\"txt-dark\">About Us Page</h5>\n               </div>\n               <!-- Breadcrumb -->\n               <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\n                 <!-- Breadcrumb-->\n                 <div class=\"mr-auto\">\n                   <ol class=\"breadcrumb clearfix d-none d-md-inline-flex pt-0\">\n                     <li class=\"\">\n                       <a class=\"\" href=\"#!\">Dashboard</a>\n                       <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n                     </li>\n                     <li class=\"\">\n                       <a class=\"\" href=\"#!\">Project</a>\n                       <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n                     </li>\n                     <li class=\"active\">List</li>\n                   </ol>\n                 </div>\n               </div>\n               <!-- /Breadcrumb -->\n             </div>\n             <!-- <router-outlet></router-outlet> -->\n             <main>\n               <div class=\"container-fluid mt-5\">\n                 <h2>About Us page</h2>\n                 <br>\n                 <h5>1. Fixed side menu, hidden on small devices.</h5>\n                 <h5>2. Fixed Navbar. It will always stay visible on the top, even when you scroll down.</h5>\n                 <div style=\"height:400px\"></div>\n               </div>\n             </main>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n   <!-- Creates a layout with a left-positioned sidenav and explicit content. -->\n   <app-footer></app-footer>\n   </mat-drawer-container>\n   "

/***/ }),

/***/ "./src/app/app/components/aboutus/aboutus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/app/components/aboutus/aboutus.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
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

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app/components/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/app/components/home/home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-drawer{\r\n    /* width:15%; */\r\n    box-shadow:0 5px 5px rgba(0, 0, 0, 0.35);\r\n    position: fixed;\r\n    left: 0;\r\n    width: 225px;\r\n    margin-left: 0;\r\n    bottom: 0;\r\n    z-index: 100;\r\n    border-right: 1px solid #dedede;\r\n}\r\n.mat-nav-list{top: 80px;\r\n    position: relative;\r\n}\r\n.mat-list-item{\r\n    font-size: 14px;\r\n    font-weight:400;\r\n}"

/***/ }),

/***/ "./src/app/app/components/home/home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/app/components/home/home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer mode=\"side\" opened=\"true\">\n    <mat-nav-list>\n      <h3 mat-subheader>Main Menu</h3>\n      <a mat-list-item routerLink=\"/home/admin/clients\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp; Clients </a>\n      <a mat-list-item routerLink=\"/home/admin/projects\">\n        <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>&nbsp; Projects </a>\n      <a mat-list-item routerLink=\"/home/admin/members\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp; Members </a>\n      <a mat-list-item routerLink=\"/home/admin/projects\">\n        <i class=\"fa fa-tasks\" aria-hidden=\"true\"></i>&nbsp; Task </a>\n      <a mat-list-item routerLink=\"/home/admin/projects\">\n        <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>&nbsp; Invoice </a>\n    </mat-nav-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <div class=\"content\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"page-wrapper\">\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </mat-drawer-content>\n\n  <!-- Creates a layout with a left-positioned sidenav and explicit content. -->\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/app/components/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/app/components/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.menu.model */ "./src/app/app/app.menu.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showFiller = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.selectedMenu = _app_menu_model__WEBPACK_IMPORTED_MODULE_1__["MENU"].ADMIN;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app/footer/footer.component.css":
/*!*************************************************!*\
  !*** ./src/app/app/footer/footer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/footer/footer.component.html":
/*!**************************************************!*\
  !*** ./src/app/app/footer/footer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "                     \n<!-- Footer -->\n<footer class=\"page-footer font-small\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-left py-3\">&nbsp;&nbsp;© 2018 Copyright:\n      <a routerLink=\"#\"> Pushpendra</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->\n                        \n                    "

/***/ }),

/***/ "./src/app/app/footer/footer.component.ts":
/*!************************************************!*\
  !*** ./src/app/app/footer/footer.component.ts ***!
  \************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/app/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/app/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{position: fixed; width: 100%;}\r\n.img-circle{\r\n    border-radius: 50%;\r\n}\r\n.nav-menu{position: fixed;width:240px;left:0;top:0;margin:0;height:100%;background-color:#2c2f34;background-size:cover;background-repeat:no-repeat;background-position:center;z-index:1040;-webkit-backface-visibility:hidden;overflow:hidden;will-change:transform;backface-visibility:hidden;padding:0}\r\n.nav-menu.custom-scrollbar{list-style-type: none;}\r\n.nav-menu>ul{max-height:100vh}\r\n.nav-menu ul{list-style:none;padding-left:0}\r\n.nav-menu ul li{padding:0}\r\n.grey-skin .nav-menu .collapsible li {\r\n    background-color: transparent;\r\n}\r\n.logo-wrapper a{color:#fff;}\r\n.nav-menu .collapsible>li {\r\n    border-radius: 2px;\r\n}\r\n.nav-menu ul li {\r\n    padding: 0;\r\n}\r\n.grey-skin .nav-menu .collapsible li .collapsible-header {\r\n    color: #fff;\r\n    transition: all .3s linear;\r\n}\r\n.nav-menu .collapsible a {\r\n    color: #fff;\r\n    font-weight: 300;\r\n    font-size: .8rem;\r\n    height: 36px;\r\n    line-height: 36px;\r\n}\r\n.nav-menu a {\r\n    display: block;\r\n    font-size: 1rem;\r\n    height: 56px;\r\n    line-height: 56px;\r\n    padding-left: 20px;\r\n}\r\n.collapsible-body {\r\n    display: none;\r\n}\r\n/* .side-nav.right-aligned{right:0;left:auto;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}\r\n.side-nav.side-nav-light{background-color:#e5e5e5}\r\n.side-nav.side-nav-light .search-form input[type=text]{border-bottom-color:rgba(153,153,153,.3);color:#555!important}\r\n.side-nav .about,.side-nav .logo-wrapper,.side-nav .search-form input[type=text],.side-nav .social{border-bottom:1px solid rgba(255,255,255,.65)}\r\n.side-nav.side-nav-light .search-form input[type=text]::-webkit-input-placeholder{color:#555!important}\r\n.side-nav.side-nav-light .search-form input[type=text]::-moz-placeholder{color:#555!important}\r\n.side-nav.side-nav-light .search-form input[type=text]:-ms-input-placeholder{color:#555!important}\r\n.side-nav.side-nav-light .search-form input[type=text]::-ms-input-placeholder{color:#555!important}\r\n.side-nav.side-nav-light .search-form input[type=text]::placeholder{color:#555!important}\r\n.side-nav.side-nav-light .collapsible a{color:#555}\r\n.side-nav.side-nav-light .collapsible-body a{background-color:rgba(0,0,0,.1)}\r\n.side-nav.side-nav-light .collapsible li .collapsible-header:hover{background-color:rgba(0,0,0,.05)}\r\n.side-nav.side-nav-light .collapsible li .collapsible-header.active{color:#4285F4;background-color:transparent} */\r\n.skin-cyan{\r\n    background-color: #20c997;\r\n}"

/***/ }),

/***/ "./src/app/app/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/app/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer #drawer push class=\"example-sidenav\" mode=\"side\">\n  <!-- <header>  -->\n  <!-- Sidebar navigation -->\n  <div id=\"slide-out\" class=\"nav-menu skin-cyan\">\n    <ul class=\"custom-scrollbar\">\n      <!-- Logo -->\n      <li>\n        <div class=\"logo-wrapper waves-light\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <a href=\"#\">\n                <span>Main Menu</span>\n                <!-- <img src=\"https://mdbootstrap.com/img/logo/mdb-transparent.png\" class=\"img-fluid flex-center\"> -->\n              </a>\n            </div>\n            <div class=\"col-md-4\">\n              <a href=\"javascript:void(0)\" (click)=\"drawer.toggle()\">\n                <i class=\"fa fa-times fa-2x\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </li>\n      <!--/. Logo -->\n      <!-- Side navigation links -->\n      <li>\n        <ul class=\"collapsible collapsible-accordion\">\n          <li>\n            <a class=\"collapsible-header waves-effect arrow-r\">\n              <i class=\"fa fa-chevron-right\"></i> Projects\n              <i class=\"fa fa-angle-down rotate-icon\"></i>\n            </a>\n            <div class=\"collapsible-body\">\n              <ul>\n                <li>\n                  <a routerLink=\"#\" class=\"waves-effect\">Clients</a>\n                </li>\n                <li>\n                  <a routerLink=\"#\" class=\"waves-effect\">Members</a>\n                </li>\n                <li>\n                  <a routerLink=\"#\" class=\"waves-effect\">Task</a>\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li>\n            <a class=\"collapsible-header waves-effect arrow-r\">\n              <i class=\"fa fa-user\"></i> Clients\n              <i class=\"fa fa-angle-down rotate-icon\"></i>\n            </a>\n            <div class=\"collapsible-body\">\n              <ul>\n                <li>\n                  <a routerLink=\"#\" class=\"waves-effect\">For bloggers</a>\n                </li>\n                <li>\n                  <a routerLink=\"#\" class=\"waves-effect\">For authors</a>\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li>\n            <a class=\"collapsible-header waves-effect arrow-r\">\n              <i class=\"fa fa-user\"></i> Members\n              <i class=\"fa fa-angle-down rotate-icon\"></i>\n            </a>\n            <div class=\"collapsible-body\">\n              <ul>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Introduction</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Monthly meetings</a>\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li>\n            <a class=\"collapsible-header waves-effect arrow-r\">\n              <i class=\"fa fa-list\"></i> Task\n              <i class=\"fa fa-angle-down rotate-icon\"></i>\n            </a>\n            <div class=\"collapsible-body\">\n              <ul>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </li>\n      <!--/. Side navigation links -->\n    </ul>\n    <div class=\"sidenav-bg mask-strong\"></div>\n  </div>\n  <!-- </header> -->\n  <!--/. Sidebar navigation -->\n  <!-- <p>Auto-resizing sidenav</p>\n        <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n        <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n          Toggle extra text\n        </button> -->\n</mat-drawer>\n\n<!-- <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div> -->\n\n\n\n<!-- Navbar -->\n<nav class=\"navbar navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav header\">\n  <!-- SideNav slide-out button -->\n  <div class=\"float-left\">\n    <a href=\"javascript:void(0)\" mat-button (click)=\"drawer.toggle()\" data-activates=\"slide-out\" class=\"button-collapse\">\n      <i class=\"fa fa-bars\"></i>\n    </a>\n  </div>\n  <!-- Breadcrumb-->\n  <div class=\"breadcrumb-dn mr-auto\">\n    <p>Admin Panel</p>\n  </div>\n  <ul class=\"nav navbar-nav nav-flex-icons ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\">\n        <i class=\"fa fa-envelope\"></i>\n        <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\">\n        <i class=\"fa fa-comments-o\"></i>\n        <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\">\n        <i class=\"fa fa-user\"></i>\n        <span class=\"clearfix d-none d-sm-inline-block\">Account</span>\n      </a>\n    </li>\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <img src=\"http://via.placeholder.com/350x150\" class=\"img-circle\" alt=\"Profile\" width=\"40\" height=\"40\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fa fa-user\"></i>&nbsp;&nbsp;Profile</a>\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fa fa-cog\"></i>&nbsp;&nbsp;Setting</a>\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fa fa-power-off\"></i>&nbsp;&nbsp;Logout</a>\n      </div>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/app/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/app/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.showFiller = false;
    }
    HeaderComponent.prototype.openDrawer = function () {
        // this.$.drawer.toggle();
        console.log("Toggle Menu");
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/app/nav/nav.component.css":
/*!*******************************************!*\
  !*** ./src/app/app/nav/nav.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/nav/nav.component.html":
/*!********************************************!*\
  !*** ./src/app/app/nav/nav.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer mode=\"side\" opened=\"true\">\n    <mat-nav-list dense>\n        <h3 mat-subheader>Projects</h3>\n          <a mat-list-item routerLink=\"/home/admin/new-client\"> New Client  </a>\n          <a mat-list-item routerLink=\"/home/admin/new-project\"> New Project  </a>\n          <!-- <a mat-list-item routerLink=\"\">  </a>\n          <a mat-list-item routerLink=\"\">  </a>\n          <a mat-list-item routerLink=\"\">  </a>\n          <a mat-list-item routerLink=\"\">  </a>\n          <a mat-list-item routerLink=\"\">  </a>\n          <a mat-list-item routerLink=\"\">  </a> -->\n       </mat-nav-list>\n</mat-drawer>"

/***/ }),

/***/ "./src/app/app/nav/nav.component.ts":
/*!******************************************!*\
  !*** ./src/app/app/nav/nav.component.ts ***!
  \******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.showFiller = false;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n    padding: 0px;\r\n    margin: 0px;;\r\n}\r\n.wrapper{\r\n    background: #fff;\r\n}\r\n.pa-0{\r\n    padding: 0px !important;\r\n}\r\n.sp-header {\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.sp-logo-wrap {\r\n    padding-top: 19px;\r\n    padding-left: 15px;\r\n}\r\n.pull-left{\r\n    float: left !important;\r\n}\r\n.sp-logo-wrap .brand-img {\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.mr-10 {\r\n    margin-right: 10px !important;\r\n}\r\n.sp-logo-wrap .brand-text {\r\n    color: #212121;\r\n    display: inline-block;\r\n    font-family: \"Poppins\",sans-serif;\r\n    font-size: 21px;\r\n    text-transform: capitalize;\r\n}\r\n.form-group.pull-right {\r\n    padding-top: 19px;\r\n    padding-right: 15px;\r\n}\r\n.pull-right {\r\n    float: right!important;\r\n}\r\n.pr-10 {\r\n    padding-right: 10px !important;\r\n}\r\n.inline-block {\r\n    display: inline-block !important;\r\n}\r\n.clearfix {\r\n    overflow: hidden;\r\n    clear: both;\r\n    float: none;\r\n}\r\n.page-wrapper.auth-page {\r\n    background: #fff;\r\n}\r\n.btn-rounded{\r\n    border-radius: 60px !important;\r\n}\r\n.btn-success{\r\n    border: solid 1px rgba(139, 195, 74, 0.5);\r\n    color: #8BC34A;\r\n}\r\n.page-wrapper.auth-page {\r\n    background: #fff;\r\n}\r\n.full-width {\r\n    width: 100% !important;\r\n}\r\n.auth-form-wrap {\r\n    padding: 100px 0;\r\n}\r\n.align-center{\r\n    text-align: center !important;\r\n}\r\n.mb-30{\r\n    margin-bottom: 30px !important;\r\n}\r\n.h3{\r\n    font-size: 30px;\r\n    line-height: 40px;\r\n}\r\n.txt-grey {\r\n    color: #878787 !important;\r\n}\r\nh6, .panel-title {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    font-weight: normal;\r\n}\r\n.auth-form {\r\n    width: 400px;\r\n}\r\n.no-float {\r\n    float: none !important;\r\n}\r\n.mr-auto {\r\n    margin-right: auto !important;\r\n}\r\n.navbar.navbar-inverse.navbar-fixed-top {\r\n    border-bottom: none;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);\r\n    margin-bottom: 0;\r\n    min-height: 66px;\r\n    padding: 0 15px 0 0;\r\n}\r\n.wrapper.theme-5-active .navbar.navbar-inverse {\r\n    background: #f2f2f2;\r\n}\r\n.navbar.navbar-inverse {\r\n    background: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper  pa-0\">\n  <header class=\"sp-header\">\n    <div class=\"sp-logo-wrap pull-left\">\n      <a href=\"index.html\">\n        <img class=\"brand-img mr-10\" src=\"../assets/img/logo.png\" alt=\"brand\">\n        <span class=\"brand-text\">Admin</span>\n\n      </a>\n    </div>\n    <div class=\"form-group mb-0 pull-right\">\n      <span class=\"inline-block pr-10\">Don't have an account?</span>\n      <a mat-button class=\"btn btn-success inline-block btn  btn-rounded btn-outline\">Signup</a>\n    </div>\n    <div class=\"clearfix\"></div>\n  </header>\n</div>\n<!-- <mat-toolbar>\n  <span>My Application</span>\n</mat-toolbar> -->\n<div class=\"page-wrapper pa-0 ma-0 auth-page\">\n  <div class=\"page-wrapper pa-0 ma-0 auth-page\" style=\"min-height: 296px;\">\n    <div class=\"container-fluid\">\n      <!-- Row -->\n      <div class=\"table-struct full-width full-height\" style=\"height: 296px;\">\n        <div class=\"table-cell vertical-align-middle auth-form-wrap\">\n          <div class=\"auth-form  ml-auto mr-auto no-float align-center\">\n            <div class=\"row\">\n              <div class=\"col align-self-center\">\n                <div class=\"col\">\n                  <h2 class=\"h3 mb-30\">Sign in to Admin</h2>\n                  <h6 class=\"txt-grey align-center\">Enter your details below</h6>\n                  <!-- Material form login -->\n                  <form #login=\"ngForm\">\n                    <!-- <p class=\"h4 text-center mb-4\">Sign in</p> -->\n                    <mat-form-field class=\"full-width\">\n                      <input matInput type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" required>\n                    </mat-form-field>\n                    <!-- Material input email -->\n                    <br>\n                    <mat-form-field class=\"full-width\">\n                      <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n                    </mat-form-field>\n                    <!-- Material input email -->\n\n                    <div class=\"text-center mt-4\">\n                      <button [disabled]=\"login.invalid\" mat-button class=\"btn btn-default\" type=\"submit\" (click)=\"doLogin()\">Login</button>\n                    </div>\n                  </form>\n                  <!-- Material form login -->\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        this.router.navigate(["home"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.routes */ "./src/app/core/core.routes.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui-toolkit/ui-toolkit.module */ "./src/app/ui-toolkit/ui-toolkit.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_core_routes__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_5__["UiToolkitModule"]
            ],
            declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/core.routes.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.routes.ts ***!
  \*************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");

var routes = [{ path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }];


/***/ }),

/***/ "./src/app/ui-toolkit/mat-material.ts":
/*!********************************************!*\
  !*** ./src/app/ui-toolkit/mat-material.ts ***!
  \********************************************/
/*! exports provided: MATERIAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL", function() { return MATERIAL; });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");










var MATERIAL = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]
];


/***/ }),

/***/ "./src/app/ui-toolkit/ui-toolkit.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ui-toolkit/ui-toolkit.module.ts ***!
  \*************************************************/
/*! exports provided: UiToolkitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiToolkitModule", function() { return UiToolkitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mat_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat-material */ "./src/app/ui-toolkit/mat-material.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IMP_EXP = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]].concat(_mat_material__WEBPACK_IMPORTED_MODULE_3__["MATERIAL"]);
var UiToolkitModule = /** @class */ (function () {
    function UiToolkitModule() {
    }
    UiToolkitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: IMP_EXP,
            exports: IMP_EXP,
            declarations: []
        })
    ], UiToolkitModule);
    return UiToolkitModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _app_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app/app.module */ "./src/app/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NODEJS\Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map