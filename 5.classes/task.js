class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Дарья Донцова",
    "Приключения Даши Путешественницы",
    1919,
    1733
  )
);

library.addBook(
  new FantasticBook(
    "Анджей Сапковский",
    "Приключения Герванта из Рыбли",
    1987,
    345
  )
);
console.log(library.findBookBy("releaseDate", 1919).author);
library.giveBookByName("Приключения Герванта из Рыбли");

library.books[0].state = 37;
library.books[0].fix();
library.addBook(
  new DetectiveBook(
    "Дарья Донцова",
    "Приключения Даши Путешественницы",
    1919,
    1733
  )
);
console.log(library.books);
console.log("Количество книг после выдачи: " + library.books.length);

class student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addmark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }
  getAveragBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    return this.marks[subject].reduce(
        (acc, mark) => acc + mark / this.marks[subject].length, 
      0); //Находим среднее значение оценок по предмету, каждый элемент делим на длину массива и суммируем
  }
  getAverage() {
    const subjects = Object.keys(this.marks); //Ключи массива с предметами
    if (subjects.length === 0) {
      return 0;
    }
    return subjects.reduce(
      (acc, subject) => acc + this.getAveragBySubject(subject) / subjects.length,
      0); //Находим среднее значение оценок по всем предметам, каждый элемент делим на длину массива и суммируем
  }
}