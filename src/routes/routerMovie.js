import BusinessMovie from '../business/businessMovie.js';
import multer from 'multer';




class RouterMovie {
    constructor() {
        this.businessMovie = new BusinessMovie();
    }

    config(app) {
        const upload = multer();

        app.get('/listMovie', async (req, res) => {
           res.json(await this.businessMovie.listMovie())  
          });

          app.get('/listMedia', async (req, res) => {
            res.json(await this.businessMovie.listMedia())  
           });

          app.post('/registerMovie', upload.none(), async (req, res) => {
            console.log(req.body);
            const postData = req.body;
            res.json(await this.businessMovie.registerMovie(postData.name, postData.date, postData.score, postData.type));
        });

    
    }
}

export default RouterMovie;