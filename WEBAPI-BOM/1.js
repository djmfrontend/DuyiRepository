// const set1 = setTimeout(() => {
//   console.log("time out");
// }, 1000);

// console.log("out");

// clearInterval(set1);
var timerId;

function start() {
  if (timerId) {
    // 说明当前已经又计时器了
    return;
  }
  timerId = setInterval(() => {
    console.log(new Date().toLocaleString());
  }, 1000);
}

start();

function stop() {
  clearInterval(timerId);
  timerId = null;
}
