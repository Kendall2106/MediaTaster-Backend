import { pool } from "./dbContext/db.js";


class DataTypeMedia {
  constructor() {
    this.init();
  }

  init() {
  }

  async listType() {
    const [rows] = await pool.query('select * from type');
    return rows;
  }
}

export default DataTypeMedia;