const express = require('express');
const router = express();
const { index } = require('./controller');
const {
    authenticatedUser,
    authorizedRoles,
} = require('../../../middleware/auth');

router.get(
  '/orders',
  authenticatedUser,
  authorizedRoles('organizer', 'admin', 'owner'),
  index
);

module.exports = router;