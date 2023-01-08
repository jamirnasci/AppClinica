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

app.get("/cadastrar-pacientes", (req, res)=>{
    console.log(`
        Nome: ${req.query.nome}\n
        Idade: ${req.query.idade}\n
        Area: ${req.query.area}\n
        CPF: ${req.query.cpf}\n
        Data: ${req.query.data}\n
        Convenio: ${req.query.convenio}\n
        Endereco: ${req.query.endereco}\n
        Bairro: ${req.query.bairro}\n
        pcd: ${req.query.pcd}\n
    `)

    res.send("recebido")
})

app.listen(5555)