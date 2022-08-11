const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

const config = {
    host: 'full_cycle_db',
    user: 'root',
    password: 'root',
    database: 'codeeducation'
};

const mysql = require('mysql2');
const connection = mysql.createConnection(config);
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql connection...');
});
const sql = `INSERT INTO people(name) VALUE('John Doe ${ new Date().getTime() }')`;
connection.query(sql);

app.get('/', async(req, res) => {
    const slq_select = `SELECT * FROM people`;

    await connection.query(slq_select, (err, results) => {
        if (err) throw err;
        var html = '<h1>Full Cycle Rocks!</h1><ul>';
        results.forEach((row) => { html += '<li class="row">' + row.name + '</li>'; });
        html += '</ul>';
        res.send(html);
    });
});

app.listen(port, () => {
    console.log('server started full cycle...');
});