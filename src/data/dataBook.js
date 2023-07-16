import { pool } from "./dbContext/db.js";


class DataBook {
  constructor() {
    this.init();
  }

  init() {
  }

  async listBook() {
    const [rows] = await pool.query('Call sp_listBook()');
    return rows;
  }
}

export default DataBook;