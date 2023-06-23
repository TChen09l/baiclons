var mongoose = require('mongoose');

var Feedbackchema = mongoose.Schema(
   {
    NameCustomer : String,
    Phonenumber : Number,
    Address: String,
    Feedback: String,
   }
);

var feedbackModel = mongoose.model("danhgia", Feedbackchema, "feedback");

module.exports = feedbackModel;