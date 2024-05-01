function User(firstName, lastName) {
  console.log(this, firstName, lastName);
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = this.firstName + this.lastName;
}

// 能否不使用New 通过User函数创建对象（不能更改User函数）

var user = {};
User.call(user, "da", "dada");
console.log(user);
