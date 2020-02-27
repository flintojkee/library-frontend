import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from '@library/app/models';

@Component({
  selector: 'lbr-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
