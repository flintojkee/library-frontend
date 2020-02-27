import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent, BookComponent } from './pages';


const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: ':id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
