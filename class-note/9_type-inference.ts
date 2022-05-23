// 1. 대입된 값의 타입을 통해 타입 추론
let a; //any
let aNum = 10; // number
let aStr = 'str' // string 

// 2. 함수의 파라미터/반환값 추론
// param: any, return: any
function getB(b){
  return b;
}

// default 타입을 통한 추론
// param: number, return: number
function getBDefault(b = 10){
  return b;
}

// 반환 타입 string이라 추론
// param: number, return: string
function getC(b = 10){
  let c = 'cccc';
  return b + c;
}


// 3. Interface, Generic을 통한 타입 추론
interface Dropdown<T> {
  value: T;
  title: string;
}

// generic 타입으로 지정된 타입을 통해 추론..
var item1: Dropdown<string> ={
  value: 'aaa', // string
  title: 'aaa'
}


// 4. 복잡한 구조에서의 추론 방식
interface DetailedDropdown<K> extends Dropdown<K>{
  description: string;
  tag: K;
}

// 추론 구조
// DetailedDropdown 타입 => Dropdown 타입

let detailedItem1: DetailedDropdown<string> ={
  title: 'detailed'
  , description: 'detailed dropdown'

  // DetailedDropdown 타입 => Dropdown 타입.. value는 string 타입
  //, value: 10 // 에러 발생
  , value: 'bbb'
  , tag: 'tagzz'
}


// 5. Best Common Type - 다양한 값들을 union으로 묶어 나가는 식..
let arr = [1, 2, true, 'asdfa']; // number | boolean | string
