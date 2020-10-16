const express = require ('express')
const path = require('path')

const server = express ()


// create rota
server
.use(express.static('public'))
.get ('/', (request, response) => {

    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})


// turn on server 
server.listen(5500)
