var express = require('express');
var router = express.Router();

//get clients list

router.get('/', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;


/**
 * Created by adrianSSD on 11/8/2014.
 */
