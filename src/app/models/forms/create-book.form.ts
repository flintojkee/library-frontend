export class CreateBookForm {
  name: string;
  publishingHouse: string;
  publishingYear: number;
  city: string;
  numberOfPages: number;
  price: number;
  authors: string[];
  numberOfInstances: number;
  category: string;
  description: string;
  constructor() {
    this.name = null;
    this.publishingHouse = null;
    this.publishingYear = null;
    this.city = null;
    this.numberOfPages = null;
    this.price = null;
    this.authors = null;
    this.numberOfInstances = null;
    this.category = null;
    this.description = null;
  }
}
