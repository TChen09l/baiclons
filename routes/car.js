var express = require ('express');
const carsModel = require('../models/carModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var cars_list = await carsModel.find({})
   res.render('cars/index', { cars : cars_list })
})

router.get('/list', async (req, res) => {
    var cars_list = await carsModel.find({})
    res.render('cars/list', { cars : cars_list })
 })

router.get('/delete/:id', async(req, res) => {
   await carsModel.findByIdAndDelete(req.params.id)
   .then(() => { console.log ('Delete movie succeed !')});
   res.redirect('/cars');
})

router.get('/add', async (req, res) => {  
   res.render('cars/add')
})
router.post('/add', async(req, res) =>{
   var cars = req.body;
   await carsModel.create(cars)
   .then(()=>{console.log("Add new movie succeed!!!")});
   res.redirect('/cars');

})

router.get('/edit/:id', async (req, res) => {
   var cars = await carsModel.findById(req.params.id);
   res.render('cars/edit', { cars : cars})
})

router.post('/edit/:id', async(req, res) =>{
   await carsModel.findByIdAndUpdate(req.params.id, req.body)
   .then(()=>{console.log("Edit movie succeed!!!")});
   res.redirect('/toys');
})
router.get('/sort/desc', async (req, res) => {
   var toys = await carsModel.find().sort({ title: -1 })
   res.render('toys/list', { cars: cars })
})

module.exports = router;