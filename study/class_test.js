// 클래스 생성자, 메서드(클래스 내부에서 사용하는 함수)
// class Book {
// 	// 클래스 생성자 정의
// 	constructor(bookname, bookauthor, bookprice) {
// 		this.name = bookname;
// 		this.author = bookauthor;
// 		this.price = bookprice;
// 	}

// 	// 클래스 메서드 -> 객체 key : value
// 	getName() {return this.name;}
// 	getAuthor() {return this.author;}
// 	getPrice() {return this.price;}
// 	setName(value) {this.name = value;}
// 	setAuthor(value) {return this.author = value;}
// 	setPrice(value) {return this.price = value;}
// }

// console.log(typeof Book)

// let 혼공자 = new Book("혼공자", "윤인성", 24000);
// console.log(혼공자)

// console.log(혼공자.getName())
// console.log(혼공자.getAuthor())
// console.log(혼공자.getPrice())

// 혼공자.setPrice(50000)
// console.log(혼공자)

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


// // quiz
// class Unit {
// 	constructor(name,hp) {
// 		this.name = name;
// 		this.hp = hp;
// 	}

// 	healing(value) {
// 		const currentHp = this.hp
// 		if (currentHp === 0) {
// 			return this.hp
// 		}
// 		this.hp += value;
// 		if (currentHp >= 100) {
// 			this.hp = 100;
// 		}
// 	}

// 	damaged(value) {
// 		const currentHp = this.hp
// 		const damagedHp = currentHp - value
// 		if (currentHp === 0) {
// 			return;
// 		}
// 		this.hp -= value
// 		if (damagedHp <= 0) {
// 			this.hp = 0
// 		}
// 	}
// }

// const unit = new Unit("유닛", 100);
// unit.damaged(70); // 30
// console.log(unit)
// unit.healing(10); // 40
// console.log(unit)
// unit.damaged(50); // 0
// console.log(unit)
// unit.healing(100); // 0
// console.log(unit)

class Char {
	constructor (hp,mp) {
		this.hp = hp
		this.mp = mp
	}
	getHP() {return this.hp}
}

class Warrior extends Char {
	constructor (str) {
		super()
		this.str = str
	}
}
class Archer extends Char {
	constructor (hp,mp,dex) {
		super(hp,mp)
		this.dex = dex
	}
}
class Healer extends Char {
	constructor (int) {
		super()
		this.int = int
	}
}

const myChar = new Archer(100, 50, 10);
console.log(myChar)
console.log(myChar.getHP())