const http = require("http")

function requestController(){
    console.log("hola mundo!!!!!!!")
}

const PORT = process.env.PORT 
//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000, function(){
    console.log({env: process.env})
})