var express = require('express');
var router = express.Router();

/* GET newFile listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send('Arthur est trop chaud ');
});

module.exports = router;
