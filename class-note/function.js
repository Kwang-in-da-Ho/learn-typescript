// 함수의 파라미터, 리턴 값의 타입을 정의
function sum_js(a, b) {
    return a + b;
}

// JS의 유연함
// - 함수를 정의할 때 파라미터를 2개로 해 놓아도, 실제 호출 시 전달되는 인자의 개수는 꼭 2개이지 않아도 정상 호출 된다
sum_js(10, 20, 30, 40, 50);
