import BusinessTypeMedia from '../business/businessTypeMedia.js';
import multer from 'multer';


class RouterTypeMedia {
    constructor() {
        this.BusinessTypeMedia = new BusinessTypeMedia();
    }

    config(app) {
        const upload = multer();

        app.get('/listTypeMedia', async (req, res) => {
           res.json(await this.BusinessTypeMedia.listType())  
          });

        app.post('/registerType', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessTypeMedia.registerType(postData.name));
        });
        
        }
    }
    export default RouterTypeMedia;