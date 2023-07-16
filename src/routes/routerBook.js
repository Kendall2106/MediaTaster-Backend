import BusinessBook from '../business/businessBook.js';
import bodyParser from 'body-parser';

class RouterBook {
    constructor() {
        this.BusinessBook = new BusinessBook();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/listBook', async (req, res) => {
           res.json(await this.BusinessBook.listBook())  
          })
    }
}

export default RouterBook;