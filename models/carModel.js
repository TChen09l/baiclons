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

var carsModel = mongoose.model("xe", Toyschema, "cars");

module.exports = carsModel;