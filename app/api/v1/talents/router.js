const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');

const {
    authenticatedUser, 
   authorizedRoles,
} = require('../../../middleware/auth');


router.get('/talents', authenticatedUser, authorizedRoles('organizer'), index);
router.get('/talents/:id', authenticatedUser, authorizedRoles('organizer'), find);
router.put('/talents/:id', authenticatedUser, authorizedRoles('organizer'), update);
router.delete('/talents/:id', authenticatedUser, authorizedRoles('organizer'), destroy);
router.post('/talents', authenticatedUser, authorizedRoles('organizer'), create);

module.exports = router;