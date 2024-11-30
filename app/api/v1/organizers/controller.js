const {StatusCodes} = require('http-status-codes');

const {createOrganizer, createUsers} = require('../../../services/mongos/users');

const createCMSOrganizer = async(req, res, next) => {
  try {
      const result = await createOrganizer(req);

      res.status(StatusCodes.CREATED).json({
          data: result,
      });
  } catch (err) {
      next(err);
  }
};

const createCMSUsers = async(req, res, next) => {
  try {
      const result = await createUsers(req);

      res.status(StatusCodes.CREATED).json({
          data: result,
      });
  } catch (err) {
      next(err);
  }
};

module.exports = {
    createCMSOrganizer,
    createCMSUsers,
};