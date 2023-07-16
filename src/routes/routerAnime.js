import BusinessAnime from '../business/businessAnime.js';
import bodyParser from 'body-parser';

class RouterAnime {
    constructor() {
        this.businessAnime = new BusinessAnime();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/listAnime', async (req, res) => {
           res.json(await this.businessAnime.listAnime())  
          })
    }
}

export default RouterAnime;