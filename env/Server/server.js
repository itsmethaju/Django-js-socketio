const http =require('http')
const server = http.createServer()


const socketio = require('socket.io')


const io =socketio(server,{
    cors :{
        origin:'http://127.0.0.1:8000',
        methods:["GET",'POST']
    }
})

const room = 'testRoom'

io.on('connection',socket=> {
    console.log('connted')
    console.log(socket.id)
    
    socket.join(room)
    // io.to(room).emit('welcome','a new user')
    socket.broadcast.emit('welcome2', 'a new user2 chat')


    socket.on('message',msg=>{
        console.log(msg)
        io.to(room).emit('messageclient',msg)
    })
    socket.on('disconnect',()=>{
        io.to(room).emit('baybay','a user disconnected')
    })
})
server.listen(8000,()=>console.log("port 80000"))