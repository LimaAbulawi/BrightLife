"use strict";
(self["webpackChunkbrightLife"] = self["webpackChunkbrightLife"] || []).push([["src_app_protected_protected_module_ts"],{

/***/ 700:
/*!*************************************************************************!*\
  !*** ./src/app/protected/components/categories/categories.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesComponent": () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_categorys_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categorys.service */ 2238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function CategoriesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesComponent_div_17_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.addCategorys()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15)(8, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CategoriesComponent_div_17_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onFileChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18)(11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addCategorysForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.addCategorysForm.valid);
} }
function CategoriesComponent_div_18_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 27);
} }
function CategoriesComponent_div_18_div_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 28);
} }
function CategoriesComponent_div_18_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "form", 29)(2, "div", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const Category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", Category_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", Category_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://api.brightlifeapp.com/public/", Category_r7.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CategoriesComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 23)(9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_div_18_div_1_Template_div_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const Category_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.details(Category_r7.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CategoriesComponent_div_18_div_1_i_10_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CategoriesComponent_div_18_div_1_i_11_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CategoriesComponent_div_18_div_1_div_13_Template, 14, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Category_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Category_r7.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Category_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.isShown[Category_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isShown[Category_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isShown[Category_r7.id]);
} }
function CategoriesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoriesComponent_div_18_div_1_Template, 14, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.Categorys);
} }
class CategoriesComponent {
    constructor(_ser) {
        this._ser = _ser;
        this.isAddCatigorie = false;
        this.isShown = [];
        this.Categorys = [];
        this.basicUrl = "https://api.brightlifeapp.com/public";
        this.addCategorysForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
    }
    ngOnInit() {
        this.getCategorysListFromService();
    }
    addCategorysDiv() {
        this.isAddCatigorie = !this.isAddCatigorie;
    }
    addCategorys() {
        this._ser.addCategorys(this.addCategorysForm.value).subscribe((res) => {
            console.log(res);
        });
    }
    getCategorysListFromService() {
        return this._ser.getCategoryList().subscribe((res) => {
            this.Categorys = res.Categorys;
            console.log("this.Categorys", this.Categorys);
        });
    }
    details(Id) {
        this.isShown[Id] = !this.isShown[Id];
    }
    onFileChange(event) {
        console.log(event);
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categorys_service__WEBPACK_IMPORTED_MODULE_0__.CategorysService)); };
CategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 19, vars: 2, consts: [[1, "flex", "items-center", "justify-between", "w-full", "container", "mb-12"], [1, "text-4xl", "font-extrabold", "text-[#74b9af]"], [1, "mr-[200px]"], ["type", "button", 1, "ml-4", "btn", "btn-light", 3, "click"], [1, "grid"], [1, "inventory-grid", "z-10", "sticky", "top-0", "grid", "gap-4", "py-4", "px-6", "md:px-8", "shadow", "text-md", "font-semibold", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], [1, "hidden", "md:block"], ["class", " items-center py-3 px-6 md:px-8", 4, "ngIf"], [4, "ngIf"], [1, "items-center", "py-3", "px-6", "md:px-8"], ["action", "", "enctype", "multipart/form-data", 1, "border-b", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-container", "grid-template", "w-full", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1", "grid-item"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["for", "floatingInputGrid"], [1, "m-1", "grid-item"], ["type", "file", "placeholder", "image", 1, "form-control", "mt-[11px]", 3, "change"], ["file", ""], [1, "flex", "items-center", "justify-center", "customContainer", "px-4", "py-2"], ["type", "submit", 1, "btn", "border", "border-white", "text-slate-600", "bg-[#90c8ac]", "hover:bg-[#76a38d]", "w-36", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "inventory-grid", "grid", "items-center", "gap-4", "py-3", "px-6", "md:px-8", "border-b"], [1, "items-center", "hidden", "md:block"], [1, "flex", "items-center"], [1, "min-w-10", "min-h-7", "h-7", "px-2", "leading-6", 3, "click"], ["class", "fas fa-angle-down cursor-pointer", 4, "ngIf"], ["class", "fas fa-angle-up cursor-pointer", 4, "ngIf"], [1, "fas", "fa-angle-down", "cursor-pointer"], [1, "fas", "fa-angle-up", "cursor-pointer"], ["action", "", 1, "border-b"], [1, "flex", "w-ful", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1"], ["type", "number", "id", "floatingInputGrid", "placeholder", "Id", 1, "form-control", "out", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Name", 1, "form-control", 3, "value"], [1, "form-floating", "m-1", "w-1/4"], ["alt", "", 3, "src"], [1, "flex", "items-center", "justify-between", "customContainer", "px-4", "py-2"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All Categorys ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_4_listener() { return ctx.addCategorysDiv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoriesComponent_div_17_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesComponent_div_18_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAddCatigorie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Categorys);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: auto auto 10px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.grid-template[_ngcontent-%COMP%] {\n  grid-template-columns: auto auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQ0FBQTtBQUNKOztBQUNJO0VBSEo7SUFJUSxzQ0FBQTtFQUVOO0FBQ0Y7O0FBQUk7RUFQSjtJQVFRLGlEQUFBO0VBR047QUFDRjs7QUFESTtFQVhKO0lBWVEsc0RBQUE7RUFJTjtBQUNGOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQURBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSwwQ0FBQTtBQUtKIiwiZmlsZSI6ImNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uaW52ZW50b3J5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDQwcHg7XG5cbiAgICBAc2NyZWVuIHNtIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gMTEycHg7XG4gICAgfVxuXG4gICAgQHNjcmVlbiBtZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxMTJweCBhdXRvIDExMnB4IDcycHg7XG4gICAgfVxuXG4gICAgQHNjcmVlbiBsZyB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxMTJweCBhdXRvIDExMnB4IDk2cHggOTZweDtcbiAgICB9XG59XG5cbi5jdXN0b21Db250YWluZXIge1xuICAgIG1heC13aWR0aDogNjkwcHg7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMTBweDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmdyaWQtdGVtcGxhdGV7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ 913:
/*!***********************************************************************!*\
  !*** ./src/app/protected/components/providers/providers.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidersComponent": () => (/* binding */ ProvidersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_suppliers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/suppliers.service */ 1454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ProvidersComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProvidersComponent_div_17_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.addSuppliers()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProvidersComponent_div_17_Template_input_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onFileChange($event, "image")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20)(33, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 23, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProvidersComponent_div_17_Template_input_change_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onFileChange($event, "cover")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24)(38, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Add Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addSuppliersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.addSuppliersForm.valid);
} }
function ProvidersComponent_div_18_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
} }
function ProvidersComponent_div_18_div_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
} }
function ProvidersComponent_div_18_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "form", 35)(2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const supplier_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", supplier_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", supplier_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", supplier_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", supplier_r9.phone);
} }
function ProvidersComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 29)(9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_div_18_div_1_Template_div_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const supplier_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.details(supplier_r9.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProvidersComponent_div_18_div_1_i_10_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProvidersComponent_div_18_div_1_i_11_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProvidersComponent_div_18_div_1_div_13_Template, 20, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", supplier_r9.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", supplier_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.isShown[supplier_r9.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.isShown[supplier_r9.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.isShown[supplier_r9.id]);
} }
function ProvidersComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProvidersComponent_div_18_div_1_Template, 14, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.suppliers);
} }
class ProvidersComponent {
    constructor(fb, cd, _ser) {
        this.fb = fb;
        this.cd = cd;
        this._ser = _ser;
        this.isShown = [];
        this.isAddSupplier = false;
        this.suppliers = [];
        // gloabal file name
        this.addSuppliersForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: [''],
            location: [''],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            cover: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            done: [false]
        });
    }
    ngOnInit() {
        this.getSuppliersListFromService();
    }
    getSuppliersListFromService() {
        return this._ser.getSuppliersList().subscribe((res) => {
            this.suppliers = res.suppliers;
            console.log("this.suppliers", this.suppliers);
        });
    }
    details(Id) {
        this.isShown[Id] = !this.isShown[Id];
    }
    addSuppliersDiv() {
        this.isAddSupplier = !this.isAddSupplier;
    }
    addSuppliers() {
        console.log(this.addSuppliersForm.value);
        const formData = new FormData();
        Object.entries(this.addSuppliersForm.value).forEach(([key, value]) => {
            formData.append(key, value);
            console.log(key + ':' + value);
        });
        console.log(formData);
        this._ser.addSuppliers(formData).subscribe((res) => {
            console.log(res);
        });
    }
    // on file select event
    onFileChange(event, inputName) {
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            // just checking if it is an image, ignore if you want
            this.addSuppliersForm.patchValue({
                [inputName]: file
            });
            // need to run CD since file load runs outside of zone
            this.cd.markForCheck();
        }
    }
}
ProvidersComponent.ɵfac = function ProvidersComponent_Factory(t) { return new (t || ProvidersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_suppliers_service__WEBPACK_IMPORTED_MODULE_0__.SuppliersService)); };
ProvidersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProvidersComponent, selectors: [["app-providers"]], decls: 19, vars: 2, consts: [[1, "flex", "items-center", "justify-between", "w-full", "container", "mb-12"], [1, "text-4xl", "font-extrabold"], [1, "mr-[200px]"], ["type", "button", 1, "ml-4", "btn", "btn-light", 3, "click"], [1, "grid"], [1, "inventory-grid", "z-10", "sticky", "top-0", "grid", "gap-4", "py-4", "px-6", "md:px-8", "shadow", "text-md", "font-semibold", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], [1, "hidden", "md:block"], ["class", " items-center py-3 px-6 md:px-8", 4, "ngIf"], [4, "ngIf"], [1, "items-center", "py-3", "px-6", "md:px-8"], ["action", "", 1, "border-b", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-container", "grid-template", "w-full", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1", "grid-item"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["for", "floatingInputGrid"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "password", "formControlName", "password", 1, "form-control", "out"], ["type", "text", "placeholder", "phone", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "description", "formControlName", "description", 1, "form-control"], ["type", "", "placeholder", "location", "formControlName", "location", 1, "form-control"], [1, "m-1", "grid-item"], ["type", "file", "placeholder", "image", 1, "form-control", 3, "change"], ["file", ""], ["type", "file", "placeholder", "cover", 1, "form-control", 3, "change"], [1, "flex", "items-center", "justify-center", "customContainer", "px-4", "py-2"], ["type", "submit", 1, "btn", "border", "border-white", "text-slate-600", "bg-[#90c8ac]", "hover:bg-[#76a38d]", "w-[68px]", "w-36", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "inventory-grid", "grid", "items-center", "gap-4", "py-3", "px-6", "md:px-8", "border-b"], [1, "items-center", "hidden", "md:block"], [1, "flex", "items-center"], [1, "min-w-10", "min-h-7", "h-7", "px-2", "leading-6", 3, "click"], ["class", "fas fa-angle-down cursor-pointer", 4, "ngIf"], ["class", "fas fa-angle-up cursor-pointer", 4, "ngIf"], [1, "fas", "fa-angle-down", "cursor-pointer"], [1, "fas", "fa-angle-up", "cursor-pointer"], ["action", "", 1, "border-b"], [1, "flex", "w-ful", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1"], ["type", "number", "id", "floatingInputGrid", "placeholder", "Id", 1, "form-control", "out", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Name", 1, "form-control", 3, "value"], [1, "form-floating", "m-1", "w-1/4"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Email", 1, "form-control", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "phone", 1, "form-control", 3, "value"], [1, "flex", "items-center", "justify-between", "customContainer", "px-4", "py-2"]], template: function ProvidersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All Providers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvidersComponent_Template_button_click_4_listener() { return ctx.addSuppliersDiv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProvidersComponent_div_17_Template, 40, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProvidersComponent_div_18_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAddSupplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.suppliers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: auto auto 10px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.grid-template[_ngcontent-%COMP%] {\n  grid-template-columns: auto auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0FBQ0o7O0FBQ0k7RUFISjtJQUlRLHNDQUFBO0VBRU47QUFDRjs7QUFBSTtFQVBKO0lBUVEsaURBQUE7RUFHTjtBQUNGOztBQURJO0VBWEo7SUFZUSxzREFBQTtFQUlOO0FBQ0Y7O0FBREE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FBSUo7O0FBREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLDBDQUFBO0FBS0oiLCJmaWxlIjoicHJvdmlkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmludmVudG9yeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byA0MHB4O1xuXG4gICAgQHNjcmVlbiBzbSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDExMnB4O1xuICAgIH1cblxuICAgIEBzY3JlZW4gbWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMTEycHggYXV0byAxMTJweCA3MnB4O1xuICAgIH1cblxuICAgIEBzY3JlZW4gbGcge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggMTEycHggYXV0byAxMTJweCA5NnB4IDk2cHg7XG4gICAgfVxufVxuXG4uY3VzdG9tQ29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY5MHB4O1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ncmlkLXRlbXBsYXRle1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 6593:
/*!*********************************************************************!*\
  !*** ./src/app/protected/components/services/services.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/services.service */ 4230);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ServicesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ServicesComponent_div_17_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.addServices()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "category_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "supplier_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19)(24, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ServicesComponent_div_17_Template_input_change_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onFileChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22)(27, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addServicesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.addServicesForm.valid);
} }
function ServicesComponent_div_18_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 31);
} }
function ServicesComponent_div_18_div_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 32);
} }
function ServicesComponent_div_18_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "form", 33)(2, "div", 34)(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const service_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", service_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", service_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", service_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", service_r7.phone);
} }
function ServicesComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27)(9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_div_18_div_1_Template_div_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const service_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.details(service_r7.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ServicesComponent_div_18_div_1_i_10_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ServicesComponent_div_18_div_1_i_11_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ServicesComponent_div_18_div_1_div_13_Template, 20, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", service_r7.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", service_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.isShown[service_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isShown[service_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isShown[service_r7.id]);
} }
function ServicesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServicesComponent_div_18_div_1_Template, 14, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.services);
} }
class ServicesComponent {
    constructor(_ser) {
        this._ser = _ser;
        this.isAddService = false;
        this.isShown = [];
        this.services = [];
        this.addServicesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            supplier_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
        });
    }
    ngOnInit() {
        this.getServicesListFromService();
    }
    addServiceDiv() {
        this.isAddService = !this.isAddService;
    }
    addServices() {
        this._ser.addServices(this.addServicesForm.value).subscribe((res) => {
            console.log(res);
        });
    }
    getServicesListFromService() {
        // return this._ser.getServicesList().subscribe((res: any) => {
        //   this.services = res.services;
        //   console.log("this.services", this.services);
        // })
    }
    details(Id) {
        this.isShown[Id] = !this.isShown[Id];
    }
    onFileChange(event) {
        console.log(event);
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_services_service__WEBPACK_IMPORTED_MODULE_0__.ServicesService)); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 19, vars: 2, consts: [[1, "flex", "items-center", "justify-between", "w-full", "container", "mb-12"], [1, "text-4xl", "font-extrabold", "text-[#58c5b6]"], [1, "mr-[200px]"], ["type", "button", 1, "ml-4", "btn", "btn-light", 3, "click"], [1, "grid"], [1, "inventory-grid", "z-10", "sticky", "top-0", "grid", "gap-4", "py-4", "px-6", "md:px-8", "shadow", "text-md", "font-semibold", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], [1, "hidden", "md:block"], ["class", " items-center py-3 px-6 md:px-8", 4, "ngIf"], [4, "ngIf"], [1, "items-center", "py-3", "px-6", "md:px-8"], ["action", "", "enctype", "multipart/form-data", 1, "border-b", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-container", "grid-template", "w-full", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1", "grid-item"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["for", "floatingInputGrid"], ["type", "text", "placeholder", "Email", "formControlName", "content", 1, "form-control"], ["type", "number", "placeholder", "phone", "formControlName", "price", 1, "form-control"], ["type", "number", "placeholder", "description", "formControlName", "category_id", 1, "form-control"], ["type", "number", "placeholder", "description", "formControlName", "supplier_id", 1, "form-control"], [1, "m-1", "grid-item"], ["type", "file", "placeholder", "image", 1, "form-control", "mt-[10px]", 3, "change"], ["file", ""], [1, "flex", "items-center", "justify-center", "customContainer", "px-4", "py-2"], ["type", "submit", 1, "btn", "border", "border-white", "text-slate-600", "bg-[#90c8ac]", "hover:bg-[#76a38d]", "w-36", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "inventory-grid", "grid", "items-center", "gap-4", "py-3", "px-6", "md:px-8", "border-b"], [1, "items-center", "hidden", "md:block"], [1, "flex", "items-center"], [1, "min-w-10", "min-h-7", "h-7", "px-2", "leading-6", 3, "click"], ["class", "fas fa-angle-down cursor-pointer", 4, "ngIf"], ["class", "fas fa-angle-up cursor-pointer", 4, "ngIf"], [1, "fas", "fa-angle-down", "cursor-pointer"], [1, "fas", "fa-angle-up", "cursor-pointer"], ["action", "", 1, "border-b"], [1, "flex", "w-ful", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1"], ["type", "number", "id", "floatingInputGrid", "placeholder", "Id", 1, "form-control", "out", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Name", 1, "form-control", 3, "value"], [1, "form-floating", "m-1", "w-1/4"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Email", 1, "form-control", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "phone", 1, "form-control", 3, "value"], [1, "flex", "items-center", "justify-between", "customContainer", "px-4", "py-2"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_Template_button_click_4_listener() { return ctx.addServiceDiv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ServicesComponent_div_17_Template, 29, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ServicesComponent_div_18_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAddService);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.services);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: auto auto 10px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.grid-template[_ngcontent-%COMP%] {\n  grid-template-columns: auto auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFDSTtFQUhKO0lBSVEsc0NBQUE7RUFFTjtBQUNGOztBQUFJO0VBUEo7SUFRUSxpREFBQTtFQUdOO0FBQ0Y7O0FBREk7RUFYSjtJQVlRLHNEQUFBO0VBSU47QUFDRjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksMENBQUE7QUFLSiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gNDBweDtcblxuICAgIEBzY3JlZW4gc20ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byAxMTJweDtcbiAgICB9XG5cbiAgICBAc2NyZWVuIG1kIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDExMnB4IGF1dG8gMTEycHggNzJweDtcbiAgICB9XG5cbiAgICBAc2NyZWVuIGxnIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDExMnB4IGF1dG8gMTEycHggOTZweCA5NnB4O1xuICAgIH1cbn1cblxuLmN1c3RvbUNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2OTBweDtcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxMHB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZ3JpZC10ZW1wbGF0ZXtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XG59Il19 */"] });


