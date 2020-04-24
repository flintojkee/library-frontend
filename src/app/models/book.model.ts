import { BookInstance } from './book-instance.model';
import { Author } from './author.model';
import { Category } from './category.model';

export interface Book {
  id?: number;
  isbn: number;
  name: string;
  picture?: string;
  publishingHouse: string;
  publishingYear: number;
  city: string;
  numberOfPages: number;
  price: number;
  authors?: Author[] | string[] | string;
  numberOfInstances: number;
  bookInstances?: BookInstance[];
  category?: Category;
  description: string;
}
