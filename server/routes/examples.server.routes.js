const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()
    const {time} =require ('../controllers/auth');

router.route('/')
  .get(examples.hello);
router.get('/',time);
  
module.exports = router;