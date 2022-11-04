var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('dragon',{title:'Sarch Results dragon'});
});

module.exports = router;