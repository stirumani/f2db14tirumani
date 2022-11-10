var Dragon = require('../models/dragon'); 
 
// List of all Dragons 
exports.dragon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dragon list'); 
}; 
 
// for a specific Dragon. 
exports.dragon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dragon detail: ' + req.params.id); 
}; 
 
// Handle Dragon create on POST. 
exports.dragon_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Dragon(); 
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
 
// Handle Dragon delete form on DELETE. 
exports.dragon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dragon delete DELETE ' + req.params.id); 
}; 
 
// Handle Dragon update form on PUT. 
exports.dragon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dragon update PUT' + req.params.id); 
}; 
exports.dragon_list = async function(req, res) { 
    try{ 
        theDragons = await Dragon.find(); 
        res.send(theDragons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.dragon_view_all_Page = async function(req, res) { 
    try{ 
        theDragons = await Dragon.find(); 
        res.render('dragon', { title: 'Dragon Search Results', results: theDragons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 