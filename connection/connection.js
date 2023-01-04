const mysql2 = require("mysql2")

const mysql = mysql2.createConnection({
    host:'localhost',
    password:'',
    user:'root',
    database:'test'
})

module.exports = {
    mysql:mysql
}