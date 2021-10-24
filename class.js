// ts 에서 constructor()를 사용하려면 필드값이 전역에 미리 있어야한다.
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.fnc = function (a) {
        console.log(a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
//--------------------------------------------------
// 접근 제어자
var User2 = /** @class */ (function () {
    function User2(a, b) {
        this.name = a;
        this.age = b;
    }
    return User2;
}());
// public : 모든 자식들이 이용가능
var 유저1 = new User2('park');
유저1.name = '안녕';
// private : class 안에서 수정
var 유저2 = new User2('park', 3);
// 유저2.age = 4; > 불가능
// private 사용 예제
var User3 = /** @class */ (function () {
    function User3(a) {
        this.familyName = '조';
        this.name = a + this.familyName;
    }
    // private을 변경해야할때
    User3.prototype.nameChengeFnc = function (a) {
        this.familyName = a;
    };
    return User3;
}());
var 유저3 = new User3('대희');
유저3.nameChengeFnc('김');
// public 속성으로 class 에서 tihs. 생략 (축약어)
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var 자식 = new Person('kim');
// static은 자손이 물려 받지 못한다
var StaticClass = /** @class */ (function () {
    function StaticClass() {
        this.intro = StaticClass.skill + ' 전문가입니다.';
    }
    StaticClass.skill = 'js';
    return StaticClass;
}());
var 철수 = new StaticClass();
console.log(철수); // js 전문가 입니다.
StaticClass.skill = 'ts';
var 영희 = new StaticClass();
console.log(영희); // ts 전문가 입니다.
