const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  prizeAmount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: { 
    data: {
        type: String,
    },
    contentType: String,
},
  solo: {
    type: Boolean,
    required: false
  },
  status: {
    type: String,
    default: function() {
      const now = new Date();
      if (this.end_date < now) {
        return 'Expired';
      } else if (this.start_date <= now && this.end_date >= now) {
        return 'OnGoing';
      } else {
        return 'Coming';
      }
    }
  },
  team: {
    type: Boolean,
    required: false
  },
  teamSize: {
    type: Number,
    required: function() {
      return this.team;
    }
  },
  
  admin: {
    type: String,
    required: true
  },
  hasWinner:{
    type: Boolean,
    default :false,
    required: true
  }
  ,
  soloParticipants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  teamParticipants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
    }
  ]
}, { timestamps: true });
ChallengeSchema.methods.updateStatus = function() {
    const now = new Date();
    if (this.end_date < now) {
      this.status = 'Expired';
    } else if (this.start_date <= now && this.end_date >= now) {
      this.status = 'OnGoing';
    } else {
      this.status = 'Coming';
    }
    return this.save();
  };
module.exports = mongoose.model('Challenge', ChallengeSchema);
