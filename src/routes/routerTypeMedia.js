import BusinessTypeMedia from '../business/businessTypeMedia.js';
import bodyParser from 'body-parser';

class RouterTypeMedia {
    constructor() {
        this.BusinessTypeMedia = new BusinessTypeMedia();
    }

    config(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listTypeMedia', async (req, res) => {
           res.json(await this.BusinessTypeMedia.listType())  
          });
        }
    }
    export default RouterTypeMedia;