// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上
const container = document.querySelector(".container");

for (let hero of heros) {
  const aDom = document.createElement("a");
  //   aDom.innerHTML = hero.cname;

  const href = `https://pvp.qq.com/web201605/herodetail/${hero.ename}.shtml`;
  aDom.href = href;
  aDom.className = "item";
  aDom.target = "_blank";
  const imgDom = document.createElement("img");
  const imgHref = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`;
  imgDom.src = imgHref;
  imgDom.alt = "";
  aDom.appendChild(imgDom);
  const spanDom = document.createElement("span");
  spanDom.innerHTML = hero.cname;
  aDom.appendChild(spanDom);
  container.appendChild(aDom);
}
