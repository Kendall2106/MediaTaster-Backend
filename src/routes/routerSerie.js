import bodyParser from 'body-parser';
import BusinessSerie from '../business/businessSerie.js';

class RouterSerie {
    constructor() {
        this.BusinessSerie = new BusinessSerie();
    }

    config(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listSerie', async (req, res) => {
           res.json(await this.BusinessSerie.listSerie())  
          });

          app.post('/registerSerie', async (req, res) => {
            console.log(req.query);
            const postData = req.query;
            res.json(await this.BusinessSerie.registerSerie(postData.name, postData.date, postData.score, postData.type, postData.temp));
            
        });
    }
}

export default RouterSerie;