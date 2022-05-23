function logGeneric<T>(text: T): T {
    console.log(text);
    return text;
}

logGeneric('hi');           // function logTextGeneric<"hi">(text: "hi"): "hi"          T => 'hi'라고 하는 문자열
logGeneric<string>('hi');   // function logTextGeneric<string>(text: string): string    T => string
logGeneric(10);
logGeneric(false);

// 기존 타입 정의 방식과 제네릭의 차이점
// 1. 함수 중복 선언의 단점
//  - 기존 타입 정의의 경우 동일한 프로세스에 다른 타입을 받고 싶으면 함수를 여러개 선언해야 함

function logText(text: string) {
    console.log(text);
    text = text.substring(0, 1);
    return text;
}

function logNum(num: number) {
    console.log(num);
    num = num * 2;
    return num;
}

logText('hi');
logNum(10);

// 2. Union Type을 이용한 선언 방식의 문제점
//  - 함수 내부에서 Union Type으로 선언한 타입들이 모두 공통으로 사용할 수 있는 api만 호출 가능
//  - ㅇ
function logUnion(text: string | number){
    console.log(text);
    return text;
}

const a = logUnion('a'); // a의 타입 : string | number
// a.split('');    // 에러.. number 타입에서는 해당 api를 지원하지 않기 때문
logUnion(10);



// 위 문제점을 극복하는 방법
function logFinal<T>(somthing: T): T {
    console.log(somthing);
    return somthing;
}

const str = logFinal<string>('a-b-c');
str.split('-');
const bool = logFinal<boolean>(true);


// 3. Generic을 이용한 타입 정의
interface DropDownItem<T> {
    value: T;
    selected: boolean;
}

// const obj: DropDownItem<number> = { value: 'abc', selected: false}; // 에러 발생
const obj: DropDownItem<number> = { value: 111, selected: false};


// 4. Generic 타입 제한

// 4-1) 힌트 주기
function logArrLength<T>(arr: T[]): T[] {

    // 현재 이 타입으로 뭐가 들어올지 모르는 상태
    // 타입에 제한을 둬서 어떤 타입이 들어올지 힌트 제공
    // 현재 함수 같은 경우는 구체적인 세부 타입까진 모르지만 기본적으로 배열이기 때문에
    // length API를 써도 에러가 발생하지 않는다.
    console.log(arr.length);
    arr.forEach( (item) => {
        console.log(item);
    });
    return arr;
}

logArrLength<number>([1, 2, 5, 76]);

// 4-2) 정의된 타입 이용하기
interface LengthType {
    length: number;
}
 
function logTextLength<T>(text: T): T {
    return text;
}




