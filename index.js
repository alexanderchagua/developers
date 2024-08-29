const http = require("http")

function requestController(){
    console.log("RECIBIMOS UNA NUEVA request")
}
//configurar nuestro servidor
const server = http.createServer(requestController)

server.listen(4000)