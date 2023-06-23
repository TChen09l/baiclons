var express = require ('express');
const feedbackModel = require('../models/feedbackModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var feedback_list = await feedbackModel.find({})
   res.render('feedback/list', { feedback: feedback_list })
})

router.get('/delete/:id', async(req, res) => {
   await feedbackModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete feedback succeed !')});
   res.redirect('/feedback');
})

router.get('/edit/:id', async (req, res) => {
   var feedback = await feedbackModel.findById(req.params.id);
   res.render('feedback/edit', { feedback : feedback });
})

router.post('/edit/:id', async(req, res) =>{
   await feedbackModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit feedback succeed!!!")});
   res.redirect('/feedback');
})
router.get('/add', (req, res) => {
   res.render('feedback/add');
})
router.post('/add', async (req, res) => {
   var feedback  = req.body;
   await feedbackModel.create(feedback)
   .then(() => { console.log ("Add new feedback succeed !")});
   res.redirect('/feedback');
})
module.exports = router;