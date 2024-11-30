const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let organizersSchema = Schema(
  {
    organizer: {
      type: String,
      minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
      maxLength: [20, 'Panjang nama kategori maksimal 20 karakter'],
      required: [true, 'Nama organizer harus diisi'],
    },
  },
  { timestamps: true }
);

module.exports = model('organizers', organizersSchema);