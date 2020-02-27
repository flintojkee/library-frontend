import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../models';
import { BookService } from '../../services/book.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'lbr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.books;
    this.initBooks();
  }

  ngOnDestroy() {}

  initBooks() {
    this.bookService
      .getBooks()
      .pipe(untilDestroyed(this))
      .subscribe((res: Book[]) => {
        this.bookService.setBooks(res);
      });
  }
  addNewBook() {
    
  }
}
