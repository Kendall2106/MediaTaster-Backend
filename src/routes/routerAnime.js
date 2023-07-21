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
            console.log(req.body);
            const postData = req.body;
            res.json(await this.businessAnime.registerAnime(postData.name, postData.date, postData.score, postData.type, postData.temp));
            
        });
     
    }
}

export default RouterAnime;