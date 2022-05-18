interface Person_if {
    name: string;
    age: number;
}

type Person_type = {
    name: string;
    age: number;
}

var IFuser: Person_if = {
    name: 'IFuser'
    , age: 30
}

var TYPEuser: Person_type = {
    name: 'TYPEuser'
    , age: 30
}

/*
    타입 별칭의 특징
    - 새로운 타입 값을 생성하는 것이 아님
    - 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것.

    type vs interface
    - interface : 확장 가능
    - type: 확장 불가능 
*/