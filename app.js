const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.json({info:'Node.Js,Express, and Postgres API'})

})

app.get('/customers',db.getAllUsers)
app.get('/meter',db.getMeter)
app.post('/customers',db.insertCustomer)
app.post('/meter',db.insertMeter)

app.listen(port,function(req,res){
    console.log('Server Started at Port '+port)
})