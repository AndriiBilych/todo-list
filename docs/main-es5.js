(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Development\Projects - Web\trello-styled-board\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "CUwC":
    /*!*******************************************************************!*\
      !*** ./src/app/components/color-picker/color-picker.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ColorPickerComponent */

    /***/
    function CUwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
        return ColorPickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ColorPickerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerComponent_div_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeColors(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.getBackgroundColor(theme_r1.colors));
        }
      }

      var ColorPickerComponent = /*#__PURE__*/function () {
        function ColorPickerComponent() {
          _classCallCheck(this, ColorPickerComponent);

          this.themes = [];
        }

        _createClass(ColorPickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.themes = [{
              colors: [{
                key: '--main',
                value: getComputedStyle(document.documentElement).getPropertyValue('--main')
              }, {
                key: '--button',
                value: getComputedStyle(document.documentElement).getPropertyValue('--button')
              }, {
                key: '--background',
                value: getComputedStyle(document.documentElement).getPropertyValue('--background')
              }, {
                key: '--highlighted',
                value: getComputedStyle(document.documentElement).getPropertyValue('--highlighted')
              }, {
                key: '--text',
                value: getComputedStyle(document.documentElement).getPropertyValue('--text')
              }, {
                key: '--modalBackground',
                value: getComputedStyle(document.documentElement).getPropertyValue('--modalBackground')
              }, {
                key: '--grayed',
                value: getComputedStyle(document.documentElement).getPropertyValue('--grayed')
              }],
              title: 'Default'
            }, {
              colors: [{
                key: '--main',
                value: 'rgba(217, 201, 195, 0.53)'
              }, {
                key: '--button',
                value: '#E8E2DB'
              }, {
                key: '--background',
                value: '#d48a2a'
              }, {
                key: '--highlighted',
                value: 'rgb(212, 138, 42)'
              }, {
                key: '--text',
                value: '#272727'
              }, {
                key: '--modalBackground',
                value: '#fff'
              }, {
                key: '--grayed',
                value: 'rgba(68, 70, 71, 0.74)'
              }],
              title: 'Funky'
            }, {
              colors: [{
                key: '--main',
                value: 'rgba(223, 231, 234, 0.11)'
              }, {
                key: '--button',
                value: '#191919'
              }, {
                key: '--background',
                value: '#2b3135'
              }, {
                key: '--highlighted',
                value: 'rgb(53, 55, 56)'
              }, {
                key: '--text',
                value: '#cccbca'
              }, {
                key: '--modalBackground',
                value: '#2b3135'
              }, {
                key: '--grayed',
                value: 'rgba(230, 238, 241, 0.55)'
              }],
              title: 'Dark'
            }];
          }
        }, {
          key: "getBackgroundColor",
          value: function getBackgroundColor(colors) {
            return colors.find(function (color) {
              return color.key === '--background';
            }).value;
          }
        }, {
          key: "changeColors",
          value: function changeColors(i) {
            this.themes[i].colors.forEach(function (_) {
              return document.documentElement.style.setProperty(_.key, _.value);
            });
          }
        }]);

        return ColorPickerComponent;
      }();

      ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
        return new (t || ColorPickerComponent)();
      };

      ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColorPickerComponent,
        selectors: [["app-color-picker"]],
        decls: 8,
        vars: 1,
        consts: [[1, "dropdown"], [1, "btn", "dropbtn", "left-button"], [1, "text"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chevron-down", "role", "img", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-chevron-down", "fa-w-14"], ["fill", "currentColor", "d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"], [1, "dropdown-content"], ["class", "list-name", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-name", 3, "click"], [1, "square"]],
        template: function ColorPickerComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: [".dropdown[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: var(--button);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   .list-name[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: none;\r\n  \r\n  text-align: left;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropBtn[_ngcontent-%COMP%], .list-name[_ngcontent-%COMP%]:hover, .left-button[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--highlighted);\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 2vw;\r\n  height: 2vh;\r\n  margin-top: 4px;\r\n  margin-left: 2px;\r\n  color: var(--text);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.square[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--text);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IC5saXN0LW5hbWUge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8qd2lkdGg6IDEwMCU7Ki9cclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BCdG4sIC5saXN0LW5hbWU6aG92ZXIgLCAubGVmdC1idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQpO1xyXG59XHJcblxyXG5zdmcge1xyXG4gIHdpZHRoOiAydnc7XHJcbiAgaGVpZ2h0OiAydmg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuZGl2OmhvdmVyIC5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkKTtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "CvMt":
    /*!***************************************************!*\
      !*** ./src/app/components/task/task.component.ts ***!
      \***************************************************/

    /*! exports provided: TaskComponent */

    /***/
    function CvMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
        return TaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../input-form/input-form.component */
      "FgpD");

      function TaskComponent_div_0_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_0_div_1_ng_container_1_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r5.removeAction.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.task.content);
        }
      }

      function TaskComponent_div_0_div_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function TaskComponent_div_0_div_1_ng_template_2_Template_app_input_form_textSubmissionAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            ctx_r7.isModifyingTask = !ctx_r7.isModifyingTask;
            return ctx_r7.task.content = $event.text.length > 0 ? $event.text : ctx_r7.task.content;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", ctx_r4.task.content)("targetClass", "task-title");
        }
      }

      function TaskComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_0_div_1_ng_container_1_Template, 5, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskComponent_div_0_div_1_ng_template_2_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("uuid", ctx_r1.task.uuid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isModifyingTask)("ngIfElse", _r3);
        }
      }

      function TaskComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_0_div_1_Template, 4, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-container-selected", ctx_r0.task.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("uuid", ctx_r0.task.uuid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.task == null ? null : ctx_r0.task.selected));
        }
      }

      var TaskComponent = /*#__PURE__*/function () {
        function TaskComponent() {
          _classCallCheck(this, TaskComponent);

          this.removeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isModifyingTask = false;
        }

        _createClass(TaskComponent, [{
          key: "onRightClick",
          value: function onRightClick(event) {
            event.preventDefault();

            if (event.target.classList.contains('task') || event.target.classList.contains('task-title')) {
              this.isModifyingTask = !this.isModifyingTask;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TaskComponent;
      }();

      TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || TaskComponent)();
      };

      TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskComponent,
        selectors: [["app-task"]],
        hostBindings: function TaskComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TaskComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onRightClick($event);
            });
          }
        },
        inputs: {
          task: "task"
        },
        outputs: {
          removeAction: "removeAction"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "task-container", 3, "task-container-selected", 4, "ngIf"], [1, "task-container"], ["class", "task", 4, "ngIf"], [1, "task"], [4, "ngIf", "ngIfElse"], ["textInput", ""], [1, "task-title"], [1, "remove-task-button", 3, "click"], [3, "textToShow", "targetClass", "textSubmissionAction"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_div_0_Template, 2, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_2__["InputFormComponent"]],
        styles: [".task-container[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  margin: 8px 15px 0 15px;\r\n}\r\n\r\n.task-container-selected[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.task[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  padding: 5px;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  background-color: var(--button);\r\n  color: var(--text);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-title[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n\r\n.remove-task-button[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  border: none;\r\n  background-color: var(--button);\r\n  margin-bottom: auto;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]:hover   .remove-task-button[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDhweCAxNXB4IDAgMTVweDtcclxufVxyXG5cclxuLnRhc2stY29udGFpbmVyLXNlbGVjdGVkIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQpO1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrLXRpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnJlbW92ZS10YXNrLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIC5yZW1vdmUtdGFzay1idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "FgpD":
    /*!***************************************************************!*\
      !*** ./src/app/components/input-form/input-form.component.ts ***!
      \***************************************************************/

    /*! exports provided: InputFormComponent */

    /***/
    function FgpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputFormComponent", function () {
        return InputFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["input"];
      var _c1 = ["button"];

      var InputFormComponent = /*#__PURE__*/function () {
        function InputFormComponent(elementRef) {
          _classCallCheck(this, InputFormComponent);

          this.elementRef = elementRef;
          this.textSubmissionAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        } // @HostListener(`document:click`, ['$event.target'])
        // clickedOut(targetElement: HTMLElement): void {
        //   const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
        //   if (!targetElement.classList.contains('add-task')
        //     && !targetElement.classList.contains(this.targetClass)
        //     && !targetElement.classList.contains('input-task')) {
        //     if (openForms.length > 0) {
        //       openForms.forEach(el => el.click());
        //     }
        //   }
        // }


        _createClass(InputFormComponent, [{
          key: "pressedEscape",
          value: function pressedEscape() {
            this.buttonRef.nativeElement.click();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            // setTimeout makes the code inside asynchronous, which prevents "NG0100: Expression has changed after it was checked" error
            setTimeout(function () {
              if (InputFormComponent.inputForm !== null) {
                InputFormComponent.inputForm.buttonRef.nativeElement.click();
              }

              InputFormComponent.inputForm = _this;
            });
            this.inputRef.nativeElement.focus();
          }
        }, {
          key: "onEnterPressed",
          value: function onEnterPressed(event) {
            if (event.key === 'Enter') {
              this.textSubmissionAction.emit({
                text: this.textToShow,
                keep: true
              });
              this.textToShow = '';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            InputFormComponent.inputForm = null;
          }
        }]);

        return InputFormComponent;
      }();

      InputFormComponent.inputForm = null;

      InputFormComponent.ɵfac = function InputFormComponent_Factory(t) {
        return new (t || InputFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      InputFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputFormComponent,
        selectors: [["app-input-form"]],
        viewQuery: function InputFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonRef = _t.first);
          }
        },
        hostBindings: function InputFormComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function InputFormComponent_keydown_escape_HostBindingHandler() {
              return ctx.pressedEscape();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          textToShow: "textToShow",
          targetClass: "targetClass"
        },
        outputs: {
          textSubmissionAction: "textSubmissionAction"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "input-form-container"], ["name", "input", "type", "text", 1, "input-task", 3, "ngModel", "ngModelChange", "keypress"], ["input", ""], [1, "add-task", 3, "click"], ["button", ""], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "check", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-check", "fa-w-16"], ["fill", "currentColor", "d", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]],
        template: function InputFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputFormComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.textToShow = $event;
            })("keypress", function InputFormComponent_Template_input_keypress_1_listener($event) {
              return ctx.onEnterPressed($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputFormComponent_Template_button_click_3_listener() {
              return ctx.textSubmissionAction.emit({
                text: ctx.textToShow,
                keep: false
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textToShow);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [".input-form-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.input-task[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n}\r\n\r\n.add-task[_ngcontent-%COMP%] {\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  height: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtBQUNBOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJpbnB1dC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbnB1dC10YXNrIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmFkZC10YXNrIHtcclxufVxyXG5cclxuc3ZnIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "HVfF":
    /*!***************************************************!*\
      !*** ./src/app/components/list/list.component.ts ***!
      \***************************************************/

    /*! exports provided: ListComponent */

    /***/
    function HVfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_TaskModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/TaskModel */
      "cr/C");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var simplebar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! simplebar-angular */
      "eDYX");
      /* harmony import */


      var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../input-form/input-form.component */
      "FgpD");
      /* harmony import */


      var _task_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../task/task.component */
      "CvMt");

      var _c0 = ["titleRef"];

      function ListComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.closeListAction.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.list.title);
        }
      }

      function ListComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function ListComponent_ng_template_3_Template_app_input_form_textSubmissionAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r10.isChangingName = false;
            return ctx_r10.list.title = $event.text.length > 0 ? $event.text : ctx_r10.list.title;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", ctx_r2.list.title)("targetClass", "title");
        }
      }

      function ListComponent_app_task_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeAction", function ListComponent_app_task_7_Template_app_task_removeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r13 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.list.tasks.splice(i_r13, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r12);
        }
      }

      function ListComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.isAddingTask = !ctx_r16.isAddingTask;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Add another task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-input-form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textSubmissionAction", function ListComponent_ng_template_11_Template_app_input_form_textSubmissionAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r18.pushToArray($event.text.length > 0 && $event.text !== "\n" ? $event.text : "New Task");
            return ctx_r18.isAddingTask = $event.keep;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textToShow", "")("targetClass", "open-form-to-add-task");
        }
      }

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent() {
          _classCallCheck(this, ListComponent);

          this.options = {
            autoHide: false
          };
          this.closeListAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isAddingTask = false;
          this.isChangingName = false;
        }

        _createClass(ListComponent, [{
          key: "onRightClick",
          value: function onRightClick(event) {
            event.preventDefault();

            if (event.target.classList.contains('header') || event.target.classList.contains('title') || event.target.classList.contains('title-container')) {
              this.isChangingName = !this.isChangingName;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "array",
          value: function array(n) {
            return Array(n);
          }
        }, {
          key: "pushToArray",
          value: function pushToArray(text) {
            if (text.length > 0) {
              this.list.tasks.push(new _models_TaskModel__WEBPACK_IMPORTED_MODULE_1__["TaskModel"](text, this.list.tasks.length));
            }
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)();
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        viewQuery: function ListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleRef = _t.first);
          }
        },
        hostBindings: function ListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ListComponent_contextmenu_HostBindingHandler($event) {
              return ctx.onRightClick($event);
            });
          }
        },
        inputs: {
          list: "list"
        },
        outputs: {
          closeListAction: "closeListAction"
        },
        decls: 13,
        vars: 9,
        consts: [[1, "header"], [1, "title-container"], [4, "ngIf", "ngIfElse"], ["titleInput", ""], [1, "list"], [3, "options"], [3, "task", "removeAction", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "button-container"], ["taskInput", ""], [1, "title"], ["titleRef", ""], [1, "remove-list", 3, "click"], [3, "textToShow", "targetClass", "textSubmissionAction"], [3, "task", "removeAction"], [1, "open-form-to-add-task", 3, "click"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_container_2_Template, 6, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_ng_template_3_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-simplebar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_app_task_7_Template, 1, 1, "app-task", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_ng_container_10_Template, 3, 0, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_ng_template_11_Template, 1, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("uuid", ctx.list.uuid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isChangingName)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("uuid", ctx.list.uuid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("uuid", ctx.list.uuid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddingTask)("ngIfElse", _r5);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], simplebar_angular__WEBPACK_IMPORTED_MODULE_3__["SimplebarAngularComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_4__["InputFormComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"]],
        styles: [".list[_ngcontent-%COMP%] {\r\n  background-color: var(--main);\r\n  margin: 0 6px;\r\n  max-height: calc(75vh + 20px);\r\n}\r\n\r\nngx-simplebar[_ngcontent-%COMP%] {\r\n  max-height: inherit;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  margin-right: 6px;\r\n  margin-left: 6px;\r\n  background-color: var(--main);\r\n  color: var(--text);\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.title-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background-color: var(--main);\r\n  padding: 0 17px;\r\n  margin: 0 6px;\r\n  border-radius: 0 0 12px 12px;\r\n}\r\n\r\n.input-task-element[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.remove-list[_ngcontent-%COMP%] {\r\n  display: none;\r\n  border: none;\r\n  background: none;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]:hover   .remove-list[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.open-form-to-add-task[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  color: var(--text);\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n  margin-bottom: 8px;\r\n  padding: 10px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoibGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xyXG4gIG1hcmdpbjogMCA2cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYyg3NXZoICsgMjBweCk7XHJcbn1cclxuXHJcbm5neC1zaW1wbGViYXIge1xyXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6IDAgMTdweDtcclxuICBtYXJnaW46IDAgNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbi5pbnB1dC10YXNrLWVsZW1lbnQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnJlbW92ZS1saXN0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXI6aG92ZXIgLnJlbW92ZS1saXN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm9wZW4tZm9ybS10by1hZGQtdGFzayB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "pfSe");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/data-service.service */
      "njzu");
      /* harmony import */


      var _services_board_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/board-store.service */
      "USIL");
      /* harmony import */


      var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/control-panel/control-panel.component */
      "qGZS");
      /* harmony import */


      var _components_board_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/board/board.component */
      "qtDB");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(dataService, boardStoreService) {
          _classCallCheck(this, AppComponent);

          this.dataService = dataService;
          this.boardStoreService = boardStoreService;
          this.title = 'TodoList';
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.subscription.add(this.dataService.getBoards().subscribe(function (data) {
              if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_1__["isNotNullOrUndefined"])(data) && data.length > 0) {
                _this2.boardStoreService.setBoards(data);
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_board_store_service__WEBPACK_IMPORTED_MODULE_4__["BoardStoreService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-control-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-board");
          }
        },
        directives: [_components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_5__["ControlPanelComponent"], _components_board_board_component__WEBPACK_IMPORTED_MODULE_6__["BoardComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "TxbB":
    /*!**************************************!*\
      !*** ./src/app/models/BoardModel.ts ***!
      \**************************************/

    /*! exports provided: BoardModel */

    /***/
    function TxbB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardModel", function () {
        return BoardModel;
      });
      /* harmony import */


      var _ListModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ListModel */
      "s2V2");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "EcEN");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);

      var BoardModel = /*#__PURE__*/function () {
        function BoardModel(title) {
          _classCallCheck(this, BoardModel);

          this.title = title;
          this.lists = [];
          this.id = 0;
          this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        }

        _createClass(BoardModel, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.lists = this.lists.map(function (item) {
              return new _ListModel__WEBPACK_IMPORTED_MODULE_0__["ListModel"]().deserialize(item);
            });
            this.lists.sort(function (first, second) {
              return first.order > second.order ? 1 : first.order < second.order ? -1 : 0;
            });
            return this;
          }
        }]);

        return BoardModel;
      }();
      /***/

    },

    /***/
    "USIL":
    /*!*************************************************!*\
      !*** ./src/app/services/board-store.service.ts ***!
      \*************************************************/

    /*! exports provided: BoardStoreService */

    /***/
    function USIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardStoreService", function () {
        return BoardStoreService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BoardStoreService = /*#__PURE__*/function () {
        function BoardStoreService() {
          _classCallCheck(this, BoardStoreService);

          this._selectedBoardSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
          this.selectedBoard$ = this._selectedBoardSource.asObservable();
          this._boardsSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
          this.boards$ = this._boardsSource.asObservable();

          this._boardsSource.next([]);

          this._selectedBoardSource.next(null);
        }

        _createClass(BoardStoreService, [{
          key: "setSelectedBoard",
          value: function setSelectedBoard(board) {
            this._selectedBoardSource.next(board);
          }
        }, {
          key: "setBoards",
          value: function setBoards(data) {
            this._boardsSource.next(data);
          }
        }]);

        return BoardStoreService;
      }();

      BoardStoreService.ɵfac = function BoardStoreService_Factory(t) {
        return new (t || BoardStoreService)();
      };

      BoardStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BoardStoreService,
        factory: BoardStoreService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "VGv4":
    /*!***************************************************!*\
      !*** ./src/app/services/control-panel.service.ts ***!
      \***************************************************/

    /*! exports provided: ControlPanelService */

    /***/
    function VGv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlPanelService", function () {
        return ControlPanelService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlPanelService = /*#__PURE__*/function () {
        function ControlPanelService() {
          _classCallCheck(this, ControlPanelService);

          // tslint:disable-next-line:variable-name
          this._indexSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // tslint:disable-next-line:variable-name

          this._deleteIndexSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.index$ = this._indexSource.asObservable();
          this.deleteIndex$ = this._deleteIndexSource.asObservable();
        }

        _createClass(ControlPanelService, [{
          key: "setIndex",
          value: function setIndex(i) {
            this._indexSource.next(i);
          }
        }, {
          key: "deleteIndex",
          value: function deleteIndex(i) {
            this._deleteIndexSource.next(i);
          }
        }]);

        return ControlPanelService;
      }();

      ControlPanelService.ɵfac = function ControlPanelService_Factory(t) {
        return new (t || ControlPanelService)();
      };

      ControlPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ControlPanelService,
        factory: ControlPanelService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Vl72":
    /*!*****************************************************!*\
      !*** ./src/app/components/guide/guide.component.ts ***!
      \*****************************************************/

    /*! exports provided: GuideComponent */

    /***/
    function Vl72(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuideComponent", function () {
        return GuideComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GuideComponent = /*#__PURE__*/function () {
        function GuideComponent() {
          _classCallCheck(this, GuideComponent);

          this.modal = null;
        }

        _createClass(GuideComponent, [{
          key: "onClick",
          value: function onClick(target) {
            if (target.classList.contains('modal')) {
              this.modal.style.display = 'none';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modal = document.getElementById('modal');
          }
        }]);

        return GuideComponent;
      }();

      GuideComponent.ɵfac = function GuideComponent_Factory(t) {
        return new (t || GuideComponent)();
      };

      GuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GuideComponent,
        selectors: [["app-guide"]],
        hostBindings: function GuideComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function GuideComponent_mousedown_HostBindingHandler($event) {
              return ctx.onClick($event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 32,
        vars: 0,
        consts: [[1, "btn", 3, "click"], ["id", "modal", 1, "modal"], [1, "modal-content-container"], [1, "modal-content"], [1, "close", 3, "click"], [1, "label"], [1, "description"], [1, "instructions"], [1, "footer"], [1, "author"], ["href", "https://www.linkedin.com/in/andrii-bilych-9b3232169/"], ["href", "https://github.com/AndriiBilych"]],
        template: function GuideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_1_listener() {
              return ctx.modal.style.display = "block";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_6_listener() {
              return ctx.modal.style.display = "none";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This website is a todo manager inspired by Trello");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " It resembles a frontend prototype of a board styled todo list, thus no database or backend server. Created with Angular 11. Feel free to browse provided examples of boards or create your own. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "How to use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Left click to drag tasks, lists or the board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Right click to edit list/board titles or tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Made by Andrii Bilych");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "LinkedIn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Github");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n  color: var(--text);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n  color: var(--text);\r\n}\r\n\r\n.modal-content-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  background-color: var(--modalBackground);\r\n  color: var(--text);\r\n  padding: 40px;\r\n  border: 1px solid #888;\r\n  font-size: 18px;\r\n  width: 60%;\r\n  height: 70%;\r\n  border-radius: 10px;\r\n  position: relative;\r\n}\r\n\r\n.instructions-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n  color: var(--grayed);\r\n  display: block;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: var(--text);\r\n  background-color: var(--button);\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  background-color: var(--highlighted);\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n  margin: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1aWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiZ3VpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG5kaXY6aG92ZXIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQpO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWxCYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgY29sb3I6IHZhcigtLWdyYXllZCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmEge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/board/board.component */
      "qtDB");
      /* harmony import */


      var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/list/list.component */
      "HVfF");
      /* harmony import */


      var _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/control-panel/control-panel.component */
      "qGZS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! simplebar-angular */
      "eDYX");
      /* harmony import */


      var _components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/input-form/input-form.component */
      "FgpD");
      /* harmony import */


      var _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/task/task.component */
      "CvMt");
      /* harmony import */


      var _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/guide/guide.component */
      "Vl72");
      /* harmony import */


      var _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/color-picker/color-picker.component */
      "CUwC");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], simplebar_angular__WEBPACK_IMPORTED_MODULE_8__["SimplebarAngularModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_6__["ControlPanelComponent"], _components_input_form_input_form_component__WEBPACK_IMPORTED_MODULE_9__["InputFormComponent"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_10__["TaskComponent"], _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__["GuideComponent"], _components_color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_12__["ColorPickerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], simplebar_angular__WEBPACK_IMPORTED_MODULE_8__["SimplebarAngularModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "cr/C":
    /*!*************************************!*\
      !*** ./src/app/models/TaskModel.ts ***!
      \*************************************/

    /*! exports provided: TaskModel */

    /***/
    function crC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskModel", function () {
        return TaskModel;
      });
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! uuid */
      "EcEN");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

      var TaskModel = /*#__PURE__*/function () {
        function TaskModel(text, orderIndex) {
          _classCallCheck(this, TaskModel);

          this.id = 0;
          this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
          this.content = text;
          this.order = orderIndex;
          this.selected = false;
        }

        _createClass(TaskModel, [{
          key: "deserialize",
          value: function deserialize(input) {
            return Object.assign(this, input);
          }
        }]);

        return TaskModel;
      }();
      /***/

    },

    /***/
    "h/ki":
    /*!********************************************!*\
      !*** ./src/app/models/ListBoundingInfo.ts ***!
      \********************************************/

    /*! exports provided: ListBoundingInfo */

    /***/
    function hKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBoundingInfo", function () {
        return ListBoundingInfo;
      });
      /* harmony import */


      var _TaskBoundingInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./TaskBoundingInfo */
      "mmPW");

      var ListBoundingInfo = /*#__PURE__*/function (_TaskBoundingInfo__WE) {
        _inherits(ListBoundingInfo, _TaskBoundingInfo__WE);

        var _super = _createSuper(ListBoundingInfo);

        function ListBoundingInfo(x, y, bottom, right, uuid) {
          var _this3;

          _classCallCheck(this, ListBoundingInfo);

          _this3 = _super.call(this, x, y, bottom, right, uuid);
          _this3.tasksBoundingInfo = [];
          return _this3;
        }

        return ListBoundingInfo;
      }(_TaskBoundingInfo__WEBPACK_IMPORTED_MODULE_0__["TaskBoundingInfo"]);
      /***/

    },

    /***/
    "mmPW":
    /*!********************************************!*\
      !*** ./src/app/models/TaskBoundingInfo.ts ***!
      \********************************************/

    /*! exports provided: TaskBoundingInfo */

    /***/
    function mmPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskBoundingInfo", function () {
        return TaskBoundingInfo;
      });

      var TaskBoundingInfo = function TaskBoundingInfo(x, y, bottom, right, uuid) {
        _classCallCheck(this, TaskBoundingInfo);

        this.x = x;
        this.y = y;
        this.bottom = bottom;
        this.right = right;
        this.uuid = uuid;
      };
      /***/

    },

    /***/
    "njzu":
    /*!**************************************************!*\
      !*** ./src/app/services/data-service.service.ts ***!
      \**************************************************/

    /*! exports provided: DataService */

    /***/
    function njzu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/BoardModel */
      "TxbB");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
        }

        _createClass(DataService, [{
          key: "getBoards",
          value: function getBoards() {
            return this.http.get('assets/boards.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (list) {
              return list.map(function (item) {
                return new _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__["BoardModel"]().deserialize(item);
              });
            }));
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qGZS":
    /*!*********************************************************************!*\
      !*** ./src/app/components/control-panel/control-panel.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ControlPanelComponent */

    /***/
    function qGZS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function () {
        return ControlPanelComponent;
      });
      /* harmony import */


      var _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/BoardModel */
      "TxbB");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_board_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/board-store.service */
      "USIL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../color-picker/color-picker.component */
      "CUwC");
      /* harmony import */


      var _guide_guide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../guide/guide.component */
      "Vl72");
      /* harmony import */


      var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../input-form/input-form.component */
      "FgpD");

      var _c0 = ["confirmationRef"];

      function ControlPanelComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var b_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.onClick(b_r3.uuid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", (ctx_r0.selectedBoard == null ? null : ctx_r0.selectedBoard.uuid) === b_r3.uuid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r3.title);
        }
      }

      function ControlPanelComponent_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_div_12_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.isChangingName = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ControlPanelComponent_div_12_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-input-form", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("textSubmissionAction", function ControlPanelComponent_div_12_ng_template_3_Template_app_input_form_textSubmissionAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            ctx_r12.isChangingName = false;
            return ctx_r12.selectedBoard.title = $event.text.length > 0 ? $event.text : ctx_r12.selectedBoard.title;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textToShow", ctx_r9.selectedBoard.title)("targetClass", "left-button");
        }
      }

      function ControlPanelComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ControlPanelComponent_div_12_div_2_Template, 5, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ControlPanelComponent_div_12_ng_template_3_Template, 1, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_div_12_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);

            return _r2.style.display = "block";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Delete board");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \xD7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isChangingName)("ngIfElse", _r8);
        }
      }

      var ControlPanelComponent = /*#__PURE__*/function () {
        function ControlPanelComponent(boardStoreService) {
          _classCallCheck(this, ControlPanelComponent);

          this.boardStoreService = boardStoreService;
          this.isChangingName = false;
          this.selectedBoard = null;
          this.boards = [];
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        }

        _createClass(ControlPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(function (board) {
              return _this4.selectedBoard = board;
            }));
            this.subscription.add(this.boardStoreService.boards$.subscribe(function (data) {
              return _this4.boards = data;
            }));
          }
        }, {
          key: "onCloseModalClick",
          value: function onCloseModalClick(target) {
            if (target.classList.contains('modal')) {
              this.confirmation.nativeElement.style.display = 'none';
            }
          }
        }, {
          key: "onClick",
          value: function onClick(uuid) {
            this.boardStoreService.setBoards(this.boards);
            this.boardStoreService.setSelectedBoard(this.boards.find(function (b) {
              return b.uuid === uuid;
            }));
          }
        }, {
          key: "removeBoard",
          value: function removeBoard(uuid) {
            var index = this.boards.findIndex(function (b) {
              return b.uuid === uuid;
            });
            this.boards.splice(index, 1);
            this.boardStoreService.setBoards(this.boards);

            if (this.boards.length !== 0) {
              this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
            }

            this.boardStoreService.setSelectedBoard(null);
          }
        }, {
          key: "createBoard",
          value: function createBoard() {
            this.boards.push(new _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__["BoardModel"]('New Board'));
            this.boardStoreService.setBoards(this.boards);
            this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
          }
        }]);

        return ControlPanelComponent;
      }();

      ControlPanelComponent.ɵfac = function ControlPanelComponent_Factory(t) {
        return new (t || ControlPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_board_store_service__WEBPACK_IMPORTED_MODULE_3__["BoardStoreService"]));
      };

      ControlPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ControlPanelComponent,
        selectors: [["app-control-panel"]],
        viewQuery: function ControlPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.confirmation = _t.first);
          }
        },
        hostBindings: function ControlPanelComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ControlPanelComponent_mousedown_HostBindingHandler($event) {
              return ctx.onCloseModalClick($event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
          }
        },
        decls: 29,
        vars: 4,
        consts: [[1, "panel"], [1, "left-container"], [1, "dropdown"], [1, "dropBtn", "left-button"], [1, "board-title"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chevron-down", "role", "img", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-chevron-down", "fa-w-14"], ["fill", "currentColor", "d", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"], [1, "dropdown-content"], ["class", "list-name", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "list-name", 3, "click"], ["class", "tools", 4, "ngIf"], [1, "modal"], ["confirmationRef", ""], [1, "modal-content"], [1, "close", 3, "click"], [1, "header"], [1, "choice-container"], [1, "choice", 3, "click"], [1, "tools"], [1, "left-button"], [3, "click", 4, "ngIf", "ngIfElse"], ["titleInput", ""], [1, "left-button", 3, "click"], [3, "click"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "pen", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-pen", "fa-w-16"], ["fill", "currentColor", "d", "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"], [3, "textToShow", "targetClass", "textSubmissionAction"]],
        template: function ControlPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ControlPanelComponent_button_9_Template, 2, 3, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_Template_button_click_10_listener() {
              return ctx.createBoard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "+ New Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ControlPanelComponent_div_12_Template, 9, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-color-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-guide");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_Template_button_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);

              return _r2.style.display = "none";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_Template_button_click_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);

              ctx.removeBoard(ctx.selectedBoard.uuid);
              return _r2.style.display = "none";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlPanelComponent_Template_button_click_27_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);

              return _r2.style.display = "none";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedBoard ? ctx.selectedBoard.title : "Boards");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.boards);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedBoard !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Are you sure you want to delete \"", ctx.selectedBoard == null ? null : ctx.selectedBoard.title, "\" board?");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_5__["ColorPickerComponent"], _guide_guide_component__WEBPACK_IMPORTED_MODULE_6__["GuideComponent"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_7__["InputFormComponent"]],
        styles: [".panel[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: var(--main);\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tools[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.dropBtn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.left-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.left-button[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  color: var(--text);\r\n  border: none;\r\n  padding: 10px;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: var(--button);\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  display: block;\r\n  border: none;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropBtn[_ngcontent-%COMP%], .list-name[_ngcontent-%COMP%]:hover, .left-button[_ngcontent-%COMP%]:hover{\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.list-name[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  color: var(--text);\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background-color: var(--highlighted);\r\n  color: var(--text);\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 2vw;\r\n  height: 2vh;\r\n  margin-left: 2px;\r\n  color: var(--text);\r\n}\r\n\r\n.board-name-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background-color: var(--button);\r\n  border: none;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.remove-board[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: none;\r\n  margin-left: 5px\r\n}\r\n\r\n.board-name-container[_ngcontent-%COMP%]:hover   .remove-board[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n.board-title[_ngcontent-%COMP%] {\r\n  color: var(--text);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  display: flex;\r\n  border-radius: 5px;\r\n  color: var(--text);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0,0,0);\r\n  background-color: rgba(0,0,0,0.4);\r\n  color: var(--text);\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: var(--modalBackground);\r\n  color: var(--text);\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  max-width: 600px;\r\n  width: 60%;\r\n  border-radius: 10px;\r\n  position: relative;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: var(--text);\r\n  background-color: var(--main);\r\n  font-size: 18px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.choice-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.choice[_ngcontent-%COMP%] {\r\n  color: var(--text);\r\n  background-color: var(--main);\r\n  font-size: 18px;\r\n  margin: 10px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus, .choice[_ngcontent-%COMP%]:hover, .choice[_ngcontent-%COMP%]:focus {\r\n  background-color: var(--highlighted);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCIiwiZmlsZSI6ImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50b29scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRyb3BCdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxlZnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGVmdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcEJ0biwgLmxpc3QtbmFtZTpob3ZlciAsIC5sZWZ0LWJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZCk7XHJcbn1cclxuXHJcbi5saXN0LW5hbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodGVkKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgd2lkdGg6IDJ2dztcclxuICBoZWlnaHQ6IDJ2aDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuLmJvYXJkLW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5yZW1vdmUtYm9hcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHhcclxufVxyXG5cclxuLmJvYXJkLW5hbWUtY29udGFpbmVyOmhvdmVyIC5yZW1vdmUtYm9hcmQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbmRpdjpob3ZlciAuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZCk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWxCYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgbWFyZ2luOiAxNSUgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNob2ljZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaG9pY2Uge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzLCAuY2hvaWNlOmhvdmVyLCAuY2hvaWNlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRlZCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "qtDB":
    /*!*****************************************************!*\
      !*** ./src/app/components/board/board.component.ts ***!
      \*****************************************************/

    /*! exports provided: BoardComponent */

    /***/
    function qtDB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
        return BoardComponent;
      });
      /* harmony import */


      var _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/BoardModel */
      "TxbB");
      /* harmony import */


      var _models_TaskBoundingInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/TaskBoundingInfo */
      "mmPW");
      /* harmony import */


      var _models_ListModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../models/ListModel */
      "s2V2");
      /* harmony import */


      var _models_ListBoundingInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/ListBoundingInfo */
      "h/ki");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_control_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/control-panel.service */
      "VGv4");
      /* harmony import */


      var _services_data_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/data-service.service */
      "njzu");
      /* harmony import */


      var _services_board_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/board-store.service */
      "USIL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var simplebar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! simplebar-angular */
      "eDYX");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../list/list.component */
      "HVfF");
      /* harmony import */


      var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../input-form/input-form.component */
      "FgpD");

      var _c0 = ["fakeTask"];
      var _c1 = ["board"];

      function BoardComponent_ng_container_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeListAction", function BoardComponent_ng_container_0_div_4_Template_app_list_closeListAction_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);

            var i_r10 = ctx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r11.removeList(i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("uuid", list_r9.uuid)("order-index", list_r9.order);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("uuid", list_r9.uuid);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("list", list_r9);
        }
      }

      function BoardComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BoardComponent_ng_container_0_ng_container_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r13.isAddingList = !ctx_r13.isAddingList;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "+ Add another list");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }
      }

      function BoardComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-input-form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("textSubmissionAction", function BoardComponent_ng_container_0_ng_template_7_Template_app_input_form_textSubmissionAction_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            ctx_r15.isAddingList = !ctx_r15.isAddingList;
            ctx_r15.pushToArray($event.text.length > 0 && $event.text !== "\n" ? $event.text : "New List");
            return ctx_r15.isAddingList = $event.keep;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("targetClass", "add-list");
        }
      }

      function BoardComponent_ng_container_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.selectedTaskData.content);
        }
      }

      function BoardComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ngx-simplebar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BoardComponent_ng_container_0_div_4_Template, 3, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BoardComponent_ng_container_0_ng_container_6_Template, 3, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BoardComponent_ng_container_0_ng_template_7_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BoardComponent_ng_container_0_div_9_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("uuid", ctx_r0.selectedBoard.uuid);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r0.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.selectedBoard.lists);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isAddingList)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isDraggingTask);
        }
      }

      function BoardComponent_ng_template_1_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BoardComponent_ng_template_1_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);

            var b_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r20.loadBoard(b_r19.uuid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](b_r19.title);
        }
      }

      function BoardComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Choose an example or create new board");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BoardComponent_ng_template_1_button_4_Template, 2, 1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BoardComponent_ng_template_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r22.createBoard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "+ New Board");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.boards);
        }
      }

      var BoardComponent = /*#__PURE__*/function () {
        function BoardComponent(controlPanelService, dataService, boardStoreService) {
          _classCallCheck(this, BoardComponent);

          this.controlPanelService = controlPanelService;
          this.dataService = dataService;
          this.boardStoreService = boardStoreService;
          this.options = {
            autoHide: false
          };
          this.currentTaskIndex = 0;
          this.newTaskIndex = 1;
          this.currentListIndex = 0;
          this.newListOrderIndex = 0;
          this.newListTitle = '';
          this.targetTask = null;
          this.targetList = null;
          this.isDraggingTask = false;
          this.isDraggingList = false;
          this.isDraggingBoard = false;
          this.scrollSpeed = 10;
          this.isAddingList = false;
          this.mouseStartingX = null;
          this.selectedBoard = null;
          this.currentIndex = null;
          this.taskPositionsByOrder = [];
          this.listsBoundingInfo = [];
          this.boards = [];
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
          this.scrollContainerRef = null;
        }

        _createClass(BoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(function (board) {
              return _this5.selectedBoard = board;
            }));
            this.subscription.add(this.boardStoreService.boards$.subscribe(function (data) {
              _this5.boards = data; // Testing, exclusively for disabling title screen

              if (_this5.boards.length > 0) {
                _this5.boardStoreService.setSelectedBoard(_this5.boards[0]);
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "startDrag",
          value: function startDrag(targetElement, event) {
            document.body.style.userSelect = 'none';

            if (event.buttons === 1) {
              if (!this.listsBoundingInfo.length) {
                this.calculateBoundingInfo();
              }

              if (!this.scrollContainerRef && this.selectedBoard) {
                this.scrollContainerRef = this.boardRef.nativeElement.firstChild.firstChild.children[1].firstChild.firstChild;
              }

              if (targetElement.classList.contains('task') || targetElement.classList.contains('task-title')) {
                this.isDraggingTask = true;
                this.targetTask = targetElement;

                if (targetElement.classList.contains('task-title')) {
                  this.targetTask = targetElement.parentElement;
                }

                var targetTaskUuid = this.targetTask.getAttribute('uuid');
                this.selectedTaskData = this.getTaskDataByUuid(targetTaskUuid);
                this.currentListIndex = this.selectedBoard.lists.findIndex(function (list) {
                  return list.tasks.findIndex(function (task) {
                    return task.uuid === targetTaskUuid;
                  }) !== -1;
                });
                this.currentTaskIndex = this.selectedBoard.lists[this.currentListIndex].tasks.findIndex(function (task) {
                  return task.uuid === targetTaskUuid;
                });
                this.selectedBoard.lists[this.currentListIndex].tasks[this.currentTaskIndex].selected = true;
              } else if (targetElement.classList.contains('title') || targetElement.classList.contains('title-container')) {
                this.isDraggingList = true; // reference to list-container in board.html

                this.targetList = targetElement.parentElement.parentElement.parentElement;

                if (targetElement.classList.contains('title')) {
                  this.targetList = this.targetList.parentElement;
                }

                this.targetList.style.position = 'fixed';
                var uuid = this.targetList.getAttribute('uuid');
                this.currentListIndex = this.selectedBoard.lists.findIndex(function (list) {
                  return list.uuid === uuid;
                });
              } else if (this.selectedBoard !== null) {
                this.isDraggingBoard = true;
                this.mouseStartingX = event.clientX;
              }
            }
          }
        }, {
          key: "drag",
          value: function drag(event) {
            if (this.isDraggingTask) {
              // set fake task's position
              this.fakeTask.nativeElement.style.top = "".concat(event.clientY, "px");
              this.fakeTask.nativeElement.style.left = "".concat(event.clientX, "px");
              var newListIndex = this.findListIndexByMouseX(event.clientX);
              var newTaskIndex = this.findTaskIndexByMouseY(event.clientY, newListIndex);
              var currentList = this.selectedBoard.lists[this.currentListIndex];
              var newList = this.selectedBoard.lists[newListIndex]; // if list is the same

              if (newListIndex === this.currentListIndex) {
                // if task position is new
                if (newTaskIndex !== this.currentTaskIndex) {
                  var uuid = this.selectedTaskData.uuid;
                  var currentTask = currentList.tasks[this.currentTaskIndex];
                  currentList.tasks[this.currentTaskIndex] = currentList.tasks[newTaskIndex];
                  currentList.tasks[newTaskIndex] = currentTask;
                  this.currentTaskIndex = newTaskIndex;
                  this.calculateBoundingInfo(); // next line refreshes reference to the correct object !IMPORTANT

                  this.selectedTaskData = this.getTaskDataByUuid(uuid);
                }
              } // if list is different
              else {
                  var _uuid = this.selectedTaskData.uuid; // delete old task, and add new task

                  newList.tasks.splice(newTaskIndex, 0, this.selectedTaskData); // next line deletes the object that selectedTaskData is pointing to !IMPORTANT

                  currentList.tasks.splice(this.currentTaskIndex, 1);
                  this.currentListIndex = newListIndex;
                  this.currentTaskIndex = newTaskIndex;
                  this.calculateBoundingInfo();
                  this.taskCleanup(_uuid, this.selectedBoard.lists[newListIndex].uuid); // next line refreshes reference to the correct object !IMPORTANT

                  this.selectedTaskData = this.getTaskDataByUuid(_uuid);
                }
            }

            if (this.isDraggingList) {
              this.targetList.style.top = "".concat(event.clientY, "px");
              this.targetList.style.left = "".concat(event.clientX, "px");
              this.newListOrderIndex = this.findListIndexByMouseX(event.clientX);

              if (this.newListOrderIndex !== this.currentListIndex) {
                var _currentList = this.selectedBoard.lists[this.currentListIndex]; // switch neighbouring lists

                this.selectedBoard.lists[this.currentListIndex] = this.selectedBoard.lists[this.newListOrderIndex];
                this.selectedBoard.lists[this.newListOrderIndex] = _currentList;
                this.currentListIndex = this.newListOrderIndex;
              }
            }

            if (this.isDraggingBoard) {
              this.scrollContainerRef.scrollLeft -= (event.clientX - this.mouseStartingX) / this.scrollSpeed;
            }
          }
        }, {
          key: "endDrag",
          value: function endDrag() {
            document.body.style.userSelect = 'all';

            if (this.targetTask !== null) {
              this.isDraggingTask = false;
              this.targetTask = null;
              this.selectedTaskData = null;
              this.listsBoundingInfo = []; // deselect all tasks

              this.selectedBoard.lists.forEach(function (list) {
                return list.tasks.forEach(function (task) {
                  if (task !== undefined) {
                    task.selected = false;
                  }
                });
              });
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

            if (this.selectedBoard !== null) {
              this.isDraggingBoard = false;
              this.mouseStartingX = null;
            } // calculate board bounding info


            this.calculateBoundingInfo();
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            if (!this.scrollContainerRef && this.selectedBoard) {
              this.scrollContainerRef = this.boardRef.nativeElement.firstChild.firstChild.children[1].firstChild.firstChild;
            }

            var target = event.target;

            if (target && target.classList === this.scrollContainerRef.classList) {
              this.scrollContainerRef.scrollLeft += event.deltaY / -1.6;
            }
          }
        }, {
          key: "findListIndexByMouseX",
          value: function findListIndexByMouseX(clientX) {
            if (!this.listsBoundingInfo || this.listsBoundingInfo.length === 0) {
              return 0;
            }

            var index = this.listsBoundingInfo.findIndex(function (list) {
              return clientX >= list.x && clientX <= list.right;
            });
            var first = this.listsBoundingInfo[0];
            var last = this.listsBoundingInfo[this.listsBoundingInfo.length - 1];

            if (clientX > last.right) {
              return this.listsBoundingInfo.length - 1;
            }

            if (clientX < first.x) {
              return 0;
            }

            return index === -1 ? 0 : index;
          }
        }, {
          key: "findTaskIndexByMouseY",
          value: function findTaskIndexByMouseY(clientY, listIndex) {
            if (!this.listsBoundingInfo || this.listsBoundingInfo.length === 0) {
              return 0;
            }

            var taskBoundsInfo = this.listsBoundingInfo[listIndex].tasksBoundingInfo;

            if (!taskBoundsInfo || taskBoundsInfo.length === 0) {
              return 0;
            }

            var first = taskBoundsInfo[0];
            var last = taskBoundsInfo[taskBoundsInfo.length - 1];
            var selectedListIndex = this.findListIndexByTaskUuid(this.selectedTaskData.uuid);

            if (!first || !last || clientY < first.y) {
              return 0;
            }

            if (clientY > last.bottom) {
              if (taskBoundsInfo.length === 1 && last.uuid !== this.selectedTaskData.uuid) {
                return 1;
              }

              return taskBoundsInfo.length - (selectedListIndex === listIndex ? 1 : 0);
            }

            var index = 0;

            for (var i = 0; i < taskBoundsInfo.length; i++) {
              if (clientY >= taskBoundsInfo[i].y) {
                index = i;
              }
            }

            return index;
          }
        }, {
          key: "findListIndexByTaskUuid",
          value: function findListIndexByTaskUuid(uuid) {
            for (var i = 0; i < this.selectedBoard.lists.length; i++) {
              var _iterator = _createForOfIteratorHelper(this.selectedBoard.lists[i].tasks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var task = _step.value;

                  if (task !== undefined && task.uuid === uuid) {
                    return i;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return null;
          }
        }, {
          key: "getTaskDataByUuid",
          value: function getTaskDataByUuid(uuid) {
            var _iterator2 = _createForOfIteratorHelper(this.selectedBoard.lists),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var list = _step2.value;

                var _iterator3 = _createForOfIteratorHelper(list.tasks),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var task = _step3.value;

                    if (task !== undefined && task.uuid === uuid) {
                      return task;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return null;
          }
        }, {
          key: "taskCleanup",
          value: function taskCleanup(taskUuid, listUuid) {
            this.selectedBoard.lists.forEach(function (list) {
              if (list.uuid !== listUuid) {
                list.tasks = list.tasks.filter(function (task) {
                  return task.uuid !== taskUuid;
                });
              }
            });
          }
        }, {
          key: "removeList",
          value: function removeList(index) {
            this.selectedBoard.lists.splice(index, 1);
          }
        }, {
          key: "pushToArray",
          value: function pushToArray(text) {
            this.selectedBoard.lists.push(new _models_ListModel__WEBPACK_IMPORTED_MODULE_2__["ListModel"](text));
          }
        }, {
          key: "loadBoard",
          value: function loadBoard(uuid) {
            this.boardStoreService.setBoards(this.boards);
            this.boardStoreService.setSelectedBoard(this.boards.find(function (b) {
              return b.uuid === uuid;
            }));
          }
        }, {
          key: "createBoard",
          value: function createBoard() {
            this.boards.push(new _models_BoardModel__WEBPACK_IMPORTED_MODULE_0__["BoardModel"]('New Board'));
            this.boardStoreService.setBoards(this.boards);
            this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
          }
        }, {
          key: "calculateBoundingInfo",
          value: function calculateBoundingInfo() {
            var _this6 = this;

            this.listsBoundingInfo = [];
            var listElements = Array.from(document.querySelectorAll('div.list-placeholder'));
            listElements.forEach(function (list, i) {
              var boundingRect = list.getBoundingClientRect();

              _this6.listsBoundingInfo.push(new _models_ListBoundingInfo__WEBPACK_IMPORTED_MODULE_3__["ListBoundingInfo"](boundingRect.x, boundingRect.y, boundingRect.bottom, boundingRect.right, list.getAttribute('uuid')));

              var taskElements = Array.from(list.querySelectorAll('div.task-container'));
              taskElements.forEach(function (ref) {
                var holder = ref.getBoundingClientRect();

                _this6.listsBoundingInfo[i].tasksBoundingInfo.push(new _models_TaskBoundingInfo__WEBPACK_IMPORTED_MODULE_1__["TaskBoundingInfo"](holder.x, holder.y, holder.bottom, holder.right, ref.getAttribute('uuid')));
              });
            });
          }
        }]);

        return BoardComponent;
      }();

      BoardComponent.ɵfac = function BoardComponent_Factory(t) {
        return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_control_panel_service__WEBPACK_IMPORTED_MODULE_6__["ControlPanelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_service_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_board_store_service__WEBPACK_IMPORTED_MODULE_8__["BoardStoreService"]));
      };

      BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: BoardComponent,
        selectors: [["app-board"]],
        viewQuery: function BoardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fakeTask = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.boardRef = _t.first);
          }
        },
        hostBindings: function BoardComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function BoardComponent_mousedown_HostBindingHandler($event) {
              return ctx.startDrag($event.target, $event);
            })("mousemove", function BoardComponent_mousemove_HostBindingHandler($event) {
              return ctx.drag($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mouseup", function BoardComponent_mouseup_HostBindingHandler() {
              return ctx.endDrag();
            })("wheel", function BoardComponent_wheel_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
          }
        },
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], [1, "board"], ["board", ""], [3, "options"], ["class", "list-placeholder", 4, "ngFor", "ngForOf"], [1, "add-list-container"], ["titleInput", ""], ["class", "task", 4, "ngIf"], [1, "list-placeholder"], [1, "list-container"], [3, "list", "closeListAction"], [1, "add-list", 3, "click"], [3, "targetClass", "textSubmissionAction"], [1, "task"], ["fakeTask", ""], [1, "task-title"], [1, "choose-example-container"], [1, "example-container"], [1, "label"], ["class", "example", 3, "click", 4, "ngFor", "ngForOf"], [1, "example", 3, "click"]],
        template: function BoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BoardComponent_ng_container_0_Template, 10, 6, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BoardComponent_ng_template_1_Template, 7, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedBoard !== null)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], simplebar_angular__WEBPACK_IMPORTED_MODULE_10__["SimplebarAngularComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_12__["InputFormComponent"]],
        styles: [".board[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  height: calc(100vh - 60px);\r\n  \r\n}\r\n\r\n.list-placeholder[_ngcontent-%COMP%] {\r\n  min-width: 230px;\r\n}\r\n\r\n.list-container[_ngcontent-%COMP%] {\r\n  min-width: 230px;\r\n}\r\n\r\nngx-simplebar[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  width: 10vw;\r\n  margin: 44vh 45vw;\r\n  animation-name: rotation;\r\n  animation-duration: 5s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@keyframes rotation {\r\n  to {transform: rotate(360deg);}\r\n}\r\n\r\n.add-list[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: var(--main);\r\n  margin: 8px 6px;\r\n  padding: 6px 12px;\r\n  width: 14vw;\r\n  border-radius: 10px;\r\n  color: var(--text);\r\n}\r\n\r\n.choose-example-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  min-height: 90vh;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.example[_ngcontent-%COMP%] {\r\n  background-color: var(--button);\r\n  color: var(--text);\r\n  padding: 10px;\r\n  margin: 6px;\r\n  border: none;\r\n  border-radius: 4px;\r\n}\r\n\r\n.example[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--highlighted);\r\n}\r\n\r\n.task[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  min-width: 150px;\r\n  padding: 5px;\r\n  margin-top: 8px;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  background-color: var(--button);\r\n  color: var(--text);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-title[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLElBQUkseUJBQXlCLENBQUM7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbn1cclxuXHJcbi5saXN0LXBsYWNlaG9sZGVyIHtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIG1pbi13aWR0aDogMjMwcHg7XHJcbn1cclxuXHJcbm5neC1zaW1wbGViYXIge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgbWFyZ2luOiA0NHZoIDQ1dnc7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cclxufVxyXG5cclxuLmFkZC1saXN0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgbWFyZ2luOiA4cHggNnB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIHdpZHRoOiAxNHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uY2hvb3NlLWV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0ZWQpO1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24pO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrLXRpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "s2V2":
    /*!*************************************!*\
      !*** ./src/app/models/ListModel.ts ***!
      \*************************************/

    /*! exports provided: ListModel */

    /***/
    function s2V2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListModel", function () {
        return ListModel;
      });
      /* harmony import */


      var _TaskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./TaskModel */
      "cr/C");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "EcEN");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);

      var ListModel = /*#__PURE__*/function () {
        function ListModel(text, order) {
          _classCallCheck(this, ListModel);

          this.title = 'New List';
          this.tasks = [];
          this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
          this.id = 0;
          this.title = text;
          this.order = order;
        }

        _createClass(ListModel, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.tasks = this.tasks.map(function (item) {
              return new _TaskModel__WEBPACK_IMPORTED_MODULE_0__["TaskModel"]().deserialize(item);
            });
            this.tasks.sort(function (first, second) {
              return first.order > second.order ? 1 : first.order < second.order ? -1 : 0;
            });
            return this;
          }
        }]);

        return ListModel;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map