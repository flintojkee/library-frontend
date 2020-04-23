export class CreateBookForm {
  name: string;
  isbn: number;
  publishingHouse: string;
  publishingYear: number;
  city: string;
  numberOfPages: number;
  price: number;
  authors: string[];
  numberOfInstances: number;
  category: string;
  description: string;
  pictureFile: File;
  constructor() {
    this.name = 'null';
    this.isbn = 22222222;
    this.publishingHouse = 'null';
    this.publishingYear = 2000;
    this.city = 'null';
    this.numberOfPages = 20;
    this.price = 20;
    this.authors = ['Ivan'];
    this.numberOfInstances = 1;
    this.category = null;
    this.description = 'null';
    this.pictureFile = null;
  }
}
