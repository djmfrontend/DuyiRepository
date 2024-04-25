/**
 *
 * 交换两个数组的位置
 *
 */
function swap(arr, i1, i2) {
  //
  var temp;
  temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

var arr = [1, 2, 3, 4];

swap(arr, 2, 3);

console.log(arr);
