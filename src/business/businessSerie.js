import DataSerie from "../data/dataSerie.js";

class BusinessSerie {
  constructor() {
    this.dataSerie = new DataSerie();
  }

  async listSerie() {
    return await this.dataSerie.listSerie();
  }

  async registerSerie(name, date, score, type, temp){
    return await this.dataSerie.registerSerie(name, date, score, type, temp);
  }

  async deleteSerie(id){
    return await this.dataSerie.deleteSerie(id);
  }
}

export default BusinessSerie;