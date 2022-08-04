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
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_public_public_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./public/public.module */ 1627)).then(m => m.PublicModule)
    },
    {
        //lazyloding the protected module
        path: "protected",
        component: _protected_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_protected_protected_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./protected/protected.module */ 9313)).then(m => m.ProtectedModule)
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
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/public/services/auth.service */ 2748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class DashboardComponent {
    constructor(_ser, router) {
        this._ser = _ser;
        this.router = router;
        this.isShown = [];
        this.isdelete = [];
    }
    ngOnInit() {
    }
    logOut() {
        localStorage.removeItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY);
        return this.router.navigate(['/public/']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 38, vars: 0, consts: [[1, "flex", "w-full"], [1, "flex", "flex-col", "bg-[#0f172a]", "text-center", "text-white", "w-[280px]", "h-[100vh]", "sm:h-auto"], [1, "relative", "p-4"], ["src", "../../../assets/App icon1.png", "alt", "", 1, "w-28", "h-28", "m-auto"], [1, "navbar-brand"], ["ui-nav", "", 1, "nav", "text-left", "flex", "flex-col", "mx-[3%]"], [1, "hidden-folded", "mb-1"], ["href", ""], [1, "text-muted"], ["routerLink", "/protected/users", 1, "mb-1"], [1, "hidden-folded", "aside_data"], [1, "fa-solid", "fa-users", "mr-2"], [1, "nav-text", "text-lg"], ["routerLink", "/protected/providers", 1, "mb-1"], [1, "fa-solid", "fa-truck", "mr-2"], ["routerLink", "/protected/categories", 1, "mb-1"], [1, "fa-solid", "fa-bars-staggered", "mr-2"], ["routerLink", "/protected/services", 1, "mb-1"], [1, "fa-light", "fa-display", "mr-2"], [1, "mb-1", 3, "click"], [1, "flex", "flex-col", "mt-10", "w-full"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "BrightLife");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5)(7, "li", 6)(8, "a", 7)(9, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9)(12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 13)(17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 15)(22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 17)(27, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_31_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "logOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".app-aside[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  opacity: 1;\n  display: block !important;\n  position: fixed !important;\n  z-index: 1030;\n  float: left;\n  height: 100%;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.dark[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.87) !important;\n  background-color: #2e3e4e;\n}\n\n.app-aside[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translate3d(0, 0, 0);\n}\n\n.modal[_ngcontent-%COMP%]    > .left[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1055;\n  top: 0;\n  left: 0;\n  right: auto;\n  bottom: 0;\n}\n\n.navside[_ngcontent-%COMP%] {\n  border: inherit;\n}\n\n[layout=column][_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.no-radius[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0 1rem;\n  flex-shrink: 0;\n  min-height: 3.5rem;\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n\n.navbar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.de-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 1247px;\n  margin: auto;\n}\n\n.aside_data[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 73px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n\n.aside_data[_ngcontent-%COMP%]:hover {\n  background-color: #73849d;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFFQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFHSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUlBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0kscUNBQUE7QUFKSjs7QUFNSTtFQUhKO0lBSVEsc0NBQUE7RUFITjtBQUNGOztBQUtJO0VBUEo7SUFRUSxpREFBQTtFQUZOO0FBQ0Y7O0FBSUk7RUFYSjtJQVlRLHNEQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0FBREoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1hc2lkZSB7XHJcbiAgICB3aWR0aDogMTIuNXJlbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlM2U0ZTtcclxufVxyXG5cclxuLmFwcC1hc2lkZSAubGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5tb2RhbD4ubGVmdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDU1O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubmF2c2lkZSB7XHJcbiAgICBib3JkZXI6IGluaGVyaXQ7XHJcbn1cclxuXHJcbltsYXlvdXQ9Y29sdW1uXSB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uby1yYWRpdXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWluLWhlaWdodDogMy41cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbn1cclxuXHJcbi5uYXZiYXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLy8gLm5hdnNpZGUgLm5hdmJhci1icmFuZCB7XHJcblxyXG4vLyB9XHJcblxyXG4uZGUtbm9uZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLy8gVVNFIElUXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmludmVudG9yeS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQwcHg7XHJcblxyXG4gICAgQHNjcmVlbiBzbSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gMTEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQHNjcmVlbiBtZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDExMnB4IGF1dG8gMTEycHggNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBAc2NyZWVuIGxnIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMTEycHggYXV0byAxMTJweCA5NnB4IDk2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b21Db250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjQ3cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hc2lkZV9kYXRhIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNzNweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgLy8gd2lkdGg6IDIwNXB4O1xyXG59XHJcblxyXG4uYXNpZGVfZGF0YTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM4NDlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2748:
/*!*************************************************!*\
  !*** ./src/app/public/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);






class AuthService {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.basicUrl = "http://api.brightlifeapp.com/public";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', 'Bearer ' + localStorage.getItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY));
    }
    login(loginRequest) {
        return this.http.post(this.basicUrl + '/api/v1/login', loginRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => localStorage.setItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY, res.data.token)));
    }
    register(loginRequest) {
        return this.http.post(this.basicUrl + '/api/v1/user-reg', loginRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => localStorage.setItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY, res.data.token)));
    }
    logOut() {
        return this.http.get(this.basicUrl + "/api/v1/logout", { 'headers': this.headers });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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