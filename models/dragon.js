const mongoose = require("mongoose") 
const dragonSchema = mongoose.Schema({ 
dragonname: String, 
 feature: String, 
 ranking: Number 
}) 
 
module.exports = mongoose.model("dragon", 
dragonSchema) 