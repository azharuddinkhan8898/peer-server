const { PeerServer } = require('peer');

const PORT = process.env.PORT || 3000

const peerServer = PeerServer({ port: PORT, path: '/' });