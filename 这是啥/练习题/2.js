// 为所有对象添加方法 print  打印对象的键值对

Object.prototype.print = function () {
  for (const key in this) {
    // 属性名 in 对象 是否在对象自身及其隐式原型上
    if (this.hasOwnProperty(key)) {
      console.log(key, this[key]);
    }
  }
};

var user = {
  name: "monica",
  age: 18,
};

user.print();
