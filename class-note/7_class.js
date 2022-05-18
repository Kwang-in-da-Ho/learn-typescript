// JS의 클래스 : ES6부터 적용
class Person{
    // Class Logic

    // Constructor
    constructor(name, age) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

var person1 = new Person('name1', 30); // 생성되었습니다
console.log(person1);


// 위 코드는 사실 아래의 코드를 sugaring 한 것 (완전 동일함)
// prototype 기반이라는 JS의 기본 성질은 그대로 유지됨
function PersonFunc(name, age){
    this.name = name;
    this.age = age;
}

var person2 = new PersonFunc('고릴라', 23);
console.log(person2);