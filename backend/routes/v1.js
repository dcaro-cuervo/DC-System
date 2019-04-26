var express							= require('express');
var router							= express.Router();

const config						= require('../config/config');

const UserController		= require('../controllers/user.controller');
const HomeController		= require('../controllers/home.controller');

const allowOnly					= require('../services/routes-helper.service').allowOnly;

const passport					= require('passport');
const path							= require('path');

require('./../middleware/passport')(passport);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ status:"success", message:"Parcel Pending API", data:{ "version_number":"v1.0.0" } })
});


router.post(    '/users',           UserController.create);                                                   																			// C
router.get(     '/users',           passport.authenticate('jwt', {session:false}), allowOnly(config.accessLevels.user, UserController.get));        // R
router.put(     '/users',           passport.authenticate('jwt', {session:false}), allowOnly(config.accessLevels.admin, UserController.update));    // U
router.delete(  '/users',           passport.authenticate('jwt', {session:false}), allowOnly(config.accessLevels.admin, UserController.remove));    // D
router.post(    '/users/login',     UserController.login);

router.get('/dash', passport.authenticate('jwt', {session:false}), allowOnly(config.accessLevels.user, HomeController.Dashboard))


//********* API DOCUMENTATION **********
router.use('/docs/api.json',            express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
router.use('/docs',                     express.static(path.join(__dirname, '/../public/v1/documentation/dist')));
module.exports = router;



/*/// -------------------------------------------
/// ----------- DERIVATIONS -------------------
/// -------------------------------------------
//retriewing data from database
router.get('/derivations', (req, res, next) => {
	Derivation.find(function(err, derivations) {
		if (err) {
			res.json(err);
		}
		else {
			res.json(derivations)
		}
	});
});



/// -------------------------------------------
/// ------------- PATIENTS --------------------
/// -------------------------------------------
//retriewing data from database
router.get('/patients', (req, res, next) => {
	Patient.find(function(err, patients) {
		if (err) {
			res.json(err);
		}
		else {
			res.json(patients)
		}
	});
});

//retriewing one data from database
router.get('/patients/:id', (req, res, next) => {
	Patient.findOne({_id: req.params.id}, function(err, patient) {
		if (err){
			res.json(err);
		}
		else{
			res.json(patient);
		}
	})
});

//search data by params from database
router.get('/patients/search/:searchField', (req, res, next) => {
	var searchField = new RegExp(req.params.searchField, 'i');
	Patient.find({ firstName: searchField}, function(err, patients) {
		if (err){
			res.json(err);
		}
		else{
			res.json(patients);
		}
	})
});

//inserting new data
router.post('/patients', (req, res, next) => {
	let newPatient = new Patient({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dni: req.body.dni,
		hc: req.body.hc,
		address: req.body.address,
		age: req.body.age,
		sex: req.body.sex,
		phone: req.body.phone,
		hospitalOrigin: req.body.hospitalOrigin
	});
	newPatient.save((err, patient) => {
		if (err) {
			res.json(err);
		}
		else {
			res.json({ message: 'item has been added successfully', patientId: newPatient._id });
		}
	})
});

//updating the data
router.put('/patients/:id', (req, res, next) => {
	Patient.findOneAndUpdate({_id: req.params.id}, {
		$set: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			dni: req.body.dni,
			hc: req.body.hc,
			address: req.body.address,
			age: req.body.age,
			sex: req.body.sex,
			phone: req.body.phone,
			hospitalOrigin: req.body.hospitalOrigin
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({ message: 'item has been updated successfully' });
		}
	})
});

//deleting the data
router.delete('/patients/:id', (req, res, next) => {
	Patient.deleteOne({_id: req.params.id}, function(err, result) {
		if (err){
			res.json(err);
		}
		else{
			res.json({ message: 'item has been deleted successfully' });
		}
	})
});


/// -------------------------------------------
/// --------------- STUDIES -------------------
/// -------------------------------------------
//retriewing data from database
router.get('/studies', (req, res, next) => {
	Study.find(function(err, studies) {
		if (err) {
			res.json(err);
		}
		else {
			res.json(studies)
		}
	});
});

//inserting new data
router.post('/studies', (req, res, next) => {
	let newStudy = new Study({
		name: req.body.name,
		date: req.body.date,
		medic: req.body.medic,
		lender: req.body.lender,
		audit: req.body.audit,
		evolutionAudit: req.body.evolutionAudit,
		state: req.body.state,
		idPatient: req.body.idPatient
	});
	newStudy.save((err, study) => {
		if (err) {
			res.json(err);
		}
		else {
			res.json({ message: 'item has been added successfully', studyId: newStudy._id });
		}
	})
});

//updating the data
router.put('/studies/:id', (req, res, next) => {
	Study.findOneAndUpdate({_id: req.params.id}, {
		$set: {
			name: req.body.name,
			date: req.body.date,
			medic: req.body.medic,
			lender: req.body.lender,
			audit: req.body.audit,
			evolutionAudit: req.body.evolutionAudit,
			state: req.body.state
		}
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json({ message: 'item has been updated successfully' });
		}
	})
});

//deleting the data
router.delete('/studies/:id', (req, res, next) => {
	Study.deleteOne({_id: req.params.id}, function(err, result) {
		if (err){
			res.json(err);
		}
		else{
			res.json({ message: 'item has been deleted successfully' });
		}
	})
});

//sort by date
router.get('/studies/sort_date', (req, res, next) => {
	Study.aggregate(
		[
			{ $group: { _id: "$name" } }
		]), function(err, studies) {
		if (err) {
			res.json(err);
		}
		else {
			res.json(studies);
		}
	}
})

module.exports = router;*/