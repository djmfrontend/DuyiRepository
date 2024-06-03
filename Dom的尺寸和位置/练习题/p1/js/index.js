// 让便签可被拖动，但不能超出视口
const bar = document.querySelector(".move-bar");
const note = document.querySelector(".note");
console.log(bar);
let isDragging = false;
let startX;
let startY;
bar.onmousedown = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  var react = bar.getBoundingClientRect();
  //元素得坐标
  var ex = react.left;
  var ey = react.top;
  // 鼠标按下后 监听整个屏幕得鼠标移动
  // 获取视口宽高 元素宽高

  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var domW = note.offsetWidth;
  var domH = note.offsetHeight;
  window.onmousemove = function (e) {
    console.log("鼠标在移动");
    var X = e.clientX;
    var Y = e.clientY;
    var moveLeft = X - x;
    var moveTop = Y - y;
    // 对left 和 top进行限制
    var left = ex + moveLeft;
    var top = ey + moveTop;
    if (left < 0) {
      left = 0;
    }
    if (left > w - domW) {
      left = w - domW;
    }
    console.log(top);
    if (top < 0) {
      top = 0;
    }
    if (top > h - domH) {
      top = h - domHt;
    }
    note.style.left = left + "px";
    note.style.top = top + "px";
  };
  // 鼠标抬起后 取消监听鼠标移动
  window.onmouseup = function (e) {
    console.log("不在监听移动");
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
