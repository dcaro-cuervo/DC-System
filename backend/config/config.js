//instatiate environment variables
require('dotenv').config();

//Make this global to use all over the application
let CONFIG = {}

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || '127.0.0.1';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'hds';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'Ciclon33';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'San_Lorenzo';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

let userRoles = CONFIG.userRoles = {
    guest: 1,    // ...001
    user: 2,     // ...010
    admin: 4     // ...100
};

CONFIG.accessLevels = {
    guest: userRoles.guest | userRoles.user | userRoles.admin,    // ...111
    user: userRoles.user | userRoles.admin,                       // ...110
    admin: userRoles.admin                                        // ...100
};

module.exports = CONFIG;