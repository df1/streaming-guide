function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function AppComponent_mat_progress_bar_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 41);
      }
    }

    function AppComponent_a_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nav_r85);
      }
    }

    function AppComponent_div_64_th_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_64_th_3_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return $event ? ctx_r92.masterToggle() : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r86.selection.hasValue() && ctx_r86.isAllSelected())("indeterminate", ctx_r86.selection.hasValue() && !ctx_r86.isAllSelected())("aria-label", ctx_r86.checkboxLabel());
      }
    }

    function AppComponent_div_64_td_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_64_td_4_Template_mat_checkbox_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          return $event.stopPropagation();
        })("change", function AppComponent_div_64_td_4_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var row_r94 = ctx.$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return $event ? ctx_r97.selection.toggle(row_r94) : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r94 = ctx.$implicit;

        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r87.selection.isSelected(row_r94))("aria-label", ctx_r87.checkboxLabel(row_r94));
      }
    }

    function AppComponent_div_64_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_64_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r98 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r98.name, "");
      }
    }

    function AppComponent_div_64_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
      }
    }

    function AppComponent_div_64_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_64_tr_9_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var row_r99 = ctx.$implicit;

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r100.selection.toggle(row_r99);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_64_th_3_Template, 2, 3, "th", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_64_td_4_Template, 2, 2, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_64_th_6_Template, 2, 0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_64_td_7_Template, 2, 1, "td", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_64_tr_8_Template, 1, 0, "tr", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_64_tr_9_Template, 1, 0, "tr", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r84.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r84.displayedColumns)("matHeaderRowDefSticky", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r84.displayedColumns);
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(snackBar, changeDetectorRef, media) {
        _classCallCheck(this, AppComponent);

        this.snackBar = snackBar;
        this.title = '楓林晚';
        this.isLoading = false;
        this.displayedColumns = ['select', 'name'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](SAMPLE_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.sort = this.sort;
          this.snackBar.open('本網站使用cookies以提昇您的使用體驗及統計。繼續使用本網站表示您同意我們使用cookies。', '同意', {
            horizontalPosition: 'right'
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }, {
        key: "exportExcel",
        value: function exportExcel() {
          /* table id is passed over here */
          var element = document.getElementById('main-data-table');
          var ws = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].table_to_sheet(element);
          /* generate workbook and add the worksheet */

          var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_new();
          xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].book_append_sheet(wb, ws, 'Exported Data');
          /* save to file */

          xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](wb, "".concat(this.title, "-").concat(new Date().toISOString().split('T')[0], ".xlsx"));
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this.selection.select(row);
          });
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.position + 1);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 65,
      vars: 5,
      consts: [["color", "primary"], ["mat-icon-button", "", 1, "hamburger", 3, "click"], [1, "title"], ["mat-button", ""], [1, "fill-remaining-space"], ["mat-icon-button", "", "matTooltip", "Export Excel", 1, "toolbar-item", 3, "click"], ["mat-icon-button", "", "matTooltip", "Donate", 1, "toolbar-item"], ["mode", "indeterminate", 4, "ngIf"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [1, "background", "hero"], ["id", "intro"], [1, "hero-logo"], ["src", "assets/images/logo.svg", "alt", "Logo", "width", "250", "height", "250"], [1, "homepage-container"], [1, "hero-headline", "no-toc"], [1, "hero-subline"], [1, "hero-providers"], ["src", "assets/images/providers/1.jpg", "alt", "Netflix", "matTooltip", "Netflix", 1, "provider"], ["src", "assets/images/providers/2.jpg", "alt", "LINE TV", "matTooltip", "LINE TV", 1, "provider"], ["src", "assets/images/providers/3.jpg", "alt", "\u611B\u5947\u85DD\u53F0\u7063\u7AD9", "matTooltip", "\u611B\u5947\u85DD\u53F0\u7063\u7AD9", 1, "provider"], ["src", "assets/images/providers/4.jpg", "alt", "HBO GO", "matTooltip", "HBO GO", 1, "provider"], ["src", "assets/images/providers/5.jpg", "alt", "KKTV", "matTooltip", "KKTV", 1, "provider"], ["src", "assets/images/providers/6.jpg", "alt", "Apple TV+", "matTooltip", "Apple TV+", 1, "provider"], ["src", "assets/images/providers/7.jpg", "alt", "GagaOOLala", "matTooltip", "GagaOOLala", 1, "provider"], ["src", "assets/images/providers/8.jpg", "alt", "iTunes", "matTooltip", "iTunes", 1, "provider"], ["src", "assets/images/providers/9.jpg", "alt", "YouTube", "matTooltip", "YouTube", 1, "provider"], ["src", "assets/images/providers/10.jpg", "alt", "Google Play\u96FB\u5F71", "matTooltip", "Google Play\u96FB\u5F71", 1, "provider"], ["src", "assets/images/providers/11.jpg", "alt", "CATCHPLAY+", "matTooltip", "CATCHPLAY+", 1, "provider"], ["src", "assets/images/providers/12.jpg", "alt", "friDay\u5F71\u97F3", "matTooltip", "friDay\u5F71\u97F3", 1, "provider"], ["src", "assets/images/providers/13.jpg", "alt", "Hami Video", "matTooltip", "Hami Video", 1, "provider"], ["src", "assets/images/providers/14.jpg", "alt", "\u516C\u8996+", "matTooltip", "\u516C\u8996+", 1, "provider"], ["src", "assets/images/providers/15.jpg", "alt", "LiTV\u7ACB\u8996\u7DDA\u4E0A\u5F71\u8996", "matTooltip", "LiTV\u7ACB\u8996\u7DDA\u4E0A\u5F71\u8996", 1, "provider"], ["src", "assets/images/providers/16.jpg", "alt", "myVideo", "matTooltip", "myVideo", 1, "provider"], ["src", "assets/images/providers/17.jpg", "alt", "Vidol\u5F71\u97F3", "matTooltip", "Vidol\u5F71\u97F3", 1, "provider"], ["src", "assets/images/providers/18.jpg", "alt", "WeTV", "matTooltip", "WeTV", 1, "provider"], ["src", "assets/images/providers/19.jpg", "alt", "\u56DB\u5B63\u7DDA\u4E0A\u5F71\u8996", "matTooltip", "\u56DB\u5B63\u7DDA\u4E0A\u5F71\u8996", 1, "provider"], ["src", "assets/images/providers/20.jpg", "alt", "\u9177\u77A7", "matTooltip", "\u9177\u77A7", 1, "provider"], ["class", "main-content", 4, "ngIf"], ["mode", "indeterminate"], ["mat-list-item", "", "routerLink", "."], [1, "main-content"], ["id", "main-data-table", "mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            return _r82.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u6953\u6797\u665A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u96FB\u5F71");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u53F0\u5287");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u7F8E\u5287");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u9678\u5287");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u65E5\u5287");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
            return ctx.exportExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "grid_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "insert_emoticon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_mat_progress_bar_24_Template, 1, 0, "mat-progress-bar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-sidenav-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-sidenav", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_a_29_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u652F\u6301\u6B63\u7248\uFF0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u624D\u6709\u66F4\u68D2\u7684\u4F5C\u54C1\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u5728\u9019\u88E1\u627E\u5C0B\u60A8\u60F3\u770B\u7684\u5F71\u5287\u7684\u6240\u6709\u5408\u6CD5\u7247\u6E90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_div_64_Template, 10, 4, "div", 40);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fillerNav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 56px !important;\n}\nmat-toolbar[_ngcontent-%COMP%]   button.hamburger[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .fill-remaining-space[_ngcontent-%COMP%] {\n  flex: 1;\n}\nmat-toolbar[_ngcontent-%COMP%]   .toolbar-item[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  font-size: 14px;\n}\nmat-toolbar[_ngcontent-%COMP%]   .selection-field[_ngcontent-%COMP%] {\n  width: 100px;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\nheader[_ngcontent-%COMP%] {\n  height: calc( 100vh - 56px );\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\nheader[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.background[_ngcontent-%COMP%] {\n  background-color: #c2185a;\n  background: linear-gradient(145deg, #c2185a, #c2185a);\n  color: #fff;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  min-height: 260px;\n  height: 60vh;\n  max-height: 340px;\n  box-sizing: border-box;\n  padding: 48px 48px 32px;\n  overflow: hidden;\n  transform: skewY(8deg);\n  transform-origin: 100%;\n  z-index: -1;\n}\n@media (max-width: 480px) {\n  .hero[_ngcontent-%COMP%] {\n    max-height: 486px;\n    padding-top: 40px;\n    transform: none;\n  }\n}\n.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 48px;\n  margin: 0 8px 0 0;\n  text-transform: uppercase;\n}\n.hero[_ngcontent-%COMP%]   .hero-title.is-standard-case[_ngcontent-%COMP%] {\n  text-transform: none;\n}\nsection#intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  max-width: 900px;\n  height: 340px;\n  margin: 0 auto -32px;\n  padding: 48px 0 0;\n  color: #fff;\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    max-width: 100vw;\n    padding: 170px 0 32px;\n  }\n}\nsection#intro[_ngcontent-%COMP%]   .homepage-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto 0 40px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%]   .homepage-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    max-width: 100%;\n    padding: 0;\n    margin: 0;\n  }\n}\nsection#intro[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-size: 3rem;\n  line-height: 54px;\n  line-height: 5.4rem;\n  font-weight: 500;\n  margin: 24px 0 0;\n  white-space: nowrap;\n}\nsection#intro[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]:after {\n  display: none;\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-left: 48px;\n  }\n}\n@media (max-width: 575px) {\n  section#intro[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 50px;\n    margin-left: 32px;\n  }\n}\nsection#intro[_ngcontent-%COMP%]   .hero-subline[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\nsection#intro[_ngcontent-%COMP%]   .hero-providers[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%]   .hero-providers[_ngcontent-%COMP%] {\n    max-height: 116px;\n    text-align: center;\n  }\n}\nsection#intro[_ngcontent-%COMP%]   .hero-providers[_ngcontent-%COMP%]   img.provider[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: 0 5px 5px 0;\n  border-radius: 20%;\n}\nsection#intro[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%] {\n    justify-content: center;\n    position: fixed;\n    z-index: -1;\n    top: 50px;\n  }\n}\nsection#intro[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  margin-bottom: 8px;\n  padding: 0;\n  -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.24));\n          filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.24));\n}\n@media (max-width: 780px) {\n  section#intro[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3N0cmVhbWluZy1ndWlkZS9zdHJlYW1pbmctZ3VpZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FDbEJKO0FEbUJJO0VBQ0ksa0JBQUE7QUNqQlI7QURtQkk7RUFDSSxlQUFBO0FDakJSO0FEcUJJO0VBQ0ksT0FBQTtBQ25CUjtBRHVCSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ3JCUjtBRHdCSTtFQUNJLFlBQUE7QUN0QlI7QUR5Qkk7RUFDSSxlQUFBO0FDdkJSO0FEMkJJO0VBQ0ksZUFBQTtBQ3pCUjtBRDhCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQzNCSjtBRDhCRTtFQUNFLGVBQUE7RUFDQSw4RUFBQTtFQUNBLFVBQUE7QUMzQko7QUQ4QkU7RUFDRSxnQkFBQTtBQzNCSjtBRDhCRTtFQUNFOzBGQUFBO0VBRUEsT0FBQTtBQzNCSjtBRDhCRTtFQUNFOytEQUFBO0VBRUEsY0FBQTtBQzNCSjtBRGlDQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM5Qko7QUQrQkk7RUFDSSxXQUFBO0FDN0JSO0FEa0NBO0VBQ0kseUJBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7QUMvQko7QURtQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ2hDSjtBRG1DSTtFQWxCSjtJQW1CUSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtFQ2hDTjtBQUNGO0FEa0NJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNoQ1I7QURrQ1E7RUFDSSxvQkFBQTtBQ2hDWjtBRHFDQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNuQ0o7QURxQ0k7RUFYSjtJQVlNLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQ2xDSjtBQUNGO0FEb0NJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNsQ047QURvQ007RUFQRjtJQVFJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFQ2pDTjtBQUNGO0FEb0NJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbENSO0FEb0NRO0VBQ0ksYUFBQTtBQ2xDWjtBRHFDUTtFQWJKO0lBY1Esa0JBQUE7SUFDQSxpQkFBQTtFQ2xDVjtBQUNGO0FEb0NRO0VBbEJKO0lBbUJRLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDakNWO0FBQ0Y7QURvQ0k7RUFDSSxjQUFBO0FDbENSO0FEcUNJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ25DUjtBRHFDUTtFQUpKO0lBS1EsaUJBQUE7SUFDQSxrQkFBQTtFQ2xDVjtBQUNGO0FEbUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDakNaO0FEcUNJO0VBQ0UsYUFBQTtBQ25DTjtBRHFDTTtFQUhGO0lBSUksdUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7RUNsQ047QUFDRjtBRG9DTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMERBQUE7VUFBQSxrREFBQTtBQ2xDUjtBRG9DUTtFQVBGO0lBUUksWUFBQTtJQUNBLGFBQUE7RUNqQ1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZBUklBQkxFU1xuJGJyZWFrcG9pbnQtbW9iaWxlOiA0ODFweDtcbiRicmVha3BvaW50LXRhYmxldDogNzY4cHg7XG4kaGFtYnVyZ2VyU2hvd25NYXJnaW46IDAgOHB4IDAgMDtcbiRoYW1idXJnZXJIaWRkZW5NYXJnaW46IDAgMTZweCAwIC02NHB4O1xuXG5AbWl4aW4gbW9iaWxlLXVwIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiAgXG5AbWl4aW4gdGFibGV0LXVwe1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpe1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbi8vIHRvcCB0b29sYmFyXG5tYXQtdG9vbGJhcntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gICAgYnV0dG9uLmhhbWJ1cmdlcntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAvLyB0aGUgc3BhY2luZyBpbiB0aGUgbWlkZGxlXG4gICAgLmZpbGwtcmVtYWluaW5nLXNwYWNle1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC8vIHRvb2xiYXIgaXRlbXNcbiAgICAudG9vbGJhci1pdGVte1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3Rpb24tZmllbGR7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLy8gdGhlIFwiTG9hZGluZ1wiIGJhclxuICAgIG1hdC1wcm9ncmVzcy1iYXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgfVxufVxuXG4vLyBzaWRlbmF2XG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cblxuXG5cbi8vIGNvbnRlbnRcbmhlYWRlciB7XG4gICAgaGVpZ2h0OiBjYWxjKCAxMDB2aCAtIDU2cHggKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuXG4uYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjYzIxODVhLCAjYzIxODVhKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuXG4uaGVybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDQ4cHggNDhweCAzMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiBza2V3WSg4ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIFxuICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgbWF4LWhlaWdodDogNDg2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICBcbiAgICAuaGVyby10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgJi5pcy1zdGFuZGFyZC1jYXNlIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuc2VjdGlvbiNpbnRybyB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBtYXJnaW46IDAgYXV0byAtMzJweDtcbiAgICBwYWRkaW5nOiA0OHB4IDAgMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICBwYWRkaW5nOiAxNzBweCAwIDMycHg7XG4gICAgfVxuICBcbiAgICAuaG9tZXBhZ2UtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDAgNDBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gIFxuICAgICAgQG1lZGlhICAobWF4LXdpZHRoOiA3ODBweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuaGVyby1oZWFkbGluZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDhweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhlcm8tc3VibGluZXtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLmhlcm8tcHJvdmlkZXJze1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnByb3ZpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmhlcm8tbG9nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICBcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgfVxuICBcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDJweCByZ2JhKGJsYWNrLCAwLjI0KSk7XG4gIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiIsIm1hdC10b29sYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbn1cbm1hdC10b29sYmFyIGJ1dHRvbi5oYW1idXJnZXIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5tYXQtdG9vbGJhciAudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5tYXQtdG9vbGJhciAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxO1xufVxubWF0LXRvb2xiYXIgLnRvb2xiYXItaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5tYXQtdG9vbGJhciAuc2VsZWN0aW9uLWZpZWxkIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxubWF0LXRvb2xiYXIgbWF0LWNoZWNrYm94IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxubWF0LXRvb2xiYXIgbWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogY2FsYyggMTAwdmggLSA1NnB4ICk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5oZWFkZXIgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODVhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjYzIxODVhLCAjYzIxODVhKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICBoZWlnaHQ6IDYwdmg7XG4gIG1heC1oZWlnaHQ6IDM0MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA0OHB4IDQ4cHggMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiBza2V3WSg4ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlcm8ge1xuICAgIG1heC1oZWlnaHQ6IDQ4NnB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuLmhlcm8gLmhlcm8tdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbjogMCA4cHggMCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhlcm8gLmhlcm8tdGl0bGUuaXMtc3RhbmRhcmQtY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5zZWN0aW9uI2ludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IDAgYXV0byAtMzJweDtcbiAgcGFkZGluZzogNDhweCAwIDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIHNlY3Rpb24jaW50cm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nOiAxNzBweCAwIDMycHg7XG4gIH1cbn1cbnNlY3Rpb24jaW50cm8gLmhvbWVwYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDAgYXV0byAwIDQwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICBzZWN0aW9uI2ludHJvIC5ob21lcGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuc2VjdGlvbiNpbnRybyAuaGVyby1oZWFkbGluZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgbGluZS1oZWlnaHQ6IDUuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbnNlY3Rpb24jaW50cm8gLmhlcm8taGVhZGxpbmU6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIHNlY3Rpb24jaW50cm8gLmhlcm8taGVhZGxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNDhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHNlY3Rpb24jaW50cm8gLmhlcm8taGVhZGxpbmUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgfVxufVxuc2VjdGlvbiNpbnRybyAuaGVyby1zdWJsaW5lIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5zZWN0aW9uI2ludHJvIC5oZXJvLXByb3ZpZGVycyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgc2VjdGlvbiNpbnRybyAuaGVyby1wcm92aWRlcnMge1xuICAgIG1heC1oZWlnaHQ6IDExNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuc2VjdGlvbiNpbnRybyAuaGVyby1wcm92aWRlcnMgaW1nLnByb3ZpZGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xufVxuc2VjdGlvbiNpbnRybyAuaGVyby1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICBzZWN0aW9uI2ludHJvIC5oZXJvLWxvZ28ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDUwcHg7XG4gIH1cbn1cbnNlY3Rpb24jaW50cm8gLmhlcm8tbG9nbyBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZzogMDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgc2VjdGlvbiNpbnRybyAuaGVyby1sb2dvIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["MediaMatcher"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();

    var SAMPLE_DATA = [{
      name: 'Game of Thrones'
    }];
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js"); //Angular Material Components
    // import {MatDatepickerModule} from '@angular/material/datepicker';
    // import {MatRadioModule} from '@angular/material/radio';
    // import {MatSelectModule} from '@angular/material/select';
    // import {MatSliderModule} from '@angular/material/slider';
    // import {MatSlideToggleModule} from '@angular/material/slide-toggle';
    // import {MatStepperModule} from '@angular/material/stepper';
    // import {MatTabsModule} from '@angular/material/tabs';
    // import {MatExpansionModule} from '@angular/material/expansion';
    // import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[// MatDatepickerModule,
      // MatRadioModule,
      // MatSelectModule,
      // MatSliderModule,
      // MatSlideToggleModule,
      // MatStepperModule,
      // MatTabsModule,
      // MatExpansionModule,
      // MatProgressSpinnerModule,
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [// MatDatepickerModule,
        // MatRadioModule,
        // MatSelectModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatStepperModule,
        // MatTabsModule,
        // MatExpansionModule,
        // MatProgressSpinnerModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [// MatDatepickerModule,
          // MatRadioModule,
          // MatSelectModule,
          // MatSliderModule,
          // MatSlideToggleModule,
          // MatStepperModule,
          // MatTabsModule,
          // MatExpansionModule,
          // MatProgressSpinnerModule,
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/streaming-guide/streaming-guide/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map