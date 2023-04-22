// 객체를 생성할때 다른 프로그래밍 언어에서는 클래스 생성 -> 생성자를 통한 객체 생성
// 자바스크립트에서는 위에 방법 외에도 객체 리터럴을 통해 바로 생성 가능
// let objectLiteral = {
// 	key: 'Value', // 프로퍼티
// 	helloWorld: function () { // 메서드
// 			return console.log("Hello world");
// 	}
// };

// objectLiteral.helloWorld()

// 사칙연산
let calculator = {
	add: (a,b) => {return a+b},
	sub: (a,b) => {return a-b},
	mul: (a,b) => {return a*b},
	div: (a,b) => {return a/b}
}

let result = calculator.add(1,3)
console.log(result)

