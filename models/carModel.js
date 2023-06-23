var mongoose = require('mongoose');

var Craschema = mongoose.Schema(
   {
      name : String,
      origin : String,
      quality : Number,
      price : Number,
      img : String,
      video : String
   }
);

var carModel = mongoose.model("xe", Craschema, "cars");

module.exports = carModel;