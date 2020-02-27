import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@library/app/models';

@Component({
  selector: 'lbr-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit {
  @Input() books$: Observable<Book[]>;
  constructor() { }

  ngOnInit() {

  }

}
