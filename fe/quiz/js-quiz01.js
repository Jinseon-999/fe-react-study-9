// 1. 문제

/*
const name = '홍길동';
let age = 25;
let height = 175.5;
let isStudent = true;         //논리형 true false     isXXX  hasXXX
let livePlace = '서울';

console.log('이름: ' + name);
console.log('나이: ' + age);
console.log('키: ' + height);
console.log('학생 여부: ' + isStudent);
console.log('거주 지역: ' + livePlace);

age = 26;
// ++age; / age++;

console.log('이름: ' + name);
console.log('나이: ' + age);
console.log('키: ' + height);
console.log('학생 여부: ' + isStudent);
console.log('거주 지역: ' + livePlace);
*/

//----------------------------------------------------

// 2. 문제
/*
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);

price = 1500;       // price = price + 500;
quantity = 10;

console.log(price);
console.log(quantity);
console.log(productName);

productName = "복숭아";

console.log(productName);
// X 상수형 변수의경우 값이 변경되지않아 에러가 뜬다
*/

//----------------------------------------------------

// 3. 문제
/*
let a = 10;
let b = 20;
let c;

console.log(a); // 10
console.log(b); // 20
console.log(c); // undefined

a = 100;    
b = a;      a에 들어있는 값을 b에 저장한다

console.log(a); // 100
console.log(b); // 100

// c는 변수에 할당된 값이 없기떄문에 underfined로 나타난다 (변수 선언만하고 변수 초기화가 안되어있기 때문에)
*/

//----------------------------------------------------

// 4. 문제

let 1name = "김철수";           // X 숫자로 시작하면 안된다
let user age = 30;             // X 띄어쓰기 안된다
let user-name = "이영희";       // X - 특수문자 안된다 ( $ _ 만 가능 )
let const = 100;                // X 문법적인 키워드(예약어)
let my_score = 95;              // O
let $price = 5000;              // O
let _count = 10;                // O

// 1name = 첫 글자는 숫자를 못씀
// user age = 공백불가
// user-name = _ 였으면 가능 -라 불가
// const = "키워드"는 불가

let name1 = "김철수";
let userAge = 30;
let userName = "이영희";
let ConstVar = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log(name1);
console.log(userAge);
console.log(user_name);
console.log(notConst);
console.log(my_score);
console.log($price);
console.log(_count);

