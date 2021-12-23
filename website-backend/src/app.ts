import express from 'express'

const mysql = require('mysql')
const app = express()

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'czook',
    password: 'Sterling9423',
    database: 'scm-db'
})


app.get('/', (req, res ) => {
    res.send("<h1>What ");
});

app.get('/about', (req, res) => {
    res.send("Welcome to the About");
});

app.post('email', (req, res) => {
    res.send(req.body)

});

app.listen(3001, () => {
    console.log('started');
    
});

