// // 클래스 생성자, 메서드(클래스 내부에서 사용하는 함수)
// class Book {
// 	// 클래스 생성자 정의
// 	constructor(bookname, bookauthor, bookprice) {
// 		this.name = bookname;
// 		this.author = bookauthor;
// 		this.price = bookprice;
// 	}

// 	// 클래스 메서드
// 	getName() {return this.name;}
// 	getAuthor() {return this.author;}
// 	getPrice() {return this.price;}
// 	setName(value) {this.name = value;}
// 	setAuthor(value) {return this.author = value;}
// 	setPrice(value) {return this.price = value;}
// }

// // let 혼공자 = new Book("혼공자", "윤인성", 24000);
// // console.log(혼공자)

// // console.log(혼공자.getName())
// // console.log(혼공자.getAuthor())
// // console.log(혼공자.getPrice())

// // 혼공자.setPrice(50000)
// // console.log(혼공자)

// // 클래스 상속 extends를 사용
// class JSBook extends Book {
// 	constructor(bookname, bookauthor, bookprice, bookdate) {
// 		super(bookname,bookauthor,bookprice)
// 		this.date = bookdate
// 	}
// 	getDate() {return this.date}
// } 

// let jsbook = new JSBook("javascript","나상우",33000,"4월22일")
// console.log(jsbook)
// console.log(jsbook.getAuthor())
// jsbook.setName("nodejs")
// console.log(jsbook.getName())
// console.log(jsbook)
// console.log(jsbook.getDate())


// quiz
class Unit {
	constructor(name,hp) {
		this.name = name;
		this.hp = hp;
	}

	healing(value) {
		const currentHp = this.hp
		if (currentHp < 100) {
			this.hp += (currentHp + value) % 100
		}
	}

	damaged(value) {
		const currentHp = this.hp
		if (currentHp > 0) {
			this.hp -= (currentHp - val)
		}
	}
}