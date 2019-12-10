const IncomingForm = require("formidable").IncomingForm;
const fs = require('fs');
const AWS = require('aws-sdk');
var path = require("path");
var serverModule = require('./server.js')
const BUCKET_NAME = 'calfilesx';
var isDeleted = false;

// Initializing of database object from environmental variables
// These are stored in Heroku, under the settings of our deployment.
// In learning S3, https://medium.com/codebase/using-aws-s3-buckets-in-a-nodejs-app-74da2fc547a6
// was very helpful.

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadFile = (file, uuid) => {
    // Read content from the file
    const fileContent = fs.readFileSync(file.path);

    // Setting up S3 upload parameters
    var name = uuid+"/"+file.name;
    const params = {
        Bucket: BUCKET_NAME,
        Key: name, // File name you want to save as in S3
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


// These two functions serve to delete files from the database.
// They are only used for quick database clears.

const deleteAllFiles = ()=>{
  const params={
    Bucket: BUCKET_NAME,
    Delimiter: '',
    Prefix: '',
  }
  s3.listObjectsV2(params, (err,data)=>{
    if(err) throw err;
    data.Contents.forEach(function(file){
    deleteFile(file);
   })
 })
}

const deleteFile = (file) => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: file.Key,
    };
    // Deleting a file from the bucket
    s3.deleteObject(params, function(err, data) {
      if (err)
        console.log(err, err.stack);  // error
      else
        console.log("File Deleted " + file.Key);  // deleted
    });
};

module.exports = function upload(req, res) {
  var files = [];
  var form = new IncomingForm()

  // Uncomment 'deleteAllFiles()'' to clear the database.

  if(!isDeleted){
    //deleteAllFiles();
    isDeleted = true;
  }
  form.on('file', (field, file) => {
    var uuid = serverModule.uuid.UUID;
    console.log(uuid);
    uploadFile(file, uuid);
  })

  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}
