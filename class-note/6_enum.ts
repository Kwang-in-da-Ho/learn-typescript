/* 
    Enum
     - 특정 값들의 집합을 의미함
     - TS는 문자형/숫자형 Enum 지원
*/

// 1. 숫자형 Enum
// enum 항목에 대해 별도의 값을 지정하지 않으면 해당 항목의 index(0~)가 값으로 자동 지정됨
enum Shoes {
    Nike
    , Adidas
    , Reebok
}

var myShoes = Shoes.Adidas;
console.log(myShoes); // 1

// 2. 문자형 Enum
// 각 enum 항목에 대해 문자열 값을 지정
enum ShoesString {
    Nike = '나이키'
    , Adidas = '아디다스'
    , Reebok = '리복'
}

var myShoesStr = ShoesString.Adidas;
console.log(myShoesStr); // 아디다스


// 3. Enum의 활용
function askQuestionOld(answer: string) {
    if(answer === 'yes'){
        console.log('정답');
    }

    if(answer === 'no'){
        console.log('오답');
    }
}

// 의도하지 않은 input에 대해 대응 못함
askQuestionOld('예');
askQuestionOld('Yes');
askQuestionOld('Y');

enum Answer {
    Yes = 'Y'
    , No = 'N'
}

function askQuestionEnum(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답');
    }

    if(answer === Answer.No){
        console.log('오답');
    }
}

// 의도하지 않은 input 통제 가능(예외 사항 없애기)
askQuestionEnum(Answer.Yes);
// askQuestionEnum('예');   // 에러
// askQuestionEnum('Yes');  // 에러
// askQuestionEnum('Y');    // 에러