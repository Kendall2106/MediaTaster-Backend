import DataGame from "../data/dataGame.js";

class BusinessGame {
  constructor() {
    this.dataGame = new DataGame();
  }

  async listGame() {
    return await this.dataGame.listGame();
  }

  async registerGame(name, date, score, type, hours){
    return await this.dataGame.registerGame(name, date, score, type, hours);
  }

  async deleteGame(id){
    return await this.dataGame.deleteGame(id);
  }

}

export default BusinessGame;