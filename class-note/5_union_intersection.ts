// 다양한 타입의 파라미터를 받고 싶을 때.. any 타입으로 선언
// 그러나 타입을 any로 선언했을 경우, 타입을 설정하는 것의 이점이 전혀 없음. 안 선언하는것과 다를 것이 없다..
function logMessage(value: any){
    console.log(value);
}
logMessage('hello');
logMessage(100);
logMessage(false);


// Union Type
var msg: string | number | boolean;

function unionTypeLogMessage(value: string | number){
    if(typeof value === 'number'){
        // value가 number라고 자동으로 인식되어 number 타입 관련 api, 속성들을 자동완성 할 수 있다.
        // 타입을 any라고 선언했을 경우 이렇게 안 됨.
        value = value.toLocaleString()
    }else if(typeof value === 'string'){
        // 마찬가지로 value가 string이라고 자동으로 인식되어 관련 api, 속성들을 자동완성 할 수 있음
        value = value.substring(0, value.length - 2);
    }else{
        throw new TypeError('value must be string or number');
    }

    if(typeof value)
    console.log(value);
}

unionTypeLogMessage('hello');
unionTypeLogMessage(100);
// unionTypeLogMessage(false); // string, number 타입 외의 인자는 에러 발생

// Union Type의 특징 2
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeoneUnion(someone: Developer | Person){
    someone.name;   // 요거 밖에 접근 못함.
    //someone.age;    // 에러 발생
    //someone.skill;  // 에러 발생
}

askSomeoneUnion({name: 'developer', skill: 'java'});
askSomeoneUnion({name: 'gorilla', age: 24});

// Intersection Type
var neverType: string & number & boolean; // 서로 공통점이 없는 속성들끼리 intersect 하면 존재할 수 없는 속성


function askSomeoneIntersection(someone: Developer & Person){
    // 모두 접근 가능
    someone.name;   
    someone.age;   
    someone.skill;  
}

// name, skill, age 속성 모두 다 갖춘 객체를 넘겨야 한다.
askSomeoneIntersection({name: 'intersection', skill: 'typescript', age: 11});
// askSomeoneIntersection({name: 'developer', skill: 'java'});  // property 'age' is missing..
// askSomeoneIntersection({name: 'gorilla', age: 24});          // property 'skill' is missing..

/*
    Union Type vs Intersection Type
    - 함수의 인자로 설정했을 때 Union은 교집합, Intersection은 합집합..
*/
