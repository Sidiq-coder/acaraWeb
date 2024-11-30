const {UnauthenticatedError, Unauthorized} = require('../errors');
const {isTokenValid} = require('../utils/jwt');

const authenticatedUser = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }

    if (!token) {
        throw new UnauthenticatedError("Authentication Invalid");
        
    }

    const payload = isTokenValid({token});

    req.user = {
        enail: payload.email,
        role: payload.role,
        name: payload.name,
        organizer: payload.organizer,
        id: payload.userId,
    };

   next();

  } catch (error) {
    next(error);
  }  
};

const authorizedRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new Unauthorized("Unauthorized Access This Role");
        }
        next();
    };
};

module.exports = {
    authenticatedUser,
    authorizedRoles,
}