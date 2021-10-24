// object 타입 부여 시 interface 의 extends(상속)를 사용할 수 있다.
interface Student {
    name : string
}
interface Teacher extends Student {
    age : number 
}

let 학생 :Student = { name : 'kim'};
let 선생 :Teacher = { name : 'kim', age : 20};

// type 키워드에서는 아래와 같이 상속 한다.
type Animal_ = { name : string };
type Cat_ = { age : number } & Animal_;
// 하지만 & 는 상속의 개념이 아닌 교차의 의미이다.

// type vs interface
// 1. interface 중복선언 가능 / type 중복선언 불가능
//    중복선언 시 합쳐진다.

// 중복속성 부여 시 
// 1. interface는 선안할때 오류가 발생
// 2. type는 사용할때 오류가 발생
// - interface가 좀 더 안정적이다.
