// 让小球向右下运动，遇到边缘后反弹
const ball = document.querySelector(".ball");

let v = 1;

setInterval(() => {
  const react = ball.getBoundingClientRect();
  const initX = Math.floor(react.left);
  const initY = Math.floor(react.top);
  let dx = initX;
  let dy = initY;
  dx += v;
  dy += v;
  console.log(dx);
  //   console.log(ball);
  //   console.log(ball);
  ball.style.transform = `translate(${dx}px,${dy}px)`;
  //   ball.style.top = `${dy}px`;
  if (dx > document.documentElement.clientWidth - react.width) {
    v = -v;
  }
}, 20);
