const express = require('express');
const router = express();
const {create, index, find, update, destroy} = require('./controller');
const {
    authenticatedUser, 
   authorizedRoles,
} = require('../../../middleware/auth');

// contoh api get
// router.get('/categories', (req, res) => {
//     res.status(200).json({
//         Message: "Halaman Categories",
//     });
// });

router.get('/categories', authenticatedUser, authorizedRoles('organizer'), index);

// ini contoh api post
// router.post('/categories', (req, res) => {
//     const {name, organize} = req.body;

//     res.status(201).json({
//         Message: "Data berhasil dibuat",
//         Data: {
//             name: name,
//             organize: organize,
//         }
//     });
// });

router.post('/categories',  authenticatedUser, authorizedRoles('organizer'), create);

// contoh api get by id
// router.get('/categories/id', (req, res) => {
//     res.status(200).json({
//         Message: "Categori ID",
//     });
// });

router.get('/categories/:id', authenticatedUser, authorizedRoles('organizer'), find); //:id didapat dari variable = req.params di fungsi find

// contoh update
// router.put('/categories/:id', (req, res) => {
//     const {id} = req.params;
//     const {name, organize} = req.body;

//     res.status(200).json({
//         Message: "kategori dengan id ${id} berhasil diperbarui",
//         Data: {
//             name: name,
//             organize: organize,
//         }
//     });
// });

router.put('/categories/:id', authenticatedUser, authorizedRoles('organizer'), update);

router.delete('/categories/:id', authenticatedUser, authorizedRoles('organizer'), destroy);

module.exports = router;