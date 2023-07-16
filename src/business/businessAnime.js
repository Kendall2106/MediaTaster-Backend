import DataAnime from "../data/dataAnime.js";


class BusinessAnime {
  constructor() {
    this.dataAnime = new DataAnime();
  }

  async listAnime() {
    return await this.dataAnime.listAnime();
  }
}

export default BusinessAnime;