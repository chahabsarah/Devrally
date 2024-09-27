const Challenge = require('../models/ChallengeModel');
const Team  = require('../models/TeamsModel');
const User = require('../models/UserModel');
const addImage = async (req) => {
    if (!req.file) {
        throw new Error('No image file uploaded');
    }
    const base64Image = req.file.buffer.toString('base64');
    return {
        data: base64Image,
        contentType: req.file.mimetype
    };
};

exports.createChallenge = async (req, res) => {
    try {
        const challengeData = req.body;
        if (req.file) {
            challengeData.picture = await addImage(req);
        }
        const challenge = new Challenge(challengeData);
        await challenge.save();
        res.status(201).json({ message: 'Challenge created successfully', challenge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getChallengeById = async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }
        res.status(200).json(challenge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateChallenge = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = { ...req.body };

        // Trouvez le challenge existant pour obtenir l'image actuelle
        const existingChallenge = await Challenge.findById(id);
        if (!existingChallenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        // Vérifiez et préparez les données pour éviter les erreurs de type
        if (req.file) {
            updatedData.picture = await addImage(req.file);
        } else if (req.body.currentPicture) {
            // Conservez l'ancienne image si aucune nouvelle image n'est fournie
            updatedData.picture = JSON.parse(req.body.currentPicture);
        } else {
            // Si aucune image n'est fournie, conservez l'ancienne image
            updatedData.picture = existingChallenge.picture;
        }

        // Assurez-vous que tous les champs sont correctement formatés
        // (ajoutez des validations spécifiques si nécessaire)
        if (Array.isArray(updatedData.soloParticipants)) {
            updatedData.soloParticipants = updatedData.soloParticipants.filter(id => id); // Filtrer les valeurs vides
        }

        // Mettez à jour le challenge
        const challenge = await Challenge.findByIdAndUpdate(id, updatedData, { new: true });

        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        // Assurez-vous que updateStatus est une méthode de votre modèle Challenge
        await challenge.updateStatus();

        res.status(200).json({ message: 'Challenge updated successfully', challenge });
    } catch (error) {
        console.error('Error updating challenge:', error.message);
        res.status(500).json({ error: error.message });
    }
};
exports.deleteChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }
        res.status(200).json({ message: 'Challenge deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.participateAsSoloChallenger = async (req, res) => {
    try {
        const { userId } = req.body; // Extract userId from the request body
        const challengeId = req.params.id;

       

        const challenge = await Challenge.findById(challengeId);
        if (challenge.soloParticipants.includes(userId)) {
            return res.status(400).json({ message: 'You are already participating in this challenge.' });
        }

        // Add the user to soloParticipants
        challenge.soloParticipants.push(userId);
        await challenge.save();

        res.status(200).json({ message: 'Successfully joined the challenge as a solo participant', challenge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.participateAsTeam = async (req, res) => {
  try {
      const teamId = req.body.teamId;
      const challengeId = req.params.id;
      const team = await Team.findById(teamId).populate('members');
      if (!team) {
          return res.status(404).json({ message: 'Team not found.' });
      }
      const challenge = await Challenge.findById(challengeId);
      if (challenge.teamParticipants.includes(teamId)) {
          return res.status(400).json({ message: 'This team is already participating in the challenge.' });
      }

      challenge.teamParticipants.push(teamId);
      await challenge.save();

      res.status(200).json({ message: 'Team successfully joined the challenge', challenge });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
exports.viewSoloParticipants = async (req, res) => {
  try {
      const challengeId = req.params.id;
      const challenge = await Challenge.findById(challengeId).populate('soloParticipants', 'fullname email');

      if (!challenge) {
          return res.status(404).json({ message: 'Challenge not found.' });
      }

      res.status(200).json({ soloParticipants: challenge.soloParticipants });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
exports.viewTeamParticipants = async (req, res) => {
  try {
      const challengeId = req.params.id;
      const challenge = await Challenge.findById(challengeId).populate({
          path: 'teamParticipants',
          populate: {
              path: 'members',
              select: 'fullname email'
          }
      });

      if (!challenge) {
          return res.status(404).json({ message: 'Challenge not found.' });
      }

      res.status(200).json({ teamParticipants: challenge.teamParticipants });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
exports.isParticipating = async (req, res) => {
    try {
        const userId = req.user._id;
        const challengeId = req.params.id;

        const challenge = await Challenge.findById(challengeId).populate('soloParticipants teamParticipants');

        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        const isSoloParticipant = challenge.soloParticipants.includes(userId);
        const isTeamParticipant = challenge.teamParticipants.some(team => team.members.includes(userId));

        res.status(200).json({ isSoloParticipant, isTeamParticipant });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.findTeamIdByChallengeId = async (challengeId, teamId) => {
    try {
      const challenge = await Challenge.findById(challengeId);
  
      if (!challenge) {
        throw new Error('Challenge not found');
      }
  
      const teamExists = challenge.teamParticipants.includes(teamId);
  
      return teamExists;
    } catch (error) {
      throw new Error(error.message);
    }
};
exports.findUserIdByChallengeId = async (challengeId, userId) => {
    try {
      const challenge = await Challenge.findById(challengeId);
  
      if (!challenge) {
        throw new Error('Challenge not found');
      }
  
      const userExists = challenge.soloParticipants.includes(userId);
  
      return userExists;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
