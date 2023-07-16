import { pool } from "./dbContext/db.js";


class DataSerie {
  constructor() {
    this.init();
  }

  init() {
  }

  async listSerie() {
    const [rows] = await pool.query('Call sp_listSerie()');
    return rows[0];
  }
}

export default DataSerie;