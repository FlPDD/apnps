const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')
const exp = require('constants')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){
    res.render('index.ejs',{})
})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs',{ usuarios:[
        {nome: 'Fellipe', email:'fellipeduarte45@gmail.com' },
        {nome: 'Gabriel', email:'gabriel@gmail.com'},
        {nome: 'Diego', email:'diego@gmail.com'}
    ]})
})

app.listen(3000, function(){
    console.log("conexão inicializada")
})
