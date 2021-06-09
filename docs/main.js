(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Projects - Web\trello-styled-board\src\main.ts */"zUnb");


/***/ }),

/***/ "2ZxK":
/*!*****************************************!*\
  !*** ./src/app/models/PositionIndex.ts ***!
  \*****************************************/
/*! exports provided: PositionIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionIndex", function() { return PositionIndex; });
class PositionIndex {
    constructor(x, y, i) {
        this.x = x;
        this.y = y;
        this.index = i;
    }
}


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CUwC":
/*!*******************************************************************!*\
  !*** ./src/app/components/color-picker/color-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ColorPickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeColors(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.getBackgroundColor(theme_r1.colors));
} }
class ColorPickerComponent {
    constructor() {
        this.themes = [];
    }
    ngOnInit() {
        this.themes = [{
                colors: [
                    { key: '--mainColor', value: getComputedStyle(document.documentElement).getPropertyValue('--mainColor') },
                    { key: '--buttonColor', value: getComputedStyle(document.documentElement).getPropertyValue('--buttonColor') },
                    { key: '--backgroundColor', value: getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor') },
                    { key: '--highlightedColor', value: getComputedStyle(document.documentElement).getPropertyValue('--highlightedColor') },
                    { key: '--textColor', value: getComputedStyle(document.documentElement).getPropertyValue('--textColor') }
                ],
                title: 'Default'
            },
            {
                colors: [
                    { key: '--mainColor', value: 'rgba(217, 201, 195, 0.53)' },
                    { key: '--buttonColor', value: '#E8E2DB' },
                    { key: '--backgroundColor', value: '#d48a2a' },
                    { key: '--highlightedColor', value: 'rgb(212, 138, 42)' },
                    { key: '--textColor', value: '#272727' }
                ],
                title: 'Funky'
            },
            {
                colors: [
                    { key: '--mainColor', value: 'rgba(223, 231, 234, 0.11)' },
                    { key: '--buttonColor', value: '#191919' },
                    { key: '--backgroundColor', value: '#2b3135' },
                    { key: '--highlightedColor', value: 'rgb(53, 55, 56)' },
                    { key: '--textColor', value: '#cccbca' }
                ],
                title: 'Dark'
            }];
    }
    getBackgroundColor(colors) {
        return colors.find(color => color.key === '--backgroundColor').value;
    }
    changeColors(i) {
        this.themes[i].colors.forEach(_ => document.documentElement.style.setProperty(_.key, _.value));
    }
}
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) { return new (t || ColorPickerComponent)(); };
ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPickerComponent, selectors: [["app-color-picker"]], decls: 8, vars: 1, consts: [[1, "dropdown"], [1, "btn", "dropbtn", "left-button"], [1, "text"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chevron-down", "role", "img", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-chevron-down", "fa-w-14"], ["fill", "currentColor", "d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"], [1, "dropdown-content"], ["class", "list-name", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-name", 3, "click"], [1, "square"]], template: function ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorPickerComponent_div_7_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".dropdown[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: var(--buttonColor);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   .list-name[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: none;\r\n  \r\n  text-align: left;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%], .list-name[_ngcontent-%COMP%]:hover, .left-button[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--highlightedColor);\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 2vw;\r\n  height: 2vh;\r\n  margin-top: 4px;\r\n  margin-left: 2px;\r\n  color: var(--textColor);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: var(--buttonColor);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlightedColor);\r\n}\r\n\r\n.square[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--textColor);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImNvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgLmxpc3QtbmFtZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLyp3aWR0aDogMTAwJTsqL1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biwgLmxpc3QtbmFtZTpob3ZlciAsIC5sZWZ0LWJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZENvbG9yKTtcclxufVxyXG5cclxuc3ZnIHtcclxuICB3aWR0aDogMnZ3O1xyXG4gIGhlaWdodDogMnZoO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5kaXY6aG92ZXIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWRDb2xvcik7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "CvMt":
/*!***************************************************!*\
  !*** ./src/app/components/task/task.component.ts ***!
  \***************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-form/input-form.component */ "FgpD");




function TaskComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.content);
} }
function TaskComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function TaskComponent_ng_template_3_Template_app_input_form_textSubmissionAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r3.isModifyingTask = !ctx_r3.isModifyingTask; return ctx_r3.task.content = $event.text.length > 0 ? $event.text : ctx_r3.task.content; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", ctx_r2.task.content)("targetClass", "task_title");
} }
class TaskComponent {
    constructor() {
        // tslint:disable-next-line:no-output-rename
        this.removeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isModifyingTask = false;
    }
    onRightClick(event) {
        event.preventDefault();
        if (event.target.classList.contains('task') || event.target.classList.contains('task_title')) {
            this.isModifyingTask = !this.isModifyingTask;
        }
    }
    ngOnInit() { }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], hostBindings: function TaskComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TaskComponent_contextmenu_HostBindingHandler($event) { return ctx.onRightClick($event); });
    } }, inputs: { task: "task" }, outputs: { removeAction: "removeClicked" }, decls: 7, vars: 5, consts: [[1, "task_container"], [1, "task", 3, "id"], [4, "ngIf", "ngIfElse"], ["textInput", ""], [1, "remove_task_button", 3, "click"], [1, "task_title"], [3, "textToShow", "targetClass", "textSubmissionAction"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskComponent_ng_template_3_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_5_listener() { return ctx.removeAction.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.task.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("list-id", ctx.task.listId)("order-index", ctx.task.orderIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isModifyingTask)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__["InputFormComponent"]], styles: [".task[_ngcontent-%COMP%] {\r\n  \r\n  height: auto;\r\n  padding: 5px;\r\n  margin-top: 8px;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  background-color: var(--buttonColor);\r\n  color: var(--textColor);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task_title[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n\r\n.remove_task_button[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  border: none;\r\n  background-color: var(--buttonColor);\r\n  margin-bottom: auto;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]:hover   .remove_task_button[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoidGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2sge1xyXG4gIC8qd2lkdGg6IDI0MHB4OyovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhc2tfdGl0bGV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucmVtb3ZlX3Rhc2tfYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4udGFzazpob3ZlciAucmVtb3ZlX3Rhc2tfYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "FgpD":
/*!***************************************************************!*\
  !*** ./src/app/components/input-form/input-form.component.ts ***!
  \***************************************************************/
/*! exports provided: InputFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormComponent", function() { return InputFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["textInput"];
const _c1 = ["addTaskRef"];
class InputFormComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.textSubmissionAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    clickedOut(targetElement) {
        const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
        if (!targetElement.classList.contains('add_task')
            && !targetElement.classList.contains(this.targetClass)
            && !targetElement.classList.contains('input_task')) {
            // console.log(this.targetClass, targetElement); // testing
            if (openForms.length > 0) {
                openForms.forEach(el => el.click());
            }
        }
    }
    pressedEscape() {
        this.addTaskRef.nativeElement.click();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // setTimeout makes the code inside asynchronous, which prevents "NG0100: Expression has changed after it was checked" error
        setTimeout(() => {
            if (InputFormComponent.inputForm !== null) {
                InputFormComponent.inputForm.addTaskRef.nativeElement.click();
            }
            InputFormComponent.inputForm = this;
        });
        this.textInputRef.nativeElement.focus();
    }
    onEnterPressed(event) {
        if (event.key === 'Enter') {
            this.textSubmissionAction.emit({ text: this.textToShow, keep: true });
            this.textToShow = '';
        }
    }
    ngOnDestroy() {
        InputFormComponent.inputForm = null;
    }
}
InputFormComponent.inputForm = null;
InputFormComponent.ɵfac = function InputFormComponent_Factory(t) { return new (t || InputFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InputFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputFormComponent, selectors: [["app-input-form"]], viewQuery: function InputFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textInputRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addTaskRef = _t.first);
    } }, hostBindings: function InputFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFormComponent_click_HostBindingHandler($event) { return ctx.clickedOut($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.escape", function InputFormComponent_keydown_escape_HostBindingHandler() { return ctx.pressedEscape(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { textToShow: "textToShow", targetClass: "targetClass" }, outputs: { textSubmissionAction: "textSubmissionAction" }, decls: 4, vars: 1, consts: [["rows", "1", "name", "input", "type", "text", 1, "input_task", 3, "ngModel", "ngModelChange", "keypress"], ["textInput", ""], [1, "add_task", 3, "click"], ["addTaskRef", ""]], template: function InputFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFormComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.textToShow = $event; })("keypress", function InputFormComponent_Template_textarea_keypress_0_listener($event) { return ctx.onEnterPressed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFormComponent_Template_button_click_2_listener() { return ctx.textSubmissionAction.emit({ text: ctx.textToShow, keep: false }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textToShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input_form_container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.input_task[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n.add_task[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: -10px;\r\n  left: -10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6ImlucHV0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dF9mb3JtX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmlucHV0X3Rhc2sge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4uYWRkX3Rhc2sge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "HVfF":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_TaskModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/TaskModel */ "cr/C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-angular */ "eDYX");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-form/input-form.component */ "FgpD");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task/task.component */ "CvMt");







const _c0 = ["titleRef"];
function ListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._list.title);
} }
function ListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function ListComponent_ng_template_2_Template_app_input_form_textSubmissionAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r8.isChangingName = !ctx_r8.isChangingName; return ctx_r8._list.title = $event.text.length > 0 ? $event.text : ctx_r8._list.title; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", ctx_r2._list.title)("targetClass", "list_title");
} }
function ListComponent_app_task_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeClicked", function ListComponent_app_task_8_Template_app_task_removeClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12._list.tasks.splice(i_r11, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r10);
} }
function ListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.isAddingTask = !ctx_r14.isAddingTask; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Add another task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function ListComponent_ng_template_11_Template_app_input_form_textSubmissionAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r16.pushToArray($event.text.length > 0 && $event.text !== "\n" ? $event.text : "New Task"); return ctx_r16.isAddingTask = $event.keep; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", "")("targetClass", "open_form_to_add_task");
} }
class ListComponent {
    constructor() {
        this.options = { autoHide: false };
        this.closeListAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAddingTask = false;
        this.isChangingName = false;
    }
    onRightClick(event) {
        event.preventDefault();
        if (event.target.classList.contains('list_header') || event.target.classList.contains('list_title')) {
            this.isChangingName = !this.isChangingName;
        }
    }
    ngOnInit() { }
    array(n) {
        return Array(n);
    }
    pushToArray(text) {
        if (text.length > 0) {
            this._list.tasks.push(new _models_TaskModel__WEBPACK_IMPORTED_MODULE_1__["TaskModel"](this._list.id, text, this._list.tasks.length));
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleRef = _t.first);
    } }, hostBindings: function ListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ListComponent_contextmenu_HostBindingHandler($event) { return ctx.onRightClick($event); });
    } }, inputs: { _list: ["list", "_list"] }, outputs: { closeListAction: "closeListAction" }, decls: 13, vars: 6, consts: [[1, "list_header"], [4, "ngIf", "ngIfElse"], ["titleInput", ""], [1, "remove_list", 3, "click"], [1, "list"], [3, "options"], [3, "task", "removeClicked", 4, "ngFor", "ngForOf"], [1, "list_footer"], ["taskInput", ""], [1, "list_title"], ["titleRef", ""], [3, "textToShow", "targetClass", "textSubmissionAction"], [3, "task", "removeClicked"], [1, "open_form_to_add_task", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ng_container_1_Template, 4, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_4_listener() { return ctx.closeListAction.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-simplebar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_app_task_8_Template, 1, 1, "app-task", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_ng_container_10_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_ng_template_11_Template, 1, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isChangingName)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._list.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddingTask)("ngIfElse", _r5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], simplebar_angular__WEBPACK_IMPORTED_MODULE_3__["SimplebarAngularComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__["InputFormComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]], styles: [".list[_ngcontent-%COMP%] {\r\n  background-color: var(--mainColor);\r\n  padding: 0 15px;\r\n  margin: 0 6px;\r\n  max-height: calc(75vh + 20px);\r\n}\r\n\r\nngx-simplebar[_ngcontent-%COMP%] {\r\n  max-height: inherit;\r\n}\r\n\r\n.list_header[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-right: 6px;\r\n  margin-left: 6px;\r\n  background-color: var(--mainColor);\r\n  color: var(--textColor);\r\n  padding: 5px 17px;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.list_footer[_ngcontent-%COMP%] {\r\n  background-color: var(--mainColor);\r\n  padding: 0 17px;\r\n  margin: 0 6px;\r\n  border-radius: 0 0 12px 12px;\r\n}\r\n\r\n.input_task_element[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.remove_list[_ngcontent-%COMP%] {\r\n  display: none;\r\n  border: none;\r\n  background: none;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.list_header[_ngcontent-%COMP%]:hover   .remove_list[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.open_form_to_add_task[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  color: var(--textColor);\r\n  margin-bottom: 8px;\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgbWFyZ2luOiAwIDZweDtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDc1dmggKyAyMHB4KTtcclxufVxyXG5cclxubmd4LXNpbXBsZWJhciB7XHJcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmxpc3RfaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweCAxN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbn1cclxuXHJcbi5saXN0X2Zvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICBwYWRkaW5nOiAwIDE3cHg7XHJcbiAgbWFyZ2luOiAwIDZweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG59XHJcblxyXG4uaW5wdXRfdGFza19lbGVtZW50IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5yZW1vdmVfbGlzdCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ubGlzdF9oZWFkZXI6aG92ZXIgLnJlbW92ZV9saXN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm9wZW5fZm9ybV90b19hZGRfdGFzayB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/control-panel/control-panel.component */ "qGZS");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board/board.component */ "qtDB");



class AppComponent {
    constructor() {
        this.title = 'TodoList';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-control-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-board");
    } }, directives: [_components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_1__["ControlPanelComponent"], _components_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TxbB":
/*!**************************************!*\
  !*** ./src/app/models/BoardModel.ts ***!
  \**************************************/
/*! exports provided: BoardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModel", function() { return BoardModel; });
/* harmony import */ var _ListModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListModel */ "s2V2");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);


