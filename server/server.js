const upload = require('./upload'),
      cors = require('cors');
var bodyParser = require('body-parser');
const express = require('./config/express.js')
const expres = require('express');
var listFilesModule = require('./listFiles.js');

 const server = expres();
//
var corsOptions = {
 optionsSuccessStatus: 200,
}
//
 server.use(cors(corsOptions));
server.use(bodyParser.json());
 server.use(bodyParser.urlencoded({
     extended: true
 }));
 server.use(expres.json());
 server.use(expres.urlencoded());

const port = process.env.PORT || 5000
const app = express.init()

app.use(cors(corsOptions));
app.post('/upload', upload);


app.post('/uuid', function (req, res) {
    const uuid = req.body.uuid;
    exports.uuid = uuid;
});

app.get('/getFiles',  function (req, res) {
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
