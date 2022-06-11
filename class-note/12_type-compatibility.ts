// 타입 호환
// 상속 관계에 의해서가 아닌 '구조'로 호환 가능 여부가 결정된다

// 1. interface
interface Developer{
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

class PersonClass{
  name: string;
}

class DeveloperClass{
  name: string;
  skill: string;
}

// 포함 관계 person > developer

var developer: Developer;
var person: Person;
person = developer;
person = new DeveloperClass();

// 아래 코드는 구조적으로 호환이 될 수 없기 때문에 오류 발생
// developer = person  
// developer = new PersonClass();


// 2. function
// 포함 관계 sum > add
var add = (a: number) => {}
var sum = (a: number, b: number) => {}

sum = add;
// 구조적으로 호환 불가
// add = sum;


// 3. generic
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;

// 구조적으로 호환 가능
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

// 구조적으로 호환 불가
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;



