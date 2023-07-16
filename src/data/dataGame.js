import { pool } from "./dbContext/db.js";


class DataGame {
  constructor() {
    this.init();
  }

  init() {
  }

  async listGame() {
    const [rows] = await pool.query('Call sp_listGame()');
    return rows;
  }
}

export default DataGame;