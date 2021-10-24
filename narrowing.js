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
function unde(a) {
    if (a && typeof a === 'string') {
    }
}
function base2(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
}
// instanceof 키워드로 object narrwing 가능
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function base3(x) {
    // object에 리터럴 타입을 부여한다
    if (x.wheel === '4개') {
    }
}
