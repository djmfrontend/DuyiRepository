function User() {}

console.log(User.prototype);

console.log(User.prototype.__proto__);

//Object.prototype.__proto__ 比较特殊 指向Null

console.log(Function.__proto__);
console.log(User.__proto__ === Function.prototype);
