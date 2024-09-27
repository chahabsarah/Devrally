const mongoose = require('mongoose');

const WinnerSchema = new mongoose.Schema({
 
  winnerteamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    default: null
  },
  winneruserId: {
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



module.exports = mongoose.model('Winner', WinnerSchema);
