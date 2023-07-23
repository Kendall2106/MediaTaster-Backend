import multer from 'multer';
import BusinessSerie from '../business/businessSerie.js';

class RouterSerie {
    constructor() {
        this.BusinessSerie = new BusinessSerie();
    }

    config(app) {
        const upload = multer();

        app.get('/listSerie', async (req, res) => {
           res.json(await this.BusinessSerie.listSerie())  
          });

          app.post('/registerSerie', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessSerie.registerSerie(postData.name, postData.date, postData.score, postData.type, postData.temp));
        });

        app.post('/deleteSerie', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessSerie.deleteSerie(postData.id));
        });
    }
}

export default RouterSerie;