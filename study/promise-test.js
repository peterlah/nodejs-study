// 1
// let obj = new Promise((a, b) => {
// 	// resolve => 프로미스가 정상적으로 완료 됬을때 실행했으면 하는 함수
// 	// reject => 프로미스가 정상적으로 완료되지 않았을 실행했으면 하는 함수
// 	let c = 1;
// 	a()
// 	// const x = 10;
// 	// x = 20
	
// 	// } catch (error) {
// 	// 	// return b()
// 	// }
// });

// obj
// .then(() => {
// 	console.log("Fulfilled")
// })
// .catch(() => {
// 	console.log("Rejected")
// })

// async function main() {
// 	function printFunc() {
// 		console.log("실행")
// 	}

// 	const prom = new Promise((resolve, reject) => {
// 		printFunc()
// 		let a = 1;
// 		if (a === 0) {
// 			resolve();
// 		} else {
// 			reject();
// 		}
// 	});

// 	prom
// 	.then(() => {
// 		console.log("Fulfilled")
// 	})
// 	.catch(() => {
// 		console.log("Rejected")
// 	})
// }

// main()

// 2 promise 생성자 및 함수 사용 -> 함수 사용시에는 왜 생성자 사용을 하지 않아도 되는지?
// const promise = Promise((a,b) => {
// 	a("first")
// })
// const promise = Promise.resolve("second")

// promise.then((value) => {
// 	console.log(value)
// })

// 3 asyn await
// 생성자를 이용한 프로미스 사용
// const prom = new Promise((resolve,b) => {
// 	resolve("first")
// })

// async를 사용한 방법
// async function promise() {
// 	const a =10
// 	a =20
// 	return "first"
// }
// const prom = promise()

// prom
// .then((value) => {
// 	console.log(value)
// })
// .catch(() => {
// 	console.log("Rejected")
// })

// function awaitFunc(value) {
// 	return new Promise((resolve) => {setTimeout(function () {
// 		resolve(value);
// 	}, 5000)});
// }

// async function Func() {
// 	console.log("first")
// 	let second = await awaitFunc("second")
// 	console.log(second)
// 	console.log("third")
// }

// Func()


async function name() {
	// await func2()
	// await func3()
	// await func4()
	return "a" // a => 프로미스 객체가 반환 됩니다.
}

console.log(typeof name())