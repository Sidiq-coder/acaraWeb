const {StatusCodes} = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {

    console.log(err)
    console.log(err.message)
    //Default error 

    let customError = {
        StatusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
    };


    //validation error

    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(', ');
        customError.StatusCode = 400;
    }

    // error code

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(
            err.keyValue
        )} field, please choose another value`;
    }

    // error cast/pemanggilan
    
    if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`;
        customError.StatusCode = 404;
      }
    
      return res.status(customError.StatusCode).json({ msg: customError.msg });
    };
    
    module.exports = errorHandlerMiddleware;