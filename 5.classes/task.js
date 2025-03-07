// 1 Задание
class PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(status) {
    if (status > 100) status = 100;
    if (status < 0) status = 0;
    this._state = status;
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}
class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount, state, type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
    console.log(this.type);
  }
}
class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type = "novel");
  }
}
class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type = "fantastic");
  }
}
class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type = "detective");
  }
}


// 2 Задание
class Library {
  constructor (name, books = []) {
    this.name = name;
    this.books = books;
  }
  addBook (book) {
    if (book.state > 30) this.books.push(book);
  }
  findBookBy (type, value, retArray = false) {
    let item, name, findBook = null;

    for (let i=0; i < this.books.length; i++) {
      item = this.books[i];
      name =  item[type];
      if ( ((type === "name" || type === "author") && (name.indexOf(value) >= 0)) || (name === value) ) {
        findBook = retArray ? { index: name.indexOf(value), book: item } : item;
        break;
      }
    }
    return findBook;
  }
  giveBookByName (bookName) {
    let giveBook = this.findBookBy("name", bookName, true);

    if (giveBook !== null) {
      this.books.splice(giveBook.index, 1);
      return giveBook.book;
    }
    return null;
  }
}

// 3 задание со звездочкой
class Student {
  constructor (name, gender = "male", age = 20) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  setSubjectMark (subject, mark, subjectID = -1) {
    if (this.subjects === undefined){
        this.subjects = [{subject: subject, mark: [mark]}];
    } else {
      if (subjectID !== -1) this.subjects[subjectID]["mark"].push(mark);
      else this.subjects.push({subject: subject, mark: [mark]});
    }
      return this.subjects;
  }
  checkSubjectID (subject) {
    if (this.subjects === undefined) return -1;
    return this.subjects.findIndex((obj) => obj["subject"] === subject);
  }
  checkRating (rating) {
    if (rating < 1 || rating > 5) {
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
      return false;
    }
    return true;
  }
  addMark (rating, subject) {
    if (!this.checkRating(rating)) return false;

    let idx = this.checkSubjectID(subject);
    if (idx > -1) this.subjects[idx]["mark"].push(rating);
    else this.setSubjectMark(subject, rating, idx);

    return true;
  }
  getAverageBySubject (subject) {
    let idx = this.checkSubjectID(subject);
    let arrMarks, sum = 0;
    if (idx > -1) {
      arrMarks = this.subjects[idx]["mark"];
      arrMarks.forEach((item) => sum += item);
      return sum / arrMarks.length;
    } else return console.log(`Несуществующий предмет`);
  }
  getAverage () {
    let count = 0, sum = 0;
    this.subjects.forEach((item) => {
      item["mark"].forEach((item) => {sum += item; count++});
    });
    return sum / count;
  }
}
