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

  async registerSerie(name, date, score, type, temp) {
    try {
      await pool.query('Call sp_registerSerie("'+name+'","' +date+'",'+score+','+type+','+temp+')');
      return 'Serie Registrada';
    } catch (error) {
      return 'error';
    }
  }
}

export default DataSerie;