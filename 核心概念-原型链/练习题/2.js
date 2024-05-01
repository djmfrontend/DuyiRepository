var arr1 = [1, 2, 3, 4]; // 真数组

// 类数组
var arr2 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

// 判断arr1 和arr2是否是真数组

if (arr1 instanceof Array) {
  console.log(true);
}

console.log(arr2 instanceof Array);
