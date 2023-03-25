class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
        this.state *= 1.5;
      }
      set state(newState) {
        if (newState < 0) {
          this._state = 0;
        } else if (newState > 100) {
          this._state = 100;
        } else {
          this._state = newState;
        }
      }
      get state() {
        return this._state;
      }
}
      class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.state = 100;
          this.type = "magazine";
        }
      }
      class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.state = 100;
          this.type = "book";
        }
      }
      class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.state = 100;
          this.type = "novel";
        }
      }
      class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.state = 100;
          this.type = "fantastic";
        }
      }
      class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.state = 100;
          this.type = "detective";
        }
      }


class Library {
    constructor(name, books) {
        this.name = name;
        this.book = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.book.push(book);
        }
    }
    findBookBy(type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }
    giveBookByName(bookName) {
        const thisBook = this.findBookBy('name', bookName);
        if (thisBook) {
            this.books.slice(this.books.indexOf(bookName), 1);
            return thisBook;
        }
        return null;
    }
}