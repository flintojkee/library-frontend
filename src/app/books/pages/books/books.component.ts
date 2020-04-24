import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../models';
import { BookService } from '../../services/book.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ModalController } from '@ionic/angular';
import { ModalCreateBookComponent } from '../../components/modals';

@Component({
  selector: 'lbr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  constructor(private bookService: BookService, private modalController: ModalController) {}

  ngOnInit() {
    this.books$ = this.bookService.books;
    this.initBooks();
  }

  ngOnDestroy() {}

  initBooks(event?) {
    this.bookService
      .getBooks()
      .pipe(untilDestroyed(this))
      .subscribe((res: Book[]) => {
        this.bookService.setBooks(res);
        if (event) {
          event.target.complete();
        }
      });
  }
  async addNewBook() {
    const modal = await this.modalController.create({
      component: ModalCreateBookComponent,
      swipeToClose: true
    });
    return await modal.present();
  }
}
