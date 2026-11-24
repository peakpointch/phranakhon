(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      exports.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URL = exports.DNS = void 0;
      exports.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports.DNS = DNS;
      var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports.URL = URL;
      function v35(name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL;
        return generateUUID;
      }
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version;
      exports.default = _default;
    }
  });

  // node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/.pnpm/@xatom+core@1.0.12/node_modules/@xatom/core/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/@xatom+core@1.0.12/node_modules/@xatom/core/dist/index.js"(exports, module) {
      var $iEn1Z$uuid = require_commonjs_browser();
      function $parcel$exportWildcard(dest, source) {
        Object.keys(source).forEach(function(key) {
          if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
              return source[key];
            }
          });
        });
        return dest;
      }
      function $parcel$export(e, n, v, s) {
        Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
      }
      var $90b1e0f272b5544a$exports = {};
      $parcel$export($90b1e0f272b5544a$exports, "WFAuth", () => $90b1e0f272b5544a$export$cb2138cd710ea58a);
      var $90b1e0f272b5544a$export$cb2138cd710ea58a = class {
        constructor(config = {}) {
          this.config = config;
        }
        isLoggedIn() {
          return !!this.user;
        }
        getRole() {
          return this.role;
        }
        getUser() {
          return this.user;
        }
        getConfig() {
          return this.config;
        }
        logout() {
          this.user = null;
          this.role = null;
          this.config = null;
        }
        setUser(user) {
          this.user = user;
        }
        setRole(role) {
          this.role = role;
        }
        setConfig(config) {
          this.config = config;
        }
      };
      var $336c7a32b438dc35$exports = {};
      $parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", () => $336c7a32b438dc35$export$42f600804a30f397);
      var $336c7a32b438dc35$export$42f600804a30f397 = class {
        constructor(auth) {
          this.auth = auth;
        }
        allowTo(role) {
          return this.auth.getRole() === role;
        }
        disallowedTo(role) {
          return this.auth.getRole() !== role;
        }
        getAuth() {
          return this.auth;
        }
      };
      var $5ce0995b4e579efe$exports = {};
      $parcel$export($5ce0995b4e579efe$exports, "WFComponent", () => $5ce0995b4e579efe$export$b8941e06d24ae728);
      var $30d957643bf2e67a$exports = {};
      var $62881ab850a57a38$exports = {};
      $parcel$export($62881ab850a57a38$exports, "debug", () => $62881ab850a57a38$export$1c9f709888824e05);
      var $62881ab850a57a38$export$1c9f709888824e05 = (...args) => {
        if (window.WFDebug) console.log(...args);
      };
      var $9e73fdbf37a9aa00$exports = {};
      $parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", () => $9e73fdbf37a9aa00$export$7ffef3582c93037b);
      function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
        const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue;
      }
      var $100caf27c28c32c0$exports = {};
      $parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", () => $100caf27c28c32c0$export$1346b4a9ff9b6881);
      var $100caf27c28c32c0$export$1346b4a9ff9b6881 = () => {
        const _data = {};
        new URLSearchParams(location.search).forEach((val, key) => {
          _data[key] = val;
        });
        return _data;
      };
      var $e533c87ae7d96e3e$exports = {};
      $parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", () => $e533c87ae7d96e3e$export$5fe4b019801f5ef1);
      function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
        const xpathParts = [];
        while (node && node !== parent && node.nodeType === Node.ELEMENT_NODE) {
          let xpath = node.nodeName.toLowerCase();
          if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
          else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
          xpathParts.unshift(xpath);
          node = node.parentNode;
        }
        return xpathParts.join("/");
      }
      var $4117225480b0cc44$exports = {};
      $parcel$export($4117225480b0cc44$exports, "navigate", () => $4117225480b0cc44$export$ff7962acd6052c28);
      var $4117225480b0cc44$export$ff7962acd6052c28 = (arg) => {
        if (typeof arg === "string") window.location.assign(arg);
        else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
        else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
      };
      var $0b3f70b8f06eedca$exports = {};
      $parcel$export($0b3f70b8f06eedca$exports, "parse", () => $0b3f70b8f06eedca$export$98e6a39c04603d36);
      $parcel$export($0b3f70b8f06eedca$exports, "compile", () => $0b3f70b8f06eedca$export$ef7acd7185315e22);
      $parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", () => $0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
      $parcel$export($0b3f70b8f06eedca$exports, "match", () => $0b3f70b8f06eedca$export$4659b591c19bdf3d);
      $parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", () => $0b3f70b8f06eedca$export$71304158c7e35877);
      $parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", () => $0b3f70b8f06eedca$export$968e97c88708237a);
      $parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", () => $0b3f70b8f06eedca$export$9a9303716def6456);
      $parcel$export($0b3f70b8f06eedca$exports, "routeMatch", () => $0b3f70b8f06eedca$export$6c50148cf1d992bd);
      function $0b3f70b8f06eedca$var$lexer(str) {
        const tokens = [];
        let i = 0;
        while (i < str.length) {
          const char = str[i];
          if (char === "*" || char === "+" || char === "?") {
            tokens.push({
              type: "MODIFIER",
              index: i,
              value: str[i++]
            });
            continue;
          }
          if (char === "\\") {
            tokens.push({
              type: "ESCAPED_CHAR",
              index: i++,
              value: str[i++]
            });
            continue;
          }
          if (char === "{") {
            tokens.push({
              type: "OPEN",
              index: i,
              value: str[i++]
            });
            continue;
          }
          if (char === "}") {
            tokens.push({
              type: "CLOSE",
              index: i,
              value: str[i++]
            });
            continue;
          }
          if (char === ":") {
            let name = "";
            let j = i + 1;
            while (j < str.length) {
              const code = str.charCodeAt(j);
              if (
                // `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95
              ) {
                name += str[j++];
                continue;
              }
              break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
              type: "NAME",
              index: i,
              value: name
            });
            i = j;
            continue;
          }
          if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while (j < str.length) {
              if (str[j] === "\\") {
                pattern += str[j++] + str[j++];
                continue;
              }
              if (str[j] === ")") {
                count--;
                if (count === 0) {
                  j++;
                  break;
                }
              } else if (str[j] === "(") {
                count++;
                if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
              }
              pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
              type: "PATTERN",
              index: i,
              value: pattern
            });
            i = j;
            continue;
          }
          tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
          });
        }
        tokens.push({
          type: "END",
          index: i,
          value: ""
        });
        return tokens;
      }
      function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
        const tokens = $0b3f70b8f06eedca$var$lexer(str);
        const { prefixes = "./" } = options;
        const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
        const result = [];
        let key = 0;
        let i = 0;
        let path = "";
        const tryConsume = (type) => {
          if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
        };
        const mustConsume = (type) => {
          const value = tryConsume(type);
          if (value !== void 0) return value;
          const { type: nextType, index } = tokens[i];
          throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
        };
        const consumeText = () => {
          let result2 = "";
          let value;
          while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) result2 += value;
          return result2;
        };
        while (i < tokens.length) {
          const char = tryConsume("CHAR");
          const name = tryConsume("NAME");
          const pattern = tryConsume("PATTERN");
          if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
              path += prefix;
              prefix = "";
            }
            if (path) {
              result.push(path);
              path = "";
            }
            result.push({
              name: name || key++,
              prefix,
              suffix: "",
              pattern: pattern || defaultPattern,
              modifier: tryConsume("MODIFIER") || ""
            });
            continue;
          }
          const value = char || tryConsume("ESCAPED_CHAR");
          if (value) {
            path += value;
            continue;
          }
          if (path) {
            result.push(path);
            path = "";
          }
          const open = tryConsume("OPEN");
          if (open) {
            const prefix = consumeText();
            const name2 = tryConsume("NAME") || "";
            const pattern2 = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
              name: name2 || (pattern2 ? key++ : ""),
              pattern: name2 && !pattern2 ? defaultPattern : pattern2,
              prefix,
              suffix,
              modifier: tryConsume("MODIFIER") || ""
            });
            continue;
          }
          mustConsume("END");
        }
        return result;
      }
      function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
        return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
      }
      function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
        const reFlags = $0b3f70b8f06eedca$var$flags(options);
        const { encode = (x) => x, validate = true } = options;
        const matches = tokens.map((token) => {
          if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
        });
        return (data) => {
          let path = "";
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (typeof token === "string") {
              path += token;
              continue;
            }
            const value = data ? data[token.name] : void 0;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
              if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
              if (value.length === 0) {
                if (optional) continue;
                throw new TypeError(`Expected "${token.name}" to not be empty`);
              }
              for (let j = 0; j < value.length; j++) {
                const segment = encode(value[j], token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
              }
              continue;
            }
            if (typeof value === "string" || typeof value === "number") {
              const segment = encode(String(value), token);
              if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
              path += token.prefix + segment + token.suffix;
              continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
          }
          return path;
        };
      }
      function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
        const keys = [];
        const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
        return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
      }
      function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
        const { decode = (x) => x } = options;
        return function(pathname) {
          const m = re.exec(pathname);
          if (!m) return false;
          const { 0: path, index } = m;
          const params = /* @__PURE__ */ Object.create(null);
          for (let i = 1; i < m.length; i++) {
            if (m[i] === void 0) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value) => {
              return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
          }
          return {
            path,
            index,
            params
          };
        };
      }
      function $0b3f70b8f06eedca$var$escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function $0b3f70b8f06eedca$var$flags(options) {
        return options && options.sensitive ? "" : "i";
      }
      function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
        if (!keys) return path;
        const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
        let index = 0;
        let execResult = groupsRegex.exec(path.source);
        while (execResult) {
          keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
          execResult = groupsRegex.exec(path.source);
        }
        return path;
      }
      function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
        const parts = paths.map((path) => $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
        return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
      }
      function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
        return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
      }
      function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
        const { strict = false, start = true, end = true, encode = (x) => x, delimiter = "/#?", endsWith = "" } = options;
        const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
        const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
        let route = start ? "^" : "";
        for (const token of tokens) if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
        else {
          const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
          const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                const mod = token.modifier === "*" ? "?" : "";
                route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
              } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
          } else route += `(?:${prefix}${suffix})${token.modifier}`;
        }
        if (end) {
          if (!strict) route += `${delimiterRe}?`;
          route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
        } else {
          const endToken = tokens[tokens.length - 1];
          const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
          if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
          if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
        }
        return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
      }
      function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
        if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
        if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
        return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
      }
      function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
        return function(path) {
          var keys = [];
          var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
          return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for (var i = 0; i < keys.length; i++) {
              key = keys[i];
              param = m[i + 1];
              if (!param) continue;
              params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
              if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
          };
        };
      }
      var $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {}) => {
        return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
      };
      function $0b3f70b8f06eedca$var$decodeParam(param) {
        try {
          return decodeURIComponent(param);
        } catch (_) {
          throw new Error('failed to decode param "' + param + '"');
        }
      }
      var $36bdd128d4111a37$exports = {};
      $parcel$export($36bdd128d4111a37$exports, "createComponent", () => $36bdd128d4111a37$export$60e54eaca7e7fb38);
      var $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type) => {
        return new (0, $5ce0995b4e579efe$export$b8941e06d24ae728)(document.createElement(type));
      };
      $parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
      $parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
      var $5ce0995b4e579efe$export$b8941e06d24ae728 = class _$5ce0995b4e579efe$export$b8941e06d24ae728 {
        constructor(query) {
          if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
              this.element = el;
              this.updateClone();
            } else throw new Error(`Could not find ${query}`);
          } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
          } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
          } else if (query instanceof _$5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
          } else throw new Error(`Could not find ${query}`);
        }
        updateClone() {
          this.cloneEl = this.element.cloneNode(true);
        }
        getElement() {
          return this.element;
        }
        updateTextViaAttrVar(keyPair) {
          const fields = {};
          const addEl = (key, val) => {
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
          };
          if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
          const _els = this.getChildAsComponents(`[xa-var]`);
          _els.forEach((el) => {
            addEl(el.getAttribute("xa-var"), el.getElement());
          });
          Object.keys(keyPair).forEach((key) => {
            if (key in fields) fields[key].forEach((d) => {
              d.textContent = keyPair[key].toString();
            });
          });
        }
        updateTextVariable(keyPair) {
          if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key) => {
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
          });
          else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el) => Array.from(el.childNodes).filter((node) => node instanceof Text && node.textContent.trim().length > 0)).flat();
            Object.keys(keyPair).forEach((key) => {
              els.filter((el) => el.textContent.includes(`{{${key}}}`)).forEach((el) => {
                const path = (0, $e533c87ae7d96e3e$export$5fe4b019801f5ef1)(el.parentElement, this.cloneEl);
                const _el = (0, $9e73fdbf37a9aa00$export$7ffef3582c93037b)(path, this.element);
                if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                else console.log(el, _el, "not found", path, el.parentElement, this);
              });
            });
          }
        }
        setAttribute(key, value) {
          this.element.setAttribute(key, value);
        }
        removeAttribute(key) {
          this.element.removeAttribute(key);
        }
        getAttribute(key) {
          return this.element.getAttribute(key);
        }
        hasAttribute(key) {
          return this.element.hasAttribute(key);
        }
        getChildAsComponents(selector) {
          return Array.from(this.element.querySelectorAll(selector)).map((el) => new _$5ce0995b4e579efe$export$b8941e06d24ae728(el));
        }
        getChildAsComponent(selector) {
          return new _$5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
        }
        getManyChildAsComponents(selectors) {
          let _els = {};
          Object.keys(selectors).forEach((key) => {
            _els[key] = new _$5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
          });
          return _els;
        }
        getCssClass() {
          return Array.from(this.element.classList);
        }
        addCssClass(className) {
          this.element.classList.add(className);
          this.cloneEl.classList.add(className);
        }
        removeCssClass(className) {
          this.element.classList.remove(className);
          this.cloneEl.classList.remove(className);
        }
        replaceCssClass(className, newClassName) {
          this.element.classList.replace(className, newClassName);
          this.cloneEl.classList.replace(className, newClassName);
        }
        toggleCssClass(className) {
          this.element.classList.toggle(className);
          this.cloneEl.classList.toggle(className);
        }
        on(type, listener, options) {
          this.element.addEventListener(type, listener, options);
        }
        off(type, listener, options) {
          this.element.removeEventListener(type, listener, options);
        }
        setText(text) {
          this.getElement().innerText = text.toString();
        }
        getText() {
          return this.getElement().innerText;
        }
        setTextContent(text) {
          this.getElement().textContent = text;
        }
        getTextContent() {
          return this.getElement().textContent;
        }
        setHTML(htmlText) {
          this.getElement().innerHTML = htmlText;
        }
        getHTML() {
          return this.getElement().innerHTML;
        }
        getCloneAsComponent() {
          return new _$5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
        }
        setStyle(style = {}) {
          Object.keys(style).forEach((key) => {
            this.element.style[key] = style[key];
          });
        }
        getStyle() {
          return window.getComputedStyle(this.element);
        }
        appendChild(child) {
          this.element.appendChild(new _$5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
        }
        remove() {
          this.element.remove();
        }
        removeAllChildren() {
          this.element.replaceChildren();
        }
      };
      var $0105599dd5ebe189$exports = {};
      $parcel$export($0105599dd5ebe189$exports, "WFDynamicList", () => $0105599dd5ebe189$export$688e73055717bd51);
      var $0105599dd5ebe189$export$688e73055717bd51 = class extends (0, $5ce0995b4e579efe$export$b8941e06d24ae728) {
        constructor(query, config) {
          super(query);
          __publicField(this, "showLoadingState", false);
          if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
          else this.rowComponent = new (0, $5ce0995b4e579efe$export$b8941e06d24ae728)(config.rowSelector);
          this.rowComponent.remove();
          if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new (0, $5ce0995b4e579efe$export$b8941e06d24ae728)(config.loaderSelector);
            this.loaderComponent.remove();
          }
          if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new (0, $5ce0995b4e579efe$export$b8941e06d24ae728)(config.emptySelector);
            this.emptyComponent.remove();
          }
        }
        rowRenderer(cb) {
          this.rowRendererCB = cb;
        }
        emptyRenderer(cb) {
          this.emptyRendererCB = cb;
        }
        loaderRenderer(cb) {
          this.loaderRendererCB = cb;
        }
        setData(data) {
          this.data = data;
          this.render();
        }
        render() {
          if (!this.rowRendererCB) throw new Error("Unable to find renderer");
          this.hideLoading();
          this.removeAllChildren();
          if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
          this.data.map((rowData, index, data) => this.rowRendererCB({
            index,
            rowData,
            rowElement: this.rowComponent.getCloneAsComponent(),
            data
          })).filter((d) => d).forEach((d) => {
            this.appendChild(d);
          });
          if (this.showLoadingState) this.showLoading();
        }
        changeLoadingStatus(state) {
          this.showLoadingState = state;
          if (state) this.showLoading();
          else this.hideLoading();
        }
        showLoading() {
          this.hideLoading();
          if (!this.loaderComponent) return;
          if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
          } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
          }
        }
        showEmpty() {
          this.hideEmpty();
          if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
          } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
          }
        }
        hideLoading() {
          if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
        }
        hideEmpty() {
          if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
        }
        forceRender() {
          this.render();
        }
      };
      var $ce18c18667e54846$exports = {};
      $parcel$export($ce18c18667e54846$exports, "WFFormComponent", () => $ce18c18667e54846$export$e7173e584c7cbeff);
      var $ce18c18667e54846$export$e7173e584c7cbeff = class extends (0, $5ce0995b4e579efe$export$b8941e06d24ae728) {
        constructor(query) {
          super(query);
          __publicField(this, "defaultFormDisplayStyle", "");
          this.formComponent = this.getChildAsComponents("form")[0];
          this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
        }
        getFormData() {
          const _data = {};
          new FormData(this.formComponent.getElement()).forEach((val, key) => {
            if (_data[key]) _data[key] = [
              _data[key],
              val
            ].flat();
            else _data[key] = val;
          });
          return _data;
        }
        setFromData(data) {
          Object.keys(data).forEach((key) => {
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
          });
        }
        onFormSubmit(cb) {
          this.formComponent.getElement().onsubmit = (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
          };
        }
        submitWebflowForm() {
          const wfForm = Object.keys(this.formComponent.getElement()).filter((d) => d.includes("jQuery")).map((d) => this.formComponent.getElement()[d]).filter((d) => typeof d === "object" && ".wForm" in d).map((d) => d[".wForm"]).reduce((d) => d);
          if (wfForm && wfForm.handler) wfForm.handler(wfForm);
          else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
        }
        getFormComponent() {
          return this.formComponent;
        }
        getSuccessComponent() {
          return this.getChildAsComponents(".w-form-done")[0];
        }
        getErrorComponent() {
          return this.getChildAsComponents(".w-form-fail")[0];
        }
        showSuccessState() {
          this.formComponent.getElement().style.display = "none";
          this.getErrorComponent().getElement().style.display = "none";
          this.getSuccessComponent().getElement().style.display = "block";
        }
        showErrorState() {
          this.getSuccessComponent().getElement().style.display = "none";
          this.getErrorComponent().getElement().style.display = "block";
          this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
        }
        showForm() {
          this.getErrorComponent().getElement().style.display = "none";
          this.getSuccessComponent().getElement().style.display = "none";
          this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
        }
        disableForm() {
          const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
          Array.from(_els).forEach((el) => {
            el.setAttribute("disabled", "disabled");
          });
        }
        enableForm() {
          const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
          Array.from(_els).forEach((el) => {
            el.removeAttribute("disabled");
          });
        }
        getSubmitButton() {
          return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
        }
        resetForm() {
          this.formComponent.getElement().reset();
        }
        updateSubmitButtonText(text) {
          this.getSubmitButton().setAttribute("value", text);
        }
      };
      var $b73002af79232c1a$exports = {};
      $parcel$export($b73002af79232c1a$exports, "WFRoute", () => $b73002af79232c1a$export$4e1b92c1162557be);
      var $b73002af79232c1a$export$4e1b92c1162557be = class {
        constructor(route) {
          __publicField(this, "middlewareAllowExecutionOnFail", false);
          this.route = route;
        }
        withMiddleware(middleware, role, type = "allow", options = {}) {
          this.middleware = middleware;
          this.middlewareRole = role;
          this.middlewareType = type;
          if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
          if ("onError" in options) this.middlewareErrorFn = options.onError;
          return this;
        }
        validateRole() {
          return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
        }
        execute(fn) {
          const _match = (0, $0b3f70b8f06eedca$export$6c50148cf1d992bd)(this.route, location.pathname);
          if (_match) {
            (0, $62881ab850a57a38$export$1c9f709888824e05)("matched fn start", this.route, location.pathname);
            if (this.middleware) {
              const canAccess = this.validateRole();
              (0, $62881ab850a57a38$export$1c9f709888824e05)("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
              if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                ..._match,
                ...(0, $100caf27c28c32c0$export$1346b4a9ff9b6881)()
              }, canAccess, this.middleware.getAuth());
              else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
              ..._match,
              ...(0, $100caf27c28c32c0$export$1346b4a9ff9b6881)()
            }, true);
            (0, $62881ab850a57a38$export$1c9f709888824e05)("matched fn end", this.route, location.pathname);
          } else (0, $62881ab850a57a38$export$1c9f709888824e05)("did not match", this.route, location.pathname);
          return this;
        }
      };
      var $16d2504bbe4bb459$exports = {};
      $parcel$export($16d2504bbe4bb459$exports, "onReady", () => $16d2504bbe4bb459$export$ef1639a4b889352d);
      var $16d2504bbe4bb459$export$ef1639a4b889352d = (cb) => {
        window.Webflow || (window.Webflow = []);
        window.Webflow.push(() => {
          cb();
        });
      };
      var $78395a99ad91c494$exports = {};
      $parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", () => $78395a99ad91c494$export$bc36999d76b95c72);
      var $78395a99ad91c494$export$bc36999d76b95c72 = class {
        constructor(formName = "") {
          __publicField(this, "loading", false);
          __publicField(this, "loadingListener", /* @__PURE__ */ new Map());
          __publicField(this, "successListener", /* @__PURE__ */ new Map());
          __publicField(this, "errorListener", /* @__PURE__ */ new Map());
          this.fromName = formName;
          this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
        }
        setFormName(formName) {
          this.fromName = formName;
        }
        getFormName() {
          return this.fromName;
        }
        setFormData(data) {
          this.data = data;
        }
        getFormData() {
          return this.data;
        }
        isLoading() {
          return this.loading;
        }
        onLoadingChange(fn) {
          const _id = (0, $iEn1Z$uuid.v4)();
          this.loadingListener.set(_id, fn);
          return () => {
            this.loadingListener.delete(_id);
          };
        }
        onSuccess(fn) {
          const _id = (0, $iEn1Z$uuid.v4)();
          this.successListener.set(_id, fn);
          return () => {
            this.successListener.delete(_id);
          };
        }
        onError(fn) {
          const _id = (0, $iEn1Z$uuid.v4)();
          this.errorListener.set(_id, fn);
          return () => {
            this.errorListener.delete(_id);
          };
        }
        updateLoadingState(state) {
          this.loading = state;
          this.loadingListener.forEach((fn) => {
            fn(this.loading);
          });
        }
        formSubmitted() {
          this.successListener.forEach((fn) => {
            fn();
          });
        }
        formFailed() {
          this.errorListener.forEach((fn) => {
            fn();
          });
        }
        submitForm() {
          const _updateStatus = (state) => {
            this.updateLoadingState(state);
          };
          const onFailed = () => {
            this.formFailed();
          };
          const onDone = () => {
            this.formSubmitted();
          };
          _updateStatus(true);
          window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
              name: this.fromName || "Untitled Form",
              source: location.href,
              test: false,
              fields: this.data,
              dolphin: false
            },
            dataType: "json",
            crossDomain: true
          }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
          }).fail(function() {
            _updateStatus(false);
            onFailed();
          });
        }
      };
      $parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
      $parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
      $parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
      $parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
      $parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
      $parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
      $parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
      $parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
      $parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);
    }
  });

  // src/app.ts
  var import_core = __toESM(require_dist(), 1);

  // src/modules/wfvideo.ts
  var VIDEO_COMPONENT_SELECTOR = "[data-player-component]";
  var VIDEO_SELECTOR = "[data-player-video]";
  var CONTROLS_SELECTOR = '[data-player-element="controls"]';
  var PLAY_BUTTON_SELECTOR = '[data-player-button="play"]';
  var MUTE_BUTTON_SELECTOR = '[data-player-button="mute"]';
  function createVideoComponent(component) {
    const videoElement = component.querySelector(VIDEO_SELECTOR);
    const controls = component.querySelector(CONTROLS_SELECTOR);
    const playButton = component.querySelector(PLAY_BUTTON_SELECTOR);
    const muteButton = component.querySelector(MUTE_BUTTON_SELECTOR);
    if (!videoElement) {
      throw new Error(`WfVideo: Video element not found`);
    }
    const isAutoplay = JSON.parse(videoElement.dataset.playerAutoplay || "true");
    const isMuted = JSON.parse(videoElement.dataset.playerMuted || "true");
    videoElement.autoplay = false;
    videoElement.removeAttribute("autoplay");
    videoElement.loop = true;
    videoElement.muted = isMuted;
    if (isAutoplay) {
      videoElement.play();
    }
    function showControls() {
      controls ? controls.style.opacity = "1" : null;
    }
    function hideControls() {
      controls ? controls.style.opacity = "0" : null;
    }
    function togglePlay() {
      if (!playButton) return;
      const pauseState = playButton.querySelector('[data-player-button-state="pause"]');
      const playState = playButton.querySelector('[data-player-button-state="play"]');
      if (!pauseState || !playState) {
        console.warn("Video: Controls are missing");
        return;
      }
      ;
      if (videoElement.paused) {
        videoElement.play();
        playState.classList.add("hide");
        pauseState.classList.remove("hide");
      } else {
        videoElement.pause();
        playState.classList.remove("hide");
        pauseState.classList.add("hide");
        showControls();
      }
    }
    function toggleMute() {
      if (!muteButton) return;
      const muteState = muteButton.querySelector('[data-player-button-state="unmuted"]');
      const unmuteState = muteButton.querySelector('[data-player-button-state="muted"]');
      if (!muteState || !unmuteState) {
        console.warn("Video: Controls are missing");
        return;
      }
      ;
      if (videoElement.muted) {
        videoElement.muted = false;
        muteState.classList.remove("hide");
        unmuteState.classList.add("hide");
      } else {
        videoElement.muted = true;
        muteState.classList.add("hide");
        unmuteState.classList.remove("hide");
      }
    }
    showControls();
    videoElement.addEventListener("pause", showControls);
    component.addEventListener("mouseenter", showControls);
    component.addEventListener("mouseleave", () => {
      if (!videoElement.paused) {
        hideControls();
      }
    });
    playButton?.addEventListener("click", togglePlay);
    muteButton?.addEventListener("click", toggleMute);
  }
  function initWfVideo(doc = document) {
    const components = doc.querySelectorAll(VIDEO_COMPONENT_SELECTOR);
    components.forEach((component) => {
      createVideoComponent(component);
    });
  }

  // src/app.ts
  (0, import_core.onReady)(() => {
    global();
    const videoRoutes = ["/", "/thai-garden", "/en/restaurant", "/en/thai-garden"];
    for (const path of videoRoutes) {
      new import_core.WFRoute(path).execute(() => {
        initWfVideo();
      });
    }
  });
  function global() {
  }
})();
//# sourceMappingURL=app.js.map
