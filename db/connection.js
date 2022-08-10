const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your mysql username,
    user: 'root',
    // Your MySQL password
    password: 'Kalindale!2345',
    database: 'election'
    });


module.exports = db;
