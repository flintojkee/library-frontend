import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookComponent } from './pages/book/book.component';


@NgModule({
  declarations: [BooksComponent, BooksListComponent, BookItemComponent, BookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
