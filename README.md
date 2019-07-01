# base64-binary

A polyfill built upon **atob/btoa** (browser) so as to support base64 to/from binary (Uint8Array/ArrayBuffer) conversion

## Motivation

The built-in **atob** and **btoa** functions don't support encoding binary (typically in **Uint8Array** or **ArrayBuffer** types) to base64 string and decoding base64 string to bindary, although they actually have done the right work, and this polyfill is designed to bridge this gap by adding extra translation between **String** and **Uint8Array** 

## Usage

*Add reference in your HTML file*
```html
...
<script type="text/javascript" src="/path/to/base64-lite.js"></script>
...
```

*Now you can make base64 codec for binary data*
```js
const bin = base64.decode("hzw4NdSJ0NzaEKo9hSKiH+X5ViFAh+hmYDuorCqDjEk=");
console.log(base64.encode(bin));
```

## Dependencies
Browser with ES5 support

## License
Written in 2019 by tibetty <xihua.duan@gmail.com>
