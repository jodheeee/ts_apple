// 단순 narrowing
function base(x) {
    if (typeof x === 'string') {
        return x + '2';
    }
    else {
        return x + 1;
    }
}

// undefine 체크 생략
function unde(a :string | undefined){
    if(a && typeof a === 'string'){

    }
}

// in 키워드로 object narrowing 가능
type Fish = {swim:string};
type Bird = {fly:string};
function base2(animal : Fish | Bird){
    if( 'swim' in animal){
        animal.swim
    }
}

// instanceof 키워드로 object narrwing 가능
let 날짜 = new Date();
if(날짜 instanceof Date){

}

// 비슷한 object 구분 할때
type Car = {
    wheel : '4개',
    color : string
}
type Bike = {
    wheel : '2개',
    color : string
}
function base3(x :Car | Bike){
    // object에 리터럴 타입을 부여한다
    if(x.wheel === '4개'){

    }
}

