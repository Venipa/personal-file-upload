(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_email_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/email-validator */ "./resources/assets/js/helpers/email-validator.js");
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @saeris/vue-spinners */ "./node_modules/@saeris/vue-spinners/lib/@saeris/vue-spinners.common.js");
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./resources/assets/js/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./resources/assets/js/helpers/index.js");
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
    loginForm: {
      email: null,
      password: null,
      remember: false
    },
    loading: false,
    error: null,
    success: null
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'app-spinner': _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__["PulseLoader"]
  },
  computed: {
    emailState: function emailState() {
      var email = this.loginForm.email;

      if (!email) {
        return true;
      }

      return email.length > 3 && _helpers_email_validator__WEBPACK_IMPORTED_MODULE_0__["emailRegex"].test(email);
    },
    passwordState: function passwordState() {
      var password = this.loginForm.password;

      if (!password) {
        return true;
      }

      return password.length > 3;
    }
  },
  data: function data() {
    return defaultData();
  },
  methods: {
    setSuccess: function setSuccess(str) {
      this.success = str;
      this.error = null;
    },
    setError: function setError(str) {
      this.success = null;
      this.error = str;
    },
    login: function login(ev) {
      var _this = this;

      var loginForm = this.loginForm;
      this.loading = true;
      _api__WEBPACK_IMPORTED_MODULE_2__["user"].login(loginForm.email, loginForm.password, loginForm.remember).then(function (x) {
        console.log('logged in', x.data);

        _this.setSuccess("Successfully logged in, redirecting...");

        setTimeout(function () {
          var _x$data;

          if ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.to) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["openLink"])(x.data.to);
          }
        }, 1000);
      })["catch"](function (_ref) {
        var error = _ref.error,
            data = _ref.data;
        console.log(error, data);

        if ((data === null || data === void 0 ? void 0 : data.errors) != null) {
          var d = data.errors;

          _this.setError(d[Object.keys(d)[0]][0]);
        } else {
          _this.setError("".concat(error.response.status, ": ").concat(error.response.statusText));
        }

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav[data-v-bc0427d8] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  align-self: stretch;\n}\n@media (max-width: 920px) {\n.sidenav[data-v-bc0427d8] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n}\n.sidenav .sidenav-side[data-v-bc0427d8] {\n  height: inherit;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  z-index: 0;\n  width: 400px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #000;\n}\n@media (max-width: 920px) {\n.sidenav .sidenav-side[data-v-bc0427d8] {\n    width: 100%;\n    height: 180px;\n}\n}\n.sidenav .sidenav-side-content[data-v-bc0427d8] {\n  z-index: 1;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: inherit;\n}\n.sidenav .sidenav-side > .sidenav-bg[data-v-bc0427d8] {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url(" + escape(__webpack_require__(/*! ../../../images/side.jpg */ "./resources/assets/images/side.jpg")) + ");\n  background-size: cover;\n  background-position: top center;\n  opacity: 0.45;\n}\n@media (max-width: 920px) {\n.sidenav .sidenav-side > .sidenav-bg[data-v-bc0427d8] {\n    background-position: center -130px;\n}\n}\n.sidenav-content[data-v-bc0427d8] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: inherit;\n  background-color: #eee;\n}\n@media (max-width: 920px) {\n.sidenav-content[data-v-bc0427d8] {\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    width: 100%;\n    padding: 24px 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-flex flex-fill sidenav" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex flex-fill sidenav-content" }, [
      _c("div", { staticClass: "container my-2" }, [
        _vm.success
          ? _c("div", { staticClass: "mb-2" }, [
              _c("div", { staticClass: "card alert alert-success" }, [
                _vm._v(_vm._s(_vm.success))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.error
          ? _c("div", { staticClass: "mb-2" }, [
              _c("div", { staticClass: "card alert alert-danger" }, [
                _vm._v(_vm._s(_vm.error))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                staticClass: "login-form",
                attrs: { method: "post", action: "#", autocomplete: "on" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "em-1",
                      label: "Email",
                      "label-for": "input-1",
                      "invalid-feedback": _vm.emailState ? "" : "Invalid Email",
                      "valid-feedback": "",
                      state: _vm.emailState
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-1",
                        state: _vm.emailState,
                        type: "email",
                        autocomplete: "email",
                        trim: ""
                      },
                      model: {
                        value: _vm.loginForm.email,
                        callback: function($$v) {
                          _vm.$set(_vm.loginForm, "email", $$v)
                        },
                        expression: "loginForm.email"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "pw-1",
                      label: "Password",
                      "label-for": "input-2",
                      "invalid-feedback": _vm.passwordState
                        ? ""
                        : "Invalid Password",
                      "valid-feedback": "",
                      state: _vm.passwordState
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "input-2",
                        state: _vm.passwordState,
                        type: "password",
                        autocomplete: "password",
                        trim: ""
                      },
                      model: {
                        value: _vm.loginForm.password,
                        callback: function($$v) {
                          _vm.$set(_vm.loginForm, "password", $$v)
                        },
                        expression: "loginForm.password"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  [
                    _c(
                      "b-form-checkbox",
                      {
                        attrs: {
                          id: "checkbox-1",
                          value: true,
                          "unchecked-value": false
                        },
                        model: {
                          value: _vm.loginForm.remember,
                          callback: function($$v) {
                            _vm.$set(_vm.loginForm, "remember", $$v)
                          },
                          expression: "loginForm.remember"
                        }
                      },
                      [_vm._v("Remember Me")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { staticClass: "mb-0" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-center",
                        attrs: {
                          variant: "primary",
                          type: "submit",
                          disabled:
                            _vm.loading || !_vm.passwordState || !_vm.emailState
                        }
                      },
                      [
                        _c("span", [_vm._v("Sign in")]),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("app-spinner", {
                              staticClass: "ml-2",
                              attrs: {
                                size: 8,
                                sizeUnit: "px",
                                color: "#ffffff"
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
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
    return _c("div", { staticClass: "d-flex sidenav-side" }, [
      _c("div", { staticClass: "sidenav-bg" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidenav-side-content" }, [
        _c("h3", [_vm._v("Login")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/side.jpg":
/*!******************************************!*\
  !*** ./resources/assets/images/side.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/side.jpg?8f705abd12fa794623dcd95c4102f3fc";

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
  currentUser: function currentUser() {
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].get('user').then(function (x) {
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
  generateNew: function generateNew() {
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].post('user/gen-secret').then(function (x) {
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
  statistics: function statistics() {
    return new Promise(function (resolve, reject) {
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].get('user/statistics').then(function (x) {
        return resolve(x);
      }, function (err) {
        var _err$response4;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response4 = err.response) === null || _err$response4 === void 0 ? void 0 : _err$response4.data
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
        var _err$response5;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response5 = err.response) === null || _err$response5 === void 0 ? void 0 : _err$response5.data
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
        var _err$response6;

        return reject({
          error: err,
          data: err === null || err === void 0 ? void 0 : (_err$response6 = err.response) === null || _err$response6 === void 0 ? void 0 : _err$response6.data
        });
      });
    });
  }
};

/***/ }),

/***/ "./resources/assets/js/components/Auth/LoginComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Auth/LoginComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true& */ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& */ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bc0427d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Auth/LoginComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=style&index=0&id=bc0427d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_style_index_0_id_bc0427d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Auth/LoginComponent.vue?vue&type=template&id=bc0427d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_bc0427d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/*! exports provided: openLink, emailRegex, ErrorBag */
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