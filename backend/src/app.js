const express = require("express");
const cors = require("cors");

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
  }
}

module.exports = new App().server;
