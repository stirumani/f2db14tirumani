var express = require('express'); 
const dragon_controlers= require('../controllers/dragon'); 
var router = express.Router(); 
 
/* GET dragons */ 
router.get('/', dragon_controlers.dragon_view_all_Page ); 
module.exports = router; 