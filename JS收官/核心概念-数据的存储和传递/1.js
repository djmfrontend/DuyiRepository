/**
 
    var a = 1;

    var b = {
    n1: 1,
    n2: 2,
    };
 */

// 原始类型 存储值

// 引用类型  存储地址 开辟内存空间

// var a = 1;

// var b = a; // 值的复制
// b++;
// console.log(a, b);

// var a = {
//   n: 1,
// };
// var b = a; // 地址的复制
// b.n++;
// console.log(a, b);

var user = {
  name: "jack",
  addr: {
    province: "浙江",
    city: "杭州",
  },
};
// var address = user.addr;
// address.city = "绍兴";
// console.log(user);

var address = user.addr;
address = {
  province: "浙江",
  city: "绍兴",
};

// 遇到对象就要开辟新的内存空间
