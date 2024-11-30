const express = require('express');
const router = express();
const {createCMSOrganizer, createCMSUsers, getCMSUSers} = require('./controller');

const {
    authenticatedUser, 
   authorizedRoles,
} = require('../../../middleware/auth');

router.post('/organizer', authenticatedUser, authorizedRoles('owner'), createCMSOrganizer);
router.post('/users', authenticatedUser, authorizedRoles('organizer'), createCMSUsers);
router.get('/users', authenticatedUser, authorizedRoles('owner'), getCMSUSers);

module.exports = router;