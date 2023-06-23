var express = require ('express');
const toysModel = require('../models/toysModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var toys_list = await toysModel.find({})
   res.render('toys/index', { toys : toys_list })
})

router.get('/list', async (req, res) => {
    var toys_list = await toysModel.find({})
    res.render('toys/list', { toys : toys_list })
 })

router.get('/delete/:id', async(req, res) => {
   await toysModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete movie succeed !')});
   res.redirect('/toys');
})


router.post ('/rent', async (req, res) => {
    var id = req.body.id;
    var toys = await toysModel.findById(id);
    res.render('toys/rent', { toys : toys })
})

router.get('/add', async (req, res) => {  
   res.render('toys/add')
})
router.post('/add', async(req, res) =>{
   var toys = req.body;
   await toysModel.create(toys)
   .then(()=>{console.log("Add new movie succeed!!!")});
   res.redirect('/toys');

})

router.get('/edit/:id', async (req, res) => {
   var toys = await toysModel.findById(req.params.id);
   res.render('toys/edit', { toys : toys})
})

router.post('/edit/:id', async(req, res) =>{
   await toysModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit movie succeed!!!")});
   res.redirect('/toys');
})

//search function
router.post('/search', async (req, res) => {
   var keyword = req.body.title;
   var toys = await toysModel.find({ title: new RegExp(keyword, "i")})
   res.render('toys/list', { toys: toys })
})

//sort function
router.get('/sort/asc', async (req, res) => {
   var toys = await toysModel.find().sort({ title: 1 })
   res.render('toys/list', { toys: toys })
})

router.get('/sort/desc', async (req, res) => {
   var toys = await toysModel.find().sort({ title: -1 })
   res.render('toys/list', { toys: toys })
})

module.exports = router;