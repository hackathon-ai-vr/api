import * as routes from "@/routes";
import * as ws from '@/ws'
import * as express from "express";
import { Server, createServer } from 'http'
import { Server as Io } from 'socket.io'

export class App {
  public expressApp: express.Application
  public server: Server
  private socketIo: Io

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    routes.register(this.expressApp);
    this.server = createServer(this.expressApp);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: '*',
      }
    });
    ws.register(this.socketIo)
  }
}
