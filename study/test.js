async function main() {
	async function func01(a) {
		return a;
	}

	console.log(await func01(10)) // 10
	// console.log(await typeof func01(10)) // object
}

main()

// let a = 10;
// function func01(a) {
// 	return a;
// } // 출력 형태 : Promise { 10 }
// console.log(func01(a))