class BoardModel {
    constructor(title) {
        this.title = title;
        this.lists = [];
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    }
    deserialize(input) {
        Object.assign(this, input);
        this.lists = this.lists.map((item) => new _ListModel__WEBPACK_IMPORTED_MODULE_0__["ListModel"]().deserialize(item));
        return this;
    }
}


/***/ }),

/***/ "VGv4":
/*!***************************************************!*\
  !*** ./src/app/services/control-panel.service.ts ***!
  \***************************************************/
/*! exports provided: ControlPanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelService", function() { return ControlPanelService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ControlPanelService {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._indexSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // tslint:disable-next-line:variable-name
        this._deleteIndexSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.index$ = this._indexSource.asObservable();
        this.deleteIndex$ = this._deleteIndexSource.asObservable();
    }
    setIndex(i) {
        this._indexSource.next(i);
    }
    deleteIndex(i) {
        this._deleteIndexSource.next(i);
    }
}
ControlPanelService.ɵfac = function ControlPanelService_Factory(t) { return new (t || ControlPanelService)(); };
ControlPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ControlPanelService, factory: ControlPanelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Vl72":
/*!*****************************************************!*\
  !*** ./src/app/components/guide/guide.component.ts ***!
  \*****************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GuideComponent {
    constructor() {
        this.modal = null;
    }
    onClick(target) {
        if (target.classList.contains('modal')) {
            this.modal.style.display = 'none';
        }
    }
    ngOnInit() {
        this.modal = document.getElementById('modal');
    }
}
GuideComponent.ɵfac = function GuideComponent_Factory(t) { return new (t || GuideComponent)(); };
GuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuideComponent, selectors: [["app-guide"]], hostBindings: function GuideComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function GuideComponent_mousedown_HostBindingHandler($event) { return ctx.onClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 34, vars: 0, consts: [[1, "btn", 3, "click"], ["id", "modal", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "space"]], template: function GuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_1_listener() { return ctx.modal.style.display = "block"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_5_listener() { return ctx.modal.style.display = "none"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This website is a todo type web app made for training purposes by Andrii Bilych.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " It was created as a way to practice my skills and improve my knowledge on Angular/TypeScript/HTML/CSS. This website is a demonstration app, no data is preserved upon reloading. There are two boards present, filled with fake data. Project is inspired by Trello boards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create lists by clicking \"Add another list\" button, entering the name and pressing enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create tasks by clicking \"Add another task\" button, entering the task and pressing enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click out of any text box or press \"ESC\" to close it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Modify list title/board title/task by right clicking it and pressing enter to save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reorder tasks by left-clicking and dragging them inside list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reorder lists by left-clicking the title and dragging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Move tasks from list to list by left-clicking and dragging the task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "You can also switch boards, create new boards and switch color theme at any moment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".btn[_ngcontent-%COMP%] {\r\n  background-color: var(--buttonColor);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n  color: var(--textColor);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlightedColor);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n  color: var(--textColor);\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 10% 20%; \r\n  padding: 30px;\r\n  border: 1px solid #888;\r\n  font-size: 18px;\r\n  width: 60%; \r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 18px;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n  margin: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUN4RCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZSxFQUFFLGtDQUFrQztFQUNuRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6Imd1aWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG5kaXY6aG92ZXIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWRDb2xvcik7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiAxMCUgMjAlOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsIC5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/board/board.component */ "qtDB");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "HVfF");
/* harmony import */ var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/control-panel/control-panel.component */ "qGZS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplebar-angular */ "eDYX");
/* harmony import */ var _components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/input-form/input-form.component */ "FgpD");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/task/task.component */ "CvMt");
/* harmony import */ var _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/guide/guide.component */ "Vl72");
/* harmony import */ var _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/color-picker/color-picker.component */ "CUwC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            simplebar_angular__WEBPACK_IMPORTED_MODULE_8__["SimplebarAngularModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"],
        _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_6__["ControlPanelComponent"],
        _components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_9__["InputFormComponent"],
        _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"],
        _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__["GuideComponent"],
        _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_12__["ColorPickerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        simplebar_angular__WEBPACK_IMPORTED_MODULE_8__["SimplebarAngularModule"]] }); })();


/***/ }),

