import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, UserRoles } from '../../../models';
import { BookService } from '../../services/book.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ModalController } from '@ionic/angular';
import { ModalCreateBookComponent } from '../../components/modals';
import { AuthService } from '@library/app/auth/services';

@Component({
  selector: 'lbr-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  role$: Observable<UserRoles>;
  userRoles = UserRoles;
  constructor(
    private bookService: BookService,
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.books$ = this.bookService.books;
    this.role$ = this.authService.role;
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
