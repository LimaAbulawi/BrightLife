"use strict";
(self["webpackChunkbrightLife"] = self["webpackChunkbrightLife"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard/auth.guard */ 3575);
/* harmony import */ var _protected_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protected/dashboard/dashboard.component */ 4290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'public' },
    {
        //lazyloding the public module
        path: "public",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_public_public_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./public/public.module */ 1627)).then(m => m.PublicModule)
    },
    {
        //lazyloding the protected module
        path: "protected",
        component: _protected_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_protected_protected_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./protected/protected.module */ 9313)).then(m => m.ProtectedModule)
    },
    {
        // redirect all paths that are not matching to the "public" route/path
        path: '**',
        redirectTo: 'public',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'brightLife';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "LOCALSTORAGE_TOKEN_KEY": () => (/* binding */ LOCALSTORAGE_TOKEN_KEY),
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







const LOCALSTORAGE_TOKEN_KEY = 'login_and_register';
function tokenGetter() {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__.JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:3000', 'localhost:8000']
            }
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__.JwtModule] }); })();


/***/ }),

/***/ 3575:
/*!******************************************!*\
  !*** ./src/app/auth-guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);



class AuthGuard {
    constructor(router, jwtService) {
        this.router = router;
        this.jwtService = jwtService;
    }
    canActivate() {
        if (this.jwtService.isTokenExpired()) {
            // this.router.navigate(['']);
            return false; // redirect to the base route and deny the routing 
        }
        else {
            return true; // allow the routing 
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4290:
/*!************************************************************!*\
  !*** ./src/app/protected/dashboard/dashboard.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/users.service */ 1880);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