/***/ "cr/C":
/*!*************************************!*\
  !*** ./src/app/models/TaskModel.ts ***!
  \*************************************/
/*! exports provided: TaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

class TaskModel {
    constructor(listId, text, orderIndex) {
        this.listId = listId;
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.content = text;
        this.orderIndex = orderIndex;
    }
    deserialize(input) {
        return Object.assign(this, input);
    }
}


/***/ }),

/***/ "njzu":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/BoardModel */ "TxbB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DataService {
    constructor(http) {
        this.http = http;
        this.JSONUrl = 'assets/boards.json';
        this.JSONTitlesUrl = 'assets/boardsTitles.json';
    }
    getBoards() {
        return this.http.get(`${this.JSONUrl}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((list) => {
            return list.map((item) => new _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__["BoardModel"]().deserialize(item));
        }));
    }
    getTitles() {
        return this.http.get(`${this.JSONTitlesUrl}`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qGZS":
/*!*********************************************************************!*\
  !*** ./src/app/components/control-panel/control-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_control_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/control-panel.service */ "VGv4");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-service.service */ "njzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../color-picker/color-picker.component */ "CUwC");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guide/guide.component */ "Vl72");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-form/input-form.component */ "FgpD");







const _c0 = ["modal"];
function ControlPanelComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onClick(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", i_r6 == ctx_r1.selectedIndex)("list-name", i_r6 != ctx_r1.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r5.title);
} }
function ControlPanelComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_ng_container_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r9.style.display = "block"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_ng_container_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r9.style.display = "none"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_ng_container_13_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r13.removeBoard(ctx_r13.selectedIndex); return _r9.style.display = "none"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_ng_container_13_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r9.style.display = "none"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.titles[ctx_r2.selectedIndex] == null ? null : ctx_r2.titles[ctx_r2.selectedIndex].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to delete \"", ctx_r2.titles[ctx_r2.selectedIndex].title, "\" board?");
} }
function ControlPanelComponent_div_0_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function ControlPanelComponent_div_0_ng_template_14_Template_app_input_form_textSubmissionAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r15.isChangingName = !ctx_r15.isChangingName; return ctx_r15.titles[ctx_r15.selectedIndex].title = $event.text.length > 0 ? $event.text : ctx_r15.titles[ctx_r15.selectedIndex].title; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", ctx_r4.titles[ctx_r4.selectedIndex].title)("targetClass", "board-title");
} }
function ControlPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ControlPanelComponent_div_0_button_9_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlPanelComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.createBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+ New Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ControlPanelComponent_div_0_ng_container_13_Template, 16, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ControlPanelComponent_div_0_ng_template_14_Template, 1, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-color-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-guide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding", ctx_r0.isChangingName ? "0" : "10px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isChangingName)("ngIfElse", _r3);
} }
class ControlPanelComponent {
    constructor(controlPanelService, dataService) {
        this.controlPanelService = controlPanelService;
        this.dataService = dataService;
        this.titles = null;
        this.selectedIndex = 0;
        this.isChangingName = false;
        // this.modal = null;
    }
    onCloseModalClick(target) {
        if (target.classList.contains('modal')) {
            this.modal.nativeElement.style.display = 'none';
        }
    }
    onRightClick(event) {
        event.preventDefault();
        if (event.target.classList.contains('board-title')) {
            this.isChangingName = !this.isChangingName;
        }
    }
    ngOnInit() {
        this.controlPanelService.index$.subscribe(index => {
            this.selectedIndex = index;
        });
        this.dataService.getTitles().subscribe(data => {
            this.titles = data;
        });
    }
    onClick(i) {
        this.controlPanelService.setIndex(i);
    }
    removeBoard(i) {
        this.controlPanelService.deleteIndex(i);
        this.titles.splice(this.selectedIndex, 1);
        this.controlPanelService.setIndex(0);
        this.selectedIndex = 0;
        if (this.titles.length === 0) {
            this.createBoard();
        }
    }
    createBoard() {
        this.controlPanelService.setIndex(this.titles.length);
        this.titles.push({ title: 'New board', id: this.titles.length });
    }
}
ControlPanelComponent.ɵfac = function ControlPanelComponent_Factory(t) { return new (t || ControlPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_control_panel_service__WEBPACK_IMPORTED_MODULE_1__["ControlPanelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ControlPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlPanelComponent, selectors: [["app-control-panel"]], viewQuery: function ControlPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, hostBindings: function ControlPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ControlPanelComponent_mousedown_HostBindingHandler($event) { return ctx.onCloseModalClick($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("contextmenu", function ControlPanelComponent_contextmenu_HostBindingHandler($event) { return ctx.onRightClick($event); });
    } }, decls: 1, vars: 1, consts: [["class", "panel", 4, "ngIf"], [1, "panel"], [1, "left-container"], [1, "dropdown"], [1, "dropbtn", "left-button"], [1, "board-title"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chevron-down", "role", "img", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-chevron-down", "fa-w-14"], ["fill", "currentColor", "d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"], [1, "dropdown-content"], [3, "selected", "list-name", "click", 4, "ngFor", "ngForOf"], [1, "list-name", 3, "click"], [1, "board-name-container"], [4, "ngIf", "ngIfElse"], ["titleInput", ""], [3, "click"], [1, "remove_board_button", 3, "click"], [1, "modal"], ["modal", ""], [1, "modal-content"], [1, "close", 3, "click"], [1, "choice", 3, "click"], [3, "textToShow", "targetClass", "textSubmissionAction"]], template: function ControlPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ControlPanelComponent_div_0_Template, 19, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titles != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_4__["ColorPickerComponent"], _guide_guide_component__WEBPACK_IMPORTED_MODULE_5__["GuideComponent"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__["InputFormComponent"]], styles: [".panel[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: var(--mainColor);\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.dropbtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.left-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.left-button[_ngcontent-%COMP%] {\r\n  background-color: var(--buttonColor);\r\n  border: none;\r\n  padding: 10px;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: var(--buttonColor);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: block;\r\n  border: none;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%], .list-name[_ngcontent-%COMP%]:hover, .left-button[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--highlightedColor);\r\n}\r\n\r\n.list-name[_ngcontent-%COMP%] {\r\n  background-color: var(--buttonColor);\r\n  color: var(--textColor);\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background-color: var(--highlightedColor);\r\n  color: var(--textColor);\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 2vw;\r\n  height: 2vh;\r\n  margin-top: 4px;\r\n  margin-left: 2px;\r\n  color: var(--textColor);\r\n}\r\n\r\n.board-name-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: var(--buttonColor);\r\n  border: none;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.remove_board_button[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  border: none;\r\n  background: none;\r\n  margin-left: 5px\r\n}\r\n\r\n.board-name-container[_ngcontent-%COMP%]:hover   .remove_board_button[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.board-title[_ngcontent-%COMP%] {\r\n  color: var(--textColor);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: var(--buttonColor);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n  color: var(--textColor);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlightedColor);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none; \r\n  position: fixed; \r\n  z-index: 1; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n  color: var(--textColor);\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 15% auto; \r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%; \r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 18px;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.choice[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  \r\n  font-size: 18px;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus, .choice[_ngcontent-%COMP%]:hover, .choice[_ngcontent-%COMP%]:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDeEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRyb3BidG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGVmdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biwgLmxpc3QtbmFtZTpob3ZlciAsIC5sZWZ0LWJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZENvbG9yKTtcclxufVxyXG5cclxuLmxpc3QtbmFtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgaGVpZ2h0OiAydmg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbn1cclxuXHJcbi5ib2FyZC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZW1vdmVfYm9hcmRfYnV0dG9uIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweFxyXG59XHJcblxyXG4uYm9hcmQtbmFtZS1jb250YWluZXI6aG92ZXIgLnJlbW92ZV9ib2FyZF9idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbn1cclxuXHJcbmRpdjpob3ZlciAuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZENvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jaG9pY2Uge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIC8qZmxvYXQ6IHJpZ2h0OyovXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMsIC5jaG9pY2U6aG92ZXIsIC5jaG9pY2U6Zm9jdXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "qtDB":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/BoardModel */ "TxbB");
/* harmony import */ var _models_PositionIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/PositionIndex */ "2ZxK");
/* harmony import */ var _models_ListModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ListModel */ "s2V2");
/* harmony import */ var _models_PositionIndexList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/PositionIndexList */ "yWUV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_control_panel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/control-panel.service */ "VGv4");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-service.service */ "njzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplebar-angular */ "eDYX");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list/list.component */ "HVfF");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input-form/input-form.component */ "FgpD");











function BoardComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeListAction", function BoardComponent_ng_container_0_div_3_Template_app_list_closeListAction_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.removeList(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", list_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("order-index", list_r7.orderIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", list_r7)("id", i_r8);
} }
function BoardComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BoardComponent_ng_container_0_ng_container_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.isAddingList = !ctx_r11.isAddingList; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "+ Add another list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-input-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("textSubmissionAction", function BoardComponent_ng_container_0_ng_template_6_Template_app_input_form_textSubmissionAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r13.isAddingList = !ctx_r13.isAddingList; ctx_r13.pushToArray($event.text.length > 0 && $event.text !== "\n" ? $event.text : "New List"); return ctx_r13.isAddingList = $event.keep; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("targetClass", "add-list");
} }
function BoardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ngx-simplebar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BoardComponent_ng_container_0_div_3_Template, 3, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BoardComponent_ng_container_0_ng_container_5_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BoardComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r0.boards[ctx_r0.currentIndex].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.boards[ctx_r0.currentIndex].lists);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isAddingList)("ngIfElse", _r5);
} }
function BoardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class BoardComponent {
    constructor(controlPanelService, dataService) {
        this.controlPanelService = controlPanelService;
        this.dataService = dataService;
        this.options = { autoHide: false };
        this.draggedTaskIndex = '0';
        this.newTaskIndex = '1';
        this.currentListId = '0';
        this.currentListOrderIndex = '0';
        this.newListOrderIndex = '0';
        this.newListTitle = '';
        this.currentList = null;
        this.targetTask = null;
        this.targetList = null;
        this.isDraggingTask = false;
        this.isDraggingList = false;
        this.isAddingList = false;
        this.boards = null;
        this.currentIndex = 0;
        this.taskPositionsByOrder = [];
        this.listOfListsOfTaskPositions = [];
        this.listTasksRefs = null;
    }
    // TODO
    // @HostListener('document:wheel', ['$event'])
    // onScroll(event): void {
    //   console.log('scroll', event);
    // }
    //
    // @HostListener('document:mousedown', ['$event'])
    // onBoardStartDrag(event): void {
    //   console.log('mousedown', event);
    // }
    //
    // @HostListener('document:mousemove', ['$event'])
    // onBoardDrag(event): void {
    //   console.log('mousemove', event);
    // }
    startDrag(targetElement) {
        document.body.style.userSelect = 'none';
        if (targetElement.classList.contains('task') || targetElement.classList.contains('task_title')) {
            this.isDraggingTask = true;
            if (targetElement.classList.contains('task_title')) {
                this.targetTask = targetElement.parentElement;
            }
            else {
                this.targetTask = targetElement;
            }
            this.targetTask.style.position = 'fixed';
            this.targetTask.style.minWidth = '150px';
            this.targetTask.parentElement.style.height = '30px';
            this.targetTask.parentElement.style.backgroundColor = 'var(--darkColor)';
            // tslint:disable-next-line:radix
            this.draggedTaskIndex = this.targetTask.getAttribute('order-index');
            this.currentListId = this.targetTask.getAttribute('list-id');
            this.currentList = document.getElementById(this.currentListId);
            this.currentListOrderIndex = this.currentList.getAttribute('order-index');
            this.listTasksRefs = this.currentList.querySelectorAll('div.task');
            const listRefs = document.querySelectorAll('div.list-placeholder');
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < listRefs.length; i++) {
                const taskRefs = listRefs[i].querySelectorAll('div.task');
                const boundingRect = listRefs[i].getBoundingClientRect();
                // tslint:disable-next-line:max-line-length
                this.listOfListsOfTaskPositions.push(new _models_PositionIndexList__WEBPACK_IMPORTED_MODULE_3__["PositionIndexList"](listRefs[i].id, listRefs[i].getAttribute('order-index'), boundingRect.x, boundingRect.y));
                // tslint:disable-next-line:prefer-for-of
                for (let j = 0; j < taskRefs.length; j++) {
                    const holder = taskRefs[j].getBoundingClientRect();
                    // tslint:disable-next-line:max-line-length
                    this.listOfListsOfTaskPositions[i].taskPositionsByOrder.push(new _models_PositionIndex__WEBPACK_IMPORTED_MODULE_1__["PositionIndex"](holder.x, holder.y, taskRefs[j].getAttribute('order-index')));
                }
            }
        }
        else if (targetElement.classList.contains('list_header') || targetElement.classList.contains('list_title')) {
            this.isDraggingList = true;
            if (targetElement.classList.contains('list_title')) {
                this.targetList = targetElement.parentElement.parentElement.parentElement;
            }
            else {
                this.targetList = targetElement.parentElement.parentElement;
            }
            this.targetList.style.position = 'fixed';
            // tslint:disable-next-line:radix
            this.currentListOrderIndex = this.targetList.parentElement.getAttribute('order-index');
            this.listsRefs = document.querySelectorAll('div.list-placeholder');
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.listsRefs.length; i++) {
                const boundingRect = this.listsRefs[i].getBoundingClientRect();
                // tslint:disable-next-line:max-line-length
                this.listOfListsOfTaskPositions.push(new _models_PositionIndexList__WEBPACK_IMPORTED_MODULE_3__["PositionIndexList"](this.listsRefs[i].id, this.listsRefs[i].getAttribute('order-index'), boundingRect.x, boundingRect.y));
            }
        }
    }
    drag(event) {
        if (this.isDraggingTask) {
            this.targetTask.style.top = `${event.clientY}px`;
            this.targetTask.style.left = `${event.clientX}px`;
            const newListIndex = this.findListIndex(event);
            if (newListIndex !== null && newListIndex !== this.currentListOrderIndex) {
                // tslint:disable-next-line:max-line-length
                this.boards[this.currentIndex].lists[newListIndex].tasks.push(this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)]);
                // tslint:disable-next-line:max-line-length
                this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)].listId = this.boards[this.currentIndex].lists[newListIndex].id;
                this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks.splice(Number(this.draggedTaskIndex), 1);
                this.recalculateOrderIndices(this.currentListOrderIndex);
                this.recalculateOrderIndices(newListIndex);
                this.currentListOrderIndex = newListIndex;
                this.draggedTaskIndex = null;
                this.isDraggingTask = !this.isDraggingTask;
            }
            else if (!this.isDraggingList) {
                this.newTaskIndex = this.findTaskIndex(event, newListIndex);
                if (this.newTaskIndex !== null && this.draggedTaskIndex !== null && this.newTaskIndex !== this.draggedTaskIndex) {
                    // tslint:disable-next-line:radix
                    const taskHolder = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)];
                    const taskElementHolder = this.getTaskElementByOrderIndex(this.newTaskIndex);
                    const newOrderIndex = taskElementHolder.getAttribute('order-index');
                    // tslint:disable-next-line:max-line-length
                    this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)] = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)];
                    taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));
                    // tslint:disable-next-line:radix
                    this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)] = taskHolder;
                    this.targetTask.setAttribute('order-index', newOrderIndex);
                    this.draggedTaskIndex = this.newTaskIndex;
                }
            }
        }
        if (this.isDraggingList) {
            this.targetList.style.top = `${event.clientY}px`;
            this.targetList.style.left = `${event.clientX}px`;
            this.newListOrderIndex = this.findListIndex(event);
            if (this.newListOrderIndex !== null && this.newListOrderIndex !== this.currentListOrderIndex) {
                // tslint:disable-next-line:radix
                const listHolder = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)];
                const listElementHolder = this.getListElementByOrderIndex(this.newListOrderIndex);
                const newOrderIndex = listElementHolder.getAttribute('order-index');
                // tslint:disable-next-line:max-line-length
                this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)] = this.boards[this.currentIndex].lists[Number(this.newListOrderIndex)];
                listElementHolder.setAttribute('order-index', this.targetList.parentElement.getAttribute('order-index'));
                // tslint:disable-next-line:radix
                this.boards[this.currentIndex].lists[Number(this.newListOrderIndex)] = listHolder;
                this.targetList.parentElement.setAttribute('order-index', newOrderIndex);
                this.currentListOrderIndex = this.newListOrderIndex;
            }
        }
    }
    endDrag() {
        document.body.style.userSelect = 'all';
        if (this.targetTask !== null) {
            this.isDraggingTask = false;
            this.targetTask.style.removeProperty('position');
            this.targetTask.style.removeProperty('top');
            this.targetTask.style.removeProperty('left');
            this.targetTask.style.height = 'auto';
            this.targetTask.parentElement.style.background = 'none';
            this.targetTask.parentElement.style.height = 'auto';
            this.targetTask = null;
            this.listOfListsOfTaskPositions = [];
        }
        if (this.targetList !== null) {
            this.isDraggingList = false;
            this.targetList.style.removeProperty('position');
            this.targetList.style.removeProperty('top');
            this.targetList.style.removeProperty('left');
            this.targetList.style.height = 'auto';
            this.targetList.parentElement.style.background = 'none';
            this.targetList.parentElement.style.height = 'auto';
            this.targetList = null;
        }
    }
    ngOnInit() {
        this.controlPanelService.index$.subscribe(index => {
            if (index >= this.boards.length) {
                this.boards.push(new _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__["BoardModel"]('New Board'));
            }
            this.currentIndex = index;
        });
        this.controlPanelService.deleteIndex$.subscribe(index => {
            if (this.boards.length > 0) {
                this.boards.splice(index, 1);
            }
            this.currentIndex = 0;
        });
        this.dataService.getBoards().subscribe(data => {
            this.boards = data;
            this.controlPanelService.setIndex(this.currentIndex);
        });
    }
    pushToArray(text) {
        this.boards[this.currentIndex].lists.push(new _models_ListModel__WEBPACK_IMPORTED_MODULE_2__["ListModel"](text, this.boards[this.currentIndex].lists.length));
    }
    findListIndex(event) {
        let holder = null;
        // tslint:disable-next-line:radix
        this.listOfListsOfTaskPositions.forEach((list) => {
            if (event.clientX > list.x) {
                holder = list.orderIndex;
            }
        });
        return holder;
    }
    findTaskIndex(event, listOrderIndex) {
        let holder = '0';
        // tslint:disable-next-line:radix
        this.listOfListsOfTaskPositions[Number(listOrderIndex)].taskPositionsByOrder.forEach((task) => {
            if (event.clientY > task.y) {
                holder = task.index;
            }
        });
        return holder;
    }
    recalculateOrderIndices(listOrderIndex) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.boards[this.currentIndex].lists[listOrderIndex].tasks.length; i++) {
            this.boards[this.currentIndex].lists[listOrderIndex].tasks[i].orderIndex = i;
        }
    }
    getTaskElementByOrderIndex(index) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.listTasksRefs.length; i++) {
            if (this.listTasksRefs[i].getAttribute('order-index') === index) {
                return this.listTasksRefs[i];
            }
        }
        return null;
    }
    getListElementByOrderIndex(index) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.listsRefs.length; i++) {
            if (this.listsRefs[i].getAttribute('order-index') === index) {
                return this.listsRefs[i];
            }
        }
        return null;
    }
    removeList(num) {
        this.boards[this.currentIndex].lists.splice(num, 1);
        for (let i = 0; i < this.boards[this.currentIndex].lists.length; i++) {
            this.boards[this.currentIndex].lists[i].orderIndex = i;
        }
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_control_panel_service__WEBPACK_IMPORTED_MODULE_5__["ControlPanelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function BoardComponent_mousedown_HostBindingHandler($event) { return ctx.startDrag($event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"])("mousemove", function BoardComponent_mousemove_HostBindingHandler($event) { return ctx.drag($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"])("mouseup", function BoardComponent_mouseup_HostBindingHandler() { return ctx.endDrag(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], [1, "board", 3, "id"], [3, "options"], ["class", "list-placeholder", 3, "id", 4, "ngFor", "ngForOf"], [1, "add-list-container"], ["titleInput", ""], [1, "list-placeholder", 3, "id"], [1, "list-container"], [3, "list", "id", "closeListAction"], [1, "add-list", 3, "click"], [3, "targetClass", "textSubmissionAction"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "spinner", "role", "img", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-spinner", "fa-w-16"], ["fill", "currentColor", "d", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BoardComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BoardComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boards != null)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], simplebar_angular__WEBPACK_IMPORTED_MODULE_8__["SimplebarAngularComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_10__["InputFormComponent"]], styles: [".board[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  height: calc(100vh - 60px);\r\n\r\n}\r\n\r\n.list-placeholder[_ngcontent-%COMP%] {\r\n  min-width: 230px;\r\n}\r\n\r\n.list-container[_ngcontent-%COMP%] {\r\n  min-width: 230px;\r\n}\r\n\r\nngx-simplebar[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  width: 10vw;\r\n  margin: 44vh 45vw;\r\n  animation-name: rotation;\r\n  animation-duration: 5s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes rotation {\r\n  to {transform: rotate(360deg);}\r\n}\r\n\r\n.add-list[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: var(--mainColor);\r\n  margin: 8px 6px;\r\n  padding: 6px 12px;\r\n  width: 14vw;\r\n  border-radius: 10px;\r\n  color: var(--textColor);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLElBQUkseUJBQXlCLENBQUM7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcblxyXG59XHJcblxyXG4ubGlzdC1wbGFjZWhvbGRlciB7XHJcbiAgbWluLXdpZHRoOiAyMzBweDtcclxufVxyXG5cclxuLmxpc3QtY29udGFpbmVyIHtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG5uZ3gtc2ltcGxlYmFyIHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIG1hcmdpbjogNDR2aCA0NXZ3O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGlvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuXHJcbi5hZGQtbGlzdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XHJcbiAgbWFyZ2luOiA4cHggNnB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIHdpZHRoOiAxNHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "s2V2":
/*!*************************************!*\
  !*** ./src/app/models/ListModel.ts ***!
  \*************************************/
/*! exports provided: ListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModel", function() { return ListModel; });
/* harmony import */ var _TaskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskModel */ "cr/C");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);


class ListModel {
    constructor(text, orderIndex) {
        this.title = 'New List';
        this.tasks = [];
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.title = text;
        this.orderIndex = orderIndex;
    }
    deserialize(input) {
        Object.assign(this, input);
        this.tasks = this.tasks.map((item) => new _TaskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"](this.id).deserialize(item));
        return this;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yWUV":
/*!*********************************************!*\
  !*** ./src/app/models/PositionIndexList.ts ***!
  \*********************************************/
/*! exports provided: PositionIndexList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionIndexList", function() { return PositionIndexList; });
class PositionIndexList {
    constructor(id, orderIndex, x, y) {
        this.taskPositionsByOrder = [];
        this.orderIndex = orderIndex;
        this.id = id;
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map