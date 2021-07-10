import http from 'http';

export class nodeServer {

  constructor({ defaultMessage }) {
    defaultMessage
      ? this.defaultMessage = defaultMessage
      : this.defaultMessage = 'Hola Mundo!';
    this.server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<!doctype html><html><head></head>`
        + `<body><h1>${this.defaultMessage}</h1></body></html>`);
      res.end();
    })
  }

  async run() {
    this.server.listen(8888);
    console.log('Web server running');
  }
}