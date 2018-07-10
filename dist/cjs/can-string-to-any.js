/*can-string-to-any@1.1.0#can-string-to-any*/
'use strict';
module.exports = function (str) {
    switch (str) {
    case 'NaN':
    case 'Infinity':
        return +str;
    case 'null':
        return null;
    case 'undefined':
        return undefined;
    case 'true':
    case 'false':
        return str === 'true';
    default:
        var val = +str;
        if (!isNaN(val)) {
            return val;
        } else {
            return str;
        }
    }
};