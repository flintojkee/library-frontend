import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './pages/books/books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookComponent } from './pages/book/book.component';
import { ModalCreateBookComponent } from './components/modals/modal-create-book/modal-create-book.component';
import { FormCreateBookComponent } from './components/forms/form-create-book/form-create-book.component';

@NgModule({
  declarations: [
    BooksComponent,
    BooksListComponent,
    BookItemComponent,
    BookComponent,
    ModalCreateBookComponent,
    FormCreateBookComponent
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  entryComponents: [ModalCreateBookComponent]
})
export class BooksModule {}
