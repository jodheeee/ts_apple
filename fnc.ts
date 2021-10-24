function 함수(x :number) :number{
    return x * 2;
}

// 매게변수에 ?를 붙이면 x :number | undefined 의미이다.
function 함수_2(x :number) :number{
    return x * 2;
}

// union type 에서 연산할때 type Narrowing을 써야한다.
function 함수_3(x :number|string){
    if(typeof x === 'string'){
        return x + '2';
    }else{
        return x + 1;
    }
}

function 함수_4(x :number|string){
    let array :number[] = [];
    if(typeof x === 'number'){
        array[0] = x;
    }else{
        // else문이 없다면 오류가 발생할 수 있다.
    }

    // assertion 문법(타입 덮어 쓰기)
    array.push(x as number);
    /*
      1. Narrowing 일때만 쓴다.
      2. 무슨 타입이 들어올지 100% 확실할 때 쓴다.
    */
}

// Literal Types
function 리터럴함수(a: 'hello') :1 | 0{
    return 1;
}
// Literal 연습
function 가위바위보(a: '가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
    return ['가위'];
}

// 함수표현식(함수 타입 as)
type 함수타입 = (a :string) => number;
let fncc :함수타입 = function (){
    return 10;
}

// object 안에 함수 넣기
type CaType = (a :number) => number;
let 회원정보 = {
    name : 'kim',
    plusOne(a:number):number{
        return a + 1;
    },
    changeName : () => {}
}

회원정보.plusOne(1);

//-------------------------------------------------------

// rest parameter
function restFnc(...a :number[]){
    console.log(a); // array return
}

// never type
function naverFnc() :never{
    // 함수의 리턴 타입을 never로 지정할시
    // 조건 1. return 값이 없어야한다.
    // 조건 2. endpoint가 없어야한다.
    throw new Error();
}
// never type > void type 주로 사용
