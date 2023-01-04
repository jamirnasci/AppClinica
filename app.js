const ejs = require('ejs')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.set('gato amarelo', 'pastel')

app.get("/", (req, res)=>{
    res.render("main", {})
})

app.listen(5555)