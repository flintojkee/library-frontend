import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { BookService } from '../books/services/book.service';
import { ModalController } from '@ionic/angular';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Book } from '../models';

@Component({
  selector: 'lbr-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  constructor(private bookService: BookService, private modalController: ModalController) {}

  ngOnInit() {
    this.orders$ = this.bookService.orders;
    this.initOrders();
  }

  ngOnDestroy() {}

  initOrders(event?) {
    this.bookService
      .getOrders()
      .pipe(untilDestroyed(this))
      .subscribe((res: Order[]) => {
        this.bookService.setOrders(res);
        if (event) {
          event.target.complete();
        }
      });
  }
}
