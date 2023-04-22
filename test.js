// // 질문 1
// function second(value) {
// 	console.log(value)
// }

// function first(value) {
// 	console.log(2)
// 	second(value)
// 	console.log(3)
// }

// console.log(4)
// first(1); // 비동기식으로
// console.log(5)
// // 4 -> 2 -> 1 -> 3 -> 5
// // 4 -> 2 -> 3 -> 5 -> 1 ??

// 질문 2 -> 질문 3 Promise.resolve()는 new(생성자를 왜 안쓰는지)
// case 1
function prinrFunc(){
	console.log("1")
}
const promise = new Promise(prinrFunc) // 1
console.log('2')

// case 2
const promise2 = Promise.resolve()
promise2.then(() => {
	console.log('3')
});
console.log('4')