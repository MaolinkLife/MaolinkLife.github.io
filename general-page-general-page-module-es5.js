function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-page-general-page-module"], {
  /***/
  "./src/app/pages/general-page/general-page-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/general-page/general-page-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: GeneralPageRoutingModule */

  /***/
  function srcAppPagesGeneralPageGeneralPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralPageRoutingModule", function () {
      return GeneralPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _general_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./general-page.component */
    "./src/app/pages/general-page/general-page.component.ts");

    var routes = [{
      path: '',
      component: _general_page_component__WEBPACK_IMPORTED_MODULE_2__["GeneralPageComponent"]
    }];

    var GeneralPageRoutingModule = function GeneralPageRoutingModule() {
      _classCallCheck(this, GeneralPageRoutingModule);
    };

    GeneralPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GeneralPageRoutingModule
    });
    GeneralPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GeneralPageRoutingModule_Factory(t) {
        return new (t || GeneralPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/general-page/general-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/general-page/general-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: GeneralPageComponent */

  /***/
  function srcAppPagesGeneralPageGeneralPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralPageComponent", function () {
      return GeneralPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modules_general_components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../modules/general/components/calculate-block/calculate-block.component */
    "./src/app/modules/general/components/calculate-block/calculate-block.component.ts");
    /* harmony import */


    var _modules_general_components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../modules/general/components/designer-order-block/designer-order-block.component */
    "./src/app/modules/general/components/designer-order-block/designer-order-block.component.ts");
    /* harmony import */


    var _modules_general_components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../modules/general/components/progress-work-block/progress-work-block.component */
    "./src/app/modules/general/components/progress-work-block/progress-work-block.component.ts");
    /* harmony import */


    var _modules_general_components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modules/general/components/responsibility-block/responsibility-block.component */
    "./src/app/modules/general/components/responsibility-block/responsibility-block.component.ts");
    /* harmony import */


    var _modules_general_components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modules/general/components/production-block/production-block.component */
    "./src/app/modules/general/components/production-block/production-block.component.ts");
    /* harmony import */


    var _modules_general_components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modules/general/components/examples-block/examples-block.component */
    "./src/app/modules/general/components/examples-block/examples-block.component.ts");
    /* harmony import */


    var _modules_general_components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modules/general/components/quality-block/quality-block.component */
    "./src/app/modules/general/components/quality-block/quality-block.component.ts");
    /* harmony import */


    var _modules_general_components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../modules/general/components/recomended-block/recomended-block.component */
    "./src/app/modules/general/components/recomended-block/recomended-block.component.ts");

    var GeneralPageComponent = /*#__PURE__*/function () {
      function GeneralPageComponent() {
        _classCallCheck(this, GeneralPageComponent);
      }

      _createClass(GeneralPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GeneralPageComponent;
    }();

    GeneralPageComponent.ɵfac = function GeneralPageComponent_Factory(t) {
      return new (t || GeneralPageComponent)();
    };

    GeneralPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GeneralPageComponent,
      selectors: [["app-general-page"]],
      decls: 8,
      vars: 0,
      template: function GeneralPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-calculate-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-designer-order-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-progress-work-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-responsibility-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-production-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-examples-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-quality-block");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-recomended-block");
        }
      },
      directives: [_modules_general_components_calculate_block_calculate_block_component__WEBPACK_IMPORTED_MODULE_1__["CalculateBlockComponent"], _modules_general_components_designer_order_block_designer_order_block_component__WEBPACK_IMPORTED_MODULE_2__["DesignerOrderBlockComponent"], _modules_general_components_progress_work_block_progress_work_block_component__WEBPACK_IMPORTED_MODULE_3__["ProgressWorkBlockComponent"], _modules_general_components_responsibility_block_responsibility_block_component__WEBPACK_IMPORTED_MODULE_4__["ResponsibilityBlockComponent"], _modules_general_components_production_block_production_block_component__WEBPACK_IMPORTED_MODULE_5__["ProductionBlockComponent"], _modules_general_components_examples_block_examples_block_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesBlockComponent"], _modules_general_components_quality_block_quality_block_component__WEBPACK_IMPORTED_MODULE_7__["QualityBlockComponent"], _modules_general_components_recomended_block_recomended_block_component__WEBPACK_IMPORTED_MODULE_8__["RecomendedBlockComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL0M6L1VzZXJzL01hb2xpbmsvRGVza3RvcC9EZXYvZnVybml0dXJlL3NyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL2dlbmVyYWwtcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL2dlbmVyYWwtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VuZXJhbC1wYWdlL2dlbmVyYWwtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-general-page',
          templateUrl: './general-page.component.html',
          styleUrls: ['./general-page.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/general-page/general-page.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/general-page/general-page.module.ts ***!
    \***********************************************************/

  /*! exports provided: GeneralPageModule */

  /***/
  function srcAppPagesGeneralPageGeneralPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralPageModule", function () {
      return GeneralPageModule;
    });
    /* harmony import */


    var _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../shared/components/icons/icons.module */
    "./src/app/shared/components/icons/icons.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _general_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general-page-routing.module */
    "./src/app/pages/general-page/general-page-routing.module.ts");
    /* harmony import */


    var _general_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./general-page.component */
    "./src/app/pages/general-page/general-page.component.ts");
    /* harmony import */


    var src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/general/general-content.module */
    "./src/app/modules/general/general-content.module.ts");

    var GeneralPageModule = function GeneralPageModule() {
      _classCallCheck(this, GeneralPageModule);
    };

    GeneralPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: GeneralPageModule
    });
    GeneralPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function GeneralPageModule_Factory(t) {
        return new (t || GeneralPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _general_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralPageRoutingModule"], src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GeneralPageModule, {
        declarations: [_general_page_component__WEBPACK_IMPORTED_MODULE_4__["GeneralPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _general_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralPageRoutingModule"], src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeneralPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_general_page_component__WEBPACK_IMPORTED_MODULE_4__["GeneralPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _general_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralPageRoutingModule"], src_app_modules_general_general_content_module__WEBPACK_IMPORTED_MODULE_5__["GeneralContentModule"], _shared_components_icons_icons_module__WEBPACK_IMPORTED_MODULE_0__["IconsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=general-page-general-page-module-es5.js.map