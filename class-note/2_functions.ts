
// 함수의 파라미터, 리턴 값의 타입을 정의
function sum(a: number, b:number): number{
    return a + b;
}

// JS와 다르게 인자의 개수에 대한 유연함이 없다
// sum(10, 20, 30, 40); 
sum(10, 20);


// 함수의 optional prameter => '?'
function print_str(a: string, b?: string, c?: string){
    console.log(a + b + c);
}

print_str('aaa');
print_str('aaa', 'bbb');
print_str('aaa', 'bbb', 'ccc');