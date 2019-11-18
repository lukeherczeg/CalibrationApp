const express = require('express')
const upload = require('./upload')
const cors = require('cors')

const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(5000, () => {
  console.log('Server started!')
})
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

const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));*/
