const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

server.use(helmet())
server.use(express.json())

const projectRouter = require('./projects/projectRouter.js')
server.use('/api/projects', projectRouter)
server.use(morgan('dev'));


server.get('/', (req, res) => {
 res.send(`<h2>My Project API!</h2>`)
});

module.exports = server;