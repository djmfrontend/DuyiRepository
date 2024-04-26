var person = {
  firstName: "aa",
  lastName: "bb",
  // fullName:person.firstName
  sayHi: function () {
    console.log(person.firstName);
  },
};
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
