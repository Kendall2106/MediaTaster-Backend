import { pool } from "./dbContext/db.js";


class DataBook {
  constructor() {
    this.init();
  }

  init() {
  }

  async listBook() {
    const [rows] = await pool.query('Call sp_listBook()');
    return rows[0];
  }

  async registerBook(name, date, score, type, pages) {
    try {
      await pool.query('Call sp_registerBook("'+name+'","' +date+'",'+score+','+type+','+pages+')');
      return 'Libro Registrado';
    } catch (error) {
      return 'error';
    }
  }

  async deleteBook(id) {
    try {
      await pool.query('Call sp_deleteBook('+id+')');
      return 'Libro eliminado';
    } catch (error) {
      return 'error';
    }
  }

}

export default DataBook;