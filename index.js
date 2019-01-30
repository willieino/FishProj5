const express = require('express');
const cors = require('cors');
const db = require('./data/dbConfig');
const parser = express.json();
const server = express();
const PORT = 5050;
const logger = require('morgan');
const helmet = require('helmet');
const catchRouter = require('./routers/catchRouter');
const tripRouter = require('./routers/tripRouter');
const baitRouter = require('./routers/baitRouter');
const locationRouter = require('./routers/locationRouter');
const baitColorRouter = require('./routers/baitColorRouter');

let fishTable = "";

server.use(express.json());
server.use(cors({}));
server.use(parser);
server.use(logger('tiny'));
server.use(helmet());
server.use('/api/catch', catchRouter);
server.use('/api/trip', tripRouter);
server.use('/api/bait', baitRouter);
server.use('/api/baitcolor', baitColorRouter);
server.use('/api/location', locationRouter);


const sendUserError = (msg, res) => {
    res.status(400);
    res.json({ Error: msg });
    return;
};

// add your server code starting here




server.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `);
});

