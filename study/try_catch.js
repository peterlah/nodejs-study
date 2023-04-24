// 1. try catch
// const users = ["Lee", "Kim", "Park", 2];

// try {
// 	for (const user of users) {
// 		console.log(user.toUpperCase());
// 	}
// } catch (error) {
// 	console.error(`Error: ${error.message}`)
// }


// 2. throw
// function throwTest(value) {
// 	if (value === "error") {
// 		throw new Error("에러 테스트에 의해 발생한 에러입니다.");
// 	} else {
// 		return value
// 	}	
// }

// // console.log(throwTest("test"))
// console.log(throwTest("error"))


// 3. finally
function errorException(isThrow) {
  try {
    console.log('자원을 할당하였습니다.');
    if (isThrow) throw new Error();
  } catch (error) {
    console.log('에러가 발생했습니다.');
  } 
  console.log('자원을 제거하였습니다.')

  // finally {
  //   console.log('자원을 제거하였습니다.'); // 함수에 대해 할당된 메모리가 반환되었습니다를 이프로그램 사용자에게 알려주는거저
  // }
}

errorException(false);
// 자원을 할당하였습니다.
// 자원을 제거하였습니다.
//종료됨
errorException(true);
// 자원을 할당하였습니다.
// 에러가 발생했습니다.
// 자원을 제거하였습니다.