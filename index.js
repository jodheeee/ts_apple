// 변수 타입종류
/*
  1. string
  2. number
  3. boolean
  4. null
  5. undefined
  6. bigint
  7. [], {}
*/
// 변수 타입지정 예시
var name_a = 'kim';
var name_b = { name: 'kim' };
// object 타입 지정시 key 마지막에 ?를 붙인다면 null 허용
var names = ['kim', 'park'];
// 변수 다양한 타입지정
var name_c = 'kim';
var name_d = ['kim'];
var name_e;
// 함수 타입지정
function fnc(x) {
    return x * 2;
}
var john = [123, true];
// key와 value 는 string 타입이여야 한다.
// 클래스 타입지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
