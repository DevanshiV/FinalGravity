const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gravity',
    password: 'mysql',
})

connection.connect(function(err){
    if(err){ throw err
    }else{
    console.log('Database connected')
    }
})

module.exports = connection