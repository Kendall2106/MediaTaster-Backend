import { pool } from "./dbContext/db.js";


class DataGame {
  constructor() {
    this.init();
  }

  init() {
  }

  async listGame() {
    const [rows] = await pool.query('Call sp_listGame()');
    return rows[0];
  }

  async registerGame(name, date, score, type, hours) {
    try {
      await pool.query('Call sp_registerGame("'+name+'","' +date+'",'+score+','+type+','+hours+')');
      return 'Juego Registrado';
    } catch (error) {
      return 'error';
    }
  }
}

export default DataGame;