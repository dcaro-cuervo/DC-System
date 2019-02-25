const mongoose = require('mongoose');

const derivationSchema = mongoose.Schema({
	idPatient: {
		type: Number,
		required: true
	}
});

const item = module.exports = mongoose.model('derivation', derivationSchema);