import BusinessTypeMedia from '../business/businessTypeMedia.js';


class RouterTypeMedia {
    constructor() {
        this.BusinessTypeMedia = new BusinessTypeMedia();
    }

    config(app) {

        app.get('/listTypeMedia', async (req, res) => {
           res.json(await this.BusinessTypeMedia.listType())  
          });
        }
    }
    export default RouterTypeMedia;