// 타입 단언(type assertion)

// 코드상 타입 추론이 일어날 수 없는 경우지만, 개발자가 해당 변수가 어떤 타입인지 알고 있는 경우
// 개발자가 직접 타입을 지정해주는 것이 타입 단언

var a; // a: any
a = 10;
a = 'string';
// var b = a; // b: any
var b = a as string; // b: string

// DOM API 조작 시 많이 활용됨
// DOM API : document. ~~ DOM을 다루는 API
// 특정 시점에 DOM의 어떤 element에 접근했을 때 해당 element가 존재하고 있는지 여부를 코드 실행 전까지 알 수 없음
// 이를 타입 단언으로 해결할 수 있다

// <div id="app">app</div>
var div = document.querySelector('#app') as HTMLDivElement; 
div.innerText;



