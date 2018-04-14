# can-string-to-any

[![Build Status](https://travis-ci.org/canjs/can-string-to-any.svg?branch=master)](https://travis-ci.org/canjs/can-string-to-any)

Convert strings to equivalent JavaScript values. Works in NodeJS and in all browsers.

## Use

```js
import stringToAny from 'can-string-to-any';

stringToAny("null")  //-> null
stringToAny("-3")     //-> -3
stringToAny("false") //-> false
stringToAny("NaN")   //-> NaN
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-string-to-any/dist/global/can-string-to-any.js'></script>
```
