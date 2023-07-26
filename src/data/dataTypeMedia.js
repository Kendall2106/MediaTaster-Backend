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

  async registerType(name) {
    try {
      await pool.query('Call sp_registerType("'+name+'")');
      return 'Tipo Registrado';
    } catch (error) {
      return 'error';
    }
  }

}

export default DataTypeMedia;