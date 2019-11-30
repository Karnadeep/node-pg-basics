const express = require('express')
const _u_c = require('../controllers/user')

const _r = express.Router()
_r.get('/showAllUsers',_u_c.showAllUsers) 
_r.post('/insertUser',_u_c.insertUser) 
_r.post('/updateUser',_u_c.updateUser) 




module.exports = _r
