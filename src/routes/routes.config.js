import express from 'express'
import BusinessMovie from '../business/businessMovie.js';
import bodyParser from 'body-parser';

class Router {
    constructor() {
        this.businessMovie = new BusinessMovie();
    }

    config(app) {
        app.use(bodyParser.json());

        app.get('/', async (req, res) => {
           res.json(await this.businessMovie.listMovie())  
          })
    }
}

export default Router;