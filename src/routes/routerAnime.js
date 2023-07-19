import BusinessAnime from '../business/businessAnime.js';
import bodyParser from 'body-parser';

class RouterAnime {
    constructor() {
        this.businessAnime = new BusinessAnime();
    }

    config(app) {
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listAnime', async (req, res) => {
           res.json(await this.businessAnime.listAnime())  
          });

        app.post('/registerAnime', async (req, res) => {
            console.log(req.query);
            const postData = req.query;
            res.json(await this.businessAnime.registerAnime(postData.name, postData.date, postData.score, postData.type, postData.temp));
            
        });

        
    }
}

export default RouterAnime;