const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    users = require('../routes/userRoutes'),
    cors = require('cors');


module.exports.init = () => {

    mongoose.connect(process.env.DATABASE_URI,
    {
      useNewUrlParser: true
    });
    mongoose.set('useCreateIndex',true);
    mongoose.set('useFindAndModify',false);
    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(cors());
    app.use(bodyParser.json());

    // add a router

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }
    // new code
    app.use('/users',users);
    return app
}
