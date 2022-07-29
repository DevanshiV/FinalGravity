const database = require('../database/mysqlDatabase')

module.exports.loginFirstPage1 = function(req, res){
    // res.sendFile(__dirname +'/login.html')
    res.render('login')
}

module.exports.loginQuery = function(req,res){
    var userName1 = req.body.userName;
    var password = req.body.password

    var sql = `SELECT * FROM signin where userName = '${userName1}'`;
    database.query(sql, function(err, result){
        if (err) throw err
        console.log(result)
        if(password == result[0].password){
            res.render('signin')
        }else{
            console.log('Wrong Password')
            res.render('login')
        }

    })
    
}