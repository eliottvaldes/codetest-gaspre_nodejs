require('dotenv').config();

// create an instance of the server model
const Server = require('./models/server.model');

const server = new Server();

server.listen();