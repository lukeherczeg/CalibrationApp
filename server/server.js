const upload = require('./upload'),
      cors = require('cors');
var bodyParser = require('body-parser');
const express = require('./config/express.js')
const expres = require('express');
var listFilesModule = require('./listFiles.js');

// Here we call express (the API itself)
// The name expres() was just a naming choice we made, to differentiate our
// variable express() that we called from the express.js file we made.

const server = expres();

// Cors initialization
var corsOptions = {
 optionsSuccessStatus: 200,
}
// Use Cors, and parse all requests from both bodyParser and expres()
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
   extended: true
}));
server.use(expres.json());
server.use(expres.urlencoded());

// Specifying port as either Heroku's chosen port or 5000
const port = process.env.PORT || 5000

// Initializing the app
const app = express.init()

// Use Cors and post to each endpoint.
app.use(cors(corsOptions));

app.post('/upload', upload);

app.post('/uuid', function (req, res) {
    const uuid = req.body.uuid;
    exports.uuid = uuid;
});

app.post('/getFiles',  function (req, res) {
  listFilesModule.data.listFiles();
  setTimeout(function () {
        const files = listFilesModule.files;
        //console.log(files);
        res.send(JSON.stringify(files));
    }, 1020);
});

app.use(cors());
app.listen(port, () => {
    console.log('Server started!');
});
