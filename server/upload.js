
//mport {ID, SECRET} from './config/config.js';
const IncomingForm = require("formidable").IncomingForm;
const fs = require('fs');
const AWS = require('aws-sdk');

var path = require("path");
const BUCKET_NAME = 'calfilesx';


const s3 = new AWS.S3({
    accessKeyId: require('./config/config.js').ID,
    secretAccessKey: require('./config/config').SECRET
});
const uploadFile = (file) => {
    // Read content from the file
    const fileContent = fs.readFileSync(file.path);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: file.name, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    uploadFile(file);

  })
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}


//uploadFile('./paracosm.png');
