const express = require('express');//もしかしたら4.17.1を第二引数に加えろ
const app = express();
const knex = require('./knex.js')
const port = process.env.PORT　|| 4000;
const cors = require('cors')
const db = require("./knex.js")

app.use(cors());

app.get('/', async (req, res) => {
    const ave = await knex.select().from("movies");
    console.log(ave)
    let urlOfave = ave[0].poster;
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})