'use strict';

module.exports = (sequelize, DataTypes) => {
	var Model = sequelize.define('Patient', {
			firstName : DataTypes.STRING,
			lastName 	: DataTypes.STRING,
			dni				: {type: DataTypes.STRING, allowNull: true, unique: true, validate: { 
        	len: {args: [7, 8], msg: "DNI number invalid, too short."}, isNumeric: { 
        		msg: "not a valid dni number."} }},
  		hc				: {type: DataTypes.STRING, allowNull: true, unique: true, validate: { 
        	len: {args: [7, 20], msg: "HC number invalid, too short."}, isNumeric: { 
        		msg: "not a valid hc number."} }},
  		address 	: DataTypes.STRING,
  		age				: DataTypes.STRING,
  		sex				: DataTypes.STRING,
  		phone			: {type: DataTypes.STRING, allowNull: true, unique: true, validate: { 
        	len: {args: [7, 20], msg: "Phone number invalid, too short."}, isNumeric: { 
        		msg: "not a valid phone number."} }}
	});

	return Model;
};