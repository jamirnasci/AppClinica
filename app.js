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

app.listen(5555)