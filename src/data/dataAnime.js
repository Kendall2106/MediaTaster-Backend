
import { pool } from "./dbContext/db.js";


class DataAnime {
  constructor() {
    this.init();
  }

  init() {
  }

  async listAnime() {
    const [rows] = await pool.query('Call sp_listAnime()');
    return rows[0];
  }
}

export default DataAnime;