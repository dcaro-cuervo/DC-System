const mongoose = require('mongoose');

const studySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	medic: {
		type: String,
		required: true
	},
	lender: {
		type: String,
		required: true
	},
	audit: {
		type: String,
		required: true
	},
	evolutionAudit: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	idPatient: {
		type: String,
		required: true
	}
});

const item = module.exports = mongoose.model('study', studySchema);