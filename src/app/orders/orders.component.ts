import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, OrderStatus } from '../models/order.model';
import { BookService } from '../books/services/book.service';
import { ModalController } from '@ionic/angular';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Book, IUser } from '../models';
import { AuthService } from '../auth/services';

@Component({
  selector: 'lbr-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(
    private bookService: BookService,
    private modalController: ModalController,
    private authService: AuthService
  ) {}

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

  cancel(order: Order) {
    order.status = OrderStatus.canceledByAdmin;
    this.updateOrder(order);
  }

  activate(order: Order) {
    order.status = OrderStatus.active;
    this.updateOrder(order);
  }

  return(order: Order) {
    order.status = OrderStatus.returned;
    this.updateOrder(order);
  }

  updateOrder(order: Order) {
    order.actualReturnDate = new Date().toISOString().split('T')[0];
    order.userId = this.authService.userSubject.value.id;
    this.bookService
      .updateOrder(order, order.id)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
