import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FormBookService } from '@library/app/books/services/form/form-book.service';
import { BookService } from '@library/app/books/services/book.service';
import { BookForm } from '@library/app/models/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Book } from '@library/app/models';

@Component({
  templateUrl: './modal-create-book.component.html',
  styleUrls: ['./modal-create-book.component.scss']
})
export class ModalCreateBookComponent implements OnInit, OnDestroy {
  mode: 'create' | 'edit' = 'create';
  bookForm: FormGroup;
  book: Book;
  constructor(
    private modalCtrl: ModalController,
    private formBookService: FormBookService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    switch (this.mode) {
      case 'create':
        this.bookForm = this.formBookService.getBookForm();
        break;
      case 'edit':
        this.bookForm = this.formBookService.getBookForm(this.book);
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {}

  submitForm(bookForm: BookForm) {
    switch (this.mode) {
      case 'create':
        this.createBook(bookForm);
        break;
      case 'edit':
        this.editBook(bookForm);
        break;

      default:
        break;
    }
  }

  createBook(bookForm: BookForm) {
    this.bookService
      .createBook(bookForm)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
        this.modalCtrl.dismiss();
      });
  }
  editBook(bookForm: BookForm) {
    delete bookForm.authors;
    this.bookService
      .editBook(bookForm, this.book.id)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
        this.modalCtrl.dismiss();
      });
  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }
}
