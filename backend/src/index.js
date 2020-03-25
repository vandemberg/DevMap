const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

const { setupWebSocket } = require('./websocket');

mongoose.connect('mongodb+srv://omnistack:patofeio@omnistack-89nwr.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.Server(app);
setupWebSocket(server);

server.listen(3333, () => {
  console.log('servidor está rodando na porta 3333');
});

