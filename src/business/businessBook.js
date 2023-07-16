import DataBook from "../data/dataBook.js";

class BusinessBook {
  constructor() {
    this.dataBook = new DataBook();
  }

  async listBook() {
    return await this.dataBook.listBook();
  }
}

export default BusinessBook;