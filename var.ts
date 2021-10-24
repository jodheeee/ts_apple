let 이름 :string = 'kim';
// 이름 = 123; err

let 나이 :number = 50;

let 결혼했니 :boolean = true;

let 텅 :null = null;

// Union Type (가변적 타입)
let 회원 :(number | string) = 123;
회원 = '텍스트';
let 회원들 :(number | string)[] = [1,'2',3];
let 오브젝트 :{a : string | number} = {a : '123'};

// All Type
let any :any;
let unknown :unknown;

// any 보다 unknown이 안전하다.
// any는 완전한 제약 해제이다.

// unknown - 1;
// 연산도 엄격한 제약 사항이 있다.

// type alias(작명은 영문대문자로 시작)
type Animal = string | number | undefined;
let 동물 :Animal; 
type Animal_2 = {name : string, age: number};
let 동물_2 :Animal_2;

// const objact 변경 제한
type Girlfriend = {
    readonly name : string
}
const 여친 :Girlfriend = {
    name : '이름'
}
// 여친.name = '름이'; > err

// object type extend
type PositionX = {x:number};
type PositionY = {y:number};
type NewType = PositionX & PositionY;
let position :NewType = {x : 10, y :20};

// Literal types(더 엄격한 타입 지정)
let 엄격한이름: 'kim';
let 엄격한숫자: 123;
let 접니다: '대희'|'조';

// as const 를 object 뒤에 붙이면...
// 1. object value 값을 그대로 타입으로 지정해준다.
// 2. object 속성들에 모두 readonly 붙여준다.
var 자료 = {
    name : 'kim'
} as const;
