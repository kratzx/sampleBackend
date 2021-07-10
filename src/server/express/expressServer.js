import express from 'express';
import indexRouter from './routes/index.js';
import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';

export class ExpressServer {

  constructor(config = {}) {
    this.server = express();
    this.port = config.port || 3000;
    this.router = express.Router();
  }

  run() {
    this.routes();
    this.server.listen(this.port, () => {
      console.log(`Express server listening at http://localhost:${this.port}`)
    })
  }

  routes() {
    this.server.use('/', indexRouter);
    this.server.use('/products', productsRouter);
    this.server.use('/users', usersRouter);
  }
}