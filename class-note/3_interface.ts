// interface : 어떤 형식이라는 '약속'
// 주 활용법 : 특정 API를 호출하여 해당 API 결과의 형식을 정의, 에러 발생을 사전에 방지

interface User{
    age: number;
    name: string;
}

// 1. 변수에 활용
var horilla: User = {
    age: 30
    , name: 'horilla'
};

// 2. 함수의 Parameter에 활용 => 가장 많이 활용
function getUser(user: User){
    console.log(user);
}

const user1 = {
    name: 'User1'
};

// getUser(user1); // User 인터페이스의 형식과 일치하지 않아 오류 발생 (Property 'age' is missing)

const user2 = {
    name: 'User2'
    , age: 20
}

getUser(user2);


// 3. 함수의 구조에 활용
interface NumFunction{
    (a: number, b: number): number;
}

let sum: NumFunction;
// Parameter나 return type이 인터페이스의 정의와 다를 경우 오류 발생
sum = function(a:number, b:number) {
    return a + b;
}


// 4. 인덱싱
interface StringArray{
    // 인덱스는 숫자, 요소는 문자열
    [index: number]: string; 
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 요소의 형식이 문자열이 아니기 때문에 오류 발생


// 5. Dictionary Pattern
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj ={
    sth : /abc/, // 정규표현식
}

var regExObj: StringRegexDictionary = {
    //cssFile: 'css'; // 정규표현식이 아닌 문자열이 와서 오류
    cssFile: /\.css$/
    , jsFile: /\.js$/
}

// regExObj['htmlFile'] = 'html'; // Type String is not assignable to RegExp

// key를 순회할 때 형식이 정해져있어 편하다
Object.keys(regExObj).forEach(function(val){ // valㅇ

});


// 6. 인터페이스 확장(상속)
interface Person{
    name: string;
    age: number;
}

interface Developer extends Person{
    // name: string;
    // age: number;
    // 위 두 attribute는 Person에 이미 정의되어있음
    skill: string;
}

var rilla: Developer = {
    skill: 'java'
    // name, age 속성이 정의되지 않으면 오류 발생
    , age: 22
    , name: 'rilla'
}
