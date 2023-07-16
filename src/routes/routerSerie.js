import bodyParser from 'body-parser';
import BusinessSerie from '../business/businessSerie.js';

class RouterSerie {
    constructor() {
        this.BusinessSerie = new BusinessSerie();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/listSerie', async (req, res) => {
           res.json(await this.BusinessSerie.listSerie())  
          })
    }
}

export default RouterSerie;