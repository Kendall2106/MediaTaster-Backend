
import { pool } from "./dbContext/db.js";


class DataMovie {
  constructor() {
    this.init();
  }

  init() {
  }

  async listMovie() {
    const [rows] = await pool.query('Call sp_listMovie()');
    return rows[0];
  }

  async listMedia() {
    const [rows] = await pool.query('Call sp_listMedia()');
    return rows[0];
  }

  async registerMovie(name, date, score, type) {
    try {
      await pool.query('Call sp_registerMovie("'+name+'","' +date+'",'+score+','+type+')');
      return 'Pelicula Registrada';
    } catch (error) {
      return 'error';
    }
  }

  async deleteMovie(id) {
    try {
      await pool.query('Call sp_deleteMovie('+id+')');
      return 'Pelicula eliminada';
    } catch (error) {
      return 'error';
    }
  }

}

export default DataMovie;