const path = require('path');
const http=require('http');
const express= require('express');
const socketio =require('socket.io');
const formatMessages =require('./utils/messages');
const{userJoin,
    getCurrentUser,
    userLeaves,
    getRoomusers
}=require('./utils/users');

const app=express();
const server= http.createServer(app);
const io= socketio(server);

//set static folder
app.use(express.static(path.join(__dirname,'./main/public')));

const botName ='Vchat';

//Run when client connects
io.on("connection",socket => { 
    socket.on('joinRoom',({username,room})=>{
        const user = userJoin(socket.id,username,room);
        
        socket.join(user.room);
        
        
        //Welcome current user
        socket.emit('message',formatMessages(botName,'Welcome to Vchat!'));//this is for single user
    
    //Broadcast when a user connects
    //this is for the all except the client connecting
    socket.broadcast
        .to(user.room)
        .emit(
            'message',
            formatMessages(botName ,`${user.username} has joined the chat`)
        ); 
        //send users and room info 
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users: getRoomusers(user.room)
        });

    });
    

    
    
    

    //Listen for chatMessage
    socket.on('chatMessage',(msg)=> {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message',formatMessages(user.username,msg));
    });

    //Runs when a user disconnects
    socket.on('disconnect', () => {
        const user = userLeaves(socket.id);

        if(user){
            io.to(user.room).emit(
                'message',
                formatMessages(botName,`${user.username} has left the chat`)
            );
                //io.emit()//all the clients when connects in genral 
            //send users and room info 
            io.to(user.room).emit('roomUsers',{
                room:user.room,
                users: getRoomusers(user.room)

            });
        }

       
    });
   
    
}); 


const PORT=5000 || process.env.PORT;

server.listen(PORT, () => console.log("running on port",PORT));




