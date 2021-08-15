import { Server } from 'ws';
import * as commands from './commands'

class SocketServer {
  wss:Server

  constructor(port: number) {
    this.wss = new Server({ port })
    this.wss.on('connection', this.handleConnection)
  }

  private handleConnection(ws: WebSocket) {
    console.log('Obsidian instance connected')
  }

  broadcast() {
    console.log('Reloading Obsidian')
    this.wss.clients.forEach(client => {
      client.send(commands.RELOAD)
    });
  }
}

// Rollup Plugin API
export default ({port = 8080}) => {
  const server = new SocketServer(port)
  return {
    name: 'obsidian-reloader',
    writeBundle: async () => {
      server.broadcast()
    }
  }
}