/***/ }),

/***/ 6504:
/*!***************************************************************!*\
  !*** ./src/app/protected/components/users/users.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 1880);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function UsersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersComponent_div_19_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.addUsers()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19)(24, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20)(27, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add Provider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addUsersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.addUsersForm.valid);
} }
function UsersComponent_div_20_div_1_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 29);
} }
function UsersComponent_div_20_div_1_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 30);
} }
function UsersComponent_div_20_div_1_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 29);
} }
function UsersComponent_div_20_div_1_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 30);
} }
function UsersComponent_div_20_div_1_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 29);
} }
function UsersComponent_div_20_div_1_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 30);
} }
function UsersComponent_div_20_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 32)(4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 38)(18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_19_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.edit(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_19_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.delete(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.email);
} }
function UsersComponent_div_20_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 32)(4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 38)(18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_20_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.edit(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_20_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.delete(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.email);
} }
function UsersComponent_div_20_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Addresses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 32)(4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 38)(18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_21_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.edit(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_div_21_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.delete(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", user_r5.email);
} }
function UsersComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 25)(8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_div_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const user_r5 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.OrdersDetails(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UsersComponent_div_20_div_1_i_9_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UsersComponent_div_20_div_1_i_10_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25)(12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_div_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const user_r5 = restoredCtx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.details(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UsersComponent_div_20_div_1_i_13_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UsersComponent_div_20_div_1_i_14_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25)(16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_div_20_div_1_Template_div_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const user_r5 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.AddressesDetails(user_r5.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UsersComponent_div_20_div_1_i_17_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UsersComponent_div_20_div_1_i_18_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UsersComponent_div_20_div_1_div_19_Template, 22, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UsersComponent_div_20_div_1_div_20_Template, 22, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UsersComponent_div_20_div_1_div_21_Template, 22, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r5.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isOrderShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isOrderShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isAddressesShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isAddressesShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isOrderShown[user_r5.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isAddressesShown[user_r5.id]);
} }
function UsersComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UsersComponent_div_20_div_1_Template, 22, 11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.users);
} }
class UsersComponent {
    constructor(_ser) {
        this._ser = _ser;
        this.isShown = [];
        this.isOrderShown = [];
        this.isAddressesShown = [];
        this.users = [];
        this.user = [];
        this.isdelete = [];
        this.isAddUser = false;
        this.addUsersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
    }
    ngOnInit() {
        this.getListFromService();
    }
    getListFromService() {
        return this._ser.getList().subscribe((res) => {
            this.users = res.users;
            console.log("this.users", this.users);
        });
    }
    details(Id) {
        this.isShown[Id] = !this.isShown[Id];
        return this._ser.getProfile(Id).
            subscribe((res) => {
            this.user = res;
            console.log("this.user", this.user);
        });
    }
    OrdersDetails(Id) {
        this.isOrderShown[Id] = !this.isOrderShown[Id];
    }
    AddressesDetails(Id) {
        this.isAddressesShown[Id] = !this.isAddressesShown[Id];
    }
    delete(Id) {
        return this._ser.delete(Id).subscribe((res) => {
            this.isdelete = res;
            console.log("delete", this.isdelete);
        });
    }
    edit(Id) {
    }
    addUserDiv() {
        this.isAddUser = !this.isAddUser;
    }
    addUsers() {
        debugger;
        this._ser.addUsers(this.addUsersForm.value).subscribe((res) => {
            console.log(res);
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 21, vars: 2, consts: [[1, "flex", "items-center", "justify-between", "w-full", "container", "mb-12"], [1, "text-4xl", "font-extrabold", "text-[#385848]"], [1, "mr-[200px]"], ["type", "button", 1, "ml-4", "btn", "btn-light", 3, "click"], [1, "grid"], [1, "inventory-grid", "z-10", "sticky", "top-0", "grid", "gap-4", "py-4", "px-6", "md:px-8", "shadow", "text-md", "font-semibold", "text-secondary", "bg-gray-50", "dark:bg-black", "dark:bg-opacity-5"], [1, "hidden", "md:block"], ["class", " items-center py-3 px-6 md:px-8", 4, "ngIf"], [4, "ngIf"], [1, "items-center", "py-3", "px-6", "md:px-8"], ["action", "", "enctype", "multipart/form-data", 1, "border-b", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-container", "grid-template", "w-full", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1", "grid-item"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["for", "floatingInputGrid"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "password", "formControlName", "password", 1, "form-control", "out"], ["type", "password", "placeholder", "password", "formControlName", "password_confirmation", 1, "form-control", "out"], ["type", "text", "placeholder", "phone", "formControlName", "phone", 1, "form-control"], [1, "m-1", "grid-item"], [1, "flex", "items-center", "justify-center", "customContainer", "px-4", "py-2"], ["type", "submit", 1, "btn", "border", "border-white", "text-slate-600", "bg-[#90c8ac]", "hover:bg-[#76a38d]", "w-[68px]", "w-36", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "inventory-grid", "grid", "items-center", "gap-4", "py-3", "px-6", "md:px-8", "border-b"], [1, "items-center", "hidden", "md:block"], [1, "flex", "items-center"], [1, "min-w-10", "min-h-7", "h-7", "px-2", "leading-6", 3, "click"], ["class", "fas fa-angle-down cursor-pointer", 4, "ngIf"], ["class", "fas fa-angle-up cursor-pointer", 4, "ngIf"], [1, "fas", "fa-angle-down", "cursor-pointer"], [1, "fas", "fa-angle-up", "cursor-pointer"], [1, "text-center", "mt-2", "text-lg"], ["action", "", 1, "border-b"], [1, "flex", "w-ful", "p-1", "justify-center", "mt-7", "mx-auto", "mb-1"], [1, "form-floating", "m-1"], ["type", "number", "id", "floatingInputGrid", "placeholder", "Id", 1, "form-control", "out", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Name", 1, "form-control", 3, "value"], ["type", "text", "id", "floatingInputGrid", "placeholder", "Email", 1, "form-control", 3, "value"], [1, "flex", "items-center", "justify-between", "customContainer", "px-4", "py-2"], ["type", "button", 1, "btn", "border", "border-white", "text-slate-600", "bg-[#90c8ac]", "hover:bg-[#76a38d]", "w-[68px]", 3, "click"], ["type", "button", 1, "btn", "border", "border-white", "text-white", "bg-red-600", "hover:bg-red-700", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_4_listener() { return ctx.addUserDiv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UsersComponent_div_19_Template, 29, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UsersComponent_div_20_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAddUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 3.5rem;\n  white-space: nowrap;\n  float: none;\n  margin-right: 0;\n}\n\n.inventory-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 48px auto 40px;\n}\n\n@media (max-width: 990px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px auto 112px;\n  }\n}\n\n@media (min-width: 768px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n\n@media (min-width: 992px) {\n  .inventory-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 48px 112px auto 112px 96px 96px;\n  }\n}\n\n.customContainer[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: auto auto 10px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.grid-template[_ngcontent-%COMP%] {\n  grid-template-columns: auto auto auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFDSTtFQUhKO0lBSVEsc0NBQUE7RUFFTjtBQUNGOztBQUFJO0VBUEo7SUFRUSxpREFBQTtFQUdOO0FBQ0Y7O0FBREk7RUFYSjtJQVlRLHNEQUFBO0VBSU47QUFDRjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksMENBQUE7QUFJSiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5pbnZlbnRvcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG8gNDBweDtcblxuICAgIEBzY3JlZW4gc20ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0byAxMTJweDtcbiAgICB9XG5cbiAgICBAc2NyZWVuIG1kIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDExMnB4IGF1dG8gMTEycHggNzJweDtcbiAgICB9XG5cbiAgICBAc2NyZWVuIGxnIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDExMnB4IGF1dG8gMTEycHggOTZweCA5NnB4O1xuICAgIH1cbn1cblxuLmN1c3RvbUNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2OTBweDtcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxMHB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ncmlkLXRlbXBsYXRle1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 1056:
/*!*******************************************************!*\
  !*** ./src/app/protected/protected-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedRoutingModule": () => (/* binding */ ProtectedRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/categories/categories.component */ 700);
