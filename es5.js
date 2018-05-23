'use strict';

var _tfjs = require('@tensorflow/tfjs');

var tf = _interopRequireWildcard(_tfjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

"use strict";
document.write('<h1>H222ello World!!!</h1>');
[1, 2, 3].map(function (x) {
	console.log(x);
	return x * x;
});

document.write('<h1>=============================================================================================</h1>');

var shape = [2, 3]; // 2行，3列
var a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
a.print();
console.log(Object.prototype.toString.call(a));

var b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
b.print();
