const { Server } = require('expressbooster');
const server = new Server();
const app = require('express')();
const AuthApp = require('./index.js');

app.get('/', (req, res) => {
  res.send(`Welcome to myapp!`);
})

server.use(app);
server.use(AuthApp);

server.on('started', () => {
  console.log();
});

server.start();
