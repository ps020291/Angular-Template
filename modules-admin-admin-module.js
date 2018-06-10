(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui-toolkit/ui-toolkit.module */ "./src/app/ui-toolkit/ui-toolkit.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/modules/admin/components/clients/clients.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/modules/admin/components/projects/projects.component.ts");
/* harmony import */ var _components_adm_members_adm_members_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adm-members/adm-members.component */ "./src/app/modules/admin/components/adm-members/adm-members.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "clients", component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"] },
    { path: "projects", component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: "members", component: _components_adm_members_adm_members_component__WEBPACK_IMPORTED_MODULE_6__["AdmMembersComponent"] }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ui_toolkit_ui_toolkit_module__WEBPACK_IMPORTED_MODULE_2__["UiToolkitModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_4__["ClientsComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _components_adm_members_adm_members_component__WEBPACK_IMPORTED_MODULE_6__["AdmMembersComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/adm-members/adm-members.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/components/adm-members/adm-members.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/components/adm-members/adm-members.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/components/adm-members/adm-members.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row heading-bg\">\n    <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\n      <h5 class=\"txt-dark\">Members List</h5>\n    </div>\n    <!-- Breadcrumb -->\n    <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\n      <!-- Breadcrumb-->\n      <div class=\"mr-auto\">\n        <ol class=\"breadcrumb clearfix d-none d-md-inline-flex pt-0\">\n          <li class=\"\">\n            <a class=\"\" routerLink=\"\">Dashboard</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"\">\n            <a class=\"\" routerLink=\"\">Member</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"active\">List</li>\n        </ol>\n      </div>\n    </div>\n    <!-- /Breadcrumb -->\n  </div>\n  <div class=\"container\">\n    <div class=\"panel panel-heading\">\n      <h3>Member List\n        <button mat-button class=\"btn btn-default pull-right\" type=\"submit\">Add Member</button>\n      </h3>\n    </div>\n    <main>\n      <!--Table-->\n      <table class=\"table table-striped\">\n\n        <!--Table head-->\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Organization Name</th>\n            <th>Contact Person</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Added At</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <!--Table head-->\n\n        <!--Table body-->\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Tech Mahindra</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Infosys</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n\n          </tr>\n        </tbody>\n        <!--Table body-->\n\n      </table>\n      <!--Table-->\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/components/adm-members/adm-members.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/components/adm-members/adm-members.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdmMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmMembersComponent", function() { return AdmMembersComponent; });
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

var AdmMembersComponent = /** @class */ (function () {
    function AdmMembersComponent() {
    }
    AdmMembersComponent.prototype.ngOnInit = function () {
    };
    AdmMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adm-members',
            template: __webpack_require__(/*! ./adm-members.component.html */ "./src/app/modules/admin/components/adm-members/adm-members.component.html"),
            styles: [__webpack_require__(/*! ./adm-members.component.css */ "./src/app/modules/admin/components/adm-members/adm-members.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmMembersComponent);
    return AdmMembersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/clients/clients.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/components/clients/clients.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/components/clients/clients.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/components/clients/clients.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row heading-bg\">\n    <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\n      <h5 class=\"txt-dark\">Client List</h5>\n    </div>\n    <!-- Breadcrumb -->\n    <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\n      <!-- Breadcrumb-->\n      <div class=\"mr-auto\">\n        <ol class=\"breadcrumb clearfix d-none d-md-inline-flex pt-0\">\n          <li class=\"\">\n            <a class=\"\" href=\"#!\">Dashboard</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"\">\n            <a class=\"\" href=\"#!\">Client</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"active\">List</li>\n        </ol>\n      </div>\n    </div>\n    <!-- /Breadcrumb -->\n  </div>\n  <div class=\"container\">\n    <div class=\"panel panel-heading\">\n      <h3>Clients List\n        <button mat-button class=\"btn btn-default pull-right\" type=\"submit\">Add Client</button>\n      </h3>\n    </div>\n    <main>\n      <!--Table-->\n      <table class=\"table table-striped\">\n\n        <!--Table head-->\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Organization Name</th>\n            <th>Contact Person</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Added At</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <!--Table head-->\n\n        <!--Table body-->\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Tech Mahindra</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Infosys</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n\n          </tr>\n        </tbody>\n        <!--Table body-->\n\n      </table>\n      <!--Table-->\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/components/clients/clients.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/components/clients/clients.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
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

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/modules/admin/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/modules/admin/components/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/components/projects/projects.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/components/projects/projects.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/admin/components/projects/projects.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/components/projects/projects.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row heading-bg\">\n    <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\n      <h5 class=\"txt-dark\">Project List</h5>\n    </div>\n    <!-- Breadcrumb -->\n    <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\n      <!-- Breadcrumb-->\n      <div class=\"mr-auto\">\n        <ol class=\"breadcrumb clearfix d-none d-md-inline-flex pt-0\">\n          <li class=\"\">\n            <a class=\"\" href=\"#!\">Dashboard</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"\">\n            <a class=\"\" href=\"#!\">Project</a>\n            <i class=\"fa fa-angle-right mx-2 blue-text\" aria-hidden=\"true\"></i>\n          </li>\n          <li class=\"active\">List</li>\n        </ol>\n      </div>\n    </div>\n    <!-- /Breadcrumb -->\n  </div>\n  <div class=\"container\">\n    <div class=\"panel panel-heading\">\n      <h3>Project List\n        <button mat-button class=\"btn btn-default pull-right\" type=\"submit\">Add Project</button>\n      </h3>\n    </div>\n    <main>\n      <!--Table-->\n      <table class=\"table table-striped\">\n\n        <!--Table head-->\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Organization Name</th>\n            <th>Contact Person</th>\n            <th>Phone</th>\n            <th>Email</th>\n            <th>Added At</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <!--Table head-->\n\n        <!--Table body-->\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Tech Mahindra</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Infosys</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>TCS</td>\n            <td>Adam</td>\n            <td>+9199999999</td>\n            <td>adam@gmail.com</td>\n            <td>25, May 2015</td>\n            <td>\n              <a mat-button [matMenuTriggerFor]=\"menu\">\n                <i class='fa fa-ellipsis-v'></i>\n              </a>\n              <mat-menu #menu=\"matMenu\">\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-pencil-square-o'></i>&nbsp;Edit</a>\n                <a routerLink='#' mat-menu-item>\n                  <i class='fa fa-trash'></i>&nbsp;Delete</a>\n              </mat-menu>\n            </td>\n\n          </tr>\n        </tbody>\n        <!--Table body-->\n\n      </table>\n      <!--Table-->\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admin/components/projects/projects.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/components/projects/projects.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/modules/admin/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/modules/admin/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module.js.map