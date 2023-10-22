import { io } from "socket.io-client";

class SocketHandler {
  static sharedInstance = new SocketHandler();
  socket = io("http://172.20.10.5:4000", {
    // Configuration options
    autoConnect: false, // Set to true if you want to auto-connect
    reconnection: true,
    transports: ["websocket"], // You can specify other transports if needed
  });

  constructor() {
    this.mSocket = this.socket;
  }

  // Gets the socket
  getSocket() {
    return this.mSocket;
  }

  establishConnection() {
    this.mSocket.connect();
  }

  closeConnection() {
    this.mSocket.disconnect();
  }
}

export default SocketHandler;
