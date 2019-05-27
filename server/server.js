const express = require('express');
const SocketIO = require('socket.io')

const http = require('http');


const path = require('path');
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = SocketIO(server);
// IO = esta es la comunicacion del backend

require('./socket/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});