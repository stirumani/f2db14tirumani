const mongoose = require("mongoose") 
const dragonSchema = mongoose.Schema({ 
dragonname: {
    type:String,
    required:true
} ,
 feature: {
    type:String,
    required:true 
 },
 ranking: {
 type:Number,
 min:0,max:200
 }
}) 
 
module.exports = mongoose.model("dragon", 
dragonSchema) 