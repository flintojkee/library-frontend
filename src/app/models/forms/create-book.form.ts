import { Category } from '../category.model';
import { Book, Author } from '..';

export class BookForm implements Book {
  name: string;
  isbn: number;
  publishingHouse: string;
  publishingYear: number;
  city: string;
  numberOfPages: number;
  price: number;
  authors: string[] | string;
  numberOfInstances: number;
  category: Category;
  description: string;
  pictureFile: File;
  constructor(
    name?: string,
    isbn?: number,
    publishingHouse?: string,
    publishingYear?: number,
    city?: string,
    numberOfPages?: number,
    price?: number,
    authors?: Author[],
    numberOfInstances?: number,
    category?: Category,
    description?: string,
  ) {
    this.name = name;
    this.isbn = isbn;
    this.publishingHouse = publishingHouse;
    this.publishingYear = publishingYear;
    this.city = city;
    this.numberOfPages = numberOfPages;
    this.price = price;
    this.authors = authors && authors.length ? authors.map((a) => a.fullName) : [];
    this.numberOfInstances = numberOfInstances;
    this.category = category;
    this.description = description;
    this.pictureFile = null;
  }
}
