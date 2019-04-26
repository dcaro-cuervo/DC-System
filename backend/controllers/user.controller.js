const { User }          = require('../models');
const authService       = require('../services/auth.service');
const { to, ResponseError, ResponseSuccess }  = require('../services/util.service');

const create = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    if (!body.unique_key && !body.email && !body.phone) {
        return ResponseError(res, 'Please enter an email or phone number to register.');
    } else if (!body.password) {
        return ResponseError(res, 'Please enter a password to register.');
    } else {
        let err, user;

        [err, user] = await to(authService.createUser(body));

        if (err) return ResponseError(res, err, 422);
        return ResponseSuccess(
        	res, {
	        	message:'Successfully created new user.', 
	        	user:user.toWeb(), 
	        	token:user.getJWT()
	        }, 
	        201);
    }
}
module.exports.create = create;

const get = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;

    return ResponseSuccess(res, { user:user.toWeb() });
}
module.exports.get = get;

const update = async function(req, res) {
    let err, user, data
    user = req.user;
    data = req.body;
    user.set(data);

    [err, user] = await to(user.save());
    if (err) {
        if (err.message=='Validation error') err = 'The email address or phone number is already in use';
        return ResponseError(res, err);
    }
    return ResponseSuccess(res, { message : 'Updated User: ' + user.email });
}
module.exports.update = update;

const remove = async function(req, res){
    let user, err;
    user = req.user;

    [err, user] = await to(user.destroy());
    if (err) return ResponseError(res, 'error occured trying to delete user');

    return ResponseSuccess(res, { message:'Deleted User' }, 204);
}
module.exports.remove = remove;

const login = async function(req, res){
    const body = req.body;
    let err, user;

    [err, user] = await to(authService.authUser(req.body));
    if (err) return ResponseError(res, err, 422);

    return ResponseSuccess(res, { token:user.getJWT(), user:user.toWeb() });
}
module.exports.login = login;