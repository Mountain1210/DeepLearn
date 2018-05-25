import * as tf from '@tensorflow/tfjs'

"use strict";
document.write('<h1>H222ello World!!!</h1>');
　　[1, 2, 3].map(function (x) {
	// console.log(x)
　　  return x * x;
　　});

document.write('<h1>=============================================================================================</h1>');

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
	console.log(tf)
	// const initialValues = tf.zeros([5]);
	//     const biases = tf.variable(initialValues);
	//     biases.print();
	//     console.log(Object.prototype.toString.call(biases));

	//     const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
	//     biases.assign(updatedValues);
	//     biases.print();
	//     console.log('----------------------------------------');
	// const t = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
	// const s = tf.scalar(3);
	// tf.print(t,s,t.add(s),t.mul(s))

 	const a = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);
    const b = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);

    const a_plus_b = a.add(b);
    a_plus_b.print();

    const a_sub_b = a.sub(b);
    a_sub_b.print();

    const a_mul_b = a.mul(b);
    a_mul_b.print();