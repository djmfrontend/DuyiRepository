// 如何创建一个没有隐式原型的对象

// obj.__proto__= null  // 不推荐

// Object.setPrototypeOf(obj,null) 等同于上面的写法

var obj = Object.create(null);

console.log(obj.__proto__);
