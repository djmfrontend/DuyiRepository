var a = 1; // 避免污染

var b = 2; // 避免污染
// 暴露为sayHi
function hello() {
  console.log("hello world");
}
//暴露为count

var count = 1;

var init = (function () {
  var a = 1;
  var b = 2;
  function hello() {
    console.log("hello world");
  }
  var count = 1;
  return {
    sayHi: hello,
    count: count,
  };
})();
