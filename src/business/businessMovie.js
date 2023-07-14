import DataMovie from "../data/dataMovie.js";

class BusinessMovie {
  constructor() {
    this.dataMovie = new DataMovie();
  }

  async listMovie() {
    return await this.dataMovie.listMovie();
  }
}

export default BusinessMovie;