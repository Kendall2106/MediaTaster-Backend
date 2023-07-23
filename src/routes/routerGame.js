import BusinessGame from '../business/businessGame.js';
import multer from 'multer';

class RouterGame {
    constructor() {
        this.BusinessGame = new BusinessGame();
    }

    config(app) {
        const upload = multer();

        app.get('/listGame', async (req, res) => {
           res.json(await this.BusinessGame.listGame())  
          });

          app.post('/registerGame', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessGame.registerGame(postData.name, postData.date, postData.score, postData.type, postData.hours));
        });

        app.post('/deleteGame', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessGame.deleteGame(postData.id));
        });

    }
}

export default RouterGame;