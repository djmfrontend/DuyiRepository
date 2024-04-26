// var console = {
//   log: function () {},
// };
// console.log(111);

function b() {
  console.log("b");
}

function init() {
  // 函数污染全局
  //
  var a = 1;
}

(() => {
  // 立即执行函数 IIFE
  var a = 1;
  var b = 2;

  function c() {
    return a + b;
  }
  console.log(a);
  return c;
})();
