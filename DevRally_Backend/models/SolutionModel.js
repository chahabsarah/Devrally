const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
  commitMessage: {
    type: String,
    required: true
  },
  sourceFile: {
    path: {
      type: String,
      required: true
    },
    originalname: {
      type: String,
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    default: null
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true
  }
});

// Validate that either teamId or userId is provided
SolutionSchema.pre('save', function (next) {
  if (!this.teamId && !this.userId) {
    return next(new Error('A solution must have either a teamId or userId.'));
  }
  next();
});

module.exports = mongoose.model('Solution', SolutionSchema);
