import DataMovie from "../data/dataMovie.js";

class BusinessMovie {
  constructor() {
    this.dataMovie = new DataMovie();
  }

  async listMovie() {
    return await this.dataMovie.listMovie();
  }

  async listMedia() {
    return await this.dataMovie.listMedia();
  }

  async registerMovie(name, date, score, type){
    return await this.dataMovie.registerMovie(name, date, score, type);
  }

  async deleteMovie(id){
    return await this.dataMovie.deleteMovie(id);
  }
}

export default BusinessMovie;