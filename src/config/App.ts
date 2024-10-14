import * as routes from "@/routes";
import * as ws from '@/ws'
import * as express from "express";
import { Server, createServer } from 'http'
import { Server as Io } from 'socket.io'
import * as cors from 'cors'

export class App {
  public expressApp: express.Application
  public server: Server
  private socketIo: Io

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.json());
    this.expressApp.use(cors({ origin: '*' }))
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
