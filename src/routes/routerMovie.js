import BusinessMovie from '../business/businessMovie.js';
import bodyParser from 'body-parser';

class RouterMovie {
    constructor() {
        this.businessMovie = new BusinessMovie();
    }

    config(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listMovie', async (req, res) => {
           res.json(await this.businessMovie.listMovie())  
          });

          app.get('/listMedia', async (req, res) => {
            res.json(await this.businessMovie.listMedia())  
           });

          app.post('/registerMovie', async (req, res) => {
            console.log(req.query);
            const postData = req.query;
            res.json(await this.businessMovie.registerMovie(postData.name, postData.date, postData.score, postData.type));
            
        });
    }
}

export default RouterMovie;