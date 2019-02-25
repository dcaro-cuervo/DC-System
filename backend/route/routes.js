var express = require('express');
var router = express.Router();

const Derivation = require ('../model/derivation');
const Study = require ('../model/study');
const Patient = require('../model/patient');
	
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

module.exports = router;