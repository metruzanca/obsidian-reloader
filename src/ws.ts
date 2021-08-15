import * as commands from '../lib/commands'

export class Reloader {
  ws: WebSocket
  constructor({port = 8080, onConnect = () => {}}) {
    this.ws = new WebSocket(`ws://localhost:${port}`);
    this.ws.onopen = event => this.handleOpen(event, onConnect)
    this.ws.onmessage = this.handleMessage
    this.ws.onerror = this.handleError
  }

  kill() {
    this.ws.close()
  }

  private handleMessage({data}: MessageEvent<any>) {
    if(data === commands.RELOAD) {
      console.log('Reloading...');
      //@ts-ignore
      window.app.commands.commands['app:reload'].callback()
    }
  }

  private handleOpen(event: Event, callback: () => void) {
    console.log('%c⚡ Obsidian Reloader Ready! ⚡', 'color: #E7D136');
    console.log("Obsidian Auto Reloading Ready!");
    callback()
  }

  private handleError(error: Event) {
    console.error([
      'Connection failed for some reason...',
      'Heres a few easy fixes',
      '1. Did you forget to add Rollup Plugin into your `rollup.config.js`?',
      '\tGet it at https://www.npmjs.com/package/obsidian-reloader',
      '\tor install it with',
      '',
      '\tnpm i obsidian-reloader',
      '',
      '2. Is the obsidian plugin dev server running?',
      '\tStart it up with',
      '',
      '\tnpm run dev',
      '',
    ].join('\n'))
  }
}