function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    //
    console.log(this.name + this.age);
  };
}

var u1 = new User("dd", 23);

var u2 = new User("dv", 24);

var u3 = new User("dx", 18);

console.log(u1.sayHi === u2.sayHi); // 函数一样  内存占用

// User.prototype 原型
//u1.__proto__ 隐式原型
console.log(u1.__proto__ === User.prototype);

User.prototype.a = 1;

console.log(u1.a);