class DashboardComponent {
    constructor(_ser) {
        this._ser = _ser;
        this.isShown = [];
        this.users = [];
        this.user = [];
        this.isdelete = [];
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 53, vars: 0, consts: [[1, "flex", "w-full"], [1, "flex", "flex-col", "bg-slate-600", "text-center", "dark", "w-[380px]", "h-[100vh]", "sm:h-auto"], [1, "grid", "grid-cols-6", "gap-4", "m-10", "align-middle"], [1, "col-start-1", "col-end-3", "..."], ["src", "../../../assets/App icon1.png", "alt", "", 1, "w-15", "h-15", "m-auto"], [1, "col-end-7", "col-span-2"], [1, "fa-solid", "fa-user"], [1, "relative", "inline-block", "text-left"], ["type", "button", "id", "menu-button", "aria-expanded", "true", "aria-haspopup", "true", 1, "inline-flex", "justify-center", "w-full", "rounded-md", "border", "border-gray-300", "shadow-sm", "px-4", "py-2", "bg-white", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-offset-gray-100", "focus:ring-indigo-500"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "aria-hidden", "true", 1, "-mr-1", "ml-2", "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["role", "menu", "aria-orientation", "vertical", "aria-labelledby", "menu-button", "tabindex", "-1", 1, "origin-top-right", "absolute", "right-0", "mt-2", "w-56", "rounded-md", "shadow-lg", "bg-white", "ring-1", "ring-black", "ring-opacity-5", "focus:outline-none"], ["role", "none", 1, "py-1"], ["href", "#", "role", "menuitem", "tabindex", "-1", "id", "menu-item-0", 1, "text-gray-700", "block", "px-4", "py-2", "text-sm"], ["href", "#", "role", "menuitem", "tabindex", "-1", "id", "menu-item-1", 1, "text-gray-700", "block", "px-4", "py-2", "text-sm"], ["href", "#", "role", "menuitem", "tabindex", "-1", "id", "menu-item-2", 1, "text-gray-700", "block", "px-4", "py-2", "text-sm"], ["method", "POST", "action", "#", "role", "none"], ["type", "submit", "role", "menuitem", "tabindex", "-1", "id", "menu-item-3", 1, "text-gray-700", "block", "w-full", "text-left", "px-4", "py-2", "text-sm"], [1, "navbar-brand"], ["ui-nav", "", 1, "nav", "ml-[30px]", "text-left", "flex", "flex-col", "md:ml-[10%]"], [1, "hidden-folded"], ["href", ""], [1, "text-muted"], ["routerLink", "/protected/users", 1, ""], [1, "hidden-folded", "aside_data"], [1, "fa-solid", "fa-users", "mr-2"], [1, "nav-text", "text-lg"], ["routerLink", "/protected/providers", 1, ""], [1, "fa-solid", "fa-truck", "mr-2"], ["routerLink", "/protected/categories", 1, ""], [1, "fa-solid", "fa-bars-staggered", "mr-2"], ["routerLink", "/protected/services", 1, ""], [1, "fa-light", "fa-display", "mr-2"], [1, "flex", "flex-col", "mt-10", "w-full"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div")(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Account settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 16)(22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "BrightLife");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 19)(27, "li", 20)(28, "a", 21)(29, "small", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 23)(32, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 27)(37, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 29)(42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 31)(47, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup], styles: [".app-aside[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  opacity: 1;\n  display: block !important;\n  position: fixed !important;\n  z-index: 1030;\n  float: left;\n  height: 100%;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.dark[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.87) !important;\n  background-color: #2e3e4e;\n}\n\n.app-aside[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translate3d(0, 0, 0);\n}\n\n.modal[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1055;\n  top: 0;\n  left: 0;\n  right: auto;\n  bottom: 0;\n}\n\n.navside[_ngcontent-%COMP%] {\n  border: inherit;\n}\n\n[layout=column][_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.no-radius[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0 1rem;\n  flex-shrink: 0;\n  min-height: 3.5rem;\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n\n.navbar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.de-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 1247px;\n  margin: auto;\n}\n\n.aside_data[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 73px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  width: 188px;\n}\n\n.aside_data[_ngcontent-%COMP%]:hover {\n  background-color: #73849d;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFFQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFHSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUlBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0kscUNBQUE7QUFKSjs7QUFNSTtFQUhKO0lBSVEsc0NBQUE7RUFITjtBQUNGOztBQUtJO0VBUEo7SUFRUSxpREFBQTtFQUZOO0FBQ0Y7O0FBSUk7RUFYSjtJQVlRLHNEQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksWUFBQTtBQUFKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYXNpZGUge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMDMwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwNTA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4uZGFyayB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzZTRlO1xufVxuXG4uYXBwLWFzaWRlIC5sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5tb2RhbD4ubGVmdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwNTU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiAwO1xufVxuXG4ubmF2c2lkZSB7XG4gICAgYm9yZGVyOiBpbmhlcml0O1xufVxuXG5bbGF5b3V0PWNvbHVtbl0ge1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm8tcmFkaXVzIHtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbn1cblxuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG59XG5cbi5uYXZiYXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyAubmF2c2lkZSAubmF2YmFyLWJyYW5kIHtcblxuLy8gfVxuXG4uZGUtbm9uZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi8vIFVTRSBJVFxuLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmludmVudG9yeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0MHB4O1xuXG4gICAgQHNjcmVlbiBzbSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDExMnB4O1xuICAgIH1cblxuICAgIEBzY3JlZW4gbWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMTEycHggYXV0byAxMTJweCA3MnB4O1xuICAgIH1cblxuICAgIEBzY3JlZW4gbGcge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMTEycHggYXV0byAxMTJweCA5NnB4IDk2cHg7XG4gICAgfVxufVxuXG4uY3VzdG9tQ29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyNDdweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5hc2lkZV9kYXRhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3M3B4O1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICB3aWR0aDogMTg4cHg7XG59XG5cbi5hc2lkZV9kYXRhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM4NDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 1880:
/*!*****************************************************!*\
  !*** ./src/app/protected/services/users.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class UsersService {
    constructor(http) {
        this.http = http;
        this.basicUrl = "http://api.brightlifeapp.com/public";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODdkZjdhYzM0ZGNjZTBhNDM1MzBmNjA4MThhMzNiY2U4MGUwMDhiZWUzY2U2NjQyZDg0MWU2ODM1NWQ5M2VhMDM3YTg4NDBjMzRmMDFkMjMiLCJpYXQiOjE2NTk0NDM2MTcuODYwNjI0MDc0OTM1OTEzMDg1OTM3NSwibmJmIjoxNjU5NDQzNjE3Ljg2MDYyNjkzNTk1ODg2MjMwNDY4NzUsImV4cCI6MTY5MDk3OTYxNy44NTc4MjAwMzQwMjcwOTk2MDkzNzUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.Acegr_Dc3Wf3MFlCWGYbDrWi_TpnABpQdZR4zizhuC3653ZMYeJIgEuJU1GS_f_OXmr4Zw86RJQGVl1_hoGL-PHsyXOds7sEAiVikHdUtPGVTNghBN3MnPwEApU4LNPBFT-SUxJJCoE2LqOBPyvRDM913-BhxLBeJ060Kd-HJHMl0muPtNKV8qxjDFQLq9-AStcVUc2IBjEsx7tFTVPSfFH20In8MpUR_utF5BbWag9VAaOnvsxOQdVH7a8n-UCXCHHFLIvRV5wEMDDIsQnRvHRwCQLvCsSG9aRCnrIGOFqUOKcjDvrouY_fQ0PMp_Fg1ZAHaUweZVC99H5lo6p97xU6VPrkCzKnCT0MH5BEFRepyA7tYKw-FwAIQjs65S-xSHEyapZUcCAYT4hxazDtIpjNtNGgf2LNaPEygm8gSqBtGnxyYhLKlPD00ztmXtEglBdee5fjsfz4Vot-dWPSvoik2qOBf-3PdraM06h28GnRyG05ngQNJShhpC2Cvw-iGDuPcOIJtAar9w3FB3Y6ss2q_4q7pwDWEz2Zw2Cp6kk9KjCApXlo88bVhEItJut5LK-2lz6bQuOIbK0iTDaOOfGwMMFjxRvQ4VCo40KQTfHraB7JeU3UsBN9rScEovxY2cMElzaWDttNoh4m0iMLcp0DT3w3rEajotjrSK0_Duk');
    }
    getList() {
        return this.http.get(this.basicUrl + "/api/v1/users", { 'headers': this.headers });
    }
    getProfile(Id) {
        return this.http.get(this.basicUrl + "/api/v1/user/" + Id, { 'headers': this.headers });
    }
    delete(Id) {
        return this.http.get(this.basicUrl + "/api/v1/user/delete/" + Id, { 'headers': this.headers });
    }
    edit(Id) {
    }
    addUsers(newUser) {
        debugger;
        return this.http.post(this.basicUrl + "/api/v1/user-create", newUser, { 'headers': this.headers });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map