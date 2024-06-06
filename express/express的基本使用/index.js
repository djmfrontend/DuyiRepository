const express = require("express");
const http = require("http");
const app = express(); // 创建一个express 应用

// app 实际上是一个函数,用于处理请求的函数

app.get("/abc", (req, res) => {
  // req,res 是被express 封装过后的对象
  console.log(req.headers["host"]); // 获取请求头
  console.log("请求路径", req.path);
  console.log("请求参数", req.query);
});
app.get("/news/:id", (req, res) => {
  console.log("params", req.params);
  // 响应
  //   res.setHeader("a", "123"); // 可以自己设置响应头
  //   res.send("hello"); //send 会根据你发送数据的格式 自动设置响应头 Content-Type

  res.status(301).header("location", "https://www.baidu.com").end(); // 重定向到百度
  //   res.status(302).location("https://www.baidu.com").end();
  //   res.redirect("https://www.baidu.com", 302);
});
// 匹配任何get请求
app.get("*", (req, res) => {
  //
});

const server = http.createServer(app);

server.listen(9527, () => {
  console.log("server is running at http://localhost:9527");
});
