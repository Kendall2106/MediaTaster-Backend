import BusinessBook from '../business/businessBook.js';
import multer from 'multer';

class RouterBook {
    constructor() {
        this.BusinessBook = new BusinessBook();
    }

    config(app) {
        const upload = multer();

        app.get('/listBook', async (req, res) => {
           res.json(await this.BusinessBook.listBook())  
          });

          app.post('/registerBook', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessBook.registerBook(postData.name, postData.date, postData.score, postData.type, postData.pages));   
        });

        app.post('/deleteBook', upload.none(), async (req, res) => {
            const postData = req.body;
            res.json(await this.BusinessBook.deleteBook(postData.id));
        });
    }
}

export default RouterBook;