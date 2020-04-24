import { Injectable } from '@angular/core';
import { RestService } from '@library/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Book } from '@library/app/models';
import { BehaviorSubject } from 'rxjs';
import { BookForm } from '@library/app/models/forms';
import { Order } from '@library/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class BookService extends RestService {
  private _books = new BehaviorSubject<Array<Book>>([]);
  private _orders = new BehaviorSubject<Array<Order>>([]);

  get books() {
    return this._books.asObservable();
  }

  get orders() {
    return this._orders.asObservable();
  }

  setBooks(books: Book[]) {
    this._books.next(books);
  }

  setOrders(orders: Order[]) {
    this._orders.next(orders);
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

  getOrders() {
    return this.get<Order[]>(this.orderUrls.orders);
  }

  createBook(book: BookForm) {
    const body = new FormData();
    body.append(
      'picture',
      new Blob([book.pictureFile], {
        type: 'multipart/form-data'
      })
    );
    const request = { ...book };
    request.authors = this.getaAuthors(book.authors as string);
    delete request.pictureFile;
    body.append(
      'request',
      new Blob([JSON.stringify({ ...request })], {
        type: 'application/json'
      })
    );
    return this.http.post<FormData>(this.apiUrl + this.bookUrls.books, body);
  }

  editBook(book: BookForm, id: number) {
    const body = new FormData();

    if (book.pictureFile) {
      body.append(
        'picture',
        new Blob([book.pictureFile], {
          type: 'multipart/form-data'
        })
      );
    }

    const request = { ...book };
    delete request.pictureFile;
    body.append(
      'request',
      new Blob([JSON.stringify({ ...request })], {
        type: 'application/json'
      })
    );
    return this.put<FormData>(this.bookUrls.book.replace('{id}', `${id}`), body);
  }

  getBookById(id: number) {
    return this.get<Book>(this.bookUrls.book.replace('{id}', `${id}`));
  }

  getaAuthors(authors: string) {
    return authors.split(',');
  }

  createOrder(order: Order) {
    return this.post<Order, string>(this.orderUrls.orders, order);
  }

  updateOrder(order: Order, id: number) {
    return this.put<Order, string>(this.orderUrls.order.replace('{id}', `${id}`), order);
  }
}
