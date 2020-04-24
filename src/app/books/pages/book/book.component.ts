import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, UserRoles } from '@library/app/models';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ModalCreateBookComponent } from '../../components/modals';
import { BookForm } from '@library/app/models/forms';
import { ModalCreateOrderComponent } from '../../components/modals/modal-create-order/modal-create-order.component';
import { Observable } from 'rxjs';
import { AuthService } from '@library/app/auth/services';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  book: Book;
  isLoading: boolean;
  role$: Observable<UserRoles>;
  userRoles = UserRoles;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.role$ = this.authService.role;
    this.getBook();
  }

  ngOnDestroy() {}

  isPresent() {
    return this.book.bookInstances.some((b) => b.isPresent === true);
  }

  async editBook(book: Book) {
    const modal = await this.modalController.create({
      component: ModalCreateBookComponent,
      componentProps: {
        mode: 'edit',
        book
      },
      swipeToClose: true
    });
    return await modal.present();
  }

  async orderBook() {
    const modal = await this.modalController.create({
      component: ModalCreateOrderComponent,
      componentProps: {
        book: this.book
      },
      swipeToClose: true
    });
    return await modal.present().then((res) => {
      console.log(res);
    });
  }

  getBook(event?) {
    this.route.params
      .pipe(
        switchMap((p) => this.bookService.getBookById(p['id'])),
        untilDestroyed(this)
      )
      .subscribe((book) => {
        this.book = book;
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      });
  }
}
