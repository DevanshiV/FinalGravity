const express = require('express')
const bodyParser = require('body-parser')

// const html = require('html')
const ejs = require('ejs')
// const path = require('path')
// const url = require('url')
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static(__dirname + '/login.html'));
app.use(express.static('public'))

var loginPages = require('./routes/login/loginRoutes')
app.use('/login', loginPages)

var project = require('./routes/projects/projectRoutes')
app.use('/project', project)

app.get('/', function(req, res){
    // res.sendFile(__dirname +'/views/abc.html')
    res.sendFile(__dirname +'/homepage.html')
})






app.listen(3001, function(){
    console.log('Port 3001 Connected')
})