const http = require("http");

// console.log("I am here only");

// const os = require("os");

// console.log(os.platform());

// console.log(os.cpus());

// const fs = require("fs");

const host = require("./host");

const host1 = new host();

http
  .createServer((req, res) => {
    res.write("I am here only");
    res.end();
  })
  .listen(5000, () => console.log("server running..."));
