import BusinessGame from '../business/businessGame.js';
import bodyParser from 'body-parser';

class RouterGame {
    constructor() {
        this.BusinessGame = new BusinessGame();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/listGame', async (req, res) => {
           res.json(await this.BusinessGame.listGame())  
          })
    }
}

export default RouterGame;