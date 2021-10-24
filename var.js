var 이름 = 'kim';
// 이름 = 123; err
var 나이 = 50;
var 결혼했니 = true;
var 텅 = null;
// Union Type (가변적 타입)
var 회원 = 123;
회원 = '텍스트';
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
// All Type
var any;
var unknown;
var 동물;
var 동물_2;
var 여친 = {
    name: '이름'
};
var position = { x: 10, y: 20 };
// Literal types(더 엄격한 타입 지정)
var 엄격한이름;
var 엄격한숫자;
var 접니다;
// as const 를 object 뒤에 붙이면...
// 1. object value 값을 그대로 타입으로 지정해준다.
// 2. object 속성들에 모두 readonly 붙여준다.
var 자료 = {
    name: 'kim'
};
