// require("D:\\frontend\\DuyiRepository\\Node核心\\Node的模块化细节\\a.js"); // 绝对路径导入
// require("./a.js"); //相对路径导入

// require('./a') 可以不写后缀名
// console.log(require.resolve("./src"));

const myModules = require("./myModule");
console.log(myModules);

// myModules 在内部是如何来实现导入的呢

function require(modulePath) {
  //1 将moudlePath 转换为绝对路径
  //2 判断该某块是否已经缓存 require.cacche
  if (require.cache[modulePath]) {
    return require.cache[modulePath];
  }
  //3 读取文件内容
  //4 包裹到一个函数中
  function _temp(module, exports,require, __dirname, __filename) {
    //文件内容
  }
  // 5  创建module对象
  const module ={}
  module.exports = {}
  const exports= module.exports
  _temp.call(module.exports,module,exports,require,module.modulePath,module.__filename)
}
require.cache = {};
