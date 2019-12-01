(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./resources/assets/js/app.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./resources/assets/js/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./resources/assets/js/helpers/index.js");
/* harmony import */ var epic_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! epic-spinners */ "./node_modules/epic-spinners/src/lib.js");
/* harmony import */ var vue_material_design_icons_Download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Download */ "./node_modules/vue-material-design-icons/Download.vue");
/* harmony import */ var vue_material_design_icons_Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Upload */ "./node_modules/vue-material-design-icons/Upload.vue");
/* harmony import */ var vue_material_design_icons_EyePlus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/EyePlus */ "./node_modules/vue-material-design-icons/EyePlus.vue");
/* harmony import */ var vue_material_design_icons_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Link */ "./node_modules/vue-material-design-icons/Link.vue");
/* harmony import */ var vue_material_design_icons_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Image */ "./node_modules/vue-material-design-icons/Image.vue");
/* harmony import */ var vue_material_design_icons_Video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Video */ "./node_modules/vue-material-design-icons/Video.vue");
/* harmony import */ var vue_material_design_icons_Music__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Music */ "./node_modules/vue-material-design-icons/Music.vue");
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












var defaultData = function defaultData() {
  return {
    stats: null,
    isLoading: true,
    log: {
      error: null,
      success: null
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "atom-spinner": epic_spinners__WEBPACK_IMPORTED_MODULE_3__["AtomSpinner"],
    DownloadIcon: vue_material_design_icons_Download__WEBPACK_IMPORTED_MODULE_4__["default"],
    UploadIcon: vue_material_design_icons_Upload__WEBPACK_IMPORTED_MODULE_5__["default"],
    ViewIcon: vue_material_design_icons_EyePlus__WEBPACK_IMPORTED_MODULE_6__["default"],
    LinkIcon: vue_material_design_icons_Link__WEBPACK_IMPORTED_MODULE_7__["default"],
    ImageIcon: vue_material_design_icons_Image__WEBPACK_IMPORTED_MODULE_8__["default"],
    VideoIcon: vue_material_design_icons_Video__WEBPACK_IMPORTED_MODULE_9__["default"],
    AudioIcon: vue_material_design_icons_Music__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return defaultData();
  },
  computed: {
    appName: function appName() {
      return window.appName;
    }
  },
  methods: {
    setSuccess: function setSuccess(str) {
      this.log.error = null;
      this.log.success = str;
    },
    setError: function setError(str) {
      this.log.success = null;
      this.log.error = str;
    }
  },
  mounted: function mounted() {
    var _this = this;

    _api__WEBPACK_IMPORTED_MODULE_1__["user"].statistics().then(function (x) {
      _this.isLoading = false;
      _this.stats = x.data.statistics;
    }, function (_ref) {
      var error = _ref.error,
          data = _ref.data;

      if (data === null || data === void 0 ? void 0 : data.errors) {
        _this.setError(_helpers__WEBPACK_IMPORTED_MODULE_2__["ErrorBag"].getFirstError(data.errors));
      } else {
        _this.setError(_helpers__WEBPACK_IMPORTED_MODULE_2__["ErrorBag"].getResponseErrorString(error));
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr.fill-card[data-v-20e4c40a] {\n  margin: 4px -8px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dashboard my-4" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row mb-3" }, [
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
            _c("h4", { staticClass: "ml-2" }, [_vm._v(_vm._s(_vm.appName))])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-between" }, [
        _c("div", { staticClass: "col-md mb-2" }, [
          _c("div", { staticClass: "card" }, [
            _vm.isLoading
              ? _c(
                  "div",
                  { staticClass: "card-body d-flex justify-content-center" },
                  [
                    _c("atom-spinner", {
                      attrs: {
                        "animation-duration": 1000,
                        size: 60,
                        color: "#7289da"
                      }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "card-body d-flex justify-content-start align-items-center"
                  },
                  [
                    _c("view-icon", {
                      staticStyle: { width: "32px", height: "32px" },
                      attrs: { size: 32 }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-fill" }),
                    _vm._v(" "),
                    _vm._m(0)
                  ],
                  1
                )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md mb-2" }, [
          _c(
            "a",
            {
              staticClass: "text-decoration-none text-default",
              attrs: { href: "/files" }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-badge card-badge-xl bg-primary text-white"
                  },
                  [
                    _c("link-icon", {
                      staticStyle: { width: "22px", height: "22px" },
                      attrs: { size: 22 }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.isLoading
                  ? _c(
                      "div",
                      {
                        staticClass: "card-body d-flex justify-content-center"
                      },
                      [
                        _c("atom-spinner", {
                          attrs: {
                            "animation-duration": 1000,
                            size: 60,
                            color: "#7289da"
                          }
                        })
                      ],
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass:
                          "card-body d-flex justify-content-start align-items-center"
                      },
                      [
                        _c("upload-icon", {
                          staticStyle: { width: "32px", height: "32px" },
                          attrs: { size: 32 }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-fill" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column justify-content-center align-items-end"
                          },
                          [
                            _c("h4", { staticClass: "my-0" }, [
                              _vm._v(
                                _vm._s((_vm.stats && _vm.stats.uploads) || 0)
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "my-0 text-muted text-small" },
                              [_vm._v("Uploads")]
                            )
                          ]
                        )
                      ],
                      1
                    )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md mb-2" }, [
          _c("div", { staticClass: "card" }, [
            _vm.isLoading
              ? _c(
                  "div",
                  { staticClass: "card-body d-flex justify-content-center" },
                  [
                    _c("atom-spinner", {
                      attrs: {
                        "animation-duration": 1000,
                        size: 60,
                        color: "#7289da"
                      }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  {
                    staticClass:
                      "card-body d-flex justify-content-start align-items-center"
                  },
                  [
                    _c("link-icon", {
                      staticStyle: { width: "32px", height: "32px" },
                      attrs: { size: 32 }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-fill" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex flex-column justify-content-center align-items-end"
                      },
                      [
                        _c("h4", { staticClass: "my-0" }, [
                          _vm._v(_vm._s((_vm.stats && _vm.stats.links) || 0))
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "my-0 text-muted text-small" },
                          [_vm._v("Links")]
                        )
                      ]
                    )
                  ],
                  1
                )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-3" }, [
        _c("div", { staticClass: "col d-flex" }, [
          _c("div", { staticClass: "card flex-fill d-flex flex-column" }, [
            _vm.isLoading
              ? _c(
                  "div",
                  {
                    staticClass:
                      "card-body d-flex flex-fill justify-content-center"
                  },
                  [
                    _c("atom-spinner", {
                      attrs: {
                        "animation-duration": 1000,
                        size: 60,
                        color: "#7289da"
                      }
                    })
                  ],
                  1
                )
              : _c("div", { staticClass: "card-body d-flex flex-column" }, [
                  _c("h6", [_vm._v("Filetype Statistics")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex flex-row justify-content-start align-items-center"
                    },
                    [
                      _c("image-icon", {
                        staticClass: "flex-fill",
                        staticStyle: { width: "32px", height: "32px" },
                        attrs: { size: 32 }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-center align-items-end"
                        },
                        [
                          _c("h4", { staticClass: "my-0" }, [
                            _vm._v(_vm._s(_vm.stats.uploadedTypes.image || 0))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "my-0 text-muted text-small" },
                            [_vm._v("Images")]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "fill-card" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex flex-row justify-content-start align-items-center"
                    },
                    [
                      _c("video-icon", {
                        staticClass: "flex-fill",
                        staticStyle: { width: "32px", height: "32px" },
                        attrs: { size: 32 }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-center align-items-end"
                        },
                        [
                          _c("h4", { staticClass: "my-0" }, [
                            _vm._v(_vm._s(_vm.stats.uploadedTypes.video || 0))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "my-0 text-muted text-small" },
                            [_vm._v("Video")]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr", { staticClass: "fill-card" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex flex-row justify-content-start align-items-center"
                    },
                    [
                      _c("audio-icon", {
                        staticClass: "flex-fill",
                        staticStyle: { width: "32px", height: "32px" },
                        attrs: { size: 32 }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-column justify-content-center align-items-end"
                        },
                        [
                          _c("h4", { staticClass: "my-0" }, [
                            _vm._v(_vm._s(_vm.stats.uploadedTypes.audio || 0))
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "my-0 text-muted text-small" },
                            [_vm._v("Audio")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "d-flex flex-column justify-content-center align-items-end"
      },
      [
        _c("h4", { staticClass: "my-0" }, [_vm._v("-")]),
        _vm._v(" "),
        _c("span", { staticClass: "my-0 text-muted text-small" }, [
          _vm._v("Views")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/api/index.js":
/*!******************************************!*\
  !*** ./resources/assets/js/api/index.js ***!
  \******************************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/assets/js/api/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["user"]; });



/***/ }),

/***/ "./resources/assets/js/api/user.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/api/user.js ***!
  \*****************************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/assets/js/app.js");

var user = {
  /**
   *
   * @param {string} username
   * @param {string} password
   */
  login: function login(username, password) {
    var remember = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].post('auth/login', {
        email: username,
        password: password,
        remember: remember
      }).then(function (x) {
        return resolve(x);
      }, function (err, x) {
        var _err$response;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data
        });
      });
    });
  },
  statistics: function statistics() {
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].get('user/statistics').then(function (x) {
        return resolve(x);
      }, function (err) {
        var _err$response2;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data
        });
      });
    });
  },
  deleteFile: function deleteFile(token) {
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].post('user/file/delete', {
        token: token
      }).then(function (x) {
        return resolve(x);
      }, function (err) {
        var _err$response3;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response3 = err.response) === null || _err$response3 === void 0 ? void 0 : _err$response3.data
        });
      });
    });
  },
  uploadFile: function uploadFile(file) {
    var fd = new FormData();
    fd.append('file', file);
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].post('upload', fd).then(function (x) {
        return resolve(x);
      }, function (err) {
        var _err$response4;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : _err$response4.data
        });
      });
    });
  }
};

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/DashboardComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/DashboardComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true& */ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true&");
/* harmony import */ var _DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& */ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20e4c40a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Dashboard/DashboardComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=style&index=0&id=20e4c40a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_style_index_0_id_20e4c40a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dashboard/DashboardComponent.vue?vue&type=template&id=20e4c40a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardComponent_vue_vue_type_template_id_20e4c40a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/helpers/dom-helper.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/helpers/dom-helper.js ***!
  \***************************************************/
/*! exports provided: openLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLink", function() { return openLink; });
var openLink = function openLink(href) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    download: null,
    target: null
  };
  var a = document.createElement('a');
  a.style = "width: 0; height: 0; opacity: 0; visibility: hidden;";
  a.href = href;

  if (options.target) {
    a.target = options.target;
  }

  if (options.download) {
    a.setAttribute('download', options.download);
    a.removeAttribute('target');
  }

  console.log(a);
  a.click();
  a.remove();
};

/***/ }),

/***/ "./resources/assets/js/helpers/email-validator.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/helpers/email-validator.js ***!
  \********************************************************/
/*! exports provided: emailRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRegex", function() { return emailRegex; });
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

/***/ }),

/***/ "./resources/assets/js/helpers/error-helper.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/helpers/error-helper.js ***!
  \*****************************************************/
/*! exports provided: ErrorBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return ErrorBag; });
var ErrorBag = {
  getFirstError: function getFirstError(data) {
    return data[Object.keys(data)[0]][0];
  },
  getResponseErrorString: function getResponseErrorString(err) {
    var _err$response, _err$response2;

    return "".concat((err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status) || '403', ": ").concat((err === null || err === void 0 ? void 0 : (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.statusText) || 'Something went wrong');
  }
};

/***/ }),

/***/ "./resources/assets/js/helpers/index.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/helpers/index.js ***!
  \**********************************************/
/*! exports provided: emailRegex, openLink, ErrorBag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper */ "./resources/assets/js/helpers/dom-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLink", function() { return _dom_helper__WEBPACK_IMPORTED_MODULE_0__["openLink"]; });

/* harmony import */ var _email_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-validator */ "./resources/assets/js/helpers/email-validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emailRegex", function() { return _email_validator__WEBPACK_IMPORTED_MODULE_1__["emailRegex"]; });

/* harmony import */ var _error_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-helper */ "./resources/assets/js/helpers/error-helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBag", function() { return _error_helper__WEBPACK_IMPORTED_MODULE_2__["ErrorBag"]; });





/***/ })

}]);