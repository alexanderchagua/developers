const http = require("http")

function requestController(){
    console.log("hola mundo!!!!!!!")
}
//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)