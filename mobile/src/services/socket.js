import socketio from 'socket.io-client';
import { Alert } from 'react-native';

const socket = socketio('http://192.168.0.53:3333', {
  autoConnect: false,
});

function connect(latitude, longitude, techs) {
  disconnect();

  socket.io.opts.query = {
    latitude, longitude, techs
  };

  socket.connect();
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect();
  }
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}