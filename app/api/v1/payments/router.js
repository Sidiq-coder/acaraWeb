const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');
const {
  authenticatedUser,
  authorizedRoles,
} = require('../../../middleware/auth');

router.get('/payments', authenticatedUser, authorizedRoles('organizer'), index);
router.get(
  '/payments/:id',
  authenticatedUser,
  authorizedRoles('organizer'),
  find
);
router.put(
  '/payments/:id',
  authenticatedUser,
  authorizedRoles('organizer'),
  update
);
router.delete(
  '/payments/:id',
  authenticatedUser,
  authorizedRoles('organizer'),
  destroy
);
router.post('/payments', authenticatedUser, authorizedRoles('organizer'), create);

module.exports = router;