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
let name_a :string = 'kim'; 
let name_b :{ name : string } = {name : 'kim'};
// object 타입 지정시 key 마지막에 ?를 붙인다면 null 허용
let names :string[] = ['kim', 'park'];

// 변수 다양한 타입지정
let name_c :string | number = 'kim';
let name_d :string[] | number = ['kim'];

// 타입 변수 지정
type MyType = string | number;
let name_e :MyType;

// 함수 타입지정
function fnc(x :number) :number {
    return x * 2;
}

// array에 쓸 수 있는 tuple 타입
type MemberArr = [number, boolean];
let john :MemberArr = [123, true];

// object 포괄 타입지정
type MemberObj = {
    [key : string] : string,
}
// key와 value 는 string 타입이여야 한다.

// 클래스 타입지정
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}