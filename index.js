const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá fellipe")
})

app.get('/msg', function(req,res){
    res.send("Essa msg é automática")
})

app.listen(3000, function(){
    console.log("conexão inicializada")
})
