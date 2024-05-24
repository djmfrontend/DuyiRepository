// 每隔一段时间，切换英雄的图片，让英雄动起来

// 每隔一段时间，改变英雄的位置，让英雄向右移动

const imgDom = document.querySelector("img");
let i = 1;
let step = 2;
setInterval(() => {
  i++;

  if (i === 5) {
    i = 1;
  }
  console.log(i);
  imgDom.src = `./img/${i}.png`;
}, 1000);

setInterval(() => {
  step += 2;
  imgDom.style.left = `${step}px`;
}, 200);
