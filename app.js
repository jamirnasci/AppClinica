const ejs = require('ejs')
const express = require('express')
const app = express()
const conn = require('./connection/connection')

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
    conn.mysql.query(`SELECT * FROM pacientes WHERE cpf = '${req.query.cpf}'`, (err, resp)=>{
        if(!err){
            res.send(resp)
            console.log(resp) 
        }
        else{
            console.log(err)
        }
    })
})

app.get("/cadastrar-pacientes", (req, res)=>{
    const r = req.query

    conn.mysql.query(`
    INSERT INTO pacientes 
        (id, nome, cpf, idade, area, data_consulta, convenio, endereco, numero, bairro, pcd)
    VALUES 
        (${r.idade+r.cpf.slice(0, 3)}, '${r.nome}', '${r.cpf}', ${r.idade}, '${r.area}', '${r.data}', '${r.convenio}', 
        '${r.endereco}', '${r.numero}', '${r.bairro}', '${r.pcd}');
        `, (err)=>{
            if(!err)
                res.send("Paciente cadastrado com sucesso")
            else
                console.log(err)
        })
})

app.listen(5555)