import BusinessMovie from '../business/businessMovie.js';
import bodyParser from 'body-parser';

class RouterMovie {
    constructor() {
        this.businessMovie = new BusinessMovie();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/listMovie', async (req, res) => {
           res.json(await this.businessMovie.listMovie())  
          })
    }
}

export default RouterMovie;