const { Patient } = require('../models');
const { to, ResponseError, ResponseSuccess } = require('../services/util.service');

const create = async function(req, res) {
	const body = req.body;

	let err, newPatient;

  [err, newPatient] = await to(Patient.create(body));

  if (err) return ResponseError(res, err, 422);
  
  return ResponseSuccess(res, { patient: newPatient }, 201);
}

module.exports.create = create;

const get = function(req, res) {

	return ResponseSuccess(res, {patient: req.patient});
}

module.exports.get = get;

const update = async function(req, res) {
	let err, patient, data;
	patient = req.patient;
	data = req.body;
	patient.set(data);

	[err, patient] = await to(Patient.save());
	if (err) return ResponseError(res, err);

	return ResponseSuccess(res, {patient: patient });
}

module.exports.update = update;

const remove = async function(req, res) {
	let patient, err;
	patient = req.body;

	[err, patient] = await to(patient.destroy());
	if (err) ResponseError(res, 'An error occured trying to delete the patient');

	return ResponseSuccess(res, { message: 'Deleted Patient' }, 204);
}

module.exports.remove = remove;