// import * as tf from '@tensorflow/tfjs'

"use strict";
document.write('<h1>Hello World!!!</h1>');
　　[1, 2, 3].map(function (x) {
	// console.log(x)
　　  return x * x;
　　});

document.write('<h1>====index=========================================================================================</h1>');

// const shape = [2, 3]; // 2行，3列
// const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
// a.print();
// console.log(Object.prototype.toString.call(a));

// const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
// b.print();

 	// const a = tf.scalar(3.14);

  //   a.print(); // 输出零维张量

  //   const b = tf.tensor2d([[2, 3, 4], [5, 6, 7]]);
  //   b.print(); // 输出二维张量

  //   const c = tf.zeros([2, 3]);
  //   c.print(); // 输出2行3列的值全是0的张量

  //   const d = tf.ones([3, 5]);
  //   d.print(); // 输出3行5列的值全是1的张量
	// console.log(tf)
	// // const initialValues = tf.zeros([5]);
	// //     const biases = tf.variable(initialValues);
	// //     biases.print();
	// //     console.log(Object.prototype.toString.call(biases));

	// //     const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
	// //     biases.assign(updatedValues);
	// //     biases.print();
	// //     console.log('----------------------------------------');
	// // const t = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
	// // const s = tf.scalar(3);
	// // tf.print(t,s,t.add(s),t.mul(s))

 // 	const a = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);
 //    const b = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);

 //    const a_plus_b = a.add(b);
 //    a_plus_b.print();

 //    const a_sub_b = a.sub(b);
 //    a_sub_b.print();

 //    const a_mul_b = a.mul(b);
 //    a_mul_b.print();
 //
 let {r,g,b}={r:'134',g:'245',b:'567'};
 console.log({r,g,b})
 function generateRandomRgbColors(m) {
  const rawInputs = [];

  for (let i = 0; i < m; i++) {
   rawInputs.push(generateRandomRgbColor());
  }
  console.log(rawInputs)
  return rawInputs;
 }

 function generateRandomRgbColor() {
  return [
   randomIntFromInterval(0, 255),
   randomIntFromInterval(0, 255),
   randomIntFromInterval(0, 255),
  ];
 }

 function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

 // generateRandomRgbColors(3);

 function getAccessibleColor(rgb) {
	 let [ r, g, b ] = rgb;
	 console.log([ r, g, b ] )

	 let color = [r / 255, g / 255, b / 255];

	 let c = color.map((col) => {
	  if (col <= 0.03928) {
	   return col / 12.92;
	  }
	  return Math.pow((col + 0.055) / 1.055, 2.4);
	 });

	 let L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);

	 return (L > 0.179)
	  ? [ 0, 1 ] // black
	  : [ 1, 0 ]; // white
}


function generateColorSet(m) {
 	const rawInputs = generateRandomRgbColors(m);
 	const rawTargets = rawInputs.map(getAccessibleColor);
	console.log(rawInputs);
	console.log(rawTargets);
	 return { rawInputs, rawTargets };
}

generateColorSet(3);
