import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'
import Router from './routes/routes.config.js';
import cors from 'cors';



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


app.use(function (req, res, next) {
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  } else {
      return next();
  }
});

app.use(express.json());
const router = new Router();
router.config(app);

app.listen(PORT)
console.log('Server on port', PORT)
