const mysql2 = require("mysql2")

const mysql = mysql2.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    database:'clinica'
})

module.exports = {
    mysql:mysql
}