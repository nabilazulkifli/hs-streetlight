const jwt = require('express-jwt');

const getTokenFromHeader = (req: any) => {
    if (
        req.headers.authorization?.split(' ')[0] === 'Token' ||
        req.headers.authorization?.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

const auth = {
    required: jwt({
        secret: '123',
        userProperty: 'payload',
        getToken: getTokenFromHeader,
        algorithms: ['HS256'],
    }),
    optional: jwt({
        secret: '123',
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader,
        algorithms: ['HS256'],
    }),
};

export default auth;
