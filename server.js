
const express = require('express')
const user_r = require('./routes/user')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/database')




const app = express()


// Test DB 
db.authenticate()
.then(()=> console.log('connected to the database'))
.catch((err)=> console.log('faild to connect', err.message))


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/user', user_r)

app.listen(3232,() => {
    console.log('Server is running on 3232')
})


