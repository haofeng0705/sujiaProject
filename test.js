const WebSocket = require('ws');
let socket = new WebSocket('ws://10.20.233.237:8888');

// # serving the flash policy file
net = require("net")

net.createServer((socket) =>
  //just added
  socket.on("error", (err) =>
    console.log("Caught flash policy server socket error: ")
  )

  socket.write("<?xml version=\"1.0\"?>\n")
  socket.write("<!DOCTYPE cross-domain-policy SYSTEM \"http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd\">\n")
  socket.write("<cross-domain-policy>\n")
  socket.write("<allow-access-from domain=\"*\" to-ports=\"*\"/>\n")
  socket.write("</cross-domain-policy>\n")
  socket.end()
).listen(843)
