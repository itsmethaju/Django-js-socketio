// server path = "app\env\Server"


const socket =io('http://localhost:8000')

const alertBox =document.getElementById('alert-box')
const messagesBox=document.getElementById('messages-box')
const messageInput=document.getElementById('message-input')
const sendBtn = document.getElementById('send-btn')


// socket.on('welcome', msg=>{
//     console.log(msg)
// })

const handleAlerts =(msg,type) =>{
    alertBox.innerHTML = `
    <div class="alert alert-${type}" role="alert">
        ${msg}
    </div>
    `
    setTimeout(()=>{
        alertBox.innerHTML=""
    },2000)
}

socket.on('bayebye', msg=>{
    
    handleAlerts(msg,'danger')
})

sendBtn.addEventListener('click',()=>{
    const message =messageInput.value
    messageInput.value=""
    console.log(message)

    socket.emit('message',message)
})
socket.on('messageclient',msg=>{
    console.log(msg)
    messagesBox.innerHTML += `<b>${msg}</b><br>`
 })