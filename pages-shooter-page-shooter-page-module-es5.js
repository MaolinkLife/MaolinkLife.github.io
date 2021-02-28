function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shooter-page-shooter-page-module"], {
  /***/
  "./src/app/projects/gamer/pages/shooter-page/shooter-page-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/projects/gamer/pages/shooter-page/shooter-page-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: GamerShooterPageRoutingModule */

  /***/
  function srcAppProjectsGamerPagesShooterPageShooterPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamerShooterPageRoutingModule", function () {
      return GamerShooterPageRoutingModule;
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


    var _shooter_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shooter-page.component */
    "./src/app/projects/gamer/pages/shooter-page/shooter-page.component.ts");

    var routes = [{
      path: '',
      component: _shooter_page_component__WEBPACK_IMPORTED_MODULE_2__["GamerShooterPageComponent"]
    }];

    var GamerShooterPageRoutingModule = function GamerShooterPageRoutingModule() {
      _classCallCheck(this, GamerShooterPageRoutingModule);
    };

    GamerShooterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GamerShooterPageRoutingModule
    });
    GamerShooterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GamerShooterPageRoutingModule_Factory(t) {
        return new (t || GamerShooterPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamerShooterPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamerShooterPageRoutingModule, [{
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
  "./src/app/projects/gamer/pages/shooter-page/shooter-page.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/projects/gamer/pages/shooter-page/shooter-page.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: GamerShooterPageComponent */

  /***/
  function srcAppProjectsGamerPagesShooterPageShooterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamerShooterPageComponent", function () {
      return GamerShooterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GamerShooterPageComponent = /*#__PURE__*/function () {
      function GamerShooterPageComponent() {
        _classCallCheck(this, GamerShooterPageComponent);
      }

      _createClass(GamerShooterPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GamerShooterPageComponent;
    }();

    GamerShooterPageComponent.ɵfac = function GamerShooterPageComponent_Factory(t) {
      return new (t || GamerShooterPageComponent)();
    };

    GamerShooterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GamerShooterPageComponent,
      selectors: [["app-shooter-page"]],
      decls: 200,
      vars: 0,
      consts: [[1, "frame-box"], [1, "horizontal", "w-100", "between"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/PUBG.jpg) center / cover no-repeat"], [1, "card-content"], [1, "item-right"], [1, "mark", "horizontal", "center-all"], [1, "text-red"], [1, "text-description"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/Counter-Strike-Global-Offensive.jpg) right / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/rss.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/GTA5.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/Warframe.jpg) right / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/FuryUnleashed.jpeg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/TridentsWake.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/fallout4.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/Warhammer.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/palladins.jpeg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/PayDay2.jpg) left / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/Banner-DarkSoulsIII.jpg) -120px / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/POE.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/BrightMemory.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/7days_to_die.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/GrimDown.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/left4dead2.jpg) -60px / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/TCDivision.jpg) center / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/warface.jpg) left / cover no-repeat"], [1, "card", "medium", 2, "background", "url(../../../../../../../assets/source/images/crossout.jpg) left / cover no-repeat"], [1, "horizontal", "center", 2, "margin-top", "40px"], [1, "button"], [1, "horizontal", "w-100", "to-left"], [1, "line-row"], [1, "text-third", "line-item"], [1, "text-first", "text-green", "line-item", "link"], [1, "card-box", 2, "background", "url(../../../../../../../assets/source/images/games-tomb-raider.jpg) left / cover no-repeat"], [1, "vertical", "list-form", "to-bottom"], [1, "description"], [1, "card-box", 2, "background", "url(../../../../../../../assets/source/images/Lol.png) center / cover no-repeat"], [1, "card-box", 2, "background", "url(../../../../../../../assets/source/images/game14.jpg) center / cover no-repeat"], [1, "card-box", 2, "background", "url(../../../../../../../assets/source/images/maxresdefault.jpg) center / cover no-repeat"]],
      template: function GamerShooterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "8.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Playerunknown's battlegrounds ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "9.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Counter-Strike: Global Offensive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "9.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tom Clancy's Rainbow Six Siege ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "9.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Grand Theft Auto 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "9.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Warframe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "8.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Fury Unleashed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "8.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Trident's Wake ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "7.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Fallout 4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "9.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Warhammer: Chaosbane ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "9.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Paladins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "9.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " PayDay 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "9.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Dark Souls 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "8.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Path of Exile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "9.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Bright Memory ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "9.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " 7 Days to Die ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "9.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Grim Down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "9.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Lelf 4 Dead 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "7.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Tom Clancy's The Division ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "8.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Warface ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "9.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Crossout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0449\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \u0412\u043E\u0442 \u044D\u0442\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442: \u0441\u0430\u043C\u044B\u0435 \u043B\u044E\u0431\u0438\u043C\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438, \u043E\u043A\u0430\u0437\u0430... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " League of Legends \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0430 \u043F\u0440\u0438\u0437 \u043D\u0430 \u041A\u0430\u043D\u043D\u0441\u043A\u043E\u043C \u0444\u0435\u0441\u0442\u0438\u0432\u0430.. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " \u041D\u043E\u0441\u0442\u0430\u043B\u044C\u0433\u0438\u044F: \u043B\u0443\u0447\u0448\u0438\u0435 \u0438\u0433\u0440\u044B \u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " \u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0439\u043D\u0434\u0436\u0435\u0440\u044B \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u044E\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  background-color: #1B1B25;\n}\n*[_ngcontent-%COMP%] {\n  font-family: 'Roboto', Arial, sans-serif;\n  color: #616161;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n\ninput[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 16px;\n  border: 1px solid #BDBDBD;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 4px;\n  display: block;\n  text-transform: uppercase;\n}\n\n.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  \n  color: white;\n  border: none;\n}\n.button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  font-weight: normal;\n}\n.button[_ngcontent-%COMP%]:disabled, button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: auto;\n}\n\n.fancy-button[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #1976d2;\n}\n.fancy-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #1976d2;\n  padding-right: 4px;\n}\n\n\n\n.cart-item[_ngcontent-%COMP%], .shipping-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 400px;\n  max-width: 450px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 16px 32px;\n  margin-bottom: 8px;\n  border-radius: 2px;\n  background-color: #EEEEEE;\n}\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-secondary-text--: #4C4A5F;\n  --primary-text-color--: #838E9D;\n  --color-green--: #6BB755;\n  --red-gradient--: linear-gradient(0deg, #BC0E3F, #BC0E3F);\n  --dark-red-gradient--: linear-gradient(0deg, #780A23, #780A23);\n  --color-red--: #AE143E;\n  --color-yellow--: #F6D265;\n  --color-blue--: #43B4DE;\n  --color-violet--: #6041BA;\n  --color-text-darken--: #3F3F5B;\n  --background-blur-gradient--: linear-gradient(90deg, rgba(43, 46, 61, 0.56) 0%, rgba(43, 46, 61, 0) 100%);\n  \n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  \n  --bui-color-blank: #fff;\n  --bui-color-blank-disabled: rgba(255, 255, 255, 0.56);\n  --bui-color-void: rgba(255, 255, 255, 0);\n  --bui-color-true-black: #000;\n  --bui-color-selection: rgba(255, 221, 45, 0.32);\n  --bui-color-text: #333;\n  --bui-color-text-light: #666;\n  --bui-color-text-lighter: #909090;\n  --bui-color-text-secondary: #959ba4;\n  --bui-color-text-secondary-disabled: rgba(51, 51, 51, 0.4);\n  --bui-color-text-error: #e01f19;\n  --bui-color-text-success: #168a21;\n  --bui-color-text-disabled: rgba(51, 51, 51, 0.56);\n  --bui-color-text-error-disabled: rgba(224, 31, 25, 0.56);\n  --bui-color-text-success-disabled: rgba(57, 181, 74, 0.56);\n  --bui-color-border: #e7e8ea;\n  --bui-color-border-dark: #cbcfd3;\n  --bui-color-border-darker: #959ba4;\n  --bui-color-border-active: #ffdd2d;\n  --bui-color-border-focus: rgba(51, 51, 51, 0.48);\n  --bui-color-border-disabled: rgba(231, 232, 234, 0.56);\n  --bui-color-scrollbar: rgba(51, 51, 51, 0.24);\n  --bui-color-scrollbar-hover: rgba(51, 51, 51, 0.36);\n  --bui-color-scrollbar-active: rgba(51, 51, 51, 0.56);\n  --bui-color-scrollbar-light: rgba(255, 255, 255, 0.24);\n  --bui-color-scrollbar-light-hover: rgba(255, 255, 255, 0.36);\n  --bui-color-scrollbar-light-active: rgba(255, 255, 255, 0.56);\n  --bui-color-textfield: #ecf1f7;\n  --bui-color-textfield-hover: #e4ebf3;\n  --bui-color-textfield-active: #dde4ed;\n  --bui-color-textfield-readonly: rgba(236, 241, 247, 0.56);\n  --bui-color-textfield-disabled: rgba(236, 241, 247, 0.56);\n  --bui-color-textfield-error: rgba(224, 31, 25, 0.08);\n  --bui-color-textfield-error-hover: rgba(224, 31, 25, 0.16);\n  --bui-color-textfield-error-focus-border: #e01f19;\n  --bui-color-textfield-error-text: #e01f19;\n  --bui-color-textfield-success: rgba(57, 181, 74, 0.08);\n  --bui-color-textfield-success-hover: rgba(57, 181, 74, 0.16);\n  --bui-color-textfield-success-focus-border: #39b54a;\n  --bui-color-textfield-success-text: #39b54a;\n  --bui-color-textfield-autofill: #fff5c0;\n  --bui-color-textfield-light: rgba(255, 255, 255, 0.16);\n  --bui-color-textfield-light-hover: rgba(255, 255, 255, 0.24);\n  --bui-color-textfield-light-active: rgba(255, 255, 255, 0.32);\n  --bui-color-textfield-light-focus-border: #fff;\n  --bui-color-textfield-light-readonly: rgba(255, 255, 255, 0.08);\n  --bui-color-textfield-light-disabled: rgba(255, 255, 255, 0.08);\n  --bui-color-textfield-dark: rgba(51, 51, 51, 0.16);\n  --bui-color-textfield-dark-hover: rgba(51, 51, 51, 0.24);\n  --bui-color-textfield-dark-active: rgba(51, 51, 51, 0.28);\n  --bui-color-textfield-dark-focus-border: #333;\n  --bui-color-textfield-dark-readonly: rgba(51, 51, 51, 0.08);\n  --bui-color-textfield-dark-disabled: rgba(51, 51, 51, 0.08);\n  --bui-color-primary-text: #333;\n  --bui-color-primary: #ffdd2d;\n  --bui-color-primary-hover: #fcc521;\n  --bui-color-primary-active: #fab619;\n  --bui-color-primary-text-disabled: rgba(51, 51, 51, 0.56);\n  --bui-color-primary-disabled: rgba(255, 221, 45, 0.56);\n  --bui-color-secondary: #ecf1f7;\n  --bui-color-secondary-hover: #e4ebf3;\n  --bui-color-secondary-active: #dde4ed;\n  --bui-color-secondary-disabled: rgba(236, 241, 247, 0.56);\n  --bui-color-outline-border: #3d7ab6;\n  --bui-color-outline-border-hover: #369;\n  --bui-color-outline-hover: rgba(61, 122, 182, 0.08);\n  --bui-color-outline-border-active: #29527c;\n  --bui-color-outline-active: rgba(61, 122, 182, 0.16);\n  --bui-color-outline-border-disabled: rgba(61, 122, 182, 0.56);\n  --bui-color-outline-dark-border: #333;\n  --bui-color-outline-dark-border-hover: #666;\n  --bui-color-outline-dark-active: rgba(51, 51, 51, 0.08);\n  --bui-color-outline-dark-border-disabled: rgba(51, 51, 51, 0.56);\n  --bui-color-outline-dark-text-disabled: rgba(51, 51, 51, 0.56);\n  --bui-color-outline-light-border: #fff;\n  --bui-color-outline-light-border-hover: rgba(255, 255, 255, 0.56);\n  --bui-color-outline-light-active: rgba(255, 255, 255, 0.08);\n  --bui-color-outline-light-focus-border: #fff;\n  --bui-color-outline-light-border-disabled: rgba(255, 255, 255, 0.24);\n  --bui-color-outline-light-text-disabled: rgba(255, 255, 255, 0.24);\n  --bui-color-whiteblock-border: #e7e8ea;\n  --bui-color-whiteblock-hover: #f5f5f6;\n  --bui-color-whiteblock-border-hover: #cbcfd3;\n  --bui-color-whiteblock-border-active: #ffdd2d;\n  --bui-color-whiteblock-border-active-disabled: rgba(255, 221, 45, 0.56);\n  --bui-color-whiteblock-border-active-hover: #fcc521;\n  --bui-color-card-primary: #fff;\n  --bui-color-card-secondary: #f5f5f6;\n  --bui-color-flat-text-disabled: rgba(61, 122, 182, 0.56);\n  --bui-color-flat-light-text-disabled: rgba(255, 255, 255, 0.36);\n  --bui-color-flat-background-hover: #ecf1f7;\n  --bui-color-flat-background-active: #e4ebf3;\n  --bui-color-link: #3d7ab6;\n  --bui-color-link-light: rgba(255, 255, 255, 0.56);\n  --bui-color-link-hover: #369;\n  --bui-color-link-active: #29527c;\n  --bui-color-link-disabled: rgba(61, 122, 182, 0.56);\n  --bui-color-textfield-placeholder: #79818c;\n  --bui-color-textfield-placeholder-hover: #616871;\n  --bui-color-textfield-placeholder-disabled: rgba(121, 129, 140, 0.56);\n  --bui-color-textfield-border: #616871;\n  --bui-color-textfield-label: #959ba4;\n  --bui-color-textfield-icon: #959ba4;\n  --bui-color-textfield-icon-hover: #616871;\n  --bui-color-textfield-icon-disabled: rgba(149, 155, 164, 0.56);\n  --bui-color-toggle-on-disabled: #959ba4;\n  --bui-color-toggle-off-disabled: rgba(149, 155, 164, 0.56);\n  --bui-color-tabs-border: #e7e8ea;\n  --bui-color-tabs-arrow: #e7e8ea;\n  --bui-color-tabs-text-disabled: rgba(61, 122, 182, 0.56);\n  --bui-color-accordion-border: #cbcfd3;\n  --bui-color-accordion-background-hover: #f5f5f6;\n  --bui-color-status-text: #666;\n  --bui-color-status: #959ba4;\n  --bui-color-status-hover: #79818c;\n  --bui-color-status-active: #616871;\n  --bui-color-status-light: #ecf1f7;\n  --bui-color-status-light-hover: #e4ebf3;\n  --bui-color-status-light-active: #dde4ed;\n  --bui-color-status-gray: #e7e8ea;\n  --bui-color-status-gray-hover: #cbcfd3;\n  --bui-color-status-gray-active: #959ba4;\n  --bui-color-status-error: #e01f19;\n  --bui-color-status-error-disabled: rgba(224, 31, 25, 0.56);\n  --bui-color-status-error-hover: #d3120e;\n  --bui-color-status-error-active: #c40b08;\n  --bui-color-status-error-light: rgba(224, 31, 25, 0.12);\n  --bui-color-status-success: #39b54a;\n  --bui-color-status-success-hover: #2ca53a;\n  --bui-color-status-success-active: #168a21;\n  --bui-color-status-success-light: rgba(57, 181, 74, 0.16);\n  --bui-color-status-secondary: #3d7ab6;\n  --bui-color-status-secondary-hover: #369;\n  --bui-color-status-secondary-active: #29527c;\n  --bui-color-status-secondary-text: #fff;\n  --bui-color-status-secondary-text-disabled: rgba(255, 255, 255, 0.56);\n  --bui-color-avatar: #dde4ed;\n  --bui-color-textfield-light-placeholder: rgba(255, 255, 255, 0.56);\n  --bui-color-textfield-light-placeholder-disabled: rgba(255, 255, 255, 0.36);\n  --bui-color-textfield-light-label: rgba(255, 255, 255, 0.56);\n  --bui-color-textfield-light-icon: rgba(255, 255, 255, 0.56);\n  --bui-color-textfield-light-icon-disabled: rgba(255, 255, 255, 0.36);\n  --bui-color-textfield-dark-placeholder-disabled: rgba(51, 51, 51, 0.36);\n  --bui-color-textfield-dark-icon-disabled: rgba(51, 51, 51, 0.36);\n  --bui-color-tooltip-dark-background: #616871;\n  --bui-color-tooltip-error-background: #e01f19;\n  --bui-color-tooltip-light-background: #fff;\n  --bui-color-alert-warning: #fcc521;\n  --bui-color-table-bar: #79818c;\n  --bui-color-menu-dark: #616871;\n  --bui-color-support-mustard: #ffd450;\n  --bui-color-support-texas: #ffb74c;\n  --bui-color-support-tan: #f8a34d;\n  --bui-color-support-salmon: #ff8863;\n  --bui-color-support-sienna: #ee805d;\n  --bui-color-support-bittersweet: #ff7b76;\n  --bui-color-support-pinkie: #ff78a7;\n  --bui-color-support-charm: #d45d8c;\n  --bui-color-support-amethyst: #bc71c9;\n  --bui-color-support-helio: #a381ff;\n  --bui-color-support-lilac: #8f75d1;\n  --bui-color-support-malibu: #7caeff;\n  --bui-color-support-havelock: #65a7e0;\n  --bui-color-support-picton: #4dc3f7;\n  --bui-color-support-mint: #4bd0e1;\n  --bui-color-support-fountain: #4eb6c2;\n  --bui-color-support-puertorico: #4fbdb2;\n  --bui-color-support-bay: #4da197;\n  --bui-color-support-forest: #73b077;\n  --bui-color-support-york: #81c785;\n  --bui-color-support-feijoa: #aed57f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  font-family: HelveticaNeueCyr, Bebas Neue;\n  box-sizing: border-box;\n  color: #D1D2D6;\n  cursor: default;\n}\n@media (max-width: 930px) {\n  \n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  \n}\n@media (max-width: 930px) and (min-width: 470px) {\n  \n  aside[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    background: #ccc;\n  }\n  \n}\n@media (max-width: 469px) {\n  \n  body[_ngcontent-%COMP%] {\n    font: 0.9em/1em \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  }\n  \n  aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n}\nfigure[_ngcontent-%COMP%] {\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\ndiv.slide-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: color;\n  height: 738px;\n}\n\n\ndiv.horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\ndiv.horizontal.middle[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\ndiv.horizontal.center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\ndiv.horizontal.around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n\ndiv.horizontal.between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\ndiv.horizontal.text-line[_ngcontent-%COMP%] {\n  align-items: baseline !important;\n}\n\ndiv.horizontal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child), div.horizontal-panel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 17px;\n}\ndiv.horizontal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:only-child:not(.frame-box > .horizontal[_ngcontent-%COMP%] > *)[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\ndiv.horizontal.to-left[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\ndiv.horizontal.to-right[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n\ndiv.vertical[_ngcontent-%COMP%], .vertical-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.vertical[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ndiv.vertical.left-top[_ngcontent-%COMP%], .vertical-panel.left-top[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\ndiv.vertical.top[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\ndiv.vertical.bottom[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\ndiv.vertical.top-right[_ngcontent-%COMP%], div.vertical.top-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: flex-end !important;\n}\n\ndiv.vertical[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child), div.vertical-panel[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 12px !important;\n}\ndiv.vertical.to-bottom[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\ndiv.horizontal.center-all[_ngcontent-%COMP%], div.vertical.center-all[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  align-items: center !important;\n}\n\n.vertical.list-form[_ngcontent-%COMP%], .horizontal.list-form[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n\nfigure[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nfigure.image-128[_ngcontent-%COMP%] {\n  width: 128px !important;\n  height: 128px !important;\n}\n\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  min-height: 190px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\nheader[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\nfooter[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\n  padding: 10px 372px;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background: #0B0C11;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-bottom: 50px;\n}\nfooter[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 800px;\n  width: 100%;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n.text-first[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  color: #D1D2D6;\n  transition-duration: 0.2s;\n}\n.text-second[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 21px !important;\n  line-height: 24px !important;\n  transition-duration: 0.2s;\n}\n.text-third[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px !important;\n  line-height: 28px !important;\n  transition-duration: 0.2s;\n}\n.text-normal[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 550;\n  font-size: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  transition-duration: 0.2s;\n}\n\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #D1D2D6;\n}\n\n.text-red[_ngcontent-%COMP%], .text-hover-red[_ngcontent-%COMP%]:hover {\n  color: var(--color-red--) !important;\n  transition-duration: 0.2s;\n}\n\n.text-green[_ngcontent-%COMP%], .text-hover-green[_ngcontent-%COMP%]:hover {\n  color: var(--color-green--) !important;\n  transition-duration: 0.2s;\n}\n.text-green[_ngcontent-%COMP%]:hover:not(.text-green.static) {\n  color: #437b33 !important;\n}\n\n.text-blue[_ngcontent-%COMP%], .text-hover-blue[_ngcontent-%COMP%]:hover {\n  color: var(--color-blue--) !important;\n  transition-duration: 0.2s;\n}\n.text-blue[_ngcontent-%COMP%]:hover:not(.text-blue.static) {\n  color: #2F99CA !important;\n}\n\n.text-yellow[_ngcontent-%COMP%], .text-hover-yellow[_ngcontent-%COMP%]:hover {\n  color: var(--color-yellow--);\n  transition-duration: 0.2s;\n}\n.text-yellow[_ngcontent-%COMP%]:hover:not(.text-yellow.static) {\n  color: var(--color-yellow--);\n}\n\n.text-violet[_ngcontent-%COMP%], .text-hover-violet[_ngcontent-%COMP%]:hover {\n  color: var(--color-violet--);\n  transition-duration: 0.2s;\n}\n.text-violet[_ngcontent-%COMP%]:hover:not(.text-violet.static) {\n  color: var(--color-violet--);\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: var(--color-text-darken--);\n}\n\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\na.link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\ndiv.icon-panel[_ngcontent-%COMP%] {\n  display: flex;\n}\ndiv.icon-panel[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 17px;\n}\ndiv.icon-panel[_ngcontent-%COMP%]    > .icon.icon-extra-small[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  box-sizing: border-box;\n}\n\n.invert-icon[_ngcontent-%COMP%] {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n.invert-icon-w-op[_ngcontent-%COMP%] {\n  -webkit-filter: invert(1) opacity(36%);\n          filter: invert(1) opacity(36%);\n}\n.invert-icon-w-op[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  -webkit-filter: invert(1) opacity(100%);\n          filter: invert(1) opacity(100%);\n}\ndiv.frame-box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\ndiv.frame-box[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-bottom: 40px;\n}\ndiv.frame-box[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(odd) {\n  margin-bottom: 20px;\n}\n.line-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: flex-start;\n}\n.line-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 28px;\n}\n.level-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  align-items: flex-end;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1B1B25;\n  margin: 0;\n}\ndiv.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0px 373px;\n  max-width: 1280px;\n  min-height: 180px;\n  flex-direction: column;\n  box-sizing: border-box;\n  color: #D1D2D6;\n}\ndiv.main-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 20px;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\ndiv.row-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\ndiv.image[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  \n  background-repeat: no-repeat;\n  background-size: cover;\n}\ndiv.image-64[_ngcontent-%COMP%] {\n  max-width: 96px;\n  height: 96px;\n}\n.static[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.tile[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\ndiv.element-panel[_ngcontent-%COMP%] {\n  display: flex;\n  color: #D1D2D6;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 19px;\n  line-height: 28px;\n}\ndiv.element-panel[_ngcontent-%COMP%]   div.element[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #D1D2D6;\n  cursor: pointer;\n}\n.element-red[_ngcontent-%COMP%]:hover, .element-red.active[_ngcontent-%COMP%] {\n  color: #AE143E !important;\n}\nimg.image-64[_ngcontent-%COMP%] {\n  width: 64px !important;\n  height: 64px !important;\n}\ndiv.button-border-box[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 54px;\n  background: #272938;\n  border: none;\n  outline: none;\n  display: flex;\n  justify-content: space-around;\n  padding: 13px;\n  color: #D1D2D6;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  border-radius: 4px;\n  font-size: 15px;\n  line-height: 24px;\n  box-sizing: border-box;\n  align-items: center;\n  cursor: pointer;\n}\ndiv.line[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n  background: #1B1B25;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  margin-bottom: 20px;\n}\n.rainbow-background[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #AE143E 0%, #6BB755 25%, #F6D265 50%, #43B4DE 75%, #6041BA 100%);\n}\n.list-info[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\nsmall[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr medium !important;\n  font-size: 16px;\n  line-height: 24px;\n}\nsmall.medium[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  line-height: 24px !important;\n}\nsmall.large[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  line-height: 28px !important;\n}\n.darken[_ngcontent-%COMP%] {\n  color: #3F3F5B;\n}\n.item-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: right;\n  justify-content: flex-end;\n}\n.item-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  text-align: left;\n  justify-content: flex-start;\n}\ndiv.main-container[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\ndiv.slider-box[_ngcontent-%COMP%] {\n  height: 738px;\n  cursor: pointer;\n}\n.start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\ndiv.slider-box[_ngcontent-%COMP%]    > div.large-content[_ngcontent-%COMP%] {\n  padding-top: 115px;\n  padding-left: 40px;\n  padding-bottom: 115px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  justify-content: space-between;\n  color: #fff;\n  word-wrap: break-word;\n}\n.large-content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: Bebas Neue;\n  font-style: normal;\n  font-weight: bold;\n}\n.text-medium[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  font-family: HelveticaNeueCyr medium;\n  font-style: normal;\n  font-weight: normal;\n}\n.text-small[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  font-family: HelveticaNeueCyr medium;\n  font-style: normal;\n  font-weight: normal;\n}\n.text-extra-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: HelveticaNeueCyr medium;\n  line-height: 21px;\n}\n.large-content[_ngcontent-%COMP%]    > .title.large[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 64px;\n}\n.col-50[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.icon-large[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.icon-large[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\n.pressed-element[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  background: #fff;\n}\n.box[_ngcontent-%COMP%] {\n  display: flex;\n}\n.center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n.around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n.small-element[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border: 1px solid #fff;\n  background: #fff;\n  opacity: 0.56;\n}\n.small-element[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\n.small-element.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.serving-element[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 247px 0px 0px 924px !important;\n}\n.indents[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\na[_ngcontent-%COMP%]:-webkit-any-link {\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  background: #2B2E3D;\n  box-shadow: -4px 4px 16px #000000;\n}\n.card.large[_ngcontent-%COMP%] {\n  display: flex;\n  width: 576px;\n  height: 368px;\n}\n.card.medium[_ngcontent-%COMP%] {\n  display: flex;\n  width: 221px;\n  height: 313px;\n}\nimg[_ngcontent-%COMP%] {\n  border: none;\n  cursor: pointer;\n}\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.icon-fl[_ngcontent-%COMP%] {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n.card-background[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-filter: blur(3px) brightness(50%);\n          filter: blur(3px) brightness(50%);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.card.large[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.card.medium[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0 0 10px 0;\n}\n.card.medium[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 9px;\n}\n.card.medium[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .mark[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 24px;\n  background: #fff;\n  border-radius: 40px;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 0 2px;\n  font-style: normal;\n  font-weight: 550;\n}\n.card.medium[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%]    > .text-description[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgba(43, 46, 61, 0.56) 0%, rgba(43, 46, 61, 0) 100%);\n  padding: 9px;\n  font-size: 18px;\n  color: #fff;\n  font-style: normal;\n  font-family: HelveticaNeueCyr medium;\n}\n.card.large[_ngcontent-%COMP%]    > .card-content[_ngcontent-%COMP%]    > .text-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  margin-left: 20px;\n}\n.text-description[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-weight: 550;\n  font-size: 18px;\n  line-height: 24px;\n  color: #fff;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n}\n.text-description[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-weight: 550;\n  font-size: 15px;\n  line-height: 21px;\n  font-style: normal;\n  display: flex;\n  align-items: center;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #fff;\n}\ndiv.small-line[_ngcontent-%COMP%] {\n  margin: 20px 0px 10px 0px;\n  background: rgba(196, 196, 196, 0.1);\n  width: 100%;\n  height: 3px;\n}\n.text-description[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 15px;\n}\n.text-description[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .avatar-image[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  width: 48px;\n  height: 48px;\n  margin-right: 20px;\n  border: 0.5px solid #36394E;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.card-box[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  box-shadow: -4px 4px 16px #000000;\n  border-radius: 4px;\n}\n.card-box[_ngcontent-%COMP%]    > .mark[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 15px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  text-align: right;\n  padding: 17px 21px;\n}\n.card-box[_ngcontent-%COMP%]    > .mark[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 54px;\n  height: 31px;\n  background: #68b655;\n  border-radius: 40px;\n  display: flex;\n  align-items: center;\n  box-sizing: content-box;\n  justify-content: center;\n}\n.card-box[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%], .card-line-col.description[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 21px;\n  box-sizing: border-box;\n  background: linear-gradient(90deg, rgba(43, 46, 61, 0.56) 0%, rgba(43, 46, 61, 0) 100%);\n}\n.list-form[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%], .card-line-col[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: var(--background-blur-gradient--);\n}\n.grid-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.grid-column[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 17px;\n}\n.grid-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.grid-row[_ngcontent-%COMP%]    > .card-box[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 17px;\n}\n.card-line-col[_ngcontent-%COMP%], .card-line-row[_ngcontent-%COMP%] {\n  box-shadow: -4px 4px 16px #000000;\n  border-radius: 4px;\n}\n.card-line-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  height: 578px;\n}\n.card-line-col.down[_ngcontent-%COMP%], .card-box.down[_ngcontent-%COMP%], .vertical-panel.down[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.grid-column[_ngcontent-%COMP%]    > .card-line-col[_ngcontent-%COMP%]:not(:last-child), .card-box[_ngcontent-%COMP%]:not(:last-child), .card-line-row[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 17px;\n}\n.card-line-row[_ngcontent-%COMP%] {\n  width: 578px;\n  height: 280px;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 190px;\n  height: 47px;\n  outline: none;\n  border: 2px solid #fff;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr medium;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 24px;\n  align-items: center;\n  height: 36px;\n  display: flex;\n  margin-bottom: 20px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.list-title.border-red[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-red--);\n}\n.origin-content[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 24px;\n  line-height: 28px;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 250;\n}\n.origin-content[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 550;\n  line-height: 24px;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.full-side[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.c-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvZ2FtZXIvcGFnZXMvc2hvb3Rlci1wYWdlL3Nob290ZXItcGFnZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcHJvamVjdHMvZ2FtZXIvcGFnZXMvc2hvb3Rlci1wYWdlL0Q6L01hb2xpbmsvRGV2ZWxvcG1lbnQvRGV2L21pY3JvLXdvcmxkL3NyYy9hcHAvcHJvamVjdHMvZ2FtZXIvcGFnZXMvc2hvb3Rlci1wYWdlL3Nob290ZXItcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUNFbEI7RUFDRSx5QkFBQTtBREFGO0FDR0E7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURERjtBQ0lBO0VBQ0UsU0FBQTtBREZGO0FDS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURIRjtBQUNBOztFQUVFO0FBQ0YsU0FBUztBQ1VUO0VBQ0UsZUFBQTtBRFJGO0FDV0E7RUFDRSxlQUFBO0FEVEY7QUNZQTs7RUFFRSxvQkFBQTtBRFZGO0FDYUE7RUFDRSxlQUFBO0FEWEY7QUFDQSxjQUFjO0FDZ0JkO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FEZEY7QUFDQTs7RUFFRTtBQUNGLFVBQVU7QUNxQlY7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRG5CRjtBQ3NCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FEcEJGO0FBQ0EsV0FBVztBQ3lCWDs7RUFFRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VEdkJBLDZCQUE2QjtFQ3lCN0IsWUFBQTtFQUNBLFlBQUE7QUR2QkY7QUMwQkE7O0VBRUUsWUFBQTtFQUNBLG1CQUFBO0FEeEJGO0FDMkJBOztFQUVFLFlBQUE7RUFDQSxZQUFB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RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRHpSRjtBQzRSQTtFQUNFLFVBQUE7QUQxUkYiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9nYW1lci9wYWdlcy9zaG9vdGVyLXBhZ2Uvc2hvb3Rlci1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2xvYmFsIFN0eWxlcyAqL1xuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxQjI1O1xufVxuKiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi8qcm91dGVyLW91dGxldCArICogIHtcbnBhZGRpbmc6IDAgMTZweDtcbn0qL1xuLyogVGV4dCAqL1xuaDEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmgxLFxuaDIge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4vKiBIeXBlcmxpbmsgKi9cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi8qYTpob3ZlciB7XG5vcGFjaXR5OiAwLjg7XG59Ki9cbi8qIElucHV0ICovXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XG59XG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4vKiBCdXR0b24gKi9cbi5idXR0b24sXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsqL1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5idXR0b246aG92ZXIsXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYnV0dG9uOmRpc2FibGVkLFxuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IGF1dG87XG59XG4vKiBGYW5jeSBCdXR0b24gKi9cbi5mYW5jeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG4uZmFuY3ktYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLyogVG9wIEJhciAqL1xuLyphcHAtdG9wLWJhciB7XG53aWR0aDogMTAwJTtcbmhlaWdodDogNjhweDtcbmJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG5wYWRkaW5nOiAxNnB4O1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hcHAtdG9wLWJhciBoMSB7XG5jb2xvcjogd2hpdGU7XG5tYXJnaW46IDA7XG59Ki9cbi8qIENoZWNrb3V0IENhcnQsIFNoaXBwaW5nIFByaWNlcyAqL1xuLmNhcnQtaXRlbSxcbi5zaGlwcGluZy1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cbi8qXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKkBmb250LWZhY2Uge1xuZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXIsIEJlYmFzIE5ldWU7XG4gIH0qL1xuOnJvb3Qge1xuICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0LS06ICM0QzRBNUY7XG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLS06ICM4MzhFOUQ7XG4gIC0tY29sb3ItZ3JlZW4tLTogIzZCQjc1NTtcbiAgLS1yZWQtZ3JhZGllbnQtLTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNCQzBFM0YsICNCQzBFM0YpO1xuICAtLWRhcmstcmVkLWdyYWRpZW50LS06IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzgwQTIzLCAjNzgwQTIzKTtcbiAgLS1jb2xvci1yZWQtLTogI0FFMTQzRTtcbiAgLS1jb2xvci15ZWxsb3ctLTogI0Y2RDI2NTtcbiAgLS1jb2xvci1ibHVlLS06ICM0M0I0REU7XG4gIC0tY29sb3ItdmlvbGV0LS06ICM2MDQxQkE7XG4gIC0tY29sb3ItdGV4dC1kYXJrZW4tLTogIzNGM0Y1QjtcbiAgLS1iYWNrZ3JvdW5kLWJsdXItZ3JhZGllbnQtLTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLCA0NiwgNjEsIDAuNTYpIDAlLCByZ2JhKDQzLCA0NiwgNjEsIDApIDEwMCUpO1xuICAvKiFcbiAqIEJvb3RzdHJhcCB2NC4yLjEgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS8pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE4IFRoZSBCb290c3RyYXAgQXV0aG9yc1xuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4gIC0tYmx1ZTogIzAwN2JmZjtcbiAgLS1pbmRpZ286ICM2NjEwZjI7XG4gIC0tcHVycGxlOiAjNmY0MmMxO1xuICAtLXBpbms6ICNlODNlOGM7XG4gIC0tcmVkOiAjZGMzNTQ1O1xuICAtLW9yYW5nZTogI2ZkN2UxNDtcbiAgLS15ZWxsb3c6ICNmZmMxMDc7XG4gIC0tZ3JlZW46ICMyOGE3NDU7XG4gIC0tdGVhbDogIzIwYzk5NztcbiAgLS1jeWFuOiAjMTdhMmI4O1xuICAtLXdoaXRlOiAjZmZmO1xuICAtLWdyYXk6ICM2Yzc1N2Q7XG4gIC0tZ3JheS1kYXJrOiAjMzQzYTQwO1xuICAtLXByaW1hcnk6ICMwMDdiZmY7XG4gIC0tc2Vjb25kYXJ5OiAjNmM3NTdkO1xuICAtLXN1Y2Nlc3M6ICMyOGE3NDU7XG4gIC0taW5mbzogIzE3YTJiODtcbiAgLS13YXJuaW5nOiAjZmZjMTA3O1xuICAtLWRhbmdlcjogI2RjMzU0NTtcbiAgLS1saWdodDogI2Y4ZjlmYTtcbiAgLS1kYXJrOiAjMzQzYTQwO1xuICAtLWJyZWFrcG9pbnQteHM6IDA7XG4gIC0tYnJlYWtwb2ludC1zbTogNTc2cHg7XG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XG4gIC0tYnJlYWtwb2ludC1sZzogOTkycHg7XG4gIC0tYnJlYWtwb2ludC14bDogMTIwMHB4O1xuICAtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgLS1mb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIC8qIE5leHVzICovXG4gIC0tYnVpLWNvbG9yLWJsYW5rOiAjZmZmO1xuICAtLWJ1aS1jb2xvci1ibGFuay1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgLS1idWktY29sb3Itdm9pZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLS1idWktY29sb3ItdHJ1ZS1ibGFjazogIzAwMDtcbiAgLS1idWktY29sb3Itc2VsZWN0aW9uOiByZ2JhKDI1NSwgMjIxLCA0NSwgMC4zMik7XG4gIC0tYnVpLWNvbG9yLXRleHQ6ICMzMzM7XG4gIC0tYnVpLWNvbG9yLXRleHQtbGlnaHQ6ICM2NjY7XG4gIC0tYnVpLWNvbG9yLXRleHQtbGlnaHRlcjogIzkwOTA5MDtcbiAgLS1idWktY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM5NTliYTQ7XG4gIC0tYnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LWRpc2FibGVkOiByZ2JhKDUxLCA1MSwgNTEsIDAuNCk7XG4gIC0tYnVpLWNvbG9yLXRleHQtZXJyb3I6ICNlMDFmMTk7XG4gIC0tYnVpLWNvbG9yLXRleHQtc3VjY2VzczogIzE2OGEyMTtcbiAgLS1idWktY29sb3ItdGV4dC1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjU2KTtcbiAgLS1idWktY29sb3ItdGV4dC1lcnJvci1kaXNhYmxlZDogcmdiYSgyMjQsIDMxLCAyNSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHQtc3VjY2Vzcy1kaXNhYmxlZDogcmdiYSg1NywgMTgxLCA3NCwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLWJvcmRlcjogI2U3ZThlYTtcbiAgLS1idWktY29sb3ItYm9yZGVyLWRhcms6ICNjYmNmZDM7XG4gIC0tYnVpLWNvbG9yLWJvcmRlci1kYXJrZXI6ICM5NTliYTQ7XG4gIC0tYnVpLWNvbG9yLWJvcmRlci1hY3RpdmU6ICNmZmRkMmQ7XG4gIC0tYnVpLWNvbG9yLWJvcmRlci1mb2N1czogcmdiYSg1MSwgNTEsIDUxLCAwLjQ4KTtcbiAgLS1idWktY29sb3ItYm9yZGVyLWRpc2FibGVkOiByZ2JhKDIzMSwgMjMyLCAyMzQsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1zY3JvbGxiYXI6IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gIC0tYnVpLWNvbG9yLXNjcm9sbGJhci1ob3ZlcjogcmdiYSg1MSwgNTEsIDUxLCAwLjM2KTtcbiAgLS1idWktY29sb3Itc2Nyb2xsYmFyLWFjdGl2ZTogcmdiYSg1MSwgNTEsIDUxLCAwLjU2KTtcbiAgLS1idWktY29sb3Itc2Nyb2xsYmFyLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci1zY3JvbGxiYXItbGlnaHQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNik7XG4gIC0tYnVpLWNvbG9yLXNjcm9sbGJhci1saWdodC1hY3RpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZDogI2VjZjFmNztcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWhvdmVyOiAjZTRlYmYzO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtYWN0aXZlOiAjZGRlNGVkO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtcmVhZG9ubHk6IHJnYmEoMjM2LCAyNDEsIDI0NywgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kaXNhYmxlZDogcmdiYSgyMzYsIDI0MSwgMjQ3LCAwLjU2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWVycm9yOiByZ2JhKDIyNCwgMzEsIDI1LCAwLjA4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWVycm9yLWhvdmVyOiByZ2JhKDIyNCwgMzEsIDI1LCAwLjE2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWVycm9yLWZvY3VzLWJvcmRlcjogI2UwMWYxOTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWVycm9yLXRleHQ6ICNlMDFmMTk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1zdWNjZXNzOiByZ2JhKDU3LCAxODEsIDc0LCAwLjA4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLXN1Y2Nlc3MtaG92ZXI6IHJnYmEoNTcsIDE4MSwgNzQsIDAuMTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtc3VjY2Vzcy1mb2N1cy1ib3JkZXI6ICMzOWI1NGE7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1zdWNjZXNzLXRleHQ6ICMzOWI1NGE7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1hdXRvZmlsbDogI2ZmZjVjMDtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1hY3RpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1mb2N1cy1ib3JkZXI6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1yZWFkb25seTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGFyazogcmdiYSg1MSwgNTEsIDUxLCAwLjE2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcmstaG92ZXI6IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kYXJrLWFjdGl2ZTogcmdiYSg1MSwgNTEsIDUxLCAwLjI4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcmstZm9jdXMtYm9yZGVyOiAjMzMzO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGFyay1yZWFkb25seTogcmdiYSg1MSwgNTEsIDUxLCAwLjA4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcmstZGlzYWJsZWQ6IHJnYmEoNTEsIDUxLCA1MSwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnktdGV4dDogIzMzMztcbiAgLS1idWktY29sb3ItcHJpbWFyeTogI2ZmZGQyZDtcbiAgLS1idWktY29sb3ItcHJpbWFyeS1ob3ZlcjogI2ZjYzUyMTtcbiAgLS1idWktY29sb3ItcHJpbWFyeS1hY3RpdmU6ICNmYWI2MTk7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnktdGV4dC1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjU2KTtcbiAgLS1idWktY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogcmdiYSgyNTUsIDIyMSwgNDUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1zZWNvbmRhcnk6ICNlY2YxZjc7XG4gIC0tYnVpLWNvbG9yLXNlY29uZGFyeS1ob3ZlcjogI2U0ZWJmMztcbiAgLS1idWktY29sb3Itc2Vjb25kYXJ5LWFjdGl2ZTogI2RkZTRlZDtcbiAgLS1idWktY29sb3Itc2Vjb25kYXJ5LWRpc2FibGVkOiByZ2JhKDIzNiwgMjQxLCAyNDcsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWJvcmRlcjogIzNkN2FiNjtcbiAgLS1idWktY29sb3Itb3V0bGluZS1ib3JkZXItaG92ZXI6ICMzNjk7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtaG92ZXI6IHJnYmEoNjEsIDEyMiwgMTgyLCAwLjA4KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1ib3JkZXItYWN0aXZlOiAjMjk1MjdjO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWFjdGl2ZTogcmdiYSg2MSwgMTIyLCAxODIsIDAuMTYpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWJvcmRlci1kaXNhYmxlZDogcmdiYSg2MSwgMTIyLCAxODIsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWRhcmstYm9yZGVyOiAjMzMzO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWRhcmstYm9yZGVyLWhvdmVyOiAjNjY2O1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWRhcmstYWN0aXZlOiByZ2JhKDUxLCA1MSwgNTEsIDAuMDgpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWRhcmstYm9yZGVyLWRpc2FibGVkOiByZ2JhKDUxLCA1MSwgNTEsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWRhcmstdGV4dC1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjU2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1saWdodC1ib3JkZXI6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtbGlnaHQtYm9yZGVyLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWxpZ2h0LWFjdGl2ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1saWdodC1mb2N1cy1ib3JkZXI6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtbGlnaHQtYm9yZGVyLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWxpZ2h0LXRleHQtZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gIC0tYnVpLWNvbG9yLXdoaXRlYmxvY2stYm9yZGVyOiAjZTdlOGVhO1xuICAtLWJ1aS1jb2xvci13aGl0ZWJsb2NrLWhvdmVyOiAjZjVmNWY2O1xuICAtLWJ1aS1jb2xvci13aGl0ZWJsb2NrLWJvcmRlci1ob3ZlcjogI2NiY2ZkMztcbiAgLS1idWktY29sb3Itd2hpdGVibG9jay1ib3JkZXItYWN0aXZlOiAjZmZkZDJkO1xuICAtLWJ1aS1jb2xvci13aGl0ZWJsb2NrLWJvcmRlci1hY3RpdmUtZGlzYWJsZWQ6IHJnYmEoMjU1LCAyMjEsIDQ1LCAwLjU2KTtcbiAgLS1idWktY29sb3Itd2hpdGVibG9jay1ib3JkZXItYWN0aXZlLWhvdmVyOiAjZmNjNTIxO1xuICAtLWJ1aS1jb2xvci1jYXJkLXByaW1hcnk6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLWNhcmQtc2Vjb25kYXJ5OiAjZjVmNWY2O1xuICAtLWJ1aS1jb2xvci1mbGF0LXRleHQtZGlzYWJsZWQ6IHJnYmEoNjEsIDEyMiwgMTgyLCAwLjU2KTtcbiAgLS1idWktY29sb3ItZmxhdC1saWdodC10ZXh0LWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzYpO1xuICAtLWJ1aS1jb2xvci1mbGF0LWJhY2tncm91bmQtaG92ZXI6ICNlY2YxZjc7XG4gIC0tYnVpLWNvbG9yLWZsYXQtYmFja2dyb3VuZC1hY3RpdmU6ICNlNGViZjM7XG4gIC0tYnVpLWNvbG9yLWxpbms6ICMzZDdhYjY7XG4gIC0tYnVpLWNvbG9yLWxpbmstbGlnaHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLWxpbmstaG92ZXI6ICMzNjk7XG4gIC0tYnVpLWNvbG9yLWxpbmstYWN0aXZlOiAjMjk1MjdjO1xuICAtLWJ1aS1jb2xvci1saW5rLWRpc2FibGVkOiByZ2JhKDYxLCAxMjIsIDE4MiwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1wbGFjZWhvbGRlcjogIzc5ODE4YztcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLXBsYWNlaG9sZGVyLWhvdmVyOiAjNjE2ODcxO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtcGxhY2Vob2xkZXItZGlzYWJsZWQ6IHJnYmEoMTIxLCAxMjksIDE0MCwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1ib3JkZXI6ICM2MTY4NzE7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1sYWJlbDogIzk1OWJhNDtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWljb246ICM5NTliYTQ7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1pY29uLWhvdmVyOiAjNjE2ODcxO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtaWNvbi1kaXNhYmxlZDogcmdiYSgxNDksIDE1NSwgMTY0LCAwLjU2KTtcbiAgLS1idWktY29sb3ItdG9nZ2xlLW9uLWRpc2FibGVkOiAjOTU5YmE0O1xuICAtLWJ1aS1jb2xvci10b2dnbGUtb2ZmLWRpc2FibGVkOiByZ2JhKDE0OSwgMTU1LCAxNjQsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10YWJzLWJvcmRlcjogI2U3ZThlYTtcbiAgLS1idWktY29sb3ItdGFicy1hcnJvdzogI2U3ZThlYTtcbiAgLS1idWktY29sb3ItdGFicy10ZXh0LWRpc2FibGVkOiByZ2JhKDYxLCAxMjIsIDE4MiwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLWFjY29yZGlvbi1ib3JkZXI6ICNjYmNmZDM7XG4gIC0tYnVpLWNvbG9yLWFjY29yZGlvbi1iYWNrZ3JvdW5kLWhvdmVyOiAjZjVmNWY2O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtdGV4dDogIzY2NjtcbiAgLS1idWktY29sb3Itc3RhdHVzOiAjOTU5YmE0O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtaG92ZXI6ICM3OTgxOGM7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1hY3RpdmU6ICM2MTY4NzE7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1saWdodDogI2VjZjFmNztcbiAgLS1idWktY29sb3Itc3RhdHVzLWxpZ2h0LWhvdmVyOiAjZTRlYmYzO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtbGlnaHQtYWN0aXZlOiAjZGRlNGVkO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZ3JheTogI2U3ZThlYTtcbiAgLS1idWktY29sb3Itc3RhdHVzLWdyYXktaG92ZXI6ICNjYmNmZDM7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1ncmF5LWFjdGl2ZTogIzk1OWJhNDtcbiAgLS1idWktY29sb3Itc3RhdHVzLWVycm9yOiAjZTAxZjE5O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZXJyb3ItZGlzYWJsZWQ6IHJnYmEoMjI0LCAzMSwgMjUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZXJyb3ItaG92ZXI6ICNkMzEyMGU7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1lcnJvci1hY3RpdmU6ICNjNDBiMDg7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1lcnJvci1saWdodDogcmdiYSgyMjQsIDMxLCAyNSwgMC4xMik7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zdWNjZXNzOiAjMzliNTRhO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1ob3ZlcjogIzJjYTUzYTtcbiAgLS1idWktY29sb3Itc3RhdHVzLXN1Y2Nlc3MtYWN0aXZlOiAjMTY4YTIxO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc3VjY2Vzcy1saWdodDogcmdiYSg1NywgMTgxLCA3NCwgMC4xNik7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zZWNvbmRhcnk6ICMzZDdhYjY7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zZWNvbmRhcnktaG92ZXI6ICMzNjk7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zZWNvbmRhcnktYWN0aXZlOiAjMjk1MjdjO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc2Vjb25kYXJ5LXRleHQ6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zZWNvbmRhcnktdGV4dC1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgLS1idWktY29sb3ItYXZhdGFyOiAjZGRlNGVkO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtcGxhY2Vob2xkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1wbGFjZWhvbGRlci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LWxhYmVsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtaWNvbjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LWljb24tZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kYXJrLXBsYWNlaG9sZGVyLWRpc2FibGVkOiByZ2JhKDUxLCA1MSwgNTEsIDAuMzYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGFyay1pY29uLWRpc2FibGVkOiByZ2JhKDUxLCA1MSwgNTEsIDAuMzYpO1xuICAtLWJ1aS1jb2xvci10b29sdGlwLWRhcmstYmFja2dyb3VuZDogIzYxNjg3MTtcbiAgLS1idWktY29sb3ItdG9vbHRpcC1lcnJvci1iYWNrZ3JvdW5kOiAjZTAxZjE5O1xuICAtLWJ1aS1jb2xvci10b29sdGlwLWxpZ2h0LWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYnVpLWNvbG9yLWFsZXJ0LXdhcm5pbmc6ICNmY2M1MjE7XG4gIC0tYnVpLWNvbG9yLXRhYmxlLWJhcjogIzc5ODE4YztcbiAgLS1idWktY29sb3ItbWVudS1kYXJrOiAjNjE2ODcxO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LW11c3RhcmQ6ICNmZmQ0NTA7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtdGV4YXM6ICNmZmI3NGM7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtdGFuOiAjZjhhMzRkO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LXNhbG1vbjogI2ZmODg2MztcbiAgLS1idWktY29sb3Itc3VwcG9ydC1zaWVubmE6ICNlZTgwNWQ7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtYml0dGVyc3dlZXQ6ICNmZjdiNzY7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtcGlua2llOiAjZmY3OGE3O1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWNoYXJtOiAjZDQ1ZDhjO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWFtZXRoeXN0OiAjYmM3MWM5O1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWhlbGlvOiAjYTM4MWZmO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWxpbGFjOiAjOGY3NWQxO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LW1hbGlidTogIzdjYWVmZjtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1oYXZlbG9jazogIzY1YTdlMDtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1waWN0b246ICM0ZGMzZjc7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtbWludDogIzRiZDBlMTtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1mb3VudGFpbjogIzRlYjZjMjtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1wdWVydG9yaWNvOiAjNGZiZGIyO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWJheTogIzRkYTE5NztcbiAgLS1idWktY29sb3Itc3VwcG9ydC1mb3Jlc3Q6ICM3M2IwNzc7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQteW9yazogIzgxYzc4NTtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1mZWlqb2E6ICNhZWQ1N2Y7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciwgQmViYXMgTmV1ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNEMUQyRDY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xuICAvKiDRjdGC0L4g0LHRg9C00LXRgiDQv9C+0LrQsNC30LDQvdC+INC/0YDQuCDRgNCw0LfRgNC10YjQtdC90LjQuCDQvNC+0L3QuNGC0L7RgNCwINC00L4gOTMwINC/0LjQutGB0LXQu9C10LkgKi9cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAvKiDQvtGB0L3QvtCy0L3QvtC1INGB0L7QtNC10YDQttC40LzQvtC1INC30LDQvdC40LzQsNC10YIg0LLRgdGRINC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQviDQvtC60L3QsCAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkzMHB4KSBhbmQgKG1pbi13aWR0aDogNDcwcHgpIHtcbiAgLyog0LTQu9GPINGA0LDQt9GA0LXRiNC10L3QuNGPINGN0LrRgNCw0L3QsCDQvtGCIDQ3MCDQtNC+IDkzMCDQv9C40LrRgdC10LvQtdC5ICovXG4gIGFzaWRlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gIH1cbiAgLyog0LHQvtC60L7QstCw0Y8g0LrQvtC70L7QvdC60LAg0YHQvNC10YnQsNC10YLRgdGPINGB0L7Qs9C70LDRgdC90L4g0YDQsNGB0L/QvtC70L7QttC10L3QuNGOINCyIEhUTUwg0Lgg0LzQtdC90Y/QtdGCINGE0L7QvSAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC8qINC10YHQu9C4INC80LDQutGB0LjQvNCw0LvRjNC90L7QtSDRgNCw0LfRgNC10YjQtdC90LjQtSDRjdC60YDQsNC90LAg0YHQvtGB0YLQsNCy0LjRgiA0Njkg0L/QuNC60YHQtdC70LXQuSAqL1xuICBib2R5IHtcbiAgICBmb250OiAwLjllbS8xZW0gXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG4gIC8qINC80LXQvdGP0LXRgtGB0Y8g0YjRgNC40YTRgiAqL1xuICBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiDQsdC+0LrQvtCy0LDRjyDQutC+0LvQvtC90LrQsCDQuNGB0YfQtdC30LDQtdGCICovXG59XG5maWd1cmUge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xufVxuLyog0KHQu9Cw0LnQtNC10YDRiyAqL1xuZGl2LnNsaWRlLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3I7XG4gIGhlaWdodDogNzM4cHg7XG59XG4vKiDQntCx0YnQuNC1INGB0YLQuNC70LggKi9cbi8qINCT0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LUg0YDQsNGB0L/QvtC70L7QttC10L3QuNC1ICovXG5kaXYuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4vKiDQptC10L3RgtGAINC/0L4gWSAqL1xuZGl2Lmhvcml6b250YWwubWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLyog0KbQtdC90YLRgCDQv9C+IFggKi9cbmRpdi5ob3Jpem9udGFsLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4vKiDQoNCw0YHRgtGP0LPQuNCy0LDQvdC40LUg0L/QviDRhtC10L3RgtGA0YMgKi9cbmRpdi5ob3Jpem9udGFsLmFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG4vKiDQoNCw0YHRgtGP0LPQuNCy0LDQvdC40LUg0L/QviDQutGA0LDRj9C8INGN0LvQtdC80LXQvdGC0YMgKi9cbmRpdi5ob3Jpem9udGFsLmJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cbmRpdi5ob3Jpem9udGFsLnRleHQtbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuLyog0JLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7Qs9C+INCx0LvQvtC60LAg0LjQvNC10Y7RgiDQvtGC0YHRgtGD0L8g0LLQv9GA0LDQstC+ICovXG5kaXYuaG9yaXpvbnRhbCA+ICo6bm90KDpsYXN0LWNoaWxkKSxcbmRpdi5ob3Jpem9udGFsLXBhbmVsID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuZGl2Lmhvcml6b250YWwgPiAqOm9ubHktY2hpbGQ6bm90KC5mcmFtZS1ib3g+Lmhvcml6b250YWw+Kikge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLyog0KDQsNGB0L/QvtC70L7QttC10L3QuNC1OiDQv9GA0LjQttCw0YIg0Log0LvQtdCy0L7QvNGDINC60YDQsNGOICovXG5kaXYuaG9yaXpvbnRhbC50by1sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG4vKiDQoNCw0YHQv9C+0LvQvtC20LXQvdC40LU6INC/0YDQuNC20LDRgiDQuiDQv9GA0LDQstC+0LzRgyDQutGA0LDRjiAqL1xuZGl2Lmhvcml6b250YWwudG8tcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG4vKiAqICogKiAqICogKiAqICogKiAqXG5cbmRpdi52ZXJ0aWNhbCDQuCDRgdC+0YHRgtCw0LLQu9GP0Y7RidC40LVcblxuKiAqICogKiAqICogKiAqICogKiAqL1xuLyog0JLQtdGA0YLQuNC60LDQu9GM0L3QvtC1INGA0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSAqL1xuZGl2LnZlcnRpY2FsLFxuLnZlcnRpY2FsLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8qINCS0YHQtSDQtNC+0YfQtdGA0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0L/RgNC40L3QuNC80LDRjtGCINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSDQv9C+INCy0LXRgNGC0LjQutCw0LvQuCwg0LAgZGlzcGxheSBmbGV4ICovXG5kaXYudmVydGljYWwgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8qINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtTog0L/RgNC40LbQsNGCINC6INC90LDRh9Cw0LvRgyAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LvQtdCy0YvQuSDQstC10YDRhdC90LjQuSDRg9Cz0L7QuykgKi9cbmRpdi52ZXJ0aWNhbC5sZWZ0LXRvcCxcbi52ZXJ0aWNhbC1wYW5lbC5sZWZ0LXRvcCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuLyog0KDQsNGB0L/QvtC70L7QttC10L3QuNC1OiDQv9GA0LjQttCw0YIg0Log0LLQtdGA0YXRgyAqL1xuZGl2LnZlcnRpY2FsLnRvcCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuLyog0KDQsNGB0L/QvtC70L7QttC10L3QuNC1OiDQv9GA0LjQttCw0YIg0Log0L3QuNC30YMgKi9cbmRpdi52ZXJ0aWNhbC5ib3R0b20ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5kaXYudmVydGljYWwudG9wLXJpZ2h0LFxuZGl2LnZlcnRpY2FsLnRvcC1yaWdodCA+ICoge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG4vKiDQktGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQutGA0L7QvNC1INC/0L7RgdC70LXQtNC90LXQs9C+INCyINCx0LvQvtC60LUg0L7RgtGB0YLRg9C/INGB0L3QuNC30YMgMTNweCAqL1xuZGl2LnZlcnRpY2FsID4gKjpub3QoOmxhc3QtY2hpbGQpLFxuZGl2LnZlcnRpY2FsLXBhbmVsID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xufVxuZGl2LnZlcnRpY2FsLnRvLWJvdHRvbSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cbi8qINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtTog0L/QviDRhtC10L3RgtGA0YMgKi9cbmRpdi5ob3Jpem9udGFsLmNlbnRlci1hbGwsXG5kaXYudmVydGljYWwuY2VudGVyLWFsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi8qINCg0LDRgdGC0Y/Qs9C40LLQsNC10YIg0L3QsCDQstC10YHRjCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIgKi9cbi52ZXJ0aWNhbC5saXN0LWZvcm0sXG4uaG9yaXpvbnRhbC5saXN0LWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogPT0gPT0gPT0gPT0gPT0gKi9cbi8qINCk0LjQs9GD0YDRiyDQuCDQutCw0YDRgtGLICovXG5maWd1cmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuZmlndXJlLmltYWdlLTEyOCB7XG4gIHdpZHRoOiAxMjhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyOHB4ICFpbXBvcnRhbnQ7XG59XG4vKiA9PSA9PSA9PSA9PSA9PSAqL1xuLyogaGVhZGVyICovXG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmhlYWRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDE5MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaGVhZGVyID4gbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmZvb3RlcixcbmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMzcycHg7XG59XG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwQjBDMTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuZm9vdGVyID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi8qICogKiAqICogKiAqICogKiAqICpcblxu0KLQtdC60YHRgtC+0LLRi9C1INC30L3QsNGH0LXQvdC40Y9cblxuKiAqICogKiAqICogKiAqICogKiAqL1xuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG4udGV4dC1maXJzdCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjRDFEMkQ2O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLnRleHQtc2Vjb25kIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG4udGV4dC10aGlyZCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLnRleHQtbm9ybWFsIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi8qICogKiAqICogKiAqICogKiAqICpcblxudGV4dC1jb2xvclxuXG4qICogKiAqICogKiAqICogKiAqICovXG4vKiDQkdC10LvRi9C5INGC0LXQutGB0YIgKi9cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogI0QxRDJENjtcbn1cbi8qINCa0YDQsNGB0L3Ri9C5INGC0LXQutGB0YIgKi9cbi50ZXh0LXJlZCxcbi50ZXh0LWhvdmVyLXJlZDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtLSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi8qINCX0LXQu9C10L3Ri9C5INGC0LXQutGB0YIgKi9cbi50ZXh0LWdyZWVuLFxuLnRleHQtaG92ZXItZ3JlZW46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tLSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi50ZXh0LWdyZWVuOmhvdmVyOm5vdCgudGV4dC1ncmVlbi5zdGF0aWMpIHtcbiAgY29sb3I6ICM0MzdiMzMgIWltcG9ydGFudDtcbn1cbi8qINCh0LjQvdC40Lkg0YLQtdC60YHRgiAqL1xuLnRleHQtYmx1ZSxcbi50ZXh0LWhvdmVyLWJsdWU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmx1ZS0tKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLnRleHQtYmx1ZTpob3Zlcjpub3QoLnRleHQtYmx1ZS5zdGF0aWMpIHtcbiAgY29sb3I6ICMyRjk5Q0EgIWltcG9ydGFudDtcbn1cbi8qINCW0LXQu9GC0YvQuSDRgtC10LrRgdGCICovXG4udGV4dC15ZWxsb3csXG4udGV4dC1ob3Zlci15ZWxsb3c6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3IteWVsbG93LS0pO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLnRleHQteWVsbG93OmhvdmVyOm5vdCgudGV4dC15ZWxsb3cuc3RhdGljKSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctLSk7XG59XG4vKiDQpNC40L7Qu9C10YLQvtCy0YvQuSDRgtC10LrRgdGCICovXG4udGV4dC12aW9sZXQsXG4udGV4dC1ob3Zlci12aW9sZXQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdmlvbGV0LS0pO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLnRleHQtdmlvbGV0OmhvdmVyOm5vdCgudGV4dC12aW9sZXQuc3RhdGljKSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci12aW9sZXQtLSk7XG59XG4vKiDQotC10LzQvdGL0Lkg0YLQtdC60YHRgiAqL1xuLnRleHQtZGFyayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWRhcmtlbi0tKTtcbn1cbi8qID09ID09ID09ID09ID09ID09ICovXG4vKiAqICogKiAqICogKiAqICogKiAqXG5cbtCh0YLQsNC90LTQsNGA0YLQvdGL0LUg0YLRjdCz0Lgg0Lgg0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC1XG5cbiogKiAqICogKiAqICogKiAqICogKi9cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hLmxpbms6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4vKiAqICogKiAqICogKiAqICogKiAqXG5cbkljb24g0Lgg0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC1XG5cbiogKiAqICogKiAqICogKiAqICogKi9cbmRpdi5pY29uLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmRpdi5pY29uLXBhbmVsID4gLmljb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cbmRpdi5pY29uLXBhbmVsID4gLmljb24uaWNvbi1leHRyYS1zbWFsbCB7XG4gIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLypkaXYuaWNvbi1wYW5lbCwgZGl2Lml0ZW0tcGFuZWwge1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Ki9cbi5pbnZlcnQtaWNvbiB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuLmludmVydC1pY29uLXctb3Age1xuICBmaWx0ZXI6IGludmVydCgxKSBvcGFjaXR5KDM2JSk7XG59XG4uaW52ZXJ0LWljb24tdy1vcDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsdGVyOiBpbnZlcnQoMSkgb3BhY2l0eSgxMDAlKTtcbn1cbmRpdi5mcmFtZS1ib3gge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5kaXYuZnJhbWUtYm94ID4gKjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5kaXYuZnJhbWUtYm94ID4gKjpudGgtY2hpbGQob2RkKSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGluZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5saW5lLXJvdyA+ICo6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuLmxldmVsLXJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxQjFCMjU7XG4gIG1hcmdpbjogMDtcbn1cbmRpdi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDM3M3B4O1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjRDFEMkQ2O1xufVxuZGl2Lm1haW4tY29udGFpbmVyID4gZGl2Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdi5yb3ctcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5kaXYuaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3BuZy9sb2dvLnBuZycpOyovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5kaXYuaW1hZ2UtNjQge1xuICBtYXgtd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbn1cbi5zdGF0aWMge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4udGlsZSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuZGl2LmVsZW1lbnQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0QxRDJENjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuZGl2LmVsZW1lbnQtcGFuZWwgZGl2LmVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI0QxRDJENjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVsZW1lbnQtcmVkOmhvdmVyLFxuLmVsZW1lbnQtcmVkLmFjdGl2ZSB7XG4gIGNvbG9yOiAjQUUxNDNFICFpbXBvcnRhbnQ7XG59XG5pbWcuaW1hZ2UtNjQge1xuICB3aWR0aDogNjRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbn1cbmRpdi5idXR0b24tYm9yZGVyLWJveCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICMyNzI5Mzg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGNvbG9yOiAjRDFEMkQ2O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi5saW5lIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogIzFCMUIyNTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnJhaW5ib3ctYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0FFMTQzRSAwJSwgIzZCQjc1NSAyNSUsICNGNkQyNjUgNTAlLCAjNDNCNERFIDc1JSwgIzYwNDFCQSAxMDAlKTtcbn1cbi5saXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuc21hbGwge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciBtZWRpdW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbnNtYWxsLm1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuc21hbGwubGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cbi5kYXJrZW4ge1xuICBjb2xvcjogIzNGM0Y1Qjtcbn1cbi5pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5kaXYubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuZGl2LnNsaWRlci1ib3gge1xuICBoZWlnaHQ6IDczOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cbmRpdi5zbGlkZXItYm94ID4gZGl2LmxhcmdlLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTE1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDExNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ubGFyZ2UtY29udGVudCA+IC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHQtbWVkaXVtIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXIgbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyIG1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnRleHQtZXh0cmEtc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyIG1lZGl1bTtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4ubGFyZ2UtY29udGVudCA+IC50aXRsZS5sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG4uY29sLTUwIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5pY29uLWxhcmdlIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbi5pY29uLWxhcmdlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ucHJlc3NlZC1lbGVtZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cbi5zbWFsbC1lbGVtZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMC41Njtcbn1cbi5zbWFsbC1lbGVtZW50Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uc21hbGwtZWxlbWVudC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuLnNlcnZpbmctZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAyNDdweCAwcHggMHB4IDkyNHB4ICFpbXBvcnRhbnQ7XG59XG4uaW5kZW50cyA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmE6LXdlYmtpdC1hbnktbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMyQjJFM0Q7XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDE2cHggIzAwMDAwMDtcbn1cbi5jYXJkLmxhcmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDU3NnB4O1xuICBoZWlnaHQ6IDM2OHB4O1xufVxuLmNhcmQubWVkaXVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDIyMXB4O1xuICBoZWlnaHQ6IDMxM3B4O1xufVxuaW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ociB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmljb24tZmwge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbi5jYXJkLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcyg1MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY2FyZC5sYXJnZSA+IC5jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jYXJkLm1lZGl1bSA+IC5jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xufVxuLmNhcmQubWVkaXVtID4gLmNhcmQtY29udGVudCA+IGRpdiB7XG4gIHBhZGRpbmc6IDlweDtcbn1cbi5jYXJkLm1lZGl1bSA+IC5jYXJkLWNvbnRlbnQgPiBkaXYgPiAubWFyayB7XG4gIG1pbi13aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwIDJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuLmNhcmQubWVkaXVtID4gLmNhcmQtY29udGVudCA+IC50ZXh0LWRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQzLCA0NiwgNjEsIDAuNTYpIDAlLCByZ2JhKDQzLCA0NiwgNjEsIDApIDEwMCUpO1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXIgbWVkaXVtO1xufVxuLmNhcmQubGFyZ2UgPiAuY2FyZC1jb250ZW50ID4gLnRleHQtZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjkwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnRleHQtZGVzY3JpcHRpb24gPiAudGl0bGUge1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dC1kZXNjcmlwdGlvbiA+IC5kZXNjcmlwdGlvbixcbi5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3VidGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbmRpdi5zbWFsbC1saW5lIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjEpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG59XG4udGV4dC1kZXNjcmlwdGlvbiA+IGRpdjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4udGV4dC1kZXNjcmlwdGlvbiA+IGRpdiA+IC5hdmF0YXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMzYzOTRFO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJveCB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTZweCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZC1ib3ggPiAubWFyayB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTdweCAyMXB4O1xufVxuLmNhcmQtYm94ID4gLm1hcmsgPiBkaXYge1xuICBtaW4td2lkdGg6IDU0cHg7XG4gIGhlaWdodDogMzFweDtcbiAgYmFja2dyb3VuZDogIzY4YjY1NTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmQtYm94ID4gLmRlc2NyaXB0aW9uLFxuLmNhcmQtbGluZS1jb2wuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLCA0NiwgNjEsIDAuNTYpIDAlLCByZ2JhKDQzLCA0NiwgNjEsIDApIDEwMCUpO1xufVxuLmxpc3QtZm9ybSA+IC5kZXNjcmlwdGlvbixcbi5jYXJkLWxpbmUtY29sID4gLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ibHVyLWdyYWRpZW50LS0pO1xufVxuLmdyaWQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ncmlkLWNvbHVtbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuLmdyaWQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncmlkLXJvdyA+IC5jYXJkLWJveDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuLmNhcmQtbGluZS1jb2wsXG4uY2FyZC1saW5lLXJvdyB7XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDE2cHggIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhcmQtbGluZS1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNTc4cHg7XG59XG4uY2FyZC1saW5lLWNvbC5kb3duLFxuLmNhcmQtYm94LmRvd24sXG4udmVydGljYWwtcGFuZWwuZG93biB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZ3JpZC1jb2x1bW4gPiAuY2FyZC1saW5lLWNvbDpub3QoOmxhc3QtY2hpbGQpLFxuLmNhcmQtYm94Om5vdCg6bGFzdC1jaGlsZCksXG4uY2FyZC1saW5lLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cbi5jYXJkLWxpbmUtcm93IHtcbiAgd2lkdGg6IDU3OHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAzNXB4O1xufVxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbi5saXN0LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXIgbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5saXN0LXRpdGxlLmJvcmRlci1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItcmVkLS0pO1xufVxuLm9yaWdpbi1jb250ZW50IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG59XG4ub3JpZ2luLWNvbnRlbnQgPiBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4udy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mdWxsLXNpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmMtMiA+ICoge1xuICB3aWR0aDogNTAlO1xufVxuIiwiLyogR2xvYmFsIFN0eWxlcyAqL1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjFCMjU7XG59XG5cbioge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYxNjE2MTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5cbi8qcm91dGVyLW91dGxldCArICogIHtcbnBhZGRpbmc6IDAgMTZweDtcbn0qL1xuXG5cbi8qIFRleHQgKi9cblxuaDEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cblxuLyogSHlwZXJsaW5rICovXG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4vKmE6aG92ZXIge1xub3BhY2l0eTogMC44O1xufSovXG5cblxuLyogSW5wdXQgKi9cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkRCREJEO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLyogQnV0dG9uICovXG5cbi5idXR0b24sXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsqL1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ1dHRvbjpkaXNhYmxlZCxcbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG5cbi8qIEZhbmN5IEJ1dHRvbiAqL1xuXG4uZmFuY3ktYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4uZmFuY3ktYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG5cbi8qIFRvcCBCYXIgKi9cblxuXG4vKmFwcC10b3AtYmFyIHtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiA2OHB4O1xuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbnBhZGRpbmc6IDE2cHg7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmFwcC10b3AtYmFyIGgxIHtcbmNvbG9yOiB3aGl0ZTtcbm1hcmdpbjogMDtcbn0qL1xuXG5cbi8qIENoZWNrb3V0IENhcnQsIFNoaXBwaW5nIFByaWNlcyAqL1xuXG4uY2FydC1pdGVtLFxuLnNoaXBwaW5nLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG5cbi8qXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovXG5cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbi8qQGZvbnQtZmFjZSB7XG5mb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciwgQmViYXMgTmV1ZTtcbiAgfSovXG5cbjpyb290IHtcbiAgLS1jb2xvci1zZWNvbmRhcnktdGV4dC0tOiAjNEM0QTVGO1xuICAtLXByaW1hcnktdGV4dC1jb2xvci0tOiAjODM4RTlEO1xuICAtLWNvbG9yLWdyZWVuLS06ICM2QkI3NTU7XG4gIC0tcmVkLWdyYWRpZW50LS06IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjQkMwRTNGLCAjQkMwRTNGKTtcbiAgLS1kYXJrLXJlZC1ncmFkaWVudC0tOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc4MEEyMywgIzc4MEEyMyk7XG4gIC0tY29sb3ItcmVkLS06ICNBRTE0M0U7XG4gIC0tY29sb3IteWVsbG93LS06ICNGNkQyNjU7XG4gIC0tY29sb3ItYmx1ZS0tOiAjNDNCNERFO1xuICAtLWNvbG9yLXZpb2xldC0tOiAjNjA0MUJBO1xuICAtLWNvbG9yLXRleHQtZGFya2VuLS06ICMzRjNGNUI7XG4gIC0tYmFja2dyb3VuZC1ibHVyLWdyYWRpZW50LS06IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0MywgNDYsIDYxLCAwLjU2KSAwJSwgcmdiYSg0MywgNDYsIDYxLCAwKSAxMDAlKTtcbiAgLyohXG4gKiBCb290c3RyYXAgdjQuMi4xIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuICAtLWJsdWU6ICMwMDdiZmY7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXJlZDogI2RjMzU0NTtcbiAgLS1vcmFuZ2U6ICNmZDdlMTQ7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLWdyZWVuOiAjMjhhNzQ1O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ncmF5OiAjNmM3NTdkO1xuICAtLWdyYXktZGFyazogIzM0M2E0MDtcbiAgLS1wcmltYXJ5OiAjMDA3YmZmO1xuICAtLXNlY29uZGFyeTogIzZjNzU3ZDtcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xuICAtLWluZm86ICMxN2EyYjg7XG4gIC0td2FybmluZzogI2ZmYzEwNztcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XG4gIC0tbGlnaHQ6ICNmOGY5ZmE7XG4gIC0tZGFyazogIzM0M2E0MDtcbiAgLS1icmVha3BvaW50LXhzOiAwO1xuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xuICAtLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcbiAgLS1mb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIC0tZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICAvKiBOZXh1cyAqL1xuICAtLWJ1aS1jb2xvci1ibGFuazogI2ZmZjtcbiAgLS1idWktY29sb3ItYmxhbmstZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXZvaWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC0tYnVpLWNvbG9yLXRydWUtYmxhY2s6ICMwMDA7XG4gIC0tYnVpLWNvbG9yLXNlbGVjdGlvbjogcmdiYSgyNTUsIDIyMSwgNDUsIDAuMzIpO1xuICAtLWJ1aS1jb2xvci10ZXh0OiAjMzMzO1xuICAtLWJ1aS1jb2xvci10ZXh0LWxpZ2h0OiAjNjY2O1xuICAtLWJ1aS1jb2xvci10ZXh0LWxpZ2h0ZXI6ICM5MDkwOTA7XG4gIC0tYnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5OiAjOTU5YmE0O1xuICAtLWJ1aS1jb2xvci10ZXh0LXNlY29uZGFyeS1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjQpO1xuICAtLWJ1aS1jb2xvci10ZXh0LWVycm9yOiAjZTAxZjE5O1xuICAtLWJ1aS1jb2xvci10ZXh0LXN1Y2Nlc3M6ICMxNjhhMjE7XG4gIC0tYnVpLWNvbG9yLXRleHQtZGlzYWJsZWQ6IHJnYmEoNTEsIDUxLCA1MSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHQtZXJyb3ItZGlzYWJsZWQ6IHJnYmEoMjI0LCAzMSwgMjUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0LXN1Y2Nlc3MtZGlzYWJsZWQ6IHJnYmEoNTcsIDE4MSwgNzQsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1ib3JkZXI6ICNlN2U4ZWE7XG4gIC0tYnVpLWNvbG9yLWJvcmRlci1kYXJrOiAjY2JjZmQzO1xuICAtLWJ1aS1jb2xvci1ib3JkZXItZGFya2VyOiAjOTU5YmE0O1xuICAtLWJ1aS1jb2xvci1ib3JkZXItYWN0aXZlOiAjZmZkZDJkO1xuICAtLWJ1aS1jb2xvci1ib3JkZXItZm9jdXM6IHJnYmEoNTEsIDUxLCA1MSwgMC40OCk7XG4gIC0tYnVpLWNvbG9yLWJvcmRlci1kaXNhYmxlZDogcmdiYSgyMzEsIDIzMiwgMjM0LCAwLjU2KTtcbiAgLS1idWktY29sb3Itc2Nyb2xsYmFyOiByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci1zY3JvbGxiYXItaG92ZXI6IHJnYmEoNTEsIDUxLCA1MSwgMC4zNik7XG4gIC0tYnVpLWNvbG9yLXNjcm9sbGJhci1hY3RpdmU6IHJnYmEoNTEsIDUxLCA1MSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXNjcm9sbGJhci1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgLS1idWktY29sb3Itc2Nyb2xsYmFyLWxpZ2h0LWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzYpO1xuICAtLWJ1aS1jb2xvci1zY3JvbGxiYXItbGlnaHQtYWN0aXZlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQ6ICNlY2YxZjc7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1ob3ZlcjogI2U0ZWJmMztcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWFjdGl2ZTogI2RkZTRlZDtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLXJlYWRvbmx5OiByZ2JhKDIzNiwgMjQxLCAyNDcsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGlzYWJsZWQ6IHJnYmEoMjM2LCAyNDEsIDI0NywgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1lcnJvcjogcmdiYSgyMjQsIDMxLCAyNSwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1lcnJvci1ob3ZlcjogcmdiYSgyMjQsIDMxLCAyNSwgMC4xNik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1lcnJvci1mb2N1cy1ib3JkZXI6ICNlMDFmMTk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1lcnJvci10ZXh0OiAjZTAxZjE5O1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtc3VjY2VzczogcmdiYSg1NywgMTgxLCA3NCwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1zdWNjZXNzLWhvdmVyOiByZ2JhKDU3LCAxODEsIDc0LCAwLjE2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiAjMzliNTRhO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtc3VjY2Vzcy10ZXh0OiAjMzliNTRhO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtYXV0b2ZpbGw6ICNmZmY1YzA7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtYWN0aXZlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtZm9jdXMtYm9yZGVyOiAjZmZmO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtcmVhZG9ubHk6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcms6IHJnYmEoNTEsIDUxLCA1MSwgMC4xNik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kYXJrLWhvdmVyOiByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGFyay1hY3RpdmU6IHJnYmEoNTEsIDUxLCA1MSwgMC4yOCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kYXJrLWZvY3VzLWJvcmRlcjogIzMzMztcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcmstcmVhZG9ubHk6IHJnYmEoNTEsIDUxLCA1MSwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1kYXJrLWRpc2FibGVkOiByZ2JhKDUxLCA1MSwgNTEsIDAuMDgpO1xuICAtLWJ1aS1jb2xvci1wcmltYXJ5LXRleHQ6ICMzMzM7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnk6ICNmZmRkMmQ7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnktaG92ZXI6ICNmY2M1MjE7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnktYWN0aXZlOiAjZmFiNjE5O1xuICAtLWJ1aS1jb2xvci1wcmltYXJ5LXRleHQtZGlzYWJsZWQ6IHJnYmEoNTEsIDUxLCA1MSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IHJnYmEoMjU1LCAyMjEsIDQ1LCAwLjU2KTtcbiAgLS1idWktY29sb3Itc2Vjb25kYXJ5OiAjZWNmMWY3O1xuICAtLWJ1aS1jb2xvci1zZWNvbmRhcnktaG92ZXI6ICNlNGViZjM7XG4gIC0tYnVpLWNvbG9yLXNlY29uZGFyeS1hY3RpdmU6ICNkZGU0ZWQ7XG4gIC0tYnVpLWNvbG9yLXNlY29uZGFyeS1kaXNhYmxlZDogcmdiYSgyMzYsIDI0MSwgMjQ3LCAwLjU2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1ib3JkZXI6ICMzZDdhYjY7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtYm9yZGVyLWhvdmVyOiAjMzY5O1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWhvdmVyOiByZ2JhKDYxLCAxMjIsIDE4MiwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtYm9yZGVyLWFjdGl2ZTogIzI5NTI3YztcbiAgLS1idWktY29sb3Itb3V0bGluZS1hY3RpdmU6IHJnYmEoNjEsIDEyMiwgMTgyLCAwLjE2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1ib3JkZXItZGlzYWJsZWQ6IHJnYmEoNjEsIDEyMiwgMTgyLCAwLjU2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1kYXJrLWJvcmRlcjogIzMzMztcbiAgLS1idWktY29sb3Itb3V0bGluZS1kYXJrLWJvcmRlci1ob3ZlcjogIzY2NjtcbiAgLS1idWktY29sb3Itb3V0bGluZS1kYXJrLWFjdGl2ZTogcmdiYSg1MSwgNTEsIDUxLCAwLjA4KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1kYXJrLWJvcmRlci1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjU2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1kYXJrLXRleHQtZGlzYWJsZWQ6IHJnYmEoNTEsIDUxLCA1MSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtbGlnaHQtYm9yZGVyOiAjZmZmO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWxpZ2h0LWJvcmRlci1ob3ZlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1saWdodC1hY3RpdmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIC0tYnVpLWNvbG9yLW91dGxpbmUtbGlnaHQtZm9jdXMtYm9yZGVyOiAjZmZmO1xuICAtLWJ1aS1jb2xvci1vdXRsaW5lLWxpZ2h0LWJvcmRlci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgLS1idWktY29sb3Itb3V0bGluZS1saWdodC10ZXh0LWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAtLWJ1aS1jb2xvci13aGl0ZWJsb2NrLWJvcmRlcjogI2U3ZThlYTtcbiAgLS1idWktY29sb3Itd2hpdGVibG9jay1ob3ZlcjogI2Y1ZjVmNjtcbiAgLS1idWktY29sb3Itd2hpdGVibG9jay1ib3JkZXItaG92ZXI6ICNjYmNmZDM7XG4gIC0tYnVpLWNvbG9yLXdoaXRlYmxvY2stYm9yZGVyLWFjdGl2ZTogI2ZmZGQyZDtcbiAgLS1idWktY29sb3Itd2hpdGVibG9jay1ib3JkZXItYWN0aXZlLWRpc2FibGVkOiByZ2JhKDI1NSwgMjIxLCA0NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXdoaXRlYmxvY2stYm9yZGVyLWFjdGl2ZS1ob3ZlcjogI2ZjYzUyMTtcbiAgLS1idWktY29sb3ItY2FyZC1wcmltYXJ5OiAjZmZmO1xuICAtLWJ1aS1jb2xvci1jYXJkLXNlY29uZGFyeTogI2Y1ZjVmNjtcbiAgLS1idWktY29sb3ItZmxhdC10ZXh0LWRpc2FibGVkOiByZ2JhKDYxLCAxMjIsIDE4MiwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLWZsYXQtbGlnaHQtdGV4dC1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcbiAgLS1idWktY29sb3ItZmxhdC1iYWNrZ3JvdW5kLWhvdmVyOiAjZWNmMWY3O1xuICAtLWJ1aS1jb2xvci1mbGF0LWJhY2tncm91bmQtYWN0aXZlOiAjZTRlYmYzO1xuICAtLWJ1aS1jb2xvci1saW5rOiAjM2Q3YWI2O1xuICAtLWJ1aS1jb2xvci1saW5rLWxpZ2h0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1saW5rLWhvdmVyOiAjMzY5O1xuICAtLWJ1aS1jb2xvci1saW5rLWFjdGl2ZTogIzI5NTI3YztcbiAgLS1idWktY29sb3ItbGluay1kaXNhYmxlZDogcmdiYSg2MSwgMTIyLCAxODIsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtcGxhY2Vob2xkZXI6ICM3OTgxOGM7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1wbGFjZWhvbGRlci1ob3ZlcjogIzYxNjg3MTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLXBsYWNlaG9sZGVyLWRpc2FibGVkOiByZ2JhKDEyMSwgMTI5LCAxNDAsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtYm9yZGVyOiAjNjE2ODcxO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGFiZWw6ICM5NTliYTQ7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1pY29uOiAjOTU5YmE0O1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtaWNvbi1ob3ZlcjogIzYxNjg3MTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWljb24tZGlzYWJsZWQ6IHJnYmEoMTQ5LCAxNTUsIDE2NCwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRvZ2dsZS1vbi1kaXNhYmxlZDogIzk1OWJhNDtcbiAgLS1idWktY29sb3ItdG9nZ2xlLW9mZi1kaXNhYmxlZDogcmdiYSgxNDksIDE1NSwgMTY0LCAwLjU2KTtcbiAgLS1idWktY29sb3ItdGFicy1ib3JkZXI6ICNlN2U4ZWE7XG4gIC0tYnVpLWNvbG9yLXRhYnMtYXJyb3c6ICNlN2U4ZWE7XG4gIC0tYnVpLWNvbG9yLXRhYnMtdGV4dC1kaXNhYmxlZDogcmdiYSg2MSwgMTIyLCAxODIsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci1hY2NvcmRpb24tYm9yZGVyOiAjY2JjZmQzO1xuICAtLWJ1aS1jb2xvci1hY2NvcmRpb24tYmFja2dyb3VuZC1ob3ZlcjogI2Y1ZjVmNjtcbiAgLS1idWktY29sb3Itc3RhdHVzLXRleHQ6ICM2NjY7XG4gIC0tYnVpLWNvbG9yLXN0YXR1czogIzk1OWJhNDtcbiAgLS1idWktY29sb3Itc3RhdHVzLWhvdmVyOiAjNzk4MThjO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtYWN0aXZlOiAjNjE2ODcxO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtbGlnaHQ6ICNlY2YxZjc7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1saWdodC1ob3ZlcjogI2U0ZWJmMztcbiAgLS1idWktY29sb3Itc3RhdHVzLWxpZ2h0LWFjdGl2ZTogI2RkZTRlZDtcbiAgLS1idWktY29sb3Itc3RhdHVzLWdyYXk6ICNlN2U4ZWE7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1ncmF5LWhvdmVyOiAjY2JjZmQzO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZ3JheS1hY3RpdmU6ICM5NTliYTQ7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1lcnJvcjogI2UwMWYxOTtcbiAgLS1idWktY29sb3Itc3RhdHVzLWVycm9yLWRpc2FibGVkOiByZ2JhKDIyNCwgMzEsIDI1LCAwLjU2KTtcbiAgLS1idWktY29sb3Itc3RhdHVzLWVycm9yLWhvdmVyOiAjZDMxMjBlO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZXJyb3ItYWN0aXZlOiAjYzQwYjA4O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtZXJyb3ItbGlnaHQ6IHJnYmEoMjI0LCAzMSwgMjUsIDAuMTIpO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc3VjY2VzczogIzM5YjU0YTtcbiAgLS1idWktY29sb3Itc3RhdHVzLXN1Y2Nlc3MtaG92ZXI6ICMyY2E1M2E7XG4gIC0tYnVpLWNvbG9yLXN0YXR1cy1zdWNjZXNzLWFjdGl2ZTogIzE2OGEyMTtcbiAgLS1idWktY29sb3Itc3RhdHVzLXN1Y2Nlc3MtbGlnaHQ6IHJnYmEoNTcsIDE4MSwgNzQsIDAuMTYpO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc2Vjb25kYXJ5OiAjM2Q3YWI2O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc2Vjb25kYXJ5LWhvdmVyOiAjMzY5O1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc2Vjb25kYXJ5LWFjdGl2ZTogIzI5NTI3YztcbiAgLS1idWktY29sb3Itc3RhdHVzLXNlY29uZGFyeS10ZXh0OiAjZmZmO1xuICAtLWJ1aS1jb2xvci1zdGF0dXMtc2Vjb25kYXJ5LXRleHQtZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLWF2YXRhcjogI2RkZTRlZDtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LXBsYWNlaG9sZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtbGlnaHQtcGxhY2Vob2xkZXItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1sYWJlbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWxpZ2h0LWljb246IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XG4gIC0tYnVpLWNvbG9yLXRleHRmaWVsZC1saWdodC1pY29uLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzYpO1xuICAtLWJ1aS1jb2xvci10ZXh0ZmllbGQtZGFyay1wbGFjZWhvbGRlci1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjM2KTtcbiAgLS1idWktY29sb3ItdGV4dGZpZWxkLWRhcmstaWNvbi1kaXNhYmxlZDogcmdiYSg1MSwgNTEsIDUxLCAwLjM2KTtcbiAgLS1idWktY29sb3ItdG9vbHRpcC1kYXJrLWJhY2tncm91bmQ6ICM2MTY4NzE7XG4gIC0tYnVpLWNvbG9yLXRvb2x0aXAtZXJyb3ItYmFja2dyb3VuZDogI2UwMWYxOTtcbiAgLS1idWktY29sb3ItdG9vbHRpcC1saWdodC1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJ1aS1jb2xvci1hbGVydC13YXJuaW5nOiAjZmNjNTIxO1xuICAtLWJ1aS1jb2xvci10YWJsZS1iYXI6ICM3OTgxOGM7XG4gIC0tYnVpLWNvbG9yLW1lbnUtZGFyazogIzYxNjg3MTtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1tdXN0YXJkOiAjZmZkNDUwO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LXRleGFzOiAjZmZiNzRjO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LXRhbjogI2Y4YTM0ZDtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1zYWxtb246ICNmZjg4NjM7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtc2llbm5hOiAjZWU4MDVkO1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LWJpdHRlcnN3ZWV0OiAjZmY3Yjc2O1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LXBpbmtpZTogI2ZmNzhhNztcbiAgLS1idWktY29sb3Itc3VwcG9ydC1jaGFybTogI2Q0NWQ4YztcbiAgLS1idWktY29sb3Itc3VwcG9ydC1hbWV0aHlzdDogI2JjNzFjOTtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1oZWxpbzogI2EzODFmZjtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1saWxhYzogIzhmNzVkMTtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1tYWxpYnU6ICM3Y2FlZmY7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtaGF2ZWxvY2s6ICM2NWE3ZTA7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtcGljdG9uOiAjNGRjM2Y3O1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LW1pbnQ6ICM0YmQwZTE7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtZm91bnRhaW46ICM0ZWI2YzI7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtcHVlcnRvcmljbzogIzRmYmRiMjtcbiAgLS1idWktY29sb3Itc3VwcG9ydC1iYXk6ICM0ZGExOTc7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtZm9yZXN0OiAjNzNiMDc3O1xuICAtLWJ1aS1jb2xvci1zdXBwb3J0LXlvcms6ICM4MWM3ODU7XG4gIC0tYnVpLWNvbG9yLXN1cHBvcnQtZmVpam9hOiAjYWVkNTdmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyLCBCZWJhcyBOZXVlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI0QxRDJENjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcblxuICAvKiDRjdGC0L4g0LHRg9C00LXRgiDQv9C+0LrQsNC30LDQvdC+INC/0YDQuCDRgNCw0LfRgNC10YjQtdC90LjQuCDQvNC+0L3QuNGC0L7RgNCwINC00L4gOTMwINC/0LjQutGB0LXQu9C10LkgKi9cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qINC+0YHQvdC+0LLQvdC+0LUg0YHQvtC00LXRgNC20LjQvNC+0LUg0LfQsNC90LjQvNCw0LXRgiDQstGB0ZEg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC+INC+0LrQvdCwICovXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkgYW5kIChtaW4td2lkdGg6IDQ3MHB4KSB7XG5cbiAgLyog0LTQu9GPINGA0LDQt9GA0LXRiNC10L3QuNGPINGN0LrRgNCw0L3QsCDQvtGCIDQ3MCDQtNC+IDkzMCDQv9C40LrRgdC10LvQtdC5ICovXG4gIGFzaWRlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gIH1cblxuICAvKiDQsdC+0LrQvtCy0LDRjyDQutC+0LvQvtC90LrQsCDRgdC80LXRidCw0LXRgtGB0Y8g0YHQvtCz0LvQsNGB0L3QviDRgNCw0YHQv9C+0LvQvtC20LXQvdC40Y4g0LIgSFRNTCDQuCDQvNC10L3Rj9C10YIg0YTQvtC9ICovXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjlweCkge1xuXG4gIC8qINC10YHQu9C4INC80LDQutGB0LjQvNCw0LvRjNC90L7QtSDRgNCw0LfRgNC10YjQtdC90LjQtSDRjdC60YDQsNC90LAg0YHQvtGB0YLQsNCy0LjRgiA0Njkg0L/QuNC60YHQtdC70LXQuSAqL1xuICBib2R5IHtcbiAgICBmb250OiAuOWVtLzFlbSBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAvKiDQvNC10L3Rj9C10YLRgdGPINGI0YDQuNGE0YIgKi9cbiAgYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiDQsdC+0LrQvtCy0LDRjyDQutC+0LvQvtC90LrQsCDQuNGB0YfQtdC30LDQtdGCICovXG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG59XG5cblxuLyog0KHQu9Cw0LnQtNC10YDRiyAqL1xuXG5kaXYuc2xpZGUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvcjtcbiAgaGVpZ2h0OiA3MzhweDtcbn1cblxuXG4vKiDQntCx0YnQuNC1INGB0YLQuNC70LggKi9cblxuXG4vKiDQk9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC1INGA0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSAqL1xuXG5kaXYuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cblxuLyog0KbQtdC90YLRgCDQv9C+IFkgKi9cblxuZGl2Lmhvcml6b250YWwubWlkZGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5cbi8qINCm0LXQvdGC0YAg0L/QviBYICovXG5cbmRpdi5ob3Jpem9udGFsLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0KDQsNGB0YLRj9Cz0LjQstCw0L3QuNC1INC/0L4g0YbQtdC90YLRgNGDICovXG5cbmRpdi5ob3Jpem9udGFsLmFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0KDQsNGB0YLRj9Cz0LjQstCw0L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDRjdC70LXQvNC10L3RgtGDICovXG5cbmRpdi5ob3Jpem9udGFsLmJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuZGl2Lmhvcml6b250YWwudGV4dC1saW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0JLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7Qs9C+INCx0LvQvtC60LAg0LjQvNC10Y7RgiDQvtGC0YHRgtGD0L8g0LLQv9GA0LDQstC+ICovXG5cbmRpdi5ob3Jpem9udGFsPio6bm90KDpsYXN0LWNoaWxkKSxcbmRpdi5ob3Jpem9udGFsLXBhbmVsPio6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuZGl2Lmhvcml6b250YWw+Kjpvbmx5LWNoaWxkOm5vdCguZnJhbWUtYm94Pi5ob3Jpem9udGFsPiopIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuXG4vKiDQoNCw0YHQv9C+0LvQvtC20LXQvdC40LU6INC/0YDQuNC20LDRgiDQuiDQu9C10LLQvtC80YMg0LrRgNCw0Y4gKi9cblxuZGl2Lmhvcml6b250YWwudG8tbGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG5cbi8qINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtTog0L/RgNC40LbQsNGCINC6INC/0YDQsNCy0L7QvNGDINC60YDQsNGOICovXG5cbmRpdi5ob3Jpem9udGFsLnRvLXJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICpcblxuZGl2LnZlcnRpY2FsINC4INGB0L7RgdGC0LDQstC70Y/RjtGJ0LjQtVxuXG4qICogKiAqICogKiAqICogKiAqICovXG5cblxuLyog0JLQtdGA0YLQuNC60LDQu9GM0L3QvtC1INGA0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSAqL1xuXG5kaXYudmVydGljYWwsXG4udmVydGljYWwtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5cbi8qINCS0YHQtSDQtNC+0YfQtdGA0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0L/RgNC40L3QuNC80LDRjtGCINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtSDQv9C+INCy0LXRgNGC0LjQutCw0LvQuCwg0LAgZGlzcGxheSBmbGV4ICovXG5cbmRpdi52ZXJ0aWNhbD4qIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4vKiDQoNCw0YHQv9C+0LvQvtC20LXQvdC40LU6INC/0YDQuNC20LDRgiDQuiDQvdCw0YfQsNC70YMgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC70LXQstGL0Lkg0LLQtdGA0YXQvdC40Lkg0YPQs9C+0LspICovXG5cbmRpdi52ZXJ0aWNhbC5sZWZ0LXRvcCxcbi52ZXJ0aWNhbC1wYW5lbC5sZWZ0LXRvcCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG5cbi8qINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtTog0L/RgNC40LbQsNGCINC6INCy0LXRgNGF0YMgKi9cblxuZGl2LnZlcnRpY2FsLnRvcCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG5cbi8qINCg0LDRgdC/0L7Qu9C+0LbQtdC90LjQtTog0L/RgNC40LbQsNGCINC6INC90LjQt9GDICovXG5cbmRpdi52ZXJ0aWNhbC5ib3R0b20ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbmRpdi52ZXJ0aWNhbC50b3AtcmlnaHQsXG5kaXYudmVydGljYWwudG9wLXJpZ2h0Pioge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0JLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LrRgNC+0LzQtSDQv9C+0YHQu9C10LTQvdC10LPQviDQsiDQsdC70L7QutC1INC+0YLRgdGC0YPQvyDRgdC90LjQt9GDIDEzcHggKi9cblxuZGl2LnZlcnRpY2FsPio6bm90KDpsYXN0LWNoaWxkKSxcbmRpdi52ZXJ0aWNhbC1wYW5lbD4qOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdi52ZXJ0aWNhbC50by1ib3R0b20ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0KDQsNGB0L/QvtC70L7QttC10L3QuNC1OiDQv9C+INGG0LXQvdGC0YDRgyAqL1xuXG5kaXYuaG9yaXpvbnRhbC5jZW50ZXItYWxsLFxuZGl2LnZlcnRpY2FsLmNlbnRlci1hbGwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0KDQsNGB0YLRj9Cz0LjQstCw0LXRgiDQvdCwINCy0LXRgdGMINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiAqL1xuXG4udmVydGljYWwubGlzdC1mb3JtLFxuLmhvcml6b250YWwubGlzdC1mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiA9PSA9PSA9PSA9PSA9PSAqL1xuXG5cbi8qINCk0LjQs9GD0YDRiyDQuCDQutCw0YDRgtGLICovXG5cbmZpZ3VyZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmZpZ3VyZS5pbWFnZS0xMjgge1xuICB3aWR0aDogMTI4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMjhweCAhaW1wb3J0YW50O1xufVxuXG5cbi8qID09ID09ID09ID09ID09ICovXG5cblxuLyogaGVhZGVyICovXG5cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaGVhZGVyPm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbmZvb3RlcixcbmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMzcycHg7XG59XG5cblxuLyogZm9vdGVyICovXG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwQjBDMTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5mb290ZXI+Kjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICpcblxu0KLQtdC60YHRgtC+0LLRi9C1INC30L3QsNGH0LXQvdC40Y9cblxuKiAqICogKiAqICogKiAqICogKiAqL1xuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZmlyc3Qge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0QxRDJENjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xufVxuXG4udGV4dC1zZWNvbmQge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xufVxuXG4udGV4dC10aGlyZCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjhweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG59XG5cbi50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbn1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqXG5cbnRleHQtY29sb3JcblxuKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cbi8qINCR0LXQu9GL0Lkg0YLQtdC60YHRgiAqL1xuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNEMUQyRDY7XG59XG5cblxuLyog0JrRgNCw0YHQvdGL0Lkg0YLQtdC60YHRgiAqL1xuXG4udGV4dC1yZWQsXG4udGV4dC1ob3Zlci1yZWQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLS0pICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbn1cblxuXG4vKiDQl9C10LvQtdC90YvQuSDRgtC10LrRgdGCICovXG5cbi50ZXh0LWdyZWVuLFxuLnRleHQtaG92ZXItZ3JlZW46aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tLSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xufVxuXG4udGV4dC1ncmVlbjpob3Zlcjpub3QoLnRleHQtZ3JlZW4uc3RhdGljKSB7XG4gIGNvbG9yOiAjNDM3YjMzICFpbXBvcnRhbnQ7XG59XG5cblxuLyog0KHQuNC90LjQuSDRgtC10LrRgdGCICovXG5cbi50ZXh0LWJsdWUsXG4udGV4dC1ob3Zlci1ibHVlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtLSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xufVxuXG4udGV4dC1ibHVlOmhvdmVyOm5vdCgudGV4dC1ibHVlLnN0YXRpYykge1xuICBjb2xvcjogIzJGOTlDQSAhaW1wb3J0YW50O1xufVxuXG5cbi8qINCW0LXQu9GC0YvQuSDRgtC10LrRgdGCICovXG5cbi50ZXh0LXllbGxvdyxcbi50ZXh0LWhvdmVyLXllbGxvdzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctLSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbn1cblxuLnRleHQteWVsbG93OmhvdmVyOm5vdCgudGV4dC15ZWxsb3cuc3RhdGljKSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctLSk7XG59XG5cblxuLyog0KTQuNC+0LvQtdGC0L7QstGL0Lkg0YLQtdC60YHRgiAqL1xuXG4udGV4dC12aW9sZXQsXG4udGV4dC1ob3Zlci12aW9sZXQ6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdmlvbGV0LS0pO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG59XG5cbi50ZXh0LXZpb2xldDpob3Zlcjpub3QoLnRleHQtdmlvbGV0LnN0YXRpYykge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdmlvbGV0LS0pO1xufVxuXG5cbi8qINCi0LXQvNC90YvQuSDRgtC10LrRgdGCICovXG5cbi50ZXh0LWRhcmsge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1kYXJrZW4tLSk7XG59XG5cblxuLyogPT0gPT0gPT0gPT0gPT0gPT0gKi9cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqXG5cbtCh0YLQsNC90LTQsNGA0YLQvdGL0LUg0YLRjdCz0Lgg0Lgg0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC1XG5cbiogKiAqICogKiAqICogKiAqICogKi9cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYS5saW5rOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICpcblxuSWNvbiDQuCDRgdC+0YHRgtCw0LLQu9GP0Y7RidC40LVcblxuKiAqICogKiAqICogKiAqICogKiAqL1xuXG5kaXYuaWNvbi1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmRpdi5pY29uLXBhbmVsPi5pY29uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG59XG5cbmRpdi5pY29uLXBhbmVsPi5pY29uLmljb24tZXh0cmEtc21hbGwge1xuICB3aWR0aDogMjRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4vKmRpdi5pY29uLXBhbmVsLCBkaXYuaXRlbS1wYW5lbCB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0qL1xuXG4uaW52ZXJ0LWljb24ge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLmludmVydC1pY29uLXctb3Age1xuICBmaWx0ZXI6IGludmVydCgxKSBvcGFjaXR5KDM2JSk7XG59XG5cbi5pbnZlcnQtaWNvbi13LW9wOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmaWx0ZXI6IGludmVydCgxKSBvcGFjaXR5KDEwMCUpO1xufVxuXG5kaXYuZnJhbWUtYm94IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaXYuZnJhbWUtYm94Pio6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG5kaXYuZnJhbWUtYm94Pio6bnRoLWNoaWxkKG9kZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGluZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmxpbmUtcm93Pio6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xufVxuXG4ubGV2ZWwtcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMUIxQjI1O1xuICBtYXJnaW46IDA7XG59XG5cbmRpdi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDM3M3B4O1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjRDFEMkQ2O1xufVxuXG5kaXYubWFpbi1jb250YWluZXI+ZGl2Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYucm93LXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5kaXYuaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3BuZy9sb2dvLnBuZycpOyovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmRpdi5pbWFnZS02NCB7XG4gIG1heC13aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuXG4uc3RhdGljIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4udGlsZSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG5kaXYuZWxlbWVudC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjRDFEMkQ2O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbmRpdi5lbGVtZW50LXBhbmVsIGRpdi5lbGVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNEMUQyRDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVsZW1lbnQtcmVkOmhvdmVyLFxuLmVsZW1lbnQtcmVkLmFjdGl2ZSB7XG4gIGNvbG9yOiAjQUUxNDNFICFpbXBvcnRhbnQ7XG59XG5cbmltZy5pbWFnZS02NCB7XG4gIHdpZHRoOiA2NHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjRweCAhaW1wb3J0YW50O1xufVxuXG5kaXYuYnV0dG9uLWJvcmRlci1ib3gge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICMyNzI5Mzg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGNvbG9yOiAjRDFEMkQ2O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmxpbmUge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjMUIxQjI1O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yYWluYm93LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNBRTE0M0UgMCUsICM2QkI3NTUgMjUlLCAjRjZEMjY1IDUwJSwgIzQzQjRERSA3NSUsICM2MDQxQkEgMTAwJSk7XG59XG5cbi5saXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyIG1lZGl1bSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG5zbWFsbC5tZWRpdW0ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuc21hbGwubGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI4cHggIWltcG9ydGFudDtcbn1cblxuLmRhcmtlbiB7XG4gIGNvbG9yOiAjM0YzRjVCO1xufVxuXG4uaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmRpdi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmRpdi5zbGlkZXItYm94IHtcbiAgaGVpZ2h0OiA3MzhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuZGl2LnNsaWRlci1ib3g+ZGl2LmxhcmdlLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTE1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDExNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5sYXJnZS1jb250ZW50Pi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1tZWRpdW0ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRleHQtc21hbGwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRleHQtZXh0cmEtc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyIG1lZGl1bTtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5sYXJnZS1jb250ZW50Pi50aXRsZS5sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG59XG5cbi5jb2wtNTAge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLnJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pY29uLWxhcmdlIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLmljb24tbGFyZ2U6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnByZXNzZWQtZWxlbWVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFsbC1lbGVtZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMC41Njtcbn1cblxuLnNtYWxsLWVsZW1lbnQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNtYWxsLWVsZW1lbnQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMS4wO1xufVxuXG4uc2VydmluZy1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDI0N3B4IDBweCAwcHggOTI0cHggIWltcG9ydGFudDtcbn1cblxuLmluZGVudHM+Kjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5hOi13ZWJraXQtYW55LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMyQjJFM0Q7XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxLjApO1xufVxuXG4uY2FyZC5sYXJnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1NzZweDtcbiAgaGVpZ2h0OiAzNjhweDtcbn1cblxuLmNhcmQubWVkaXVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDIyMXB4O1xuICBoZWlnaHQ6IDMxM3B4O1xufVxuXG5pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaHIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tZmwge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLmNhcmQtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoM3B4KSBicmlnaHRuZXNzKDUwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQubGFyZ2U+LmNhcmQtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZC5tZWRpdW0+LmNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG59XG5cbi5jYXJkLm1lZGl1bT4uY2FyZC1jb250ZW50PmRpdiB7XG4gIHBhZGRpbmc6IDlweDtcbn1cblxuLmNhcmQubWVkaXVtPi5jYXJkLWNvbnRlbnQ+ZGl2Pi5tYXJrIHtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5cbi5jYXJkLm1lZGl1bT4uY2FyZC1jb250ZW50Pi50ZXh0LWRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQzLCA0NiwgNjEsIDAuNTYpIDAlLCByZ2JhKDQzLCA0NiwgNjEsIDApIDEwMCUpO1xuICBwYWRkaW5nOiA5cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXIgbWVkaXVtO1xufVxuXG4uY2FyZC5sYXJnZT4uY2FyZC1jb250ZW50Pi50ZXh0LWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI5MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRleHQtZGVzY3JpcHRpb24+LnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1kZXNjcmlwdGlvbj4uZGVzY3JpcHRpb24sXG4uc3VidGl0bGUge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5kaXYuc21hbGwtbGluZSB7XG4gIG1hcmdpbjogMjBweCAwcHggMTBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xufVxuXG4udGV4dC1kZXNjcmlwdGlvbj5kaXY6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGV4dC1kZXNjcmlwdGlvbj5kaXY+LmF2YXRhci1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMzNjM5NEU7XG59XG5cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWJveCB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDEuMCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNhcmQtYm94Pi5tYXJrIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxN3B4IDIxcHg7XG59XG5cbi5jYXJkLWJveD4ubWFyaz5kaXYge1xuICBtaW4td2lkdGg6IDU0cHg7XG4gIGhlaWdodDogMzFweDtcbiAgYmFja2dyb3VuZDogIzY4YjY1NTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC1ib3g+LmRlc2NyaXB0aW9uLFxuLmNhcmQtbGluZS1jb2wuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQzLCA0NiwgNjEsIDAuNTYpIDAlLCByZ2JhKDQzLCA0NiwgNjEsIDApIDEwMCUpO1xufVxuXG4ubGlzdC1mb3JtPi5kZXNjcmlwdGlvbixcbi5jYXJkLWxpbmUtY29sPi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmx1ci1ncmFkaWVudC0tKTtcbn1cblxuLmdyaWQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdyaWQtY29sdW1uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG59XG5cbi5ncmlkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ncmlkLXJvdz4uY2FyZC1ib3g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbn1cblxuLmNhcmQtbGluZS1jb2wsXG4uY2FyZC1saW5lLXJvdyB7XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAxLjApO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXJkLWxpbmUtY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDU3OHB4O1xufVxuXG4uY2FyZC1saW5lLWNvbC5kb3duLFxuLmNhcmQtYm94LmRvd24sXG4udmVydGljYWwtcGFuZWwuZG93biB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5ncmlkLWNvbHVtbj4uY2FyZC1saW5lLWNvbDpub3QoOmxhc3QtY2hpbGQpLFxuLmNhcmQtYm94Om5vdCg6bGFzdC1jaGlsZCksXG4uY2FyZC1saW5lLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cblxuLmNhcmQtbGluZS1yb3cge1xuICB3aWR0aDogNTc4cHg7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxpc3QtdGl0bGUge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5ciBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubGlzdC10aXRsZS5ib3JkZXItcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXJlZC0tKTtcbn1cblxuLm9yaWdpbi1jb250ZW50IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG59XG5cbi5vcmlnaW4tY29udGVudD5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmMtMj4qIHtcbiAgd2lkdGg6IDUwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamerShooterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shooter-page',
          templateUrl: './shooter-page.component.html',
          styleUrls: ['./shooter-page.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/gamer/pages/shooter-page/shooter-page.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/projects/gamer/pages/shooter-page/shooter-page.module.ts ***!
    \**************************************************************************/

  /*! exports provided: GamerShooterPageModule */

  /***/
  function srcAppProjectsGamerPagesShooterPageShooterPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamerShooterPageModule", function () {
      return GamerShooterPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shooter_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shooter-page-routing.module */
    "./src/app/projects/gamer/pages/shooter-page/shooter-page-routing.module.ts");
    /* harmony import */


    var _shooter_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shooter-page.component */
    "./src/app/projects/gamer/pages/shooter-page/shooter-page.component.ts");

    var GamerShooterPageModule = function GamerShooterPageModule() {
      _classCallCheck(this, GamerShooterPageModule);
    };

    GamerShooterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GamerShooterPageModule
    });
    GamerShooterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GamerShooterPageModule_Factory(t) {
        return new (t || GamerShooterPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shooter_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["GamerShooterPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamerShooterPageModule, {
        declarations: [_shooter_page_component__WEBPACK_IMPORTED_MODULE_3__["GamerShooterPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shooter_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["GamerShooterPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamerShooterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_shooter_page_component__WEBPACK_IMPORTED_MODULE_3__["GamerShooterPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shooter_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["GamerShooterPageRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-shooter-page-shooter-page-module-es5.js.map