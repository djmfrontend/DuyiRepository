var person = {
  firstName: "aa",
  lastName: "bb",
  // fullName:person.firstName
  sayHi: function () {
    console.log(person.firstName);
  },
};
// 构造函数
function createPerson(firstName, lastName) {
  var person = {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + lastName,
  };
  person.sayHi = function () {
    console.log(person.fullName);
  };
  return person;
}

const p1 = createPerson("Jack", "Ma");

p1.sayHi();

function Person(firstName, lastName) {
  // 类似 this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
  this.sayHi = function () {
    console.log(this.fullName);
  };
  //return this
}

const p2 = new Person("JACK", "DADA");
p2.sayHi();
