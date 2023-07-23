import BusinessAnime from '../business/businessAnime.js';
import multer from 'multer';

class RouterAnime {
    constructor() {
        this.businessAnime = new BusinessAnime();
    }

    config(app) {
        const upload = multer();

        app.get('/listAnime', async (req, res) => {
           res.json(await this.businessAnime.listAnime())  
          });

        app.post('/registerAnime', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.businessAnime.registerAnime(postData.name, postData.date, postData.score, postData.type, postData.temp));
        });

        app.post('/deleteAnime', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.businessAnime.deleteAnime(postData.id));
        });
     
    }
}

export default RouterAnime;