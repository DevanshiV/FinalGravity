const express = require('express')
const router = express.Router()

// app.get('/signin', function(req, res){
//     res.sendFile(__dirname +'/signin.html')
// })

// app.get('/signinPage', function(req, res){
//     res.sendFile(__dirname +'/signin.html')
// })

const signinFirstPage = require('../../controller/login/signin')
router.get('/signin', signinFirstPage.signinFirstPage1)

const loginFirstPage = require('../../controller/login/loginController')
router.get('/loginPage', loginFirstPage.loginFirstPage1)

const signinDetails = require('../../controller/login/signin')
router.post('/signinDetails', signinDetails.signinDetails)

const loginQuery = require('../../controller/login/loginController')
router.post('/loginQuery', loginQuery.loginQuery)

module.exports = router
