const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({path: configFile});
} else {
    dotEnv.config()
}

const conf = {
    PORT: process.env.PORT,
}


module.exports = {
    conf
}