/* harmony import */ var _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/providers/providers.component */ 913);
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services/services.component */ 6593);
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/users.component */ 6504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    { path: "", component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent },
    { path: "users", component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent },
    { path: "providers", component: _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_1__.ProvidersComponent },
    { path: "categories", component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_0__.CategoriesComponent },
    { path: "services", component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent },
];
class ProtectedRoutingModule {
}
ProtectedRoutingModule.ɵfac = function ProtectedRoutingModule_Factory(t) { return new (t || ProtectedRoutingModule)(); };
ProtectedRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProtectedRoutingModule });
ProtectedRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProtectedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 9313:
/*!***********************************************!*\
  !*** ./src/app/protected/protected.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtectedModule": () => (/* binding */ ProtectedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protected-routing.module */ 1056);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4290);
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/users/users.component */ 6504);
/* harmony import */ var _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/providers/providers.component */ 913);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categories/categories.component */ 700);
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services/services.component */ 6593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class ProtectedModule {
}
ProtectedModule.ɵfac = function ProtectedModule_Factory(t) { return new (t || ProtectedModule)(); };
ProtectedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProtectedModule });
ProtectedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProtectedModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent,
        _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_3__.ProvidersComponent,
        _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesComponent,
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _protected_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProtectedRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2238:
/*!*********************************************************!*\
  !*** ./src/app/protected/services/categorys.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorysService": () => (/* binding */ CategorysService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class CategorysService {
    constructor(http) {
        this.http = http;
        this.basicUrl = "https://api.brightlifeapp.com/public";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('mimeType', 'multipart/form-data')
            .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTkzNDk5NDE4ODIxNTMzYzg5ODBhYmFiNDRhYTk2OWRmYTc5MWIyYjk0YTRkZGI1NGMzMDExZTY3NDgwZTA1MGUwODU1OTQzMzRlZGMxMjMiLCJpYXQiOjE2NTkzNjE4NzMuNDY1NDUxMDAyMTIwOTcxNjc5Njg3NSwibmJmIjoxNjU5MzYxODczLjQ2NTQ1MjkwOTQ2OTYwNDQ5MjE4NzUsImV4cCI6MTY5MDg5Nzg3My40NjI2NTE5NjgwMDIzMTkzMzU5Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GFa9JEBx2HoAM3jg5xzpvc0rkcW14ew1d05lz5MoSzaVDpRenpWRDEv18aVaHxyFKSXbNndBjlqqMYCFbj8MSMHIMajFTkug0iUrIdjL2lOdcYaR5p5avVTGOh0xvFDboZd0X5Li8xbnIQomDKZPw_cAca-1VSxIpFL2Xx_1Emh8-joNZHeeCAFKi4dMAMrtFq5I3I78wXt3RXrVAF6SE4FKNKMtjcaWtMQDdsUlcDOgl-AuRRF25PYS_HBRVhI-wn-MFuypp833utHCAemdDGj_6RhuC3a8CEQ2Dd9g5gytMNstLSgJf8gsm1-wN3HO8KFjEO116jgYAnl4JhVKi8wpg--NYXJOfbKVXzOYdVsqs91uBpOvQZrObI27wG3XirGzPEke4PnjvXWnI1BNLPWPBGaLWqrqH08iPeVCvQ5M0-E8S5Y98DSSDvd6m1acgmlYC9LJdW_rxrz-UWS2TwSmFrnIGKzn0ftu_DaT6Tmg0RkFDAYrenenLCznSzgno3Le8QaFgZ7ePdysDXDedif8qr3Swx60p38V3Zbo1GtT8iZJVLxq04zZoRbtkvS3ESWvk6sr_zMZK4CK3bqqriiUMRkDQr7noPeN7dcv3fTx3OOOY5uawB1fJlMjCURbmYcMcFTh1fDvzEnm8gHywV3f_6vkPC9nIM-_QrOKpcA');
    }
    getCategoryList() {
        return this.http.get(this.basicUrl + "/api/v1/categories", { 'headers': this.headers });
    }
    addCategorys(suppliers) {
        debugger;
        return this.http.post(this.basicUrl + "/api/v1/user-supplier", suppliers, { 'headers': this.headers });
    }
}
CategorysService.ɵfac = function CategorysService_Factory(t) { return new (t || CategorysService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CategorysService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategorysService, factory: CategorysService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4230:
/*!********************************************************!*\
  !*** ./src/app/protected/services/services.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesService": () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ServicesService {
    constructor(http) {
        this.http = http;
        this.basicUrl = "https://api.brightlifeapp.com/public";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('mimeType', 'multipart/form-data')
            .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTkzNDk5NDE4ODIxNTMzYzg5ODBhYmFiNDRhYTk2OWRmYTc5MWIyYjk0YTRkZGI1NGMzMDExZTY3NDgwZTA1MGUwODU1OTQzMzRlZGMxMjMiLCJpYXQiOjE2NTkzNjE4NzMuNDY1NDUxMDAyMTIwOTcxNjc5Njg3NSwibmJmIjoxNjU5MzYxODczLjQ2NTQ1MjkwOTQ2OTYwNDQ5MjE4NzUsImV4cCI6MTY5MDg5Nzg3My40NjI2NTE5NjgwMDIzMTkzMzU5Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GFa9JEBx2HoAM3jg5xzpvc0rkcW14ew1d05lz5MoSzaVDpRenpWRDEv18aVaHxyFKSXbNndBjlqqMYCFbj8MSMHIMajFTkug0iUrIdjL2lOdcYaR5p5avVTGOh0xvFDboZd0X5Li8xbnIQomDKZPw_cAca-1VSxIpFL2Xx_1Emh8-joNZHeeCAFKi4dMAMrtFq5I3I78wXt3RXrVAF6SE4FKNKMtjcaWtMQDdsUlcDOgl-AuRRF25PYS_HBRVhI-wn-MFuypp833utHCAemdDGj_6RhuC3a8CEQ2Dd9g5gytMNstLSgJf8gsm1-wN3HO8KFjEO116jgYAnl4JhVKi8wpg--NYXJOfbKVXzOYdVsqs91uBpOvQZrObI27wG3XirGzPEke4PnjvXWnI1BNLPWPBGaLWqrqH08iPeVCvQ5M0-E8S5Y98DSSDvd6m1acgmlYC9LJdW_rxrz-UWS2TwSmFrnIGKzn0ftu_DaT6Tmg0RkFDAYrenenLCznSzgno3Le8QaFgZ7ePdysDXDedif8qr3Swx60p38V3Zbo1GtT8iZJVLxq04zZoRbtkvS3ESWvk6sr_zMZK4CK3bqqriiUMRkDQr7noPeN7dcv3fTx3OOOY5uawB1fJlMjCURbmYcMcFTh1fDvzEnm8gHywV3f_6vkPC9nIM-_QrOKpcA');
    }
    // getSuppliersList() {
    //   return this.http.get(this.basicUrl + "/api/v1/suppliers", { 'headers': this.headers })
    // }
    addServices(services) {
        debugger;
        return this.http.post(this.basicUrl + "/api/v1/service-create", services, { 'headers': this.headers });
    }
}
ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ServicesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1454:
/*!*********************************************************!*\
  !*** ./src/app/protected/services/suppliers.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliersService": () => (/* binding */ SuppliersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SuppliersService {
    constructor(http) {
        this.http = http;
        this.basicUrl = "https://api.brightlifeapp.com/public";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .set("Content-Type", "multipart/form-data")
            .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTkzNDk5NDE4ODIxNTMzYzg5ODBhYmFiNDRhYTk2OWRmYTc5MWIyYjk0YTRkZGI1NGMzMDExZTY3NDgwZTA1MGUwODU1OTQzMzRlZGMxMjMiLCJpYXQiOjE2NTkzNjE4NzMuNDY1NDUxMDAyMTIwOTcxNjc5Njg3NSwibmJmIjoxNjU5MzYxODczLjQ2NTQ1MjkwOTQ2OTYwNDQ5MjE4NzUsImV4cCI6MTY5MDg5Nzg3My40NjI2NTE5NjgwMDIzMTkzMzU5Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GFa9JEBx2HoAM3jg5xzpvc0rkcW14ew1d05lz5MoSzaVDpRenpWRDEv18aVaHxyFKSXbNndBjlqqMYCFbj8MSMHIMajFTkug0iUrIdjL2lOdcYaR5p5avVTGOh0xvFDboZd0X5Li8xbnIQomDKZPw_cAca-1VSxIpFL2Xx_1Emh8-joNZHeeCAFKi4dMAMrtFq5I3I78wXt3RXrVAF6SE4FKNKMtjcaWtMQDdsUlcDOgl-AuRRF25PYS_HBRVhI-wn-MFuypp833utHCAemdDGj_6RhuC3a8CEQ2Dd9g5gytMNstLSgJf8gsm1-wN3HO8KFjEO116jgYAnl4JhVKi8wpg--NYXJOfbKVXzOYdVsqs91uBpOvQZrObI27wG3XirGzPEke4PnjvXWnI1BNLPWPBGaLWqrqH08iPeVCvQ5M0-E8S5Y98DSSDvd6m1acgmlYC9LJdW_rxrz-UWS2TwSmFrnIGKzn0ftu_DaT6Tmg0RkFDAYrenenLCznSzgno3Le8QaFgZ7ePdysDXDedif8qr3Swx60p38V3Zbo1GtT8iZJVLxq04zZoRbtkvS3ESWvk6sr_zMZK4CK3bqqriiUMRkDQr7noPeN7dcv3fTx3OOOY5uawB1fJlMjCURbmYcMcFTh1fDvzEnm8gHywV3f_6vkPC9nIM-_QrOKpcA');
    }
    getSuppliersList() {
        return this.http.get(this.basicUrl + "/api/v1/suppliers", { 'headers': this.headers });
    }
    addSuppliers(suppliers) {
        return this.http.post(this.basicUrl + "/api/v1/user-supplier", suppliers);
    }
}
SuppliersService.ɵfac = function SuppliersService_Factory(t) { return new (t || SuppliersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SuppliersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SuppliersService, factory: SuppliersService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_protected_protected_module_ts.js.map