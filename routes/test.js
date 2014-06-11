var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  // res.render('test', { title: 'Hello', name : 'Heidi' });

  	res.send('HELLO, ' + req.query.name);

});

module.exports = router;
