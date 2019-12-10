const BUCKET_NAME = 'calfilesx';
const fs = require('fs');
const AWS = require('aws-sdk');
var path = require("path");
var serverModule = require('./server.js')

// Initializing of database object from environmental variables
// These are stored in Heroku, under the settings of our deployment.

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Here, we want a simple variable equal to an asnyc function that can
// await the result of calling s3.listObjectsV2(), and with a short timeout,
// return an exportable piece of data.

var data = {
  listFiles: async function () {
      var files = [];
      const params = {
          Bucket: BUCKET_NAME,
          Delimiter: '',
          Prefix: serverModule.uuid.UUID
      };
      await s3.listObjectsV2( params, (err, data) => {
          if (err) throw err;
          files = data.Contents.map(file => file);
      });
      setTimeout(function () {
          console.log(files);
          exports.files = files;

      }, 1000);
    }
};

exports.data = data;
