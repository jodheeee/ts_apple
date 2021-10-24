/*
npx create-react-app project-name typescript

tsconfig.json 자동 생성
tsx : JSX 문법을 사용하는 파일



// 태그 객체 변수 타입지정
let 박스 :JSX.Element = <div></div>;
let 박스 :JSX.IntrinsicElements['div'] = <div></div>;

// 컴포넌트 타입지정
type ProFileType = {name :string, age :string};
function Profile(props : ProFileType) :JSX.Element{
    
    // state 타입지정
    const [user, setUser] = ('kim');
    
    return (
        <div {props.name}>프로필입니다.</div>
    )
}

// 리덕스 타입지정
const setValue :{count :number} = { count : 0 };
function reducer(state = setValue, action :{type : string}){
    if(action.type === '증가') {
        return { ...state, count : state.count + 1 }
    }else if (action.type === '감소'){
        return {...state, count : state.count - 1}
    }else {
        return setValue
    }
}
const store = createStore(reducer);

// 리덕스를 사용할때 타입 중복지정을 예방
export type RootState = ReturnType<typeof store.gerState>

// 사용(hook)
import {RootState} from './';
const 꺼내온거 = usrSelector( (state : RootState) => state );

*/ 
