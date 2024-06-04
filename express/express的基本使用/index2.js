const express = require("express");
const http = require("http");
const app = express(); // 创建一个express 应用

// app 实际上是一个函数,用于处理请求的函数

app.listen(9527, () => {
  console.log("server is running at http://localhost:9527");
});
