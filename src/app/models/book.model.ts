import { BookInstance } from './book-instance.model';
import { Author } from './author.model';
import { Category } from './category.model';

export interface Book {
  id?: number;
  name: string;
  publishingHouse: string;
  publishingYear: number;
  city: string;
  numberOfPages: number;
  price: number;
  authors?: Author[];
  numberOfInstances: number;
  bookInstances: BookInstance[];
  category?: Category;
}

// {
//   "name": "Booook 2",
//   "publishingHouse": "Raflan",
//   "publishingYear": "1488",
//   "city": "Lviv",
//   "numberOfPages": 100,
//   "price": 1000,
//   "authors": ["Vova","Vasya"],
//   "numberOfInstances": 1,
//   "category": "Uncategorized"
// }
