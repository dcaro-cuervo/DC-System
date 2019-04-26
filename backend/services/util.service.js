const {to} = require('await-to-js');
const parseError = require('parse-error');

module.exports.to = async (promise) => {
    let err, res;
    [err, res] = await to(promise);
    if(err) return [parseError(err)];

    return [null, res];
};


//--------------- Standard way of sending responses -----
// The purpose this is to make sure every successful and error response is sent in the same format.

// Error Web Response
module.exports.ResponseError = function(res, err, code){
    if(typeof err == 'object' && typeof err.message != 'undefined'){
        err = err.message;
    }

    if(typeof code !== 'undefined') res.statusCode = code;

    return res.json({success:false, error: err});
};

// Success Web Response
module.exports.ResponseSuccess = function(res, data, code){
    let send_data = {success:true};

    if(typeof data == 'object'){
    		//merge the objects
        send_data = Object.assign(data, send_data);
    }

    if(typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

// ThrowError stands for Throw Error
// TE is basically a short cut for being able to quickly throw errors
module.exports.ThrowError = ThrowError = function(err_message, log){
    if(log === true){
        console.error(err_message);
    }

    throw new Error(err_message);
};