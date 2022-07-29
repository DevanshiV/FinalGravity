const database = require('../database/mysqlDatabase')

module.exports.signinFirstPage1 = function(req, res){
    // res.sendFile(__dirname +'/signin.html')
    res.render('signin')
}

module.exports.signinDetails = function(req, res){
    var userName1 = req.body.userName;
    var password = req.body.password

    var sql = `INSERT INTO signin (userName, password) values ('${userName1}', '${password}')`;
    database.query(sql, function(err, result){
        if(err) throw err;
        // console.log(result)
        res.render('signin')
    })
}