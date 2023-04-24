async function main() {
	async function func01(a) {
		return a;
	}

	let test = func01("10")
	test.then((value) => {
		if (value === "10") {
			console.log("ok")
		}
	})
}

main()


// async function func01(a) {
// 	return a;
// }
// console.log(func01(10))
// console.log(typeoffunc01(10))