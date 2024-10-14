import { Server } from 'socket.io';
import { OpenAIFacade } from '@/openAi'
import * as qs from 'qs'

// Configurar WebSocket nativo

// Integrar com o Socket.IO
export function register(io: Server) {
  io.on('connection', async (socket) => {
    console.log(`Socket ${socket.id} conectado`);
    socket.on('clientMessage', async (message) => {
      const thread = await OpenAIFacade.getThread({ role: 'user', content: message })
      OpenAIFacade.run(thread.id, async (text) => {
        socket.emit('serverResponse', text)
      })
    });

    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} desconectado`);
    });
  });
}
