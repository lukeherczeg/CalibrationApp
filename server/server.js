const express = require('express'),
      upload = require('./upload'),
      cors = require('cors');
var bodyParser = require('body-parser');

const server = express();

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    server.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(express.json());
server.use(express.urlencoded());

server.post('/upload', upload);

server.post('/uuid', function (req, res) {
    const uuid = req.body.uuid;
    exports.uuid = uuid;
});

server.listen(5000, () => {server.listen(process.env.PORT || 5000, () => {
    console.log('Server started!');
});
