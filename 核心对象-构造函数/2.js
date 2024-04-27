//JS 所有的对象都是通过构造函数产生的

// var obj = {a:1,b:2}; //语法糖

var obj = new Object();
obj.a = 1;
obj.b = 2;

console.log(obj);

function m() {}

var sum = new Function("a", "b", "return a+b");

console.log(sum(2, 3));
