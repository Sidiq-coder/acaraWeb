const CustomApiError = require('./custom-api-error');
const NotFound = require('./not--found');
const BadRequest = require('./bad-request');
const Unauthorized = require('./unauthorized');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
    CustomApiError,
    NotFound,
    BadRequest,
    Unauthorized,
    UnauthenticatedError,
};