import { Injectable } from '@angular/core';
import { RestService } from '@library/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Book } from '@library/app/models';
import { BehaviorSubject } from 'rxjs';
import { CreateBookForm } from '@library/app/models/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService extends RestService {

  private _books = new BehaviorSubject<Array<Book>>([]);

  get books() {
    return this._books.asObservable();
  }

  setBooks(books: Book[]) {
    this._books.next(books);
  }

  constructor(http: HttpClient) {
    super(http);
  }

  getBooks(author?: string) {
    let url = `${this.bookUrls.books}`;
    if (author) {
      url += `?author=${author}`;
    }
    return this.get<Book[]>(url);
  }

  createBook(book: CreateBookForm) {
    return this.post<CreateBookForm, Book>(this.bookUrls.books, book);
  }

  updateBook(book: CreateBookForm, id: number) {
    return this.put<CreateBookForm, Book>(this.bookUrls.book.replace('{id}', `${id}`), book);
  }

  getBookById(id: number) {
    return this.get<Book>(this.bookUrls.book.replace('{id}', `${id}`));
  }
}
