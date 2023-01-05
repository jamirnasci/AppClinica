const ejs = require('ejs')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get("/", (req, res)=>{
    res.render("main", {})
})
app.get("/today", (req, res)=>{
    res.render("today", {})
})
app.get("/pacientes", (req, res)=>{
    res.render("pacientes", {})
})

app.get("/consultar-pacientes", (req, res)=>{
    res.send("pacientes")
})

app.listen(5555)