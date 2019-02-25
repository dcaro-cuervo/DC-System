const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	dni: {
		type: Number,
		required: true
	},
	hc: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	sex: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	hospitalOrigin: {
		type: String,
		required: false
	}
});

const item = module.exports = mongoose.model('patient', patientSchema);