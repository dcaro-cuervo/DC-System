'use strict';
const bcrypt           = require('bcrypt');
const bcrypt_p         = require('bcrypt-promise');
const jwt              = require('jsonwebtoken');
const {ThrowError, to} = require('../services/util.service');
const CONFIG           = require('../config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('User', {
        first     : DataTypes.STRING,
        last      : DataTypes.STRING,
        email     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { 
        	isEmail: {msg: "Phone number invalid."} }},
        phone     : {type: DataTypes.STRING, allowNull: true, unique: true, validate: { 
        	len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { 
        		msg: "not a valid phone number."} }},
        password  : DataTypes.STRING,
        role			: { type: DataTypes.INTEGER, defaultValue: CONFIG.userRoles.user }
    });

		// Hash Password, on password save or update.
		Model.beforeSave(async (user, options) => {
		    let err;
		    if (user.changed('password')){
		        let salt, hash
		        [err, salt] = await to(bcrypt.genSalt(10));
		        if(err) ThrowError(err.message, true);

		        [err, hash] = await to(bcrypt.hash(user.password, salt));
		        if(err) ThrowError(err.message, true);

		        user.password = hash;
		    }
		});

		// Compare Password
		Model.prototype.comparePassword = async function (pw) {
		    let err, pass
		    if(!this.password) ThrowError('password not set');

		    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
		    if(err) ThrowError(err);

		    if(!pass) ThrowError('invalid password');

		    return this;
		};

		// Get JSON Web Token(JWT) for Authentication
		Model.prototype.getJWT = function () {
		    let expiration_time = parseInt(CONFIG.jwt_expiration);
		    return "Bearer " + jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, { expiresIn: expiration_time });
		};

		Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

		return Model;
};