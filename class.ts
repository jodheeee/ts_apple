// ts 에서 constructor()를 사용하려면 필드값이 전역에 미리 있어야한다.
class Person {
    name :string;
    constructor(a :string){
        this.name = a;
    }

    fnc(a :string){
        console.log(a);
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

//--------------------------------------------------

// 접근 제어자
class User2 {
    public name : string;
    private age : number;
    constructor(a?,b?){
        this.name = a;
        this.age = b;
    }
}
// public : 모든 자식들이 이용가능
let 유저1 = new User2('park');
유저1.name = '안녕';
// private : class 안에서 수정
let 유저2 = new User2('park',3);
// 유저2.age = 4; > 불가능

// private 사용 예제
class User3 {
    public name :string;
    private familyName : string = '조';
    constructor(a){
        this.name = a + this.familyName;
    }

    // private을 변경해야할때
    nameChengeFnc(a){
        this.familyName = a;
    }

}
let 유저3 = new User3('대희');
유저3.nameChengeFnc('김');

// public 속성으로 class 에서 tihs. 생략 (축약어)
class Person2 {
    constructor(public name :string){

    }
}
let 자식 = new Person('kim');

// static은 자손이 물려 받지 못한다
class StaticClass {
    static skill = 'js';
    intro = StaticClass.skill + ' 전문가입니다.';
}

let 철수 = new StaticClass();
console.log(철수); // js 전문가 입니다.

StaticClass.skill = 'ts';
let 영희 = new StaticClass();
console.log(영희); // ts 전문가 입니다.