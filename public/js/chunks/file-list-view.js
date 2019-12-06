(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-list-view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-filepond */ "./node_modules/vue-filepond/dist/vue-filepond.js");
/* harmony import */ var vue_filepond__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_filepond__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @saeris/vue-spinners */ "./node_modules/@saeris/vue-spinners/lib/@saeris/vue-spinners.common.js");
/* harmony import */ var _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./resources/assets/js/app.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./resources/assets/js/api/index.js");
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




var FilePond = vue_filepond__WEBPACK_IMPORTED_MODULE_0___default()();

var defaultOptions = function defaultOptions() {
  return {
    dropzoneOptions: {
      url: window.location.origin + "/api/v1/upload",
      headers: _app__WEBPACK_IMPORTED_MODULE_2__["axios"].defaults.headers,
      method: "post",
      thumbnailWidth: 150,
      maxFilesize: 150,
      createImageThumbnails: false,
      maxFiles: 20,
      autoProcessQueue: false,
      parallelUploads: 1,
      addRemoveLinks: true
    },
    pond: {
      files: [],
      options: {
        instantUpload: false
      }
    },
    isLoading: false
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-spinner": _saeris_vue_spinners__WEBPACK_IMPORTED_MODULE_1__["PulseLoader"],
    "file-drop": FilePond
  },
  data: function data() {
    return defaultOptions();
  },
  created: function created() {},
  methods: {
    open: function open() {
      this.$refs["showUpload"].show();
    },
    close: function close() {
      this.$refs["showUpload"].hide();
    },
    onUpload: function onUpload(ev) {
      var drop = this.$refs.uploadDrop;
      var files = drop.getFiles().filter(function (x) {
        return [2].includes(x.status);
      });

      if (!(files === null || files === void 0 ? void 0 : files.length)) {
        drop.browse();
        return;
      }

      this.isLoading = true;
      drop.processFiles();
    },
    handleFilePondInit: function handleFilePondInit(ev) {
      console.log(ev);
    },
    onReloadAll: function onReloadAll() {
      if (this.$refs.uploadDrop.getFiles().filter(function (x) {
        return [5].includes(x.status);
      }).length > 0) {
        this.$emit("on-upload-complete", this.$refs.uploadDrop);
      }
    },
    onFileComplete: function onFileComplete() {
      if (this.$refs.uploadDrop.getFiles().filter(function (x) {
        return [2, 3, 9, 7].includes(x.status);
      }).length === 0) {
        this.isLoading = false;
      }
    },
    onComplete: function onComplete() {
      this.isLoading = false;
      this.$emit("on-upload-complete", this.$refs["uploadDrop"]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/assets/js/app.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./resources/assets/js/helpers/index.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.min.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_material_design_icons_DotsVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/DotsVertical */ "./node_modules/vue-material-design-icons/DotsVertical.vue");
/* harmony import */ var epic_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! epic-spinners */ "./node_modules/epic-spinners/src/lib.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./resources/assets/js/api/index.js");
/* harmony import */ var _Dialogs_UploadDialogComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialogs/UploadDialogComponent.vue */ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//









var defaultData = function defaultData() {
  return {
    files: null,
    user: null,
    sizeUsed: null,
    sizeMax: null,
    maxUploadSize: null,
    selectedFile: null,
    isLoading: true,
    prevPage: null,
    message: null
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "atom-spinner": epic_spinners__WEBPACK_IMPORTED_MODULE_4__["AtomSpinner"],
    UploadDialogComponent: _Dialogs_UploadDialogComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    VertMoreIcon: vue_material_design_icons_DotsVertical__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return defaultData();
  },
  computed: {
    appName: function appName() {
      return window.appName;
    },
    humanStorageStat: function humanStorageStat() {
      return "".concat(filesize__WEBPACK_IMPORTED_MODULE_2___default()(this.sizeUsed), " / ").concat(filesize__WEBPACK_IMPORTED_MODULE_2___default()(this.sizeMax));
    },
    showFileTitle: function showFileTitle() {
      var _this$selectedFile;

      return (_this$selectedFile = this.selectedFile) === null || _this$selectedFile === void 0 ? void 0 : _this$selectedFile.title;
    }
  },
  methods: {
    openUploadDialog: function openUploadDialog() {
      this.$refs["uploadDialog"].open();
    },
    setSuccess: function setSuccess(str) {
      this.message = {
        content: str,
        type: "success"
      };
    },
    setError: function setError(str) {
      this.message = {
        content: str,
        type: "danger"
      };
    },

    /**
     * @param {string} path
     */
    route: function route(path) {
      return "".concat(this.$root.$el.ownerDocument.location.origin, "/").concat(path.indexOf("/") === 0 ? path.substring(1) : path);
    },
    copyLink: function copyLink(item) {
      this.$clipboard(this.route("/f/".concat(item.share_token)));
    },
    download: function download(item) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["openLink"])(this.route("/i/".concat(item.share_token)), {
        target: "_self"
      });
    },
    reloadFileList: function reloadFileList() {
      this._onPageChange(this.prevPage);
    },
    deletePrecheck: function deletePrecheck(item) {
      return this.$bvModal.msgBoxConfirm("Deleting ".concat(item.filename), {
        title: "Are you sure?",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "YES",
        cancelTitle: "NO",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      });
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      this.deletePrecheck(item).then(function (isFine) {
        if (isFine) {
          _this.isLoading = true;
          _api__WEBPACK_IMPORTED_MODULE_5__["user"].deleteFile(item.share_token).then(function (x) {
            var _x$data;

            if ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.message) {
              var _x$data2;

              _this.setSuccess((_x$data2 = x.data) === null || _x$data2 === void 0 ? void 0 : _x$data2.message);

              _this._onPageChange(_this.prevPage || 1).then(function (x) {
                _this.isLoading = false;
              });
            }
          })["catch"](function (_ref) {
            var error = _ref.error,
                data = _ref.data;

            if (data === null || data === void 0 ? void 0 : data.errors) {
              _this.setError(_helpers__WEBPACK_IMPORTED_MODULE_1__["ErrorBag"].getFirstError(data.errors));
            } else {
              _this.setError(_helpers__WEBPACK_IMPORTED_MODULE_1__["ErrorBag"].getResponseErrorString(error));
            }

            _this.isLoading = false;
          });
        }
      });
    },
    closeShowFile: function closeShowFile() {
      this.$refs["showFile"].hide();
    },
    humanStorageParse: function humanStorageParse(str) {
      return filesize__WEBPACK_IMPORTED_MODULE_2___default()(str);
    },
    openShowFile: function openShowFile(file) {
      this.selectedFile = _objectSpread({}, file, {
        url: /^(video|audio)/.test(file.filemime) ? "/embed/".concat(file.share_token) : null
      });

      if (!this.selectedFile.url) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["openLink"])("/f/".concat(file.share_token), {
          target: "_blank"
        });
      }

      this.$refs["showFile"].title = "Viewing: ".concat(file.filename);
      this.$refs["showFile"].show();
    },
    onShowFileClose: function onShowFileClose() {
      this.$refs["showFile"].title = null;
      this.selectedFile = null;
    },
    onPageChange: function onPageChange() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.prevPage === page) {
        return;
      } else if (this.prevPage !== null) {
        var mUrl = new url_parse__WEBPACK_IMPORTED_MODULE_7___default.a(window.location.href, true);
        mUrl.query.page = page;
        history.pushState(null, window.document.title, mUrl.toString());
      }

      this.prevPage = page;
      return this._onPageChange(page);
    },
    _onPageChange: function _onPageChange() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      return _app__WEBPACK_IMPORTED_MODULE_0__["axios"].get("/user/files?page=".concat(page)).then(function (x) {
        return x.data;
      }).then(function (x) {
        if (x) {
          Object.assign(_this2.$data, x);
        }

        _this2.isLoading = false;
      })["catch"](function (err) {
        _this2.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    var startPage = new url_parse__WEBPACK_IMPORTED_MODULE_7___default.a(window.location.href, true).query.page;
    this.onPageChange(startPage && startPage > 0 ? startPage : 1);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drop-wrapper .filepond--file .filepond--action-process-item.filepond--file-action-button {\n  display: none;\n}\n.drop-wrapper .filepond--root {\n  margin-bottom: 0;\n}\n.drop-wrapper .filepond--item {\n  margin: 0 -12px;\n}\n.drop-wrapper .filepond--wrapper {\n  margin: -16px;\n}\n.drop-wrapper .filepond--panel-top,\n.drop-wrapper .filepond--panel-bottom {\n  border-radius: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-row {\n  padding: 0 1.25em;\n  line-height: 40px;\n  height: 40px;\n  vertical-align: middle;\n}\n.item-row:hover {\n  background-color: #f4f4f4;\n}\n.item-row .btn-showFile {\n  cursor: pointer;\n}\n.item-row .open-item-direct {\n  white-space: pre;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  width: 300px;\n  display: block;\n  overflow: hidden;\n}\n@media (max-width: 768) {\n.item-row .open-item-direct {\n    width: 100px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListFilesComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      ref: "showUpload",
      attrs: {
        centered: "",
        title: "Upload",
        size: "xl",
        "no-close-on-esc": _vm.isLoading,
        "no-close-on-backdrop": _vm.isLoading
      },
      on: { hide: _vm.onReloadAll },
      scopedSlots: _vm._u([
        {
          key: "modal-footer",
          fn: function() {
            return [
              _c(
                "div",
                { staticClass: "d-flex flex-column" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "d-flex flex-row",
                      attrs: { variant: "dark", disabled: _vm.isLoading },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onUpload($event)
                        }
                      }
                    },
                    [
                      _c("span", [_vm._v("Upload")]),
                      _vm._v(" "),
                      _vm.isLoading
                        ? _c("app-spinner", {
                            staticClass: "ml-2",
                            attrs: { size: 8, sizeUnit: "px", color: "#ffffff" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex flex-column drop-wrapper" },
        [
          _c("file-drop", {
            ref: "uploadDrop",
            attrs: {
              name: "file",
              "label-idle": "Drop files here...",
              "allow-multiple": "true",
              server: "/api/v1/upload",
              instantUpload: false,
              method: "post",
              "max-files": 25,
              allowRevert: false,
              files: _vm.pond.files
            },
            on: {
              processfile: _vm.onFileComplete,
              init: _vm.handleFilePondInit
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "list-file-wrapper" },
    [
      _c("div", { staticClass: "container d-flex flex-column my-3" }, [
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
              _c(
                "a",
                {
                  staticClass: "text-dark text-decoration-none",
                  attrs: { href: "/dashboard/" }
                },
                [
                  _c("h4", { staticClass: "ml-2" }, [
                    _vm._v(_vm._s(_vm.appName))
                  ])
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm.message
          ? _c("div", { staticClass: "row mb-3" }, [
              _c("div", { staticClass: "col d-flex flex-column" }, [
                _c("div", { class: "card alert alert-" + _vm.message.type }, [
                  _vm._v(_vm._s(_vm.message.content))
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.files
          ? _c("div", { staticClass: "d-flex flex-column table table-sm" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-header d-flex flex-row justify-content-start align-items-center"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sl mr-3",
                        on: { click: _vm.openUploadDialog }
                      },
                      [_vm._v("Upload")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-fill" }, [_vm._v("Files")]),
                    _vm._v(" "),
                    _vm.sizeUsed && _vm.sizeMax && _vm.maxUploadSize
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-row justify-content-start align-items-center"
                          },
                          [
                            _vm.maxUploadSize != -1
                              ? _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "badge badge-success mr-2",
                                    attrs: { title: "Max Filesize" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.humanStorageParse(_vm.maxUploadSize)
                                      )
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sizeMax != -1
                              ? _c(
                                  "b-progress",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticStyle: {
                                      width: "100px",
                                      height: "1.5em"
                                    },
                                    attrs: {
                                      max: _vm.sizeMax,
                                      "show-progress": "",
                                      animated: "",
                                      title: _vm.humanStorageStat
                                    }
                                  },
                                  [
                                    _c(
                                      "b-progress-bar",
                                      { attrs: { value: _vm.sizeUsed } },
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            _vm._s(
                                              (
                                                (_vm.sizeUsed / _vm.sizeMax) *
                                                100
                                              ).toFixed(2)
                                            ) + "%"
                                          )
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _c("span", { staticClass: "badge" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.humanStorageParse(_vm.sizeUsed)
                                    ) + " / Unlimited"
                                  )
                                ])
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body py-1 mb-1 px-0 position-relative" },
                  [
                    _vm.isLoading
                      ? _c(
                          "div",
                          { staticClass: "fill-spinner" },
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
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.files.data, function(item) {
                      return _c(
                        "div",
                        {
                          key: item.id,
                          staticClass:
                            "item-row d-flex flex-row justify-content-start align-items-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "mr-3 text-right",
                              staticStyle: { width: "50px" }
                            },
                            [_vm._v(_vm._s(item.id))]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-fill mr-2" }, [
                            _c("div", { staticClass: "open-item-direct" }, [
                              _vm._v(_vm._s(item.filename))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mr-3 badge text-right",
                              staticStyle: { flex: "0 0 100px" }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.humanStorageParse(item.filesize))
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mr-1 btn-showFile",
                              staticStyle: { flex: "0 0 100px" },
                              on: {
                                click: function($event) {
                                  return _vm.openShowFile(item)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.share_token))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-row justify-content-center align-items-center"
                            },
                            [
                              _c(
                                "b-dropdown",
                                {
                                  attrs: {
                                    variant: "link",
                                    "toggle-class": "btn-icon text-dark",
                                    "no-caret": "",
                                    right: ""
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "button-content",
                                        fn: function() {
                                          return [
                                            _c("vert-more-icon", {
                                              attrs: { size: 20 }
                                            })
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.copyLink(item)
                                        }
                                      }
                                    },
                                    [_vm._v("Copy Link")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.download(item)
                                        }
                                      }
                                    },
                                    [_vm._v("Download")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-dropdown-item",
                                    {
                                      attrs: { variant: "danger" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteItem(item)
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-column justify-content-center align-items-center"
          },
          [
            _vm.files
              ? _c("b-pagination", {
                  attrs: {
                    "total-rows": _vm.files.total,
                    "per-page": _vm.files.per_page,
                    disabled: _vm.isLoading
                  },
                  on: { change: _vm.onPageChange },
                  model: {
                    value: _vm.files.current_page,
                    callback: function($$v) {
                      _vm.$set(_vm.files, "current_page", $$v)
                    },
                    expression: "files.current_page"
                  }
                })
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "showFile",
          attrs: { "hide-footer": true },
          on: { hidden: _vm.onShowFileClose }
        },
        [
          _vm.selectedFile
            ? _c("div", { staticClass: "d-flex flex-column" }, [
                _vm.selectedFile.url
                  ? _c("iframe", {
                      attrs: {
                        src: _vm.selectedFile.url,
                        height: "300",
                        frameborder: "0"
                      }
                    })
                  : _c("span", { staticClass: "text-muted" }, [
                      _vm._v("Unable to display file")
                    ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 d-flex justify-content-end" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: { click: _vm.closeShowFile }
                      },
                      [_vm._v("Close")]
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("upload-dialog-component", {
        ref: "uploadDialog",
        on: { "on-upload-complete": _vm.reloadFileList }
      })
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/Dialogs/UploadDialogComponent.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadDialogComponent.vue?vue&type=template&id=48ea3aae& */ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae&");
/* harmony import */ var _UploadDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadDialogComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/Dialogs/UploadDialogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDialogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDialogComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDialogComponent.vue?vue&type=template&id=48ea3aae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/Dialogs/UploadDialogComponent.vue?vue&type=template&id=48ea3aae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDialogComponent_vue_vue_type_template_id_48ea3aae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/components/ListFilesComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/ListFilesComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListFilesComponent.vue?vue&type=template&id=8f7ef60a& */ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a&");
/* harmony import */ var _ListFilesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListFilesComponent.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListFilesComponent.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListFilesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/ListFilesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListFilesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListFilesComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListFilesComponent.vue?vue&type=template&id=8f7ef60a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/ListFilesComponent.vue?vue&type=template&id=8f7ef60a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListFilesComponent_vue_vue_type_template_id_8f7ef60a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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