const express = require ('express')
const path = require('path')
const pages = require('./pages.js')

const server = express ()


// create rota
server
// utilizando os aquivos estáticos
.use(express.static('public'))

// confing template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// create rotas
.get ('/', pages.index)
.get ('/orphanage', pages.orphanage)
.get ('/orphanages', pages.orphanages)
.get ('/create-orphanage', pages.createOrphanage)


// turn on server 
server.listen(5500)
