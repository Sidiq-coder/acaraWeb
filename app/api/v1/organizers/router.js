const express = require('express');
const router = express();
const {createCMSOrganizer, createCMSUsers} = require('./controller');

const {
    authenticatedUser, 
   // authorizedRoles,
} = require('../../../middleware/auth');

router.post('/organizer', authenticatedUser, createCMSOrganizer);
router.post('/admin', authenticatedUser, createCMSUsers);

module.exports = router;