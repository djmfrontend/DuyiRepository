const moveBar = document.querySelector(".move-bar");
const note = document.querySelector(".note");
console.log(moveBar);
let initX = moveBar.getBoundingClientRect().left;
let initY = moveBar.getBoundingClientRect().top;
moveBar.onmousedown = function (e) {
  const initLeft = e.clientX;
  const initTop = e.clientY;
  console.log(initLeft, initTop);
  //
  console.log(initX, initY);
  window.onmousemove = function (e) {
    console.log(e);
    const moveLeft = e.clientX - initLeft;
    const moveTop = e.clientY - initTop;
    console.log(moveLeft, moveTop);
    console.log(initLeft + moveLeft);
    let dx = initLeft + moveLeft;
    let dy = initTop + moveTop;
    if (dx < 0) {
      dx = 0;
    }
    if (dx > document.documentElement.clientWidth - note.offsetWidth) {
      dx = document.documentElement.clientWidth - note.offsetWidth;
    }
    if (dy < 0) {
      dy = 0;
    }
    if (dy > document.documentElement.clientHeight - note.offsetHeight) {
      dy = document.documentElement.clientHeight - note.offsetHeight;
    }
    note.style.left = dx + "px";
    note.style.top = dy + "px";
  };
};

window.onmouseup = function () {
  window.onmousemove = null;
  window.onmouseup = null;
};
