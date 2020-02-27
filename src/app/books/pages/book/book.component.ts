import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '@library/app/models';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  book: Book;
  isLoading: boolean;
  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params
      .pipe(
        switchMap((p) => this.bookService.getBookById(p['id'])),
        untilDestroyed(this)
      )
      .subscribe((book) => {
        this.book = book;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {}
}
