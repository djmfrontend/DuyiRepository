import Koa from "koa";
import { Server } from "socket.io";
import http from "http";
import cors from '@koa/cors'
const app = new Koa();
app.use(cors())
const server = http.createServer(app.callback()).listen(3100,()=>{
  console.log('server is listen 3100')
});
const ws = new Server(server,{cors:{}});


app.use(async (ctx) => {
  ctx.body = "Hello World";
});
app.use(async(ctx,next)=>{
    console.log(ctx.cookies)
    next()
})

ws.on("connection", (socket) => {

  console.log("a user connected",socket.client.request.headers);
  socket.on('chat message',(msg)=>{
    console.log("我接收到了来自客户端的消息",msg)
    ws.emit('chat message',msg)
  })
});

// app.listen(3100);

