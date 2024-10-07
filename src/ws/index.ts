import { Server } from "socket.io";

export function register (io: Server) {
  io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} conectado`);
    
    socket.on('message', (message) => {
      console.log(message)
    })

    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} desconectado`);
    })
  })
}