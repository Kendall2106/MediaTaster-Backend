import DataSerie from "../data/dataSerie.js";

class BusinessSerie {
  constructor() {
    this.dataSerie = new DataSerie();
  }

  async listSerie() {
    return await this.dataSerie.listSerie();
  }
}

export default BusinessSerie;