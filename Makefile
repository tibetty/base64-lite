base64.min.js: base64-bin.js
	npx uglifyjs base64-bin.js -c -m -o dist/base64.min.js
