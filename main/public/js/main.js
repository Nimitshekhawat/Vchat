const chatForm = document.getElementById('chat-form');
const chatMessages= document.querySelector('.chat-messages');
const roomName =document.getElementById('room-name');
const userlist  =document.getElementById('users');
const body = document.querySelector('body');



// Get user name  and room from URL
const {username,room} =Qs.parse(location.search,{  
  ignoreQueryPrefix:true
});

const socket = io();

//Join chatroom
socket.emit('joinRoom',{username,room});

// Get room and users
socket.on('roomUsers',({room,users }) => {
  outputRoomName(room);
  outputUsers(users);
});


//messages from server
socket.on('message', message=> {
    console.log(message);
    outputMessage(message);
    
    //scroll down
    chatMessages.scrollTop =chatMessages.scrollHeight;
    

});

//message submit

chatForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    //get message text
    const msg = e.target.elements.msg.value;
    
    //Emit message to server
    socket.emit('chatMessage',msg);

    //clear input
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();

});

//output message to Dom
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}

//add room name to dom

function outputRoomName(room) {
  roomName.innerText=room;

}

//Add users to Dom 
function outputUsers(users){
  userlist.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
} 
//dark mode
modeSwitch.addEventListener("click" , () =>{
  body.classList.toggle("dark");
});