const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.routes.js");

require("./database/index");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(cors());
    this.server.use(routes);
  }
}

module.exports = new App().server;
