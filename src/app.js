import express from 'express'
import bodyParser from 'body-parser';
import {PORT} from './config.js'
import Router from './routes/routerMovie.js';
import cors from 'cors';
import RouterAnime from './routes/routerAnime.js';
import RouterMovie from './routes/routerMovie.js';
import RouterGame from './routes/routerGame.js';
import RouterBook from './routes/routerBook.js';
import RouterSerie from './routes/routerSerie.js';
import RouterTypeMedia from './routes/routerTypeMedia.js';



const app = express()



app.use(cors());

/*app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
  res.json(result)
})*/




app.use(express.json());



const routerMovie = new RouterMovie();
const routerAnime = new RouterAnime();
const routerGame = new RouterGame();
const routerBook = new RouterBook();
const routerSerie = new RouterSerie();
const routerTypeMedia = new RouterTypeMedia();


routerMovie.config(app);
routerAnime.config(app);
routerGame.config(app);
routerBook.config(app);
routerSerie.config(app);
routerTypeMedia.config(app);

app.listen(PORT)
console.log('Server on port', PORT)
