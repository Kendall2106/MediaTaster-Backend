
import { pool } from "./dbContext/db.js";


class DataAnime {
  constructor() {
    this.init();
  }

  init() {
  }

  async listAnime() {
    console.log("¡Hola, mundo!");
    const [rows] = await pool.query('Call sp_listAnime()');
    return rows[0];
  }

  async registerAnime(name, date, score, type, temp) {
    try {
      await pool.query('Call sp_registerAnime("'+name+'","' +date+'",'+score+','+type+','+temp+')');
      return 'Anime Registrado';
    } catch (error) {
      return 'error';
    }
  }

  async deleteAnime(id) {
    try {
      await pool.query('Call sp_deleteAnime('+id+')');
      return 'Anime eliminado';
    } catch (error) {
      return 'error';
    }
  }
  
}



export default DataAnime;