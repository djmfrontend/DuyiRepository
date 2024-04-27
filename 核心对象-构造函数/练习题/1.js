/**
 * 利用构造函数创建一副扑克牌
 */

/**
 * 创建一张扑克牌
 * @param {*} number 11-J 12 Q 13 K 14 小王 15 大王
 * @param {*} color 1黑桃  2红桃 3 梅花 4 方片
 */
function Poker(number, color) {
  this.number = number;
  this.color = color;
  this.print = function () {
    if (this.number === 14) {
      console.log("joker");
      return;
    }
    if (this.number === 15) {
      console.log("JOKER");
      return;
    }
    var colors = {
      1: "♠",
      2: "♥",
      3: "♣",
      4: "♦️",
    };
    var color = colors[this.color];
    var numbers = {
      1: "A",
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: "J",
      12: "Q",
      13: "K",
    };
    var number = numbers[this.number];

    console.log(color + number);
  };
}

var p1 = new Poker(4, 3);
console.log(p1);
p1.print();

/**
 * 一叠扑克牌
 */

function Deck() {
  this.pokers = [];
  for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
      this.pokers.push(new Poker(i, j));
    }
  }
  this.pokers.push(new Poker(14));
  this.pokers.push(new Poker(15));
  console.log(this.pokers);
  this.print = function () {};
}

const deck = new Deck();
