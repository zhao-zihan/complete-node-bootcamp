const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: zzh");
});

myEmitter.emit("newSale");

////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another");
});

server.on("close", (req, res) => {
  res.end("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting");
});
