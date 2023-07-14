
import { pool } from "../db.js";


class DataMovie {
  constructor() {
    this.init();
  }

  init() {
  }

  async listMovie() {
    const [rows] = await pool.query('SELECT * FROM movie');
    //res.status(200).send(rows);
    return rows;
  }
}

export default DataMovie;