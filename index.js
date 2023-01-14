const { PeerServer } = require('peer');

console.log("azhar")

const PORT = process.env.PORT || 9000

const peerServer = PeerServer({ port: PORT, path: '/' });