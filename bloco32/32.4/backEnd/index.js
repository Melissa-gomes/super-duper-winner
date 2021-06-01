const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: '*', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
}});

// app.use(cors())

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

const PORT = 3002;

io.on('connection', (socket) => {
  console.log(`novo usuário conectado! ${socket.id}`);
  
  socket.on('disconnect', () => {
    console.log(`usuário ${socket.id} saiu`);
  });

});

http.listen(PORT, () => console.log('App listening on PORT %s', PORT));
