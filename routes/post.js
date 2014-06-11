var express = require('express');
var router = express.Router();

router.post('/', function(request, response){

    console.log(request.body.name);
    console.log(request.body);
    response.writeHead(200);
    response.write('Hello, you are : ' + request.body.name);
    response.end();
    return;

});



router.get('/', function(req, res) {
  res.render('welcome', { title: 'Hello' });
});

module.exports = router;