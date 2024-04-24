/**
 * 交换两个变量
 */
function swap(a, b) {
  var temp;
  temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}
var a = 1;
var b = 2;
swap(a, b);
console.log(a, b);
