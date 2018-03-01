'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('cookie', function () {
    function Cookie() {}

    // 设置cookie
    Cookie.prototype.setCookie = function (name, value, expires, domain, path, secure) {
        var myDate = new Date();
        var myTime = myDate.getTime();
        myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000); // 单位是天 1天 1/24天(1小时)
        var cookie = name + '=' + value;
        if (expires) {
            cookie += '; expires=' + myDate;
        }
        if (domain) {
            cookie += '; domain=' + domain;
        }
        if (path) {
            cookie += '; path=' + path;
        }
        if (secure) {
            cookie += '; secure=' + secure;
        }
        document.cookie = cookie;
    };

    // 获取cookie
    Cookie.prototype.getCookie = function (name) {
        var cookie = document.cookie;
        var arr = cookie.split('; ');
        var value = '';
        arr.forEach(function (v) {
            var arr2 = v.split('=');
            if (arr2[0] === name) {
                value = arr2[1];
            }
        });
        return value;
    };

    // 清除cookie
    Cookie.prototype.removeCookie = function (name, domain, path, secure) {
        this.setCookie(name, '', -1, domain, path, secure);
    };

    return new Cookie();
});