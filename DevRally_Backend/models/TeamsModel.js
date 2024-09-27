const mongoose = require('mongoose');
const User = require('./UserModel');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      validate: {
        validator: async function (members) {
          if (members.length < 2) {
            throw new Error('A team must have at least 2 members.');
          }
          
          const users = await User.find({ _id: { $in: members } });
          const areAllChallengers = users.every(user => user.userType.includes('challenger'));

          if (!areAllChallengers) {
            throw new Error('All members must be of type challenger.');
          }
        },
        message: 'Validation failed',
      },
    },
  ],
  invitations: [
    {
      email: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending',
      },
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'active'],
    default: 'pending',
  },
  image: {
    data: {
      type: String,
    },
    contentType: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Team', TeamSchema);
