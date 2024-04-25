// 下面这段代码输出什么

var foo = {
  n: 1,
};

var arr = [foo];

function method1(arr) {
  var bar = arr[0];
  arr.push(bar);
  bar.n++; // 2
  arr = [bar];
  arr.push(bar);
  arr[1].n++; //3
}
function method2(foo) {
  foo.n++; //4
}
function method3(n) {
  n++;
}

method1(arr);
method2(foo);

method3(foo.n);

console.log(foo.n, arr.length); //4 2
