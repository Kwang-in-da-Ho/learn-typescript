var user = {name : 'user1', age: 42};
var admin = {name : 'user1', age: 42, role: 'admin'}; // 중복된 속성

var adminPrototype = {};
adminPrototype.__proto__ = user; // user가 가지고 있는 속성을 그대로 가져와 적용
console.log(adminPrototype.name); // 'user1'
console.log(adminPrototype.age); // 42

adminPrototype.role = 'admin';
