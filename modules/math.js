// 1 번방법 - 모듈에 add 함수 자체를 할당
function add(a, b) {
	return a + b;
}
module.exports = add; // 함수로 export

// 2번방법 - add 키 값에는 (a,b) => {return a+b;} 익명함수가 할당
// exports.add = function add(a, b) {
// 	return a + b;
// } // 객체로 export

// 3번 방법 - add 키 값에는 add 함수가 들어가는 방법
// function add(a, b) {
// 	return a + b;
// }
// module.exports = { add: add };

// 4번 방법 - 모듈을 호출했을 때, add 키 값에는 add 변수 함수가 가지고 있는 값이 할당
// const add = (a, b) => {
// 	return a + b;
// }
// module.exports = add;