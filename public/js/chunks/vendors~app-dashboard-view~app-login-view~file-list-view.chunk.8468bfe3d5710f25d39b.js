(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app-dashboard-view~app-login-view~file-list-view"],{

/***/ "./node_modules/@saeris/vue-spinners/lib/@saeris/vue-spinners.common.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@saeris/vue-spinners/lib/@saeris/vue-spinners.common.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-helper-vue-jsx-merge-props/index.js
var babel_helper_vue_jsx_merge_props = __webpack_require__("92fa");
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// EXTERNAL MODULE: ./node_modules/emotion/dist/index.esm.js
var index_esm = __webpack_require__("3c07");

// EXTERNAL MODULE: ./node_modules/nano-assign/dist/nano-assign.common.js
var nano_assign_common = __webpack_require__("600f");
var nano_assign_common_default = /*#__PURE__*/__webpack_require__.n(nano_assign_common);

// CONCATENATED MODULE: ./node_modules/emotion-utils/dist/index.es.js
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function hashString(str) {
  return murmurhash2_32_gc(str, str.length).toString(36);
}

function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var pa = function fa(ha) {
  function V(f, d, c, l, a) {
    for (var g = 0, b = 0, n = 0, e = 0, k, r, m, v = 0, B = 0, C = 0, x = 0, D = 0, p = 0, H = 0, q = 0, O = r = 0, M = 0, t = 0, y = c.length, G = y - 1, h = '', u = '', F = '', N = '', I; q < y;) {
      m = c.charCodeAt(q);
      q === G && 0 !== b + e + n + g && (0 !== b && (m = 47 === b ? 10 : 47), e = n = g = 0, y++, G++);

      if (0 === b + e + n + g) {
        if (q === G && (0 < r && (h = h.replace(Q, '')), 0 < h.trim().length)) {
          switch (m) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              h += c.charAt(q);
          }

          m = 59;
        }

        if (1 === O) switch (m) {
          case 123:
          case 125:
          case 59:
          case 34:
          case 39:
          case 40:
          case 41:
          case 44:
            O = 0;

          case 9:
          case 13:
          case 10:
          case 32:
            break;

          default:
            for (O = 0, t = q, k = m, q--, m = 59; t < y;) {
              switch (c.charCodeAt(t++)) {
                case 10:
                case 13:
                case 59:
                  ++q;
                  m = k;
                  t = y;
                  break;

                case 58:
                  0 < r && (++q, m = k);

                case 123:
                  t = y;
              }
            }

        }

        switch (m) {
          case 123:
            h = h.trim();
            k = h.charCodeAt(0);
            x = 1;

            for (t = ++q; q < y;) {
              m = c.charCodeAt(q);

              switch (m) {
                case 123:
                  x++;
                  break;

                case 125:
                  x--;
              }

              if (0 === x) break;
              q++;
            }

            p = c.substring(t, q);
            0 === k && (k = (h = h.replace(qa, '').trim()).charCodeAt(0));

            switch (k) {
              case 64:
                0 < r && (h = h.replace(Q, ''));
                r = h.charCodeAt(1);

                switch (r) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    k = d;
                    break;

                  default:
                    k = W;
                }

                p = V(d, k, p, r, a + 1);
                t = p.length;
                0 < X && 0 === t && (t = h.length);
                0 < E && (k = ia(W, h, M), I = P(3, p, k, d, J, z, t, r, a, l), h = k.join(''), void 0 !== I && 0 === (t = (p = I.trim()).length) && (r = 0, p = ''));
                if (0 < t) switch (r) {
                  case 115:
                    h = h.replace(ra, sa);

                  case 100:
                  case 109:
                  case 45:
                    p = h + '{' + p + '}';
                    break;

                  case 107:
                    h = h.replace(ta, '$1 $2' + (0 < R ? T : ''));
                    p = h + '{' + p + '}';
                    p = 1 === w || 2 === w && U('@' + p, 3) ? '@-webkit-' + p + '@' + p : '@' + p;
                    break;

                  default:
                    ;
                    p = h + p, 112 === l && (p = (u += p, ''));
                } else p = '';
                break;

              default:
                p = V(d, ia(d, h, M), p, l, a + 1);
            }

            F += p;
            p = M = r = H = O = D = 0;
            h = '';
            m = c.charCodeAt(++q);
            break;

          case 125:
          case 59:
            h = (0 < r ? h.replace(Q, '') : h).trim();
            if (1 < (t = h.length)) switch (0 === H && (k = h.charCodeAt(0), 45 === k || 96 < k && 123 > k) && (t = (h = h.replace(' ', ':')).length), 0 < E && void 0 !== (I = P(1, h, d, f, J, z, u.length, l, a, l)) && 0 === (t = (h = I.trim()).length) && (h = '\x00\x00'), k = h.charCodeAt(0), r = h.charCodeAt(1), k + r) {
              case 0:
                break;

              case 169:
              case 163:
                N += h + c.charAt(q);
                break;

              default:
                58 !== h.charCodeAt(t - 1) && (u += Y(h, k, r, h.charCodeAt(2)));
            }
            M = r = H = O = D = 0;
            h = '';
            m = c.charCodeAt(++q);
        }
      }

      switch (m) {
        case 13:
        case 10:
          if (0 === b + e + n + g + ja) switch (C) {
            case 41:
            case 39:
            case 34:
            case 64:
            case 126:
            case 62:
            case 42:
            case 43:
            case 47:
            case 45:
            case 58:
            case 44:
            case 59:
            case 123:
            case 125:
              break;

            default:
              0 < H && (O = 1);
          }
          47 === b ? b = 0 : 0 === A + D && (r = 1, h += '\x00');
          0 < E * ka && P(0, h, d, f, J, z, u.length, l, a, l);
          z = 1;
          J++;
          break;

        case 59:
        case 125:
          if (0 === b + e + n + g) {
            z++;
            break;
          }

        default:
          z++;
          k = c.charAt(q);

          switch (m) {
            case 9:
            case 32:
              if (0 === e + g + b) switch (v) {
                case 44:
                case 58:
                case 9:
                case 32:
                  k = '';
                  break;

                default:
                  32 !== m && (k = ' ');
              }
              break;

            case 0:
              k = '\\0';
              break;

            case 12:
              k = '\\f';
              break;

            case 11:
              k = '\\v';
              break;

            case 38:
              0 === e + b + g && 0 < A && (r = M = 1, k = '\f' + k);
              break;

            case 108:
              if (0 === e + b + g + K && 0 < H) switch (q - H) {
                case 2:
                  112 === v && 58 === c.charCodeAt(q - 3) && (K = v);

                case 8:
                  111 === B && (K = B);
              }
              break;

            case 58:
              0 === e + b + g && (H = q);
              break;

            case 44:
              0 === b + n + e + g && (r = 1, k += '\r');
              break;

            case 34:
              0 === b && (e = e === m ? 0 : 0 === e ? m : e);
              break;

            case 39:
              0 === b && (e = e === m ? 0 : 0 === e ? m : e);
              break;

            case 91:
              0 === e + b + n && g++;
              break;

            case 93:
              0 === e + b + n && g--;
              break;

            case 41:
              0 === e + b + g && n--;
              break;

            case 40:
              if (0 === e + b + g) {
                if (0 === D) switch (2 * v + 3 * B) {
                  case 533:
                    break;

                  default:
                    ;
                    x = 0, D = 1;
                }
                n++;
              }

              break;

            case 64:
              0 === b + n + e + g + H + p && (p = 1);
              break;

            case 42:
            case 47:
              if (!(0 < e + g + n)) switch (b) {
                case 0:
                  switch (2 * m + 3 * c.charCodeAt(q + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      ;
                      t = q, b = 42;
                  }

                  break;

                case 42:
                  47 === m && 42 === v && (33 === c.charCodeAt(t + 2) && (u += c.substring(t, q + 1)), k = '', b = 0);
              }
          }

          if (0 === b) {
            if (0 === A + e + g + p && 107 !== l && 59 !== m) switch (m) {
              case 44:
              case 126:
              case 62:
              case 43:
              case 41:
              case 40:
                if (0 === D) {
                  switch (v) {
                    case 9:
                    case 32:
                    case 10:
                    case 13:
                      k += '\x00';
                      break;

                    default:
                      k = '\x00' + k + (44 === m ? '' : '\x00');
                  }

                  r = 1;
                } else switch (m) {
                  case 40:
                    D = ++x;
                    break;

                  case 41:
                    0 === (D = --x) && (r = 1, k += '\x00');
                }

                break;

              case 9:
              case 32:
                switch (v) {
                  case 0:
                  case 123:
                  case 125:
                  case 59:
                  case 44:
                  case 12:
                  case 9:
                  case 32:
                  case 10:
                  case 13:
                    break;

                  default:
                    0 === D && (r = 1, k += '\x00');
                }

            }
            h += k;
            32 !== m && 9 !== m && (C = m);
          }

      }

      B = v;
      v = m;
      q++;
    }

    t = u.length;
    0 < X && 0 === t && 0 === F.length && 0 === d[0].length === !1 && (109 !== l || 1 === d.length && (0 < A ? L : S) === d[0]) && (t = d.join(',').length + 2);

    if (0 < t) {
      if (0 === A && 107 !== l) {
        c = 0;
        g = d.length;

        for (b = Array(g); c < g; ++c) {
          v = d[c].split(ua);
          B = '';
          C = 0;

          for (y = v.length; C < y; ++C) {
            if (!(0 === (x = (e = v[C]).length) && 1 < y)) {
              q = B.charCodeAt(B.length - 1);
              M = e.charCodeAt(0);
              n = '';
              if (0 !== C) switch (q) {
                case 42:
                case 126:
                case 62:
                case 43:
                case 32:
                case 40:
                  break;

                default:
                  n = ' ';
              }

              switch (M) {
                case 38:
                  e = n + L;

                case 126:
                case 62:
                case 43:
                case 32:
                case 41:
                case 40:
                  break;

                case 91:
                  e = n + e + L;
                  break;

                case 58:
                  switch (2 * e.charCodeAt(1) + 3 * e.charCodeAt(2)) {
                    case 530:
                      if (0 < Z) {
                        e = n + e.substring(8, x - 1);
                        break;
                      }

                    default:
                      if (1 > C || 1 > v[C - 1].length) e = n + L + e;
                  }

                  break;

                case 44:
                  n = '';

                default:
                  e = 1 < x && 0 < e.indexOf(':') ? n + e.replace(va, '$1' + L + '$2') : n + e + L;
              }

              B += e;
            }
          }

          b[c] = B.replace(Q, '').trim();
        }

        d = b;
      }

      k = d;
      if (0 < E && (I = P(2, u, k, f, J, z, t, l, a, l), void 0 !== I && 0 === (u = I).length)) return N + u + F;
      u = k.join(',') + '{' + u + '}';

      if (0 !== w * K) {
        2 !== w || U(u, 2) || (K = 0);

        switch (K) {
          case 111:
            u = u.replace(wa, ':-moz-$1') + u;
            break;

          case 112:
            u = u.replace(aa, '::-webkit-input-$1') + u.replace(aa, '::-moz-$1') + u.replace(aa, ':-ms-input-$1') + u;
        }

        K = 0;
      }
    }

    return N + u + F;
  }

  function ia(f, d, c) {
    var l = d.trim().split(xa);
    d = l;
    var a = l.length,
        g = f.length;

    switch (g) {
      case 0:
      case 1:
        var b = 0;

        for (f = 0 === g ? '' : f[0] + ' '; b < a; ++b) {
          d[b] = la(f, d[b], c, g).trim();
        }

        break;

      default:
        var n = b = 0;

        for (d = []; b < a; ++b) {
          for (var e = 0; e < g; ++e) {
            d[n++] = la(f[e] + ' ', l[b], c, g).trim();
          }
        }

    }

    return d;
  }

  function la(f, d, c, l) {
    var a = d.charCodeAt(0);
    33 > a && (a = (d = d.trim()).charCodeAt(0));

    switch (a) {
      case 38:
        switch (A + l) {
          case 0:
          case 1:
            if (0 === f.trim().length) break;

          default:
            return d.replace(F, '$1' + f.trim());
        }

        break;

      case 58:
        switch (d.charCodeAt(1)) {
          case 103:
            if (0 < Z && 0 < A) return d.replace(ya, '$1').replace(F, '$1' + S);
            break;

          default:
            return f.trim() + d.replace(F, '$1' + f.trim());
        }

      default:
        if (0 < c * A && 0 < d.indexOf('\f')) return d.replace(F, (58 === f.charCodeAt(0) ? '' : '$1') + f.trim());
    }

    return f + d;
  }

  function Y(f, d, c, l) {
    var a = f + ';',
        g = 2 * d + 3 * c + 4 * l;

    if (944 === g) {
      f = a.length;
      var b = a.indexOf(':', 9) + 1;
      d = a.substring(0, b).trim();
      c = a.substring(b, f - 1).trim();

      switch (a.charCodeAt(9) * R) {
        case 0:
          break;

        case 45:
          if (110 !== a.charCodeAt(10)) break;

        default:
          for (a = c.split((c = '', za)), b = l = 0, f = a.length; l < f; b = 0, ++l) {
            g = a[l];

            for (var n = g.split(Aa); g = n[b];) {
              var e = g.charCodeAt(0);
              if (1 === R && (64 < e && 90 > e || 96 < e && 123 > e || 95 === e || 45 === e && 45 !== g.charCodeAt(1))) switch (isNaN(parseFloat(g)) + (-1 !== g.indexOf('('))) {
                case 1:
                  switch (g) {
                    case 'infinite':
                    case 'alternate':
                    case 'backwards':
                    case 'running':
                    case 'normal':
                    case 'forwards':
                    case 'both':
                    case 'none':
                    case 'linear':
                    case 'ease':
                    case 'ease-in':
                    case 'ease-out':
                    case 'ease-in-out':
                    case 'paused':
                    case 'reverse':
                    case 'alternate-reverse':
                    case 'inherit':
                    case 'initial':
                    case 'unset':
                    case 'step-start':
                    case 'step-end':
                      break;

                    default:
                      g += T;
                  }

              }
              n[b++] = g;
            }

            c += (0 === l ? '' : ',') + n.join(' ');
          }

      }

      c = d + c + ';';
      return 1 === w || 2 === w && U(c, 1) ? '-webkit-' + c + c : c;
    }

    if (0 === w || 2 === w && !U(a, 1)) return a;

    switch (g) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        return 45 === a.charCodeAt(8) ? '-webkit-' + a + a : a;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return Ba.test(a) ? a.replace(ma, ':-webkit-') + a.replace(ma, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        d = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(d)) {
          case 226:
            b = a.replace(N, 'tb');
            break;

          case 232:
            b = a.replace(N, 'tb-rl');
            break;

          case 220:
            b = a.replace(N, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        d = (a = f).length - 10;
        b = (33 === a.charCodeAt(d) ? a.substring(0, d) : a).substring(f.indexOf(':', 7) + 1).trim();

        switch (g = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < g ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(na, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(na, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === Ca.test(f)) return 115 === (b = f.substring(f.indexOf(':') + 1)).charCodeAt(0) ? Y(f.replace('stretch', 'fill-available'), d, c, l).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === c + l && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(Da, '$1-webkit-$2') + a;
    }

    return a;
  }

  function U(f, d) {
    var c = f.indexOf(1 === d ? ':' : '{'),
        l = f.substring(0, 3 !== d ? c : 10);
    c = f.substring(c + 1, f.length - 1);
    return ba(2 !== d ? l : l.replace(Ea, '$1'), c, d);
  }

  function sa(f, d) {
    var c = Y(d, d.charCodeAt(0), d.charCodeAt(1), d.charCodeAt(2));
    return c !== d + ';' ? c.replace(Fa, ' or ($1)').substring(4) : '(' + d + ')';
  }

  function P(f, d, c, l, a, g, b, n, e, k) {
    for (var r = 0, m = d, v; r < E; ++r) {
      switch (v = ca[r].call(G, f, m, c, l, a, g, b, n, e, k)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          m = v;
      }
    }

    switch (m) {
      case void 0:
      case !1:
      case !0:
      case null:
      case d:
        break;

      default:
        return m;
    }
  }

  function da(f) {
    switch (f) {
      case void 0:
      case null:
        E = ca.length = 0;
        break;

      default:
        switch (f.constructor) {
          case Array:
            for (var d = 0, c = f.length; d < c; ++d) {
              da(f[d]);
            }

            break;

          case Function:
            ca[E++] = f;
            break;

          case Boolean:
            ka = !!f | 0;
        }

    }

    return da;
  }

  function ea(f) {
    for (var d in f) {
      var c = f[d];

      switch (d) {
        case 'keyframe':
          R = c | 0;
          break;

        case 'global':
          Z = c | 0;
          break;

        case 'cascade':
          A = c | 0;
          break;

        case 'compress':
          oa = c | 0;
          break;

        case 'semicolon':
          ja = c | 0;
          break;

        case 'preserve':
          X = c | 0;
          break;

        case 'prefix':
          ;
          ba = null, c ? 'function' !== typeof c ? w = 1 : (w = 2, ba = c) : w = 0;
      }
    }

    return ea;
  }

  function G(f, d) {
    if (void 0 !== this && this.constructor === G) return fa(f);
    var c = f,
        l = c.charCodeAt(0);
    33 > l && (l = (c = c.trim()).charCodeAt(0));
    0 < R && (T = c.replace(Ga, 91 === l ? '' : '-'));
    l = 1;
    1 === A ? S = c : L = c;
    c = [S];

    if (0 < E) {
      var a = P(-1, d, c, c, J, z, 0, 0, 0, 0);
      void 0 !== a && 'string' === typeof a && (d = a);
    }

    var g = V(W, c, d, 0, 0);
    0 < E && (a = P(-2, g, c, c, J, z, g.length, 0, 0, 0), void 0 !== a && 'string' !== typeof (g = a) && (l = 0));
    L = S = T = '';
    K = 0;
    z = J = 1;
    return 0 === oa * l ? g : g.replace(Q, '').replace(Ha, '').replace(Ia, '$1').replace(Ja, '$1').replace(Ka, ' ');
  }

  var qa = /^\0+/g,
      Q = /[\0\r\f]/g,
      ma = /: */g,
      Ba = /zoo|gra/,
      Da = /([,: ])(transform)/g,
      za = /,+\s*(?![^(]*[)])/g,
      Aa = / +\s*(?![^(]*[)])/g,
      ua = / *[\0] */g,
      xa = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      ya = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
      Ga = /\W+/g,
      ta = /@(k\w+)\s*(\S*)\s*/,
      aa = /::(place)/g,
      wa = /:(read-only)/g,
      Ha = /\s+(?=[{\];=:>])/g,
      Ia = /([[}=:>])\s+/g,
      Ja = /(\{[^{]+?);(?=\})/g,
      Ka = /\s{2,}/g,
      va = /([^\(])(:+) */g,
      N = /[svh]\w+-[tblr]{2}/,
      ra = /\(\s*(.*)\s*\)/g,
      Fa = /([\s\S]*?);/g,
      na = /-self|flex-/g,
      Ea = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      Ca = /stretch|:\s*\w+\-(?:conte|avail)/,
      z = 1,
      J = 1,
      K = 0,
      A = 1,
      w = 1,
      Z = 1,
      oa = 0,
      ja = 0,
      X = 0,
      W = [],
      ca = [],
      E = 0,
      ba = null,
      ka = 0,
      R = 1,
      T = '',
      L = '',
      S = '';
  G.use = da;
  G.set = ea;
  void 0 !== ha && ea(ha);
  return G;
};

var memoize = function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
};
var STYLES_KEY = '__emotion_styles';
var unitless = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};


//# sourceMappingURL=index.es.js.map

// CONCATENATED MODULE: ./node_modules/vue-emotion/dist/vue-emotion.es.js





function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function stringifyClass(klass) {
  if (Array.isArray(klass)) {
    return klass.join(' ');
  }

  if (_typeof(klass) === 'object') {
    return Object.keys(klass).filter(function (key) {
      return Boolean(klass[key]);
    }).join(' ');
  }

  return klass;
}

var index = (function (tag, options) {
  var staticClassName;
  var identifierName;
  var stableClassName;
  var propsDefinitions;

  if (options !== undefined) {
    staticClassName = options.e;
    identifierName = options.label;
    stableClassName = options.target;
    propsDefinitions = options.props;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;
  return function () {
    var styles = isReal && tag[STYLES_KEY] !== undefined ? tag[STYLES_KEY].slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:".concat(identifierName, ";"));
    }

    if (staticClassName === undefined) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args[0] === null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {
        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {
          styles.push(args[i], args[0][i]);
        }
      }
    }

    var Styled = {
      name: "Styled".concat(tag.name || identifierName || 'Component'),
      functional: true,
      inject: {
        theme: {
          default: null
        }
      },
      props: propsDefinitions,
      render: function render(h, _ref) {
        var data = _ref.data,
            children = _ref.children,
            props = _ref.props,
            injections = _ref.injections;
        var className = '';
        var classInterpolations = [];
        var exisingClassName = stringifyClass(data.class);
        var attrs = {};

        for (var key in data.attrs) {
          if (key[0] !== '$') {
            attrs[key] = data.attrs[key];
          }
        }

        if (exisingClassName) {
          if (staticClassName === undefined) {
            className += Object(index_esm["b" /* getRegisteredStyles */])(classInterpolations, exisingClassName);
          } else {
            className += "".concat(exisingClassName, " ");
          }
        }

        if (staticClassName === undefined) {
          var ctx = {
            mergedProps: nano_assign_common_default()({
              theme: injections.theme
            }, props)
          };
          className += index_esm["a" /* css */].apply(ctx, styles.concat(classInterpolations));
        } else {
          className += staticClassName;
        }

        if (stableClassName !== undefined) {
          className += " ".concat(stableClassName);
        }

        return h(tag, nano_assign_common_default()({}, data, {
          attrs: attrs,
          class: className
        }), children);
      }
    };
    Styled[STYLES_KEY] = styles;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_real = Styled;
    Object.defineProperty(Styled, 'toString', {
      enumerable: false,
      value: function value() {
        if (false) {}

        return ".".concat(stableClassName);
      }
    });
    return Styled;
  };
});

/* harmony default export */ var vue_emotion_es = (index);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./src/utils.js





var calculateRgba = function calculateRgba(input, opacity) {
  var color;

  if (input[0] === "#") {
    color = input.slice(1);
  }

  if (color.length === 3) {
    var res = "";
    color.split("").forEach(function (c) {
      res += c;
      res += c;
    });
    color = res;
  }

  var rgbValues = color.match(/.{2}/g).map(function (hex) {
    return parseInt(hex, 16);
  }).join(", ");
  return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
};
var utils_range = function range(size) {
  var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _toConsumableArray(Array(size).keys()).map(function (i) {
    return i + startAt;
  });
};
var utils_characterRange = function characterRange(startChar, endChar) {
  return String.fromCharCode.apply(String, _toConsumableArray(utils_range(endChar.charCodeAt(0) - startChar.charCodeAt(0), startChar.charCodeAt(0))));
};
var utils_zip = function zip(arr) {
  for (var _len = arguments.length, arrs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrs[_key - 1] = arguments[_key];
  }

  return arr.map(function (val, i) {
    return arrs.reduce(function (list, curr) {
      return _toConsumableArray(list).concat([curr[i]]);
    }, [val]);
  });
};
// CONCATENATED MODULE: ./src/components/barLoader.js




function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", ";\n  overflow: hidden;\n  background-color: ", ";\n  background-clip: padding-box;\n  display: block;\n  border-radius: 2px;\n  will-change: left, right;\n  animation-fill-mode: forwards;\n  animation: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n  background-color: ", ";\n  background-clip: padding-box;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {left: -200%;right: 100%}\n  60% {left: 107%;right: -8%}\n  100% {left: 107%;right: -8%}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {left: -35%;right: 100%}\n  60% {left: 100%;right: -90%}\n  100% {left: 100%;right: -90%}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var barLoader_long = Object(index_esm["c" /* keyframes */])(_templateObject());
var barLoader_short = Object(index_esm["c" /* keyframes */])(_templateObject2());
var Wrapper = vue_emotion_es("div")(_templateObject3(), function (_ref) {
  var width = _ref.width,
      widthUnit = _ref.widthUnit;
  return "".concat(width).concat(widthUnit);
}, function (_ref2) {
  var height = _ref2.height,
      heightUnit = _ref2.heightUnit;
  return "".concat(height).concat(heightUnit);
}, function (_ref3) {
  var color = _ref3.color;
  return calculateRgba(color, 0.2);
});
var Bar = vue_emotion_es("div")(_templateObject4(), function (_ref4) {
  var height = _ref4.height,
      heightUnit = _ref4.heightUnit;
  return "".concat(height).concat(heightUnit);
}, function (_ref5) {
  var color = _ref5.color;
  return color;
}, function (_ref6) {
  var version = _ref6.version;
  return " ".concat(version === 1 ? barLoader_long : barLoader_short, " 2.1s ").concat(version === 2 ? "1.15s" : "", " ").concat(version === 1 ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)" : "cubic-bezier(0.165, 0.84, 0.44, 1)", " infinite");
});
var BarLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    width: {
      type: Number,
      default: 100
    },
    widthUnit: {
      type: String,
      default: "px"
    },
    height: {
      type: Number,
      default: 4
    },
    heightUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h(Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        width: props.width,
        widthUnit: props.widthUnit,
        height: props.height,
        heightUnit: props.heightUnit,
        color: props.color
      }
    }]), [utils_range(2, 1).map(function (i) {
      return h(Bar, {
        attrs: {
          height: props.height,
          heightUnit: props.heightUnit,
          color: props.color,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/beatLoader.js



function beatLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  background-color: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  animation: ", ";\n  animation-fill-mode: both;\n"]);

  beatLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function beatLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"]);

  beatLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var beat = Object(index_esm["c" /* keyframes */])(beatLoader_templateObject());
var Circle = vue_emotion_es("div")(beatLoader_templateObject2(), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref4) {
  var margin = _ref4.margin;
  return margin;
}, function (_ref5) {
  var version = _ref5.version;
  return "".concat(beat, " 0.7s ").concat(version % 2 ? "0s" : "0.35s", " infinite linear");
});
var BeatLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref6) {
    var props = _ref6.props,
        data = _ref6.data;
    return props.loading ? h("div", data, [utils_range(3, 1).map(function (i) {
      return h(Circle, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          margin: props.margin,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/bounceLoader.js




function bounceLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: 100%;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n  animation-fill-mode: both;\n  animation: ", ";\n"]);

  bounceLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function bounceLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"]);

  bounceLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function bounceLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"]);

  bounceLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var bounce = Object(index_esm["c" /* keyframes */])(bounceLoader_templateObject());
var bounceLoader_Wrapper = vue_emotion_es("div")(bounceLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});
var bounceLoader_Circle = vue_emotion_es("div")(bounceLoader_templateObject3(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref5) {
  var color = _ref5.color;
  return color;
}, function (_ref6) {
  var version = _ref6.version;
  return "".concat(bounce, " 2.1s ").concat(version === 1 ? "1s" : "0s", " infinite ease-in-out");
});
var BounceLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 60
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h(bounceLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(2, 1).map(function (i) {
      return h(bounceLoader_Circle, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/circleLoader.js




function circleLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", ";\n  width: ", ";\n  border: ", ";\n  border-radius: 100%;\n  transition: 2s;\n  border-bottom: none;\n  border-right: none;\n  top: ", "%;\n  left: ", "%;\n  animation-fill-mode: '';\n  animation: ", ";\n"]);

  circleLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function circleLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"]);

  circleLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function circleLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"]);

  circleLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var circle = Object(index_esm["c" /* keyframes */])(circleLoader_templateObject());
var circleLoader_Wrapper = vue_emotion_es("div")(circleLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});
var Ring = vue_emotion_es("div")(circleLoader_templateObject3(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit,
      version = _ref3.version;
  return "".concat(size * (1 - version / 10)).concat(sizeUnit);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit,
      version = _ref4.version;
  return "".concat(size * (1 - version / 10)).concat(sizeUnit);
}, function (_ref5) {
  var color = _ref5.color;
  return "1px solid ".concat(color);
}, function (_ref6) {
  var version = _ref6.version;
  return version * 0.7 * 2.5;
}, function (_ref7) {
  var version = _ref7.version;
  return version * 0.35 * 2.5;
}, function (_ref8) {
  var version = _ref8.version;
  return "".concat(circle, " 1s ").concat(version * 0.2, "s infinite linear");
});
var CircleLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 50
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref9) {
    var props = _ref9.props,
        data = _ref9.data;
    return props.loading ? h(circleLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(5).map(function (i) {
      return h(Ring, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/climbingBoxLoader.js




function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 7.1em;\n  height: 7.1em;\n  top: 1.7em;\n  left: 1.7em;\n  border-left: ", ";\n  transform: rotate(45deg);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function climbingBoxLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  bottom: -0.1em;\n  height: 1em;\n  width: 1em;\n  background-color: transparent;\n  border-radius: 15%;\n  border: ", ";\n  transform: translate(0, -1em) rotate(-45deg);\n  animation-fill-mode: both;\n  animation: ", " 2.5s infinite cubic-bezier(0.79, 0, 0.47, 0.97);\n"]);

  climbingBoxLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function climbingBoxLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -2.7em;\n  margin-left: -2.7em;\n  width: 5.4em;\n  height: 5.4em;\n  font-size: ", ";\n"]);

  climbingBoxLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function climbingBoxLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 7.1em;\n  height: 7.1em;\n"]);

  climbingBoxLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function climbingBoxLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}\n"]);

  climbingBoxLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var climbingBox = Object(index_esm["c" /* keyframes */])(climbingBoxLoader_templateObject());
var Container = vue_emotion_es("div")(climbingBoxLoader_templateObject2());
var climbingBoxLoader_Wrapper = vue_emotion_es("div")(climbingBoxLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});
var Box = vue_emotion_es("div")(climbingBoxLoader_templateObject4(), function (_ref2) {
  var color = _ref2.color;
  return "0.25em solid ".concat(color);
}, climbingBox);
var Hill = vue_emotion_es("div")(_templateObject5(), function (_ref3) {
  var color = _ref3.color;
  return "0.25em solid ".concat(color);
});
var ClimbingBoxLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data;
    return props.loading ? h(Container, [h(climbingBoxLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [h(Box, {
      attrs: {
        color: props.color
      }
    }), h(Hill, {
      attrs: {
        color: props.color
      }
    })])]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/clipLoader.js




function clipLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: transparent !important;\n  width: ", ";\n  height: ", ";\n  border-radius: 100%;\n  border: 2px solid;\n  border-color: ", ";\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: ", " 0.75s 0s infinite linear;\n  animation-fill-mode: both;\n"]);

  clipLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function clipLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"]);

  clipLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var clip = Object(index_esm["c" /* keyframes */])(clipLoader_templateObject());
var clipLoader_Ring = vue_emotion_es("div")(clipLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, clip);
var ClipLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 35
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data;
    return props.loading ? h(clipLoader_Ring, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit,
        color: props.color
      }
    }])) : null;
  }
};
// CONCATENATED MODULE: ./src/components/dotLoader.js




function dotLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n  border-radius: 100%;\n  animation-fill-mode: forwards;\n  animation: ", ";\n"]);

  dotLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function dotLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  animation-fill-mode: forwards;\n  animation: ", " 2s 0s infinite linear;\n"]);

  dotLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function dotLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0%, 100% {transform: scale(0)}\n  50% {transform: scale(1.0)}\n"]);

  dotLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function dotLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  100% {transform: rotate(360deg)}\n"]);

  dotLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotate = Object(index_esm["c" /* keyframes */])(dotLoader_templateObject());
var dotLoader_bounce = Object(index_esm["c" /* keyframes */])(dotLoader_templateObject2());
var dotLoader_Wrapper = vue_emotion_es("div")(dotLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, rotate);
var dotLoader_Circle = vue_emotion_es("div")(dotLoader_templateObject4(), function (_ref3) {
  var version = _ref3.version;
  return version % 2 ? "0" : "auto";
}, function (_ref4) {
  var version = _ref4.version;
  return version % 2 ? "auto" : "0";
}, function (_ref5) {
  var size = _ref5.size,
      sizeUnit = _ref5.sizeUnit;
  return "".concat(size / 2).concat(sizeUnit);
}, function (_ref6) {
  var size = _ref6.size,
      sizeUnit = _ref6.sizeUnit;
  return "".concat(size / 2).concat(sizeUnit);
}, function (_ref7) {
  var color = _ref7.color;
  return color;
}, function (_ref8) {
  var version = _ref8.version;
  return "".concat(dotLoader_bounce, " 2s ").concat(version === 2 ? "-1s" : "0s", " infinite linear");
});
var DotLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 60
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref9) {
    var props = _ref9.props,
        data = _ref9.data;
    return props.loading ? h(dotLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(2, 1).map(function (i) {
      return h(dotLoader_Circle, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("b127");

// CONCATENATED MODULE: ./src/components/fadeLoader.js





function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: 0;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(45deg);\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n    left: ", "px;\n    transform: rotate(90deg);\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function fadeLoader_templateObject5() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: ", "px;\n    transform: rotate(-45deg);\n  "]);

  fadeLoader_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function fadeLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n    top: ", "px;\n    left: 0;\n  "]);

  fadeLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function fadeLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  transition: 2s;\n  animation-fill-mode: 'both';\n  animation: ", ";\n  ", "\n"]);

  fadeLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function fadeLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  font-size: 0;\n  top: ", "px;\n  left: ", "px;\n  width: ", "px;\n  height: ", "px;\n"]);

  fadeLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function fadeLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  50% {opacity: 0.3}\n  100% {opacity: 1}\n"]);

  fadeLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var fade = Object(index_esm["c" /* keyframes */])(fadeLoader_templateObject());
var rad = 20;
var quarter = rad / 2 + rad / 5.5;
var fadeLoader_Wrapper = vue_emotion_es("div")(fadeLoader_templateObject2(), rad, rad, rad * 3, rad * 3);
var fadeLoader_Bar = vue_emotion_es("div")(fadeLoader_templateObject3(), function (_ref) {
  var width = _ref.width,
      widthUnit = _ref.widthUnit;
  return "".concat(width).concat(widthUnit);
}, function (_ref2) {
  var height = _ref2.height,
      heightUnit = _ref2.heightUnit;
  return "".concat(height).concat(heightUnit);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var radius = _ref5.radius,
      radiusUnit = _ref5.radiusUnit;
  return "".concat(radius).concat(radiusUnit);
}, function (_ref6) {
  var version = _ref6.version;
  return "".concat(fade, " 1.2s ").concat(version * 0.12, "s infinite ease-in-out");
}, function (_ref7) {
  var variation = _ref7.variation;
  return variation;
});
var fadeLoader_styles = {
  a: Object(index_esm["a" /* css */])(fadeLoader_templateObject4(), rad),
  b: Object(index_esm["a" /* css */])(fadeLoader_templateObject5(), quarter, quarter),
  c: Object(index_esm["a" /* css */])(_templateObject6(), rad),
  d: Object(index_esm["a" /* css */])(_templateObject7(), -quarter, quarter),
  e: Object(index_esm["a" /* css */])(_templateObject8(), -rad),
  f: Object(index_esm["a" /* css */])(_templateObject9(), -quarter, -quarter),
  g: Object(index_esm["a" /* css */])(_templateObject10(), -rad),
  h: Object(index_esm["a" /* css */])(_templateObject11(), quarter, -quarter)
};
var rows = utils_zip(utils_characterRange("a", "i").split(""), utils_range(9, 1));
var FadeLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    height: {
      type: Number,
      default: 15
    },
    width: {
      type: Number,
      default: 5
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: Number,
      default: 2
    },
    widthUnit: {
      type: String,
      default: "px"
    },
    heightUnit: {
      type: String,
      default: "px"
    },
    radiusUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref8) {
    var props = _ref8.props,
        data = _ref8.data;
    return props.loading ? h(fadeLoader_Wrapper, data, [rows.map(function (_ref9) {
      var _ref10 = Object(slicedToArray["a" /* default */])(_ref9, 2),
          style = _ref10[0],
          i = _ref10[1];

      return h(fadeLoader_Bar, {
        attrs: {
          color: props.color,
          margin: props.margin,
          width: props.width,
          widthUnit: props.widthUnit,
          height: props.height,
          heightUnit: props.heightUnit,
          radius: props.radius,
          radiusUnit: props.radiusUnit,
          variation: fadeLoader_styles[style],
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/gridLoader.js




function gridLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  background-color: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  animation-fill-mode: 'both';\n  animation: ", ";\n"]);

  gridLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function gridLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  font-size: 0;\n"]);

  gridLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function gridLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"]);

  gridLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var grid = Object(index_esm["c" /* keyframes */])(gridLoader_templateObject());

var random = function random(top) {
  return Math.random() * top;
};

var gridLoader_Wrapper = vue_emotion_es("div")(gridLoader_templateObject2(), function (_ref) {
  var margin = _ref.margin,
      size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(parseFloat(size) * 3 + parseFloat(margin) * 6).concat(sizeUnit);
});
var gridLoader_Circle = vue_emotion_es("div")(gridLoader_templateObject3(), function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref5) {
  var margin = _ref5.margin;
  return margin;
}, function (_ref6) {
  var rand = _ref6.rand;
  return "".concat(grid, " ").concat(rand / 100 + 0.6, "s ").concat(rand / 100 - 0.2, "s infinite ease");
});
var GridLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    margin: {
      type: String,
      default: "2px"
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h(gridLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        margin: props.margin,
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(9).map(function (_) {
      return h(gridLoader_Circle, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          rand: random(100)
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/hashLoader.js




function hashLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  transform: translate(-50%, -50%);\n  animation: ", ";\n  content: '';\n"]);

  hashLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function hashLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  transform: rotate(165deg);\n"]);

  hashLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function hashLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n  35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n  70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n  100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n"]);

  hashLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function hashLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n  35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n  70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n  100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n"]);

  hashLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var thickness = function thickness(size) {
  return size / 5;
};

var lat = function lat(size) {
  return (size - thickness(size)) / 2;
};

var offset = function offset(size) {
  return lat(size) - thickness(size);
};

var hashLoader_getColor = function getColor(color) {
  return calculateRgba(color, 0.75);
};

var hashLoader_before = function before(size, sizeUnit, color) {
  return Object(index_esm["c" /* keyframes */])(hashLoader_templateObject(), thickness(size), lat(size), -offset(size), hashLoader_getColor(color), -lat(size), offset(size), hashLoader_getColor(color), "".concat(size).concat(sizeUnit), -offset(size), hashLoader_getColor(color), offset(size), hashLoader_getColor(color), thickness(size), -lat(size), -offset(size), hashLoader_getColor(color), lat(size), offset(size), hashLoader_getColor(color), lat(size), -offset(size), hashLoader_getColor(color), -lat(size), offset(size), hashLoader_getColor(color));
};

var hashLoader_after = function after(size, sizeUnit, color) {
  return Object(index_esm["c" /* keyframes */])(hashLoader_templateObject2(), thickness(size), offset(size), lat(size), hashLoader_getColor(color), -offset(size), -lat(size), hashLoader_getColor(color), "".concat(size).concat(sizeUnit), offset(size), hashLoader_getColor(color), -offset(size), hashLoader_getColor(color), thickness(size), offset(size), -lat(size), hashLoader_getColor(color), -offset(size), lat(size), hashLoader_getColor(color), offset(size), lat(size), hashLoader_getColor(color), -offset(size), -lat(size), hashLoader_getColor(color));
};

var hashLoader_Wrapper = vue_emotion_es("div")(hashLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});
var Lines = vue_emotion_es("div")(hashLoader_templateObject4(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size / 5).concat(sizeUnit);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit;
  return "".concat(size / 5).concat(sizeUnit);
}, function (_ref5) {
  var size = _ref5.size,
      sizeUnit = _ref5.sizeUnit;
  return "".concat(size / 10).concat(sizeUnit);
}, function (_ref6) {
  var size = _ref6.size,
      sizeUnit = _ref6.sizeUnit,
      color = _ref6.color,
      version = _ref6.version;
  return "".concat(version === 1 ? hashLoader_before(size, sizeUnit, color) : hashLoader_after(size, sizeUnit, color), " 2s infinite normal none running");
});
var HashLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 50
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h(hashLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(2, 1).map(function (i) {
      return h(Lines, {
        attrs: {
          size: props.size,
          sizeUnit: props.sizeUnit,
          color: props.color,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/moonLoader.js




function moonLoader_templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-width: ", ";\n  border-style: solid;\n  border-color: ", ";\n  border-image: initial;\n  opacity: 0.1;\n  box-sizing: content-box;\n  ", ";\n"]);

  moonLoader_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function moonLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  background-color: ", ";\n  opacity: 0.8;\n  animation: ", " 0.6s linear 0s infinite normal forwards running;\n  box-sizing: content-box;\n  ", ";\n"]);

  moonLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function moonLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  animation: ", " 0.6s linear 0s infinite normal forwards running;\n  box-sizing: content-box;\n"]);

  moonLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function moonLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  border-radius: 100%;\n"]);

  moonLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function moonLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  100% {transform: rotate(360deg)}\n"]);

  moonLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var moon = Object(index_esm["c" /* keyframes */])(moonLoader_templateObject());

var moonSize = function moonSize(size) {
  return (size / 7).toFixed(5);
};

var moonLoader_ballStyle = function ballStyle(size, sizeUnit) {
  return Object(index_esm["a" /* css */])(moonLoader_templateObject2(), "".concat(size).concat(sizeUnit), "".concat(size).concat(sizeUnit));
};

var moonLoader_Wrapper = vue_emotion_es("div")(moonLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size + moonSize(size) * 2).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size + moonSize(size) * 2).concat(sizeUnit);
}, moon);
var Moon = vue_emotion_es("div")(moonLoader_templateObject4(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size / 2 - moonSize(size) / 2).concat(sizeUnit);
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, moon, function (_ref5) {
  var size = _ref5.size,
      sizeUnit = _ref5.sizeUnit;
  return moonLoader_ballStyle(moonSize(size), sizeUnit);
});
var moonLoader_Ring = vue_emotion_es("div")(moonLoader_templateObject5(), function (_ref6) {
  var size = _ref6.size;
  return "".concat(moonSize(size), "px");
}, function (_ref7) {
  var color = _ref7.color;
  return "".concat(color);
}, function (_ref8) {
  var size = _ref8.size,
      sizeUnit = _ref8.sizeUnit;
  return moonLoader_ballStyle(size, sizeUnit);
});
var MoonLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 60
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref9) {
    var props = _ref9.props,
        data = _ref9.data;
    return props.loading ? h(moonLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [h(Moon, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit,
        color: props.color
      }
    }), h(moonLoader_Ring, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit,
        color: props.color
      }
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/pacmanLoader.js




function pacmanLoader_templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  background-color: ", ";\n  transform: ", ";\n  animation: ", ";\n"]);

  pacmanLoader_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function pacmanLoader_templateObject5() {
  var data = _taggedTemplateLiteral(["\n  75% {opacity: 0.7}\n  100% {transform: translate(", "", ", ", "", ")}\n"]);

  pacmanLoader_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function pacmanLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: ", ";\n  border-left: ", ";\n  border-bottom: ", ";\n  border-right: ", ";\n  border-radius: ", ";\n  animation: ", " ease-in-out 0.8s infinite normal both running;\n"]);

  pacmanLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function pacmanLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  font-size: 0;\n"]);

  pacmanLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function pacmanLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(44deg)}\n  "]);

  pacmanLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pacmanLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {transform: rotate(0deg)}\n    50% {transform: rotate(-44deg)}\n  "]);

  pacmanLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // This returns an animation

var pacman = [Object(index_esm["c" /* keyframes */])(pacmanLoader_templateObject()), Object(index_esm["c" /* keyframes */])(pacmanLoader_templateObject2())];
var pacmanLoader_Wrapper = vue_emotion_es("div")(pacmanLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});

var s1 = function s1(size, sizeUnit) {
  return "".concat(size).concat(sizeUnit, " solid transparent");
};

var s2 = function s2(size, sizeUnit, color) {
  return "".concat(size).concat(sizeUnit, " solid ").concat(color);
};

var Pacman = vue_emotion_es("div")(pacmanLoader_templateObject4(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit,
      color = _ref3.color,
      version = _ref3.version;
  return version === 0 ? s1(size, sizeUnit) : s2(size, sizeUnit, color);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit,
      color = _ref4.color;
  return s2(size, sizeUnit, color);
}, function (_ref5) {
  var size = _ref5.size,
      sizeUnit = _ref5.sizeUnit,
      color = _ref5.color,
      version = _ref5.version;
  return version === 0 ? s2(size, sizeUnit, color) : s1(size, sizeUnit);
}, function (_ref6) {
  var size = _ref6.size,
      sizeUnit = _ref6.sizeUnit;
  return s1(size, sizeUnit);
}, function (_ref7) {
  var size = _ref7.size,
      sizeUnit = _ref7.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref8) {
  var version = _ref8.version;
  return pacman[version];
});

var pacmanLoader_ballAnim = function ballAnim(size, sizeUnit) {
  return Object(index_esm["c" /* keyframes */])(pacmanLoader_templateObject5(), -4 * size, sizeUnit, -size / 4, sizeUnit);
};

var Ball = vue_emotion_es("div")(pacmanLoader_templateObject6(), function (_ref9) {
  var size = _ref9.size,
      sizeUnit = _ref9.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref10) {
  var size = _ref10.size,
      sizeUnit = _ref10.sizeUnit;
  return "".concat(size * 4).concat(sizeUnit);
}, function (_ref11) {
  var size = _ref11.size,
      sizeUnit = _ref11.sizeUnit;
  return "".concat(size / 2.5).concat(sizeUnit);
}, function (_ref12) {
  var size = _ref12.size,
      sizeUnit = _ref12.sizeUnit;
  return "".concat(size / 2.5).concat(sizeUnit);
}, function (_ref13) {
  var margin = _ref13.margin;
  return margin;
}, function (_ref14) {
  var color = _ref14.color;
  return color;
}, function (_ref15) {
  var size = _ref15.size,
      sizeUnit = _ref15.sizeUnit;
  return "translate(0, ".concat(-size / 4).concat(sizeUnit, ")");
}, function (_ref16) {
  var size = _ref16.size,
      sizeUnit = _ref16.sizeUnit,
      version = _ref16.version;
  return "".concat(pacmanLoader_ballAnim(size, sizeUnit), " 1s linear ").concat(version * 0.25, "s infinite normal both running");
});
var PacmanLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 25
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref17) {
    var props = _ref17.props,
        data = _ref17.data;
    return props.loading ? h(pacmanLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [h(Pacman, {
      attrs: {
        color: props.color,
        size: props.size,
        sizeUnit: props.sizeUnit,
        version: 0
      }
    }), h(Pacman, {
      attrs: {
        color: props.color,
        size: props.size,
        sizeUnit: props.sizeUnit,
        version: 1
      }
    }), utils_range(4, 2).map(function (i) {
      return h(Ball, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/propagateLoader.js



function propagateLoader_templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  background: ", ";\n  font-size: ", ";\n  animation: ", " 1.5s infinite;\n  animation-fill-mode: forwards;\n"]);

  propagateLoader_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  propagateLoader_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject6() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(", "rem) scale(0.75)}\n    50% {transform: translateX(", "rem) scale(0.6)}\n    75% {transform: translateX(", "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject5() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(", "rem) scale(0.75)}\n    50% {transform: translateX(", "rem) scale(0.6)}\n    75% {transform: translateX(", "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(", "rem) scale(0.75)}\n    75% {transform: translateX(", "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(-", "rem) scale(0.75)}\n    75% {transform: translateX(-", "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(-", "rem) scale(0.75)}\n    50% {transform: translateX(-", "rem) scale(0.6)}\n    75% {transform: translateX(-", "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function propagateLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n    25% {transform: translateX(-", "rem) scale(0.75)}\n    50% {transform: translateX(-", "rem) scale(0.6)}\n    75% {transform: translateX(-", "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}\n  "]);

  propagateLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // 1.5 4.5 7.5

var distance = [1, 3, 5];
var propagate = [Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject(), distance[0], distance[1], distance[2]), Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject2(), distance[0], distance[1], distance[1]), Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject3(), distance[0], distance[0]), Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject4(), distance[0], distance[0]), Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject5(), distance[0], distance[1], distance[1]), Object(index_esm["c" /* keyframes */])(propagateLoader_templateObject6(), distance[0], distance[1], distance[2])];
var propagateLoader_Wrapper = vue_emotion_es("div")(propagateLoader_templateObject7());
var propagateLoader_Circle = vue_emotion_es("div")(propagateLoader_templateObject8(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit;
  return "".concat(size / 3).concat(sizeUnit);
}, function (_ref5) {
  var version = _ref5.version;
  return propagate[version];
});
var PropagateLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref6) {
    var props = _ref6.props,
        data = _ref6.data;
    return props.loading ? h(propagateLoader_Wrapper, data, [utils_range(6).map(function (i) {
      return h(propagateLoader_Circle, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/pulseLoader.js



function pulseLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  background-color: ", ";\n  animation: ", ";\n  animation-fill-mode: both;\n"]);

  pulseLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function pulseLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"]);

  pulseLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var pulse = Object(index_esm["c" /* keyframes */])(pulseLoader_templateObject());
var pulseLoader_Circle = vue_emotion_es("div")(pulseLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var version = _ref5.version;
  return "".concat(pulse, " 0.75s ").concat(version * 0.12, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)");
});
var PulseLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref6) {
    var props = _ref6.props,
        data = _ref6.data;
    return props.loading ? h("div", data, [utils_range(3, 1).map(function (i) {
      return h(pulseLoader_Circle, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/ringLoader.js




function ringLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: 100%;\n  opacity: 0.4;\n  animation: ", ";\n  animation-fill-mode: forwards;\n  perspective: 800px;\n"]);

  ringLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ringLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"]);

  ringLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ringLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}\n"]);

  ringLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ringLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}\n  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}\n"]);

  ringLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var right = Object(index_esm["c" /* keyframes */])(ringLoader_templateObject());
var left = Object(index_esm["c" /* keyframes */])(ringLoader_templateObject2());
var ringLoader_Wrapper = vue_emotion_es("div")(ringLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
});
var ringLoader_Ring = vue_emotion_es("div")(ringLoader_templateObject4(), function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref4) {
  var size = _ref4.size,
      sizeUnit = _ref4.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref5) {
  var size = _ref5.size,
      sizeUnit = _ref5.sizeUnit,
      color = _ref5.color;
  return "".concat(size / 10).concat(sizeUnit, " solid ").concat(color);
}, function (_ref6) {
  var version = _ref6.version;
  return "".concat(version === 1 ? right : left, " 2s 0s infinite linear");
});
var RingLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 60
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h(ringLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(2, 1).map(function (i) {
      return h(ringLoader_Ring, {
        attrs: {
          color: props.color,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/riseLoader.js



function riseLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  background-color: ", ";\n  animation: ", ";\n  animation-fill-mode: both;\n"]);

  riseLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function riseLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: scale(0.4)}\n  25% {translateY(", "px)}\n  50% {transform: scale(1.1)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(0.75)}\n"]);

  riseLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function riseLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: scale(1.1)}\n  25% {translateY(-", "px)}\n  50% {transform: scale(0.4)}\n  75% {transform: translateY(", "px)}\n  100% {transform: translateY(0) scale(1.0)}\n"]);

  riseLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var riseAmount = 30;
var even = Object(index_esm["c" /* keyframes */])(riseLoader_templateObject(), riseAmount, riseAmount);
var odd = Object(index_esm["c" /* keyframes */])(riseLoader_templateObject2(), riseAmount, -riseAmount);
var riseLoader_Circle = vue_emotion_es("div")(riseLoader_templateObject3(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var version = _ref5.version;
  return "".concat(version % 2 === 0 ? even : odd, " 1s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)");
});
var RiseLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref6) {
    var props = _ref6.props,
        data = _ref6.data;
    return props.loading ? h("div", data, [utils_range(5, 1).map(function (i) {
      return h(riseLoader_Circle, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/rotateLoader.js




function rotateLoader_templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: ", ";\n  opacity: 0.8;\n  ", "\n"]);

  rotateLoader_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function rotateLoader_templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  animation: ", " 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);\n  animation-fill-mode: both;\n  ", "\n"]);

  rotateLoader_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function rotateLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  background-color: ", ";\n"]);

  rotateLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function rotateLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: rotate(0deg)}\n  50% {transform: rotate(180deg)}\n  100% {transform: rotate(360deg)}\n"]);

  rotateLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rotateLoader_rotate = Object(index_esm["c" /* keyframes */])(rotateLoader_templateObject());

var rotateLoader_fill = function fill(color, margin, size, sizeUnit) {
  return Object(index_esm["a" /* css */])(rotateLoader_templateObject2(), "".concat(size).concat(sizeUnit), "".concat(size).concat(sizeUnit), margin, color);
};

var rotateLoader_Wrapper = vue_emotion_es("div")(rotateLoader_templateObject3(), rotateLoader_rotate, function (_ref) {
  var color = _ref.color,
      margin = _ref.margin,
      size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return rotateLoader_fill(color, margin, size, sizeUnit);
});
var rotateLoader_Circle = vue_emotion_es("div")(rotateLoader_templateObject4(), function (_ref2) {
  var side = _ref2.side;
  return "".concat(side ? -28 : 25, "px");
}, function (_ref3) {
  var color = _ref3.color,
      margin = _ref3.margin,
      size = _ref3.size,
      sizeUnit = _ref3.sizeUnit;
  return "".concat(rotateLoader_fill(color, margin, size, sizeUnit));
});
var RotateLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data;
    return props.loading ? h(rotateLoader_Wrapper, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        color: props.color,
        margin: props.margin,
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }]), [utils_range(2).map(function (i) {
      return h(rotateLoader_Circle, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          side: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/scaleLoader.js



function scaleLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  animation: ", ";\n"]);

  scaleLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function scaleLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {transform: scaley(1.0)}\n  50% {transform: scaley(0.4)}\n  100% {transform: scaley(1.0)}\n"]);

  scaleLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var scale = Object(index_esm["c" /* keyframes */])(scaleLoader_templateObject());
var scaleLoader_Bar = vue_emotion_es("div")(scaleLoader_templateObject2(), function (_ref) {
  var width = _ref.width,
      widthUnit = _ref.widthUnit;
  return "".concat(width).concat(widthUnit);
}, function (_ref2) {
  var height = _ref2.height,
      heightUnit = _ref2.heightUnit;
  return "".concat(height).concat(heightUnit);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var radius = _ref4.radius,
      radiusUnit = _ref4.radiusUnit;
  return "".concat(radius).concat(radiusUnit);
}, function (_ref5) {
  var color = _ref5.color;
  return color;
}, function (_ref6) {
  var version = _ref6.version;
  return "".concat(scale, " 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ").concat(version * 0.1, "s infinite normal both running");
});
var ScaleLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    height: {
      type: Number,
      default: 35
    },
    heightUnit: {
      type: String,
      default: "px"
    },
    width: {
      type: Number,
      default: 4
    },
    widthUnit: {
      type: String,
      default: "px"
    },
    radius: {
      type: Number,
      default: 2
    },
    radiusUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref7) {
    var props = _ref7.props,
        data = _ref7.data;
    return props.loading ? h("div", data, [utils_range(5, 1).map(function (i) {
      return h(scaleLoader_Bar, {
        attrs: {
          color: props.color,
          height: props.height,
          heightUnit: props.heightUnit,
          width: props.width,
          widthUnit: props.widthUnit,
          radius: props.radius,
          radiusUnit: props.radiusUnit,
          margin: props.margin,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/skewLoader.js




function skewLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: ", ";\n  border-right: ", ";\n  border-bottom: ", ";\n  animation: ", " 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n  animation-fill-mode: both;\n"]);

  skewLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function skewLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}\n  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}\n  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}\n  100% {transform: perspective(100px) rotateX(0) rotateY(0)}\n"]);

  skewLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var skew = Object(index_esm["c" /* keyframes */])(skewLoader_templateObject());
var Triangle = vue_emotion_es("div")(skewLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit, " solid transparent");
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit, " solid transparent");
}, function (_ref3) {
  var size = _ref3.size,
      sizeUnit = _ref3.sizeUnit,
      color = _ref3.color;
  return "".concat(size).concat(sizeUnit, " solid ").concat(color);
}, skew);
var SkewLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 20
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data;
    return props.loading ? h(Triangle, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        color: props.color,
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }])) : null;
  }
};
// CONCATENATED MODULE: ./src/components/squareLoader.js




function squareLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  animation: ", " 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);\n  animation-fill-mode: both;\n"]);

  squareLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function squareLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  25% {transform: rotateX(180deg) rotateY(0)}\n  50% {transform: rotateX(180deg) rotateY(180deg)}\n  75% {transform: rotateX(0) rotateY(180deg)}\n  100% {transform: rotateX(0) rotateY(0)}\n"]);

  squareLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var square = Object(index_esm["c" /* keyframes */])(squareLoader_templateObject());
var Square = vue_emotion_es("div")(squareLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, square);
var SquareLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 50
    },
    sizeUnit: {
      type: String,
      default: "px"
    }
  },
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data;
    return props.loading ? h(Square, babel_helper_vue_jsx_merge_props_default()([data, {
      attrs: {
        color: props.color,
        size: props.size,
        sizeUnit: props.sizeUnit
      }
    }])) : null;
  }
};
// CONCATENATED MODULE: ./src/components/syncLoader.js



function syncLoader_templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  border-radius: 100%;\n  background-color: ", ";\n  animation: ", ";\n  box-sizing: content-box;\n"]);

  syncLoader_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function syncLoader_templateObject() {
  var data = _taggedTemplateLiteral(["\n  33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}\n"]);

  syncLoader_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var sync = Object(index_esm["c" /* keyframes */])(syncLoader_templateObject());
var syncLoader_Circle = vue_emotion_es("div")(syncLoader_templateObject2(), function (_ref) {
  var size = _ref.size,
      sizeUnit = _ref.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref2) {
  var size = _ref2.size,
      sizeUnit = _ref2.sizeUnit;
  return "".concat(size).concat(sizeUnit);
}, function (_ref3) {
  var margin = _ref3.margin;
  return margin;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var version = _ref5.version;
  return "".concat(sync, " 0.6s ease-in-out ").concat(version * 0.07, "s infinite normal both running");
});
var SyncLoader = {
  functional: true,
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#000000"
    },
    size: {
      type: Number,
      default: 15
    },
    sizeUnit: {
      type: String,
      default: "px"
    },
    margin: {
      type: String,
      default: "2px"
    }
  },
  render: function render(h, _ref6) {
    var props = _ref6.props,
        data = _ref6.data;
    return props.loading ? h("div", data, [utils_range(3, 1).map(function (i) {
      return h(syncLoader_Circle, {
        attrs: {
          color: props.color,
          margin: props.margin,
          size: props.size,
          sizeUnit: props.sizeUnit,
          version: i
        }
      });
    })]) : null;
  }
};
// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BarLoader", function() { return BarLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BeatLoader", function() { return BeatLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BounceLoader", function() { return BounceLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CircleLoader", function() { return CircleLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ClimbingBoxLoader", function() { return ClimbingBoxLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ClipLoader", function() { return ClipLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DotLoader", function() { return DotLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FadeLoader", function() { return FadeLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridLoader", function() { return GridLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HashLoader", function() { return HashLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MoonLoader", function() { return MoonLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PacmanLoader", function() { return PacmanLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PropagateLoader", function() { return PropagateLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PulseLoader", function() { return PulseLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RingLoader", function() { return RingLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RiseLoader", function() { return RiseLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RotateLoader", function() { return RotateLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ScaleLoader", function() { return ScaleLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SkewLoader", function() { return SkewLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SquareLoader", function() { return SquareLoader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SyncLoader", function() { return SyncLoader; });






















/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3c07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export flush */
/* unused harmony export hydrate */
/* unused harmony export cx */
/* unused harmony export merge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRegisteredStyles; });
/* unused harmony export injectGlobal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/* unused harmony export sheet */
/* unused harmony export caches */
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a23e");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;


//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4c06":
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "600f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * nano-assign v1.0.0
 * (c) 2017-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "92fa":
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a23e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_esm = (memoize);
//# sourceMappingURL=memoize.esm.js.map

// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_esm = (unitlessKeys);

// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.esm.js
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ var hash_esm = (murmurhash2_32_gc);
//# sourceMappingURL=hash.esm.js.map

// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.esm.js
var W = function da(X) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, J = 0, k, u = k = q = 0, l = 0, r = 0, z = 0, t = 0, K = e.length, I = K - 1, y, f = '', p = '', F = '', G = '', C; l < K;) {
      g = e.charCodeAt(l);
      l === I && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, K++, I++);

      if (0 === b + n + v + m) {
        if (l === I && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < K;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < I; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < I && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ea, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < B && (r = Y(O, f, z), C = H(3, k, r, c, D, A, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(fa, ha);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(ia, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, Y(c, f, z), k, h, a + 1);
            }

            F += k;
            k = z = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < B && void 0 !== (C = H(1, f, c, d, D, A, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            z = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < B * Z && H(0, f, c, d, D, A, p.length, h, a, h);
          A = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            A++;
            break;
          }

        default:
          A++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = z = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === J && (E = J);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * J) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      J = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < B && (C = H(2, p, r, d, D, A, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ja, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function Y(d, c, e) {
    var h = c.trim().split(ka);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = aa(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = aa(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function aa(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(la, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ma.test(a) ? a.replace(ba, ':-webkit-') + a.replace(ba, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ca, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ca, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === na.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(oa, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(pa, '$1'), e, c);
  }

  function ha(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(qa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < B; ++g) {
      switch (w = S[g].call(z, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        B = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[B++] = d;
            break;

          case Boolean:
            Z = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function z(d, c) {
    if (void 0 !== this && this.constructor === z) return da(d);
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < B) {
      var h = H(-1, c, e, e, D, A, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < B && (h = H(-2, a, e, e, D, A, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    A = D = 1;
    return a;
  }

  var ea = /^\0+/g,
      N = /[\0\r\f]/g,
      ba = /: */g,
      ma = /zoo|gra/,
      oa = /([,: ])(transform)/g,
      ka = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      ia = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ja = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      fa = /\(\s*(.*)\s*\)/g,
      qa = /([\s\S]*?);/g,
      ca = /-self|flex-/g,
      pa = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      na = /stretch|:\s*\w+\-(?:conte|avail)/,
      la = /([^-])(image-set\()/,
      A = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      B = 0,
      R = null,
      Z = 0,
      V = '';
  z.use = T;
  z.set = U;
  void 0 !== X && U(X);
  return z;
};

/* harmony default export */ var stylis_esm = (W);
//# sourceMappingURL=stylis.esm.js.map

// EXTERNAL MODULE: ./node_modules/stylis-rule-sheet/index.js
var stylis_rule_sheet = __webpack_require__("4c06");
var stylis_rule_sheet_default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet);

// CONCATENATED MODULE: ./node_modules/create-emotion/dist/index.esm.js






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = memoize_esm(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var index_esm_processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (unitless_esm[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var oldProcessStyleValue, contentValues, contentValuePattern; }

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (false) {}

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "production" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (false) {}

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet_default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new stylis_esm(stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "production" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + index_esm_processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + index_esm_processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return hash_esm(styles + identifierName) + identifierName;
  };

  if (false) { var sourceMappingUrlPattern, oldCreateClassName; }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (false) { var oldStylis; }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ var index_esm = __webpack_exports__["a"] = (createEmotion);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b127":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return VueSpinners; });
/* harmony import */ var D_GitHub_saeris_vue_spinners_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b127");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ffc1");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2af9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["BarLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["BeatLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["BounceLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["CircleLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ClimbingBoxLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ClipLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["DotLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["FadeLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["GridLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["HashLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["MoonLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["PacmanLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["PropagateLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["PulseLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["RingLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["RiseLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["RotateLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["ScaleLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["SkewLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["SquareLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["SyncLoader"]; });






function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(_components__WEBPACK_IMPORTED_MODULE_4__).forEach(function (_ref) {
    var _ref2 = Object(D_GitHub_saeris_vue_spinners_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_builtin_es6_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, 2),
        name = _ref2[0],
        component = _ref2[1];

    Vue.component(name, component);
  });
}
var VueSpinners = {
  install: install
};
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(VueSpinners);
}

/* harmony default export */ __webpack_exports__["w"] = (_components__WEBPACK_IMPORTED_MODULE_4__);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_setPublicPath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b635");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "install", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VueSpinners", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeatLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BounceLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClimbingBoxLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DotLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FadeLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoonLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PacmanLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropagateLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulseLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RingLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RiseLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotateLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkewLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SquareLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncLoader", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__["u"]; });



/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[/* default */ "w"]);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ffc1":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $entries = __webpack_require__("504c")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ })

/******/ });
//# sourceMappingURL=vue-spinners.common.js.map

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);