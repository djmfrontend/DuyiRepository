function User(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
// this 的指向取决于调用的方式 在写函数的时候是不知道this的指向
// User();
// new User();

// var obj = {
//   a: 1,
//   b: 2,
//   c: function () {
//     console.log(this);
//   },
// };
// obj.c();
// var obj2 = {
//   a: 1,
//   b: 2,
//   c: {
//     a: 1,
//     b: 2,
//     c: function () {
//       console.log(this);
//     },
//   },
// };

// obj2.c.c();

// var m1 = obj2.c.c;

// m1();
var a = [1, 2, 3];
function m2(a, b) {
  console.log(this, a, b);
}
// m2.call(obj);
// m2.call(a, 1, 2);

m2.apply(a, [1, 2]);
