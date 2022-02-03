const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

//inicializando
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


//setting 
app.engine('ejs', engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//rutas 
app.use(require('./routes'))


//sockets 
require('./sockets')(io);


//static file 
app.use(express.static(path.join(__dirname, 'public')))

//servidor working 
server.listen(4000, ()=>{
    console.log('listening on port 4000');
})