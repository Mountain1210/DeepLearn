import * as tf from '@tensorflow/tfjs'

"use strict";
document.write('<h1>H222ello World!!!</h1>');
　　[1, 2, 3].map(function (x) {
	console.log(x)
　　  return x * x;
　　});

document.write('<h1>=============================================================================================</h1>');

const shape = [2, 3]; // 2行，3列
const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
a.print();
console.log(Object.prototype.toString.call(a));

const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
b.print();