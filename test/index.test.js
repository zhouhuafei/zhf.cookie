const cookie = require('../dist/index.min');

test(`cookie操作`, () => {
    cookie.setCookie('hello', 'world');
    console.log( cookie.getCookie('hello')); // 'world'
});
