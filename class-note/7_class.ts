class Person{
    // JS와의 차이
    // 1) 멤버 변수들을 다 정의해줘야 됨
    // 2) 접근제어자 설정 가능
    private name: string;
    public age: number;
    readonly log: string;

    // Constructor
    constructor(name:string, age:number) {
        console.log('생성되었습니다');
        this.name = name;
        this.age = age;
    }
}

// 최근에는 많이 안 쓰임
// React - Hook이라는 문법.. 함수형 코드