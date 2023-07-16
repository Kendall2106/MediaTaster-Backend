
import { pool } from "./dbContext/db.js";


class DataMovie {
  constructor() {
    this.init();
  }

  init() {
  }

  async listMovie() {
    const [rows] = await pool.query('Call sp_listMovie()');
    return rows;
  }
}

export default DataMovie;