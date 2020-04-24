import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book } from '@library/app/models';
import { FormControl, Validators } from '@angular/forms';
import { BookService } from '@library/app/books/services/book.service';
import { Order } from '@library/app/models/order.model';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'lbr-modal-create-order',
  templateUrl: './modal-create-order.component.html',
  styleUrls: ['./modal-create-order.component.css']
})
export class ModalCreateOrderComponent implements OnInit, OnDestroy {
  book: Book;
  private today = new Date();
  expectedReturnDate = new FormControl(new Date().toISOString(), [Validators.required]);
  minDate = this.today.toISOString();
  constructor(private modalCtrl: ModalController, private bookService: BookService) {}
  ngOnInit() {
    console.log(this.minDate);
  }
  ngOnDestroy() {}

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }

  createOrder() {
    const order: Order = {
      expectedReturnDate: this.today.toISOString(),
      userId: 1,
      bookInstanceId: this.book.bookInstances.filter((b) => b.isPresent)[0].id
    };
    this.bookService
      .createOrder(order)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.modalCtrl.dismiss();
      });
  }

  submitForm() {
    this.createOrder();
  }
}
