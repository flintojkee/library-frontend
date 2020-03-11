import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FormBookService } from '@library/app/books/services/form/form-book.service';
import { BookService } from '@library/app/books/services/book.service';
import { CreateBookForm } from '@library/app/models/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  templateUrl: './modal-create-book.component.html',
  styleUrls: ['./modal-create-book.component.scss']
})
export class ModalCreateBookComponent implements OnInit, OnDestroy {
  createBookForm: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBookService: FormBookService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.createBookForm = this.formBookService.getCreateBookForm();
  }

  ngOnDestroy() {}

  createBook(createBookForm: CreateBookForm) {
    this.bookService
      .createBook(createBookForm)
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
