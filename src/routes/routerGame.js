import BusinessGame from '../business/businessGame.js';
import bodyParser from 'body-parser';

class RouterGame {
    constructor() {
        this.BusinessGame = new BusinessGame();
    }

    config(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listGame', async (req, res) => {
           res.json(await this.BusinessGame.listGame())  
          });

          app.post('/registerGame', async (req, res) => {
            console.log(req.query);
            const postData = req.query;
            res.json(await this.BusinessGame.registerGame(postData.name, postData.date, postData.score, postData.type, postData.hours));
            
        });
    }
}

export default RouterGame;