import BusinessBook from '../business/businessBook.js';
import bodyParser from 'body-parser';

class RouterBook {
    constructor() {
        this.BusinessBook = new BusinessBook();
    }

    config(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/listBook', async (req, res) => {
           res.json(await this.BusinessBook.listBook())  
          });

          app.post('/registerBook', async (req, res) => {
            console.log(req.query);
            const postData = req.query;
            res.json(await this.BusinessBook.registerBook(postData.name, postData.date, postData.score, postData.type, postData.pages));
            
        });
    }
}

export default RouterBook;