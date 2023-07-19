import DataAnime from "../data/dataAnime.js";


class BusinessAnime {
  constructor() {
    this.dataAnime = new DataAnime();
  }

  async listAnime() {
    return await this.dataAnime.listAnime();
  }

  async registerAnime(name, date, score, type, temp){
    return await this.dataAnime.registerAnime(name, date, score, type, temp);
  }
}

export default BusinessAnime;