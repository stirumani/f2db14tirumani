var dragon = require('../models/dragon'); 
 
// List of all dragons 
//exports.dragon_list = function(req, res) { 
   // res.send('NOT IMPLEMENTED: dragon list'); 
//}; 
 
// for a specific dragon. 
// for a specific Costume. 
exports.dragon_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await dragon.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle dragon create on POST. 
exports.dragon_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new dragon(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"dragon_type":"goat", "cost":12, "size":"large"} 
    document.dragonname = req.body.dragonname; 
    document.feature = req.body.feature; 
    document.ranking = req.body.ranking; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle dragon delete form on DELETE. 
//exports.dragon_delete = function(req, res) { 
   //res.send('NOT IMPLEMENTED: dragon delete DELETE ' + req.params.id); 
//}; 
 
// Handle dragon update form on PUT. 
//Handle Costume update form on PUT. 
exports.dragon_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await dragon.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.dragonname)  
               toUpdate.dragonname = req.body.dragonname; 
        if(req.body.feature) toUpdate.feature = req.body.feature; 
        if(req.body.ranking) toUpdate.ranking = req.body.ranking; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


exports.dragon_list = async function(req, res) { 
    try{ 
        thedragons = await dragon.find(); 
       res.send(thedragons); 
   } 
 catch(err){ 
     res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.dragon_view_all_Page = async function(req, res) { 
    try{ 
        thedragons = await dragon.find(); 
        res.render('dragon', { title: 'dragon Search Results', results: thedragons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume delete on DELETE. 
exports.dragon_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await dragon.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.dragon_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await dragon.findById( req.query.id) 
        res.render('dragondetail',  
{ title: 'dragon Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a dragon. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dragon_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dragoncreate', { title: 'dragon Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a dragon. 
// query provides the id 
exports.dragon_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await dragon.findById(req.query.id) 
        res.render('dragonupdate', { title: 'dragon Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.dragon_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await dragon.findById(req.query.id) 
        res.render('dragondelete', { title: 'dragon Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 