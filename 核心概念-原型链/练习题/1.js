// 所有的对象都是通过new 的方式产生的

// toString 方法属于Object.toString  他会把对象转换成字符串形式
// 这种格式并非每个对象想要的
// 1. 解释数组的toString 为什么能得到不同的格式
// 2. 如果自己的构造函数希望改变toString 如何改变

// user = new Object()
const user = {
  name: "zhangsan",
  age: 18,
};

// console.log(user.__proto__.__proto__);
console.log(user.toString());

const arr = [1, 2, 3];
console.log(arr.toString());

//
