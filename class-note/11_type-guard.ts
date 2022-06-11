interface Devleoper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Devleoper | Person {
  return {name: "Tony", age: 33, skill: 'typescript'} // Deveopler와 Person의 속성 모두를 지닌 object
}

var tony = introduce();
// console.log(tony.skill); // 오류 발생.. Union 타입이라 두 타입의 공통 속성인 name만 인식함

// 타입 단언으로 해결하기 => 반복적인 코드로 인해 가독성 떨어짐
if((tony as Devleoper).skill){
  var skill = (tony as Devleoper).skill;
  console.log(skill);
}else if((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 
// 타입 가드 정의 => 'is' 키워드 사용
function isDeveloper(target: Devleoper | Person): target is Devleoper {
  return (target as Devleoper).skill != undefined;
}

// 타입 가드를 통과하면 해당 타입처럼 사용할 수 있다
if(isDeveloper(tony)) {
  console.log(tony.skill);
}else{
  console.log(tony.age);
}