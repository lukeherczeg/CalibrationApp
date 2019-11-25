const express = require('./config/express.js')
const FileUpload = require('./upload')
const cors = require('cors')

//Following code breaks server deploy:
/*
const server = express()
var corsOptions ={
  origin: '*',
  optionSuccessStatus: 200,
}
 server.use(cors(corsOptions))
 server.post('/FileUpload', FileUpload)
// Use env port or default
*/
const port = process.env.PORT || 5000;
const app = express.init()
app.use(cors());
app.listen(port, () => console.log(`Server now running on port ${port}!`));
