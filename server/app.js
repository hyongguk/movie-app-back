const express = require('express');//もしかしたら4.17.1を第二引数に加えろ
const app = express();
const knex = require('./knex.js')
const port = process.env.PORT　|| 4000;
const cors = require('cors')
const db = require("./knex.js")
const data = require("../data/movies.json")
app.use(cors());

app.get('/', async (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})