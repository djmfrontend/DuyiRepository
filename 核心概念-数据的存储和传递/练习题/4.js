/**
 * 修改对象 仅保留需要的属性
 * keys 需要保留的属性名数组
 */
function pick(obj, keys) {
  //   var orginKeys = Object.keys(obj);
  //   for (let i = 0; i < orginKeys.length; i++) {
  //     if (!keys.includes(orginKeys[i])) {
  //       delete obj[orginKeys[i]];
  //     }
  //   }
  for (const key in obj) {
    if (!keys.includes(key)) {
      delete obj[key];
    }
  }
}

const user = {
  name: "a",
  age: 20,
  addr: "xxx",
};
pick(user, ["name", "age"]);

console.log(user);
