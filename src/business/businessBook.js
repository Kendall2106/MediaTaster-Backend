import DataBook from "../data/dataBook.js";

class BusinessBook {
  constructor() {
    this.dataBook = new DataBook();
  }

  async listBook() {
    return await this.dataBook.listBook();
  }

  async registerBook(name, date, score, type, pages){
    return await this.dataBook.registerBook(name, date, score, type, pages);
  }

  async deleteBook(id){
    return await this.dataBook.deleteBook(id);
  }
}

export default BusinessBook;