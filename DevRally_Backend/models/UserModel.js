const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationCode: {
    type: String,
    trim: true
  },
  userType: { 
    type: [String],
    enum: ['challenger', 'company'],
    required: true
  },
  website: { 
    type: String,
    required: function() { return this.userType.includes('company'); } 
  },
  domain: { 
    type: String, 
    required: function() { return this.userType.includes('company'); } 
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    default: null
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return token;
};

module.exports = mongoose.model('User', UserSchema);
