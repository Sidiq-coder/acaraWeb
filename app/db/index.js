// import package mongoose
const mongoose = require('mongoose');

// import konfigurasi terkait MongoDB dari app/config.js
const { urlDb } = require('../config');

// connect ke MongoDB menggunakan konfigurasi yang telah di import
mongoose.connect(urlDb);

// simpan koneksi dalam constant db
const db = mongoose.connection;

// export db supaya bisa digunakan oleh file lain yang membutuhkan
module.exports = db;