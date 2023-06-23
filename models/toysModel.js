var mongoose = require('mongoose');

var Toyschema = mongoose.Schema(
   {
      name : String,
      origin : String,
      quality : Number,
      price : Number,
      img : String,
      video : String
   }
);

var toysModel = mongoose.model("Toy", Toyschema, "movie");

module.exports = toysModel;