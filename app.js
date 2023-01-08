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
        Nome: ${req.query.nome}
        Idade: ${req.query.idade}
        Area: ${req.query.area}
        CPF: ${req.query.cpf}
        Data: ${req.query.data}
        Convenio: ${req.query.convenio}
        Endereco: ${req.query.endereco}
        Bairro: ${req.query.bairro}
        pcd: ${req.query.pcd}
    `)

    res.send("recebido")
})

app.listen(5555)