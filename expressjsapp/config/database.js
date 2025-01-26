const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'carrinho'
})
console.log("database.js")
module.exports = connection;
