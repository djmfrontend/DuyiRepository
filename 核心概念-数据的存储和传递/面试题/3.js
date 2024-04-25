// 下面输出什么
var foo = { bar: 1 };

var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1);
arr2[0]++;
arr2[1].bar++;

foo.bar++;
arr1[2].bar++;
console.log(arr1[1] === arr2[0]); //false
console.log(arr1[2] === arr2[1]); //true
console.log(foo.bar); //4

//addr1 {bar:4}    addr2:{0:1,1:2,2:addr1}  addr3:{0:3,1:addr1}

//foo:addr1

//arr1:addr2

// arr2:addr3
