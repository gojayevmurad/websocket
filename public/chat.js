const socket = io.connect('http://localhost:3000');

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const submitBtn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

message.addEventListener('keypress', () => {
    socket.emit('typing', sender.value);
});

submitBtn.addEventListener('click', () => {
    socket.emit('chat', {
        sender: sender.value,
        message: message.value
    });
});



socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});