(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_material_design_icons_DotsVertical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/DotsVertical */ "./node_modules/vue-material-design-icons/DotsVertical.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MenuIcon: vue_material_design_icons_DotsVertical__WEBPACK_IMPORTED_MODULE_0__["default"],
    "header-upload": function headerUpload() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../Dialogs/UploadDialogComponent */ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue"));
    }
  },
  computed: {
    appName: function appName() {
      return window.appName;
    }
  },
  methods: {
    showDialog: function showDialog() {
      var _this$$refs$upload;

      (_this$$refs$upload = this.$refs.upload) === null || _this$$refs$upload === void 0 ? void 0 : _this$$refs$upload.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        {
          staticClass:
            "col d-flex flex-row justify-content-start align-items-center"
        },
        [
          _c("img", {
            attrs: { height: "64", src: "/images/logo.svg", alt: "Logo" }
          }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "text-dark text-decoration-none",
              attrs: { href: "/dashboard/" }
            },
            [_c("h4", { staticClass: "ml-2" }, [_vm._v(_vm._s(_vm.appName))])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex-grow-1" }),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: {
                variant: "link",
                "toggle-class": "btn-icon text-dark",
                "no-caret": "",
                right: ""
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [_c("menu-icon", { attrs: { size: 20 } })]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", { on: { click: _vm.showDialog } }, [
                _vm._v("Upload")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "/account" } }, [
                _vm._v("Account")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "/files" } }, [
                _vm._v("My Files")
              ]),
              _vm._v(" "),
              _c(
                "b-dropdown-item",
                { attrs: { href: "/logout", variant: "danger" } },
                [_vm._v("Logout")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("header-upload", { ref: "upload" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/Dashboard/HeaderComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/HeaderComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=template&id=b1e9eaa4& */ "./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4&");
/* harmony import */ var _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Dashboard/HeaderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=template&id=b1e9eaa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/HeaderComponent.vue?vue&type=template&id=b1e9eaa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_b1e9eaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);