# base64-binary

A polyfill built upon **atob/btoa** (browser) so as to support base64 to/from binary (Uint8Array/ArrayBuffer) conversion

## Motivation

It seems that the built-in **atob** and **btoa** functions don't support encoding binary (**Uint8Array** or **ArrayBuffer**) to base64 string and decoding base64 string to binary directly.  However, with the help of this polyfill which adds a thin layer to make extra conversion between **String** and **Uint8Array**, we can make it by standing on the shoulders of giants. 

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
