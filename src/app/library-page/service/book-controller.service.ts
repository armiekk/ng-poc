import { Injectable } from '@angular/core';
import { BookApi } from '../api/BookApi';
import { BookInfo, Book, BookAdd } from '../model/models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export { BookInfo, Book, BookAdd } from '../model/models';

@Injectable()
export class BookControllerService {

  bookModel: BehaviorSubject<Book> = new BehaviorSubject({});

  constructor(
    private bookApi: BookApi
  ) { }

  getBookList() {
    this.setHeader();
    return this.bookApi.bookFind().map(this.mapToBookInfo);
  }

  addBook(model: BookAdd) {
    this.setHeader();
    return this.bookApi.bookCreate(model).map((book: Book) => book);
  }

  editBook(model: Book) {
    this.setHeader();
    return this.bookApi
      .bookReplaceByIdPutBooksid(model.id, model)
      .map((book: Book) => book);
  }

  mapToBookInfo(book: Book[]): BookInfo[] {
    return book.map((book: Book) =>
      Object.assign({}, {
        id: book.id,
        nameThai: book.nameThai,
        nameEng: book.nameEng,
        author: book.author,
      })
    );
  }

  updateBookModel(bookParam: Book) {
    let book: Book = Object.assign({}, {
      id: null,
      nameEng: null,
      nameThai: null,
      author: null,
      type: null,
      press: null,
      isbn: null,
      publisher: null,
      issue: null,
      year: null,
      printNumber: null,
    }, bookParam);
    this.bookModel.next(book);
  }

  setHeader() {
    this.bookApi.defaultHeaders.set('Accept', 'application/json');
    this.bookApi.defaultHeaders.set('Content-Type', 'application/json');
  }

}
