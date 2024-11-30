const express = require('express');
const router = express();
const {create} = require('./controller');
const {multer} = require('multer');

const upload = require('../../../middleware/multer')

router.post('/images', upload.single('Gambar') ,create);

module.exports = router;