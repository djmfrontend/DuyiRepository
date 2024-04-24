/**
 * 交换对象两个属性的值
 *
 */

function swap(obj, key1, key2) {
  var temp;
  temp = obj[key1];
  obj[key1] = obj[key2];
  obj[key2] = temp;
}

const user = {
  name: "a1",
  name2: "a2",
};
swap(user, "name", "name2");
console.log(user);
