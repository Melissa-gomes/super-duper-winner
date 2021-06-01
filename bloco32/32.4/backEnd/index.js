const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: '*', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
}});

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

const PORT = 3001;
let messages = [
  { username: 'Fulano de tal', message: 'Hello world' },
];

io.on('connection', (socket) => {
  console.log(`${socket.id} conectou-se`);
  socket.emit('joined', messages);

  socket.on('send', (message) => {
    messages = [message, ...messages];
    io.emit('new-message', messages);
  });
});

http.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
