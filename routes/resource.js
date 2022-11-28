var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dragon_controller = require('../controllers/dragon'); 
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Dragon.  
router.post('/dragons', dragon_controller.dragon_create_post); 
 
// DELETE request to delete Dragon. 
router.delete('/dragons/:id', dragon_controller.dragon_delete); 
 
// PUT request to update Dragon. 
router.put('/dragons/:id', dragon_controller.dragon_update_put); 
 
// GET request for one Dragon. 
router.get('/dragons/:id', dragon_controller.dragon_detail); 
 
// GET request for list of all Dragon items. 
router.get('/dragons', dragon_controller.dragon_list); 
 
module.exports = router; 
/* GET detail dragon page */ 
router.get('/detail', dragon_controller.dragon_view_one_Page); 
/* GET create dragon page */
router.get('/create',secured, dragon_controller.dragon_create_Page);

/* GET create update page */ 
router.get('/update',secured, dragon_controller.dragon_update_Page);
/* GET delete dragon page */ 
router.get('/delete', secured,dragon_controller.dragon_delete_Page); 
 