const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// EXPRESS MIDDLEWARE

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mysql username,
        user: 'root',
        // Your MySQL password
        password: 'Kalindale!2345',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows)
// });]

// GET a single candidate
//db.query(`SELECT * FROM candidates WHERE id = 20`, (err, row) => {
//    if (err) {
//        console.log(err);
//    }
//    console.log(row);
//});

// Delete a candidate
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//    if (err) {
//        console.log(err);
//    }
//
//    console.log(result);
//})
//
// Create a candidate
// Create a candidate
//const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//              VALUES (?,?,?,?)`;
//const params = [1, 'Ronald', 'Firbank', 1];
//
//db.query(sql, params, (err, result) => {
//  if (err) {
//    console.log(err);
//  }
//  console.log(result);
//});
// 

// DEFAULT response for any other request (NOt Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

