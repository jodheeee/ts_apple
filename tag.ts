// html tag narrowing
let title = document.querySelector('#title');
// title.innerHTML = '반가워요';
// 1. if(title != null)
// 2. instanceof Element
// 3. document.querySelector('#title') as Element (지양)
// 4. if(title?.innerHTML) - optional chaining
//    title?.innerHTML : title에 innserHTML이 있으면 true 없으면 undefined
// 5. tsconfig.json 에서 strictNullChecks : false

// 태그마다 고유 Element instance가 있다.
let link = document.querySelector('.link');
if(link instanceof HTMLAnchorElement){
    link.href = 'https://kakao.com';
}

let button = document.querySelector('#button');
button?.addEventListener('click', function(){
    
});