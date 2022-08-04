"use strict";
(self["webpackChunkbrightLife"] = self["webpackChunkbrightLife"] || []).push([["src_app_public_public_module_ts"],{

/***/ 7747:
/*!************************************************************!*\
  !*** ./src/app/public/components/login/login.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 2748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function LoginComponent_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function LoginComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " must be valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.errorMessage = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
    }
    ngOnInit() {
        console.log(localStorage.getItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY));
        if (typeof localStorage.getItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY) != 'undefined' && localStorage.getItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY)) {
            console.log('alrady log');
            this.router.navigate(['/protected/']);
        }
    }
    login() {
        if (!this.loginForm.valid) {
            return;
        }
        this.authService.login(this.loginForm.value).subscribe((res) => {
            console.log(res.code);
            if (res.code == 200) {
                this.router.navigate(['/protected/']);
            }
        }, (error) => {
            console.log(error);
            this.errorMessage = error.error.msg;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 6, consts: [[1, "bg-homeIntro", "p-0", "h-[800px]", "grid", "w-full", "relative", "bg-no-repeat", "z-0", "bg-contain", "bg-bottom", "pb-40", "md:pb-[20%]"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "text-left", "mb-2"], [1, "login", "mb-1", "text-purple-600"], [1, "font-medium"], ["routerLink", "../register", 1, "text-purple-400"], [3, "formGroup", "ngSubmit"], ["class", "text-rose-600", 4, "ngIf"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "", "formControlName", "email", "placeholder", "email", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "", "formControlName", "password", "placeholder", "password", 1, "form-control"], ["type", "submit", 1, "inline-block", "px-6", "py-2.5", "bg-purple-600", "text-white", "font-medium", "text-xs", "leading-5", "uppercase", "rounded", "shadow-md", "hover:bg-purple-700", "hover:shadow-lg", "focus:bg-purple-700", "focus:shadow-lg", "focus:outline-none", "focus:ring-0", "active:bg-purple-800", "active:shadow-lg", "transition", "duration-150", "ease-in-out", "w-full", 3, "disabled"], [1, "text-rose-600"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_label_13_Template, 2, 1, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_label_20_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginComponent_label_21_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11)(23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, LoginComponent_label_26_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: [".backGround[_ngcontent-%COMP%] {\n  padding: 0;\n  display: grid;\n  height: auto;\n  width: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  z-index: 0;\n  background-image: url('bg.svg');\n  background-size: contain;\n  background-position: bottom;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 500px;\n  padding: 40px;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.2);\n  border-radius: 0.8rem !important;\n}\n\n.login[_ngcontent-%COMP%] {\n  letter-spacing: -0.025em !important;\n  line-height: 1.25 !important;\n  font-weight: 800 !important;\n  font-size: 2rem !important;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFBQTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtBQUdKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tHcm91bmR7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvYmcuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtIWltcG9ydGFudFxufVxuLmxvZ2lue1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuIl19 */"] });


/***/ }),

/***/ 7052:
/*!******************************************************************!*\
  !*** ./src/app/public/components/register/register.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 2748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
        });
    }
    ngOnInit() {
    }
    register() {
        debugger;
        if (!this.registerForm.valid) {
            return;
        }
        this.authService.register(this.registerForm.value).subscribe((res) => {
            // console.log(res);
            if (res.code == 200) {
                this.router.navigate(['/protected/']);
            }
            else {
                // alert("0"+res.success)
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 1, consts: [[1, "bg-homeIntro", "p-0", "h-[800px]", "grid", "w-full", "relative", "bg-no-repeat", "z-0", "bg-contain", "bg-bottom", "pb-40", "md:pb-[20%]"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "text-left", "mb-2"], [1, "login", "mb-1", "text-purple-600"], [1, "font-medium"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "text", "placeholder", "first name", "id", "exampleInputPassword1", "formControlName", "name", 1, "form-control"], ["type", "text", "placeholder", "last name", "id", "exampleInputPassword1", "formControlName", "last_name", 1, "form-control"], ["type", "number", "placeholder", "mopile number", "id", "exampleInputPassword1", "formControlName", "phone", 1, "form-control"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "placeholder", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "formControlName", "email", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], ["type", "password", "placeholder", "password", "id", "exampleInputPassword1", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "inline-block", "px-6", "py-2.5", "bg-purple-600", "text-white", "font-medium", "text-xs", "leading-5", "uppercase", "rounded", "shadow-md", "hover:bg-purple-700", "hover:shadow-lg", "focus:bg-purple-700", "focus:shadow-lg", "focus:outline-none", "focus:ring-0", "active:bg-purple-800", "active:shadow-lg", "transition", "duration-150", "ease-in-out", "w-full"], [1, ""], ["routerLink", "/login", 1, "text-purple-400"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Register Your self! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9)(20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Mopile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Already registerd? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".backGround[_ngcontent-%COMP%] {\n  padding: 0;\n  display: grid;\n  height: auto;\n  width: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  z-index: 0;\n  background-image: url('bg.svg');\n  background-size: contain;\n  background-position: bottom;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 500px;\n  padding: 40px;\n  position: absolute;\n  left: 50%;\n  top: -148px;\n  transform: translate(-50%, 50%);\n  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.2);\n  border-radius: 0.8rem !important;\n}\n\n.login[_ngcontent-%COMP%] {\n  letter-spacing: -0.025em !important;\n  line-height: 1.25 !important;\n  font-weight: 800 !important;\n  font-size: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQUdKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tHcm91bmR7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvYmcuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogLTE0OHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNTBweCByZ2IoMCAwIDAgLyAyMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IC44cmVtIWltcG9ydGFudFxufVxuLmxvZ2lue1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 5701:
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoutingModule": () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7747);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 7052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    {
        path: '**', redirectTo: 'login',
        pathMatch: "full"
    },
];
class PublicRoutingModule {
}
PublicRoutingModule.ɵfac = function PublicRoutingModule_Factory(t) { return new (t || PublicRoutingModule)(); };
PublicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PublicRoutingModule });
PublicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1627:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7747);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 7052);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-routing.module */ 5701);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class PublicModule {
}
PublicModule.ɵfac = function PublicModule_Factory(t) { return new (t || PublicModule)(); };
PublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _public_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _public_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);





class AuthService {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    login(loginRequest) {
        return this.http.post('http://api.brightlifeapp.com/public/api/v1/login', loginRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => localStorage.setItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY, res.data.token)));
    }
    register(loginRequest) {
        return this.http.post('http://api.brightlifeapp.com/public/api/v1/user-reg', loginRequest).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => localStorage.setItem(src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.LOCALSTORAGE_TOKEN_KEY, res.data.token)));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map