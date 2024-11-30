const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { model, Schema } = mongoose;

let usersSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama user harus diisi'],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email harus diisi'],
    },
    password: {
      type: String,
      required: [true, 'Password harus diisi'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['admin', 'organizer', 'owner'],
      default: 'admin',
    },
    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'organizer',
        required: true,
      },
    
  },
  { timestamps: true }
);


usersSchema.pre('save', async function (next) {
    const User = this;
    if (User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});


usersSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('users', usersSchema);