import DataGame from "../data/dataGame.js";

class BusinessGame {
  constructor() {
    this.dataGame = new DataGame();
  }

  async listGame() {
    return await this.dataGame.listGame();
  }
}

export default BusinessGame;