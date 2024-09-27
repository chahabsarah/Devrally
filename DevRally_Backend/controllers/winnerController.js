const Winner = require('../models/WinnerModel');
const Challenge = require('../models/ChallengeModel');
const nodemailer = require('nodemailer');
const User = require('../models/UserModel');
const Team = require('../models/TeamsModel');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    transportMethod: "SMTP",
    secureConnection: false,
    port: 465,
    secure: true,
    auth: {
      user: "",
      pass: "",
    },
    tls: {
      rejectUnauthorized: false
    },
  });

exports.addWinner = async (req, res) => {
    try {
        const { winnerteamId, winneruserId, challengeId } = req.body;

        if (!winnerteamId && !winneruserId) {
            return res.status(400).json({ message: 'Please provide either a team ID or a user ID as the winner.' });
        }
        if (winnerteamId && winneruserId) {
            return res.status(400).json({ message: 'Please provide only one of team ID or user ID as the winner.' });
        }

        // Find the Challenge
        const challenge = await Challenge.findById(challengeId);
        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        // Check if the Challenge already has a winner
        if (challenge.hasWinner) {
            return res.status(400).json({ message: 'This challenge already has a winner.' });
        }

        // Create and save the winner
        const winner = new Winner({
            winnerteamId,
            winneruserId,
            challengeId
        });

        await winner.save();

        // Update the Challenge to indicate it now has a winner
        challenge.hasWinner = true;
        await challenge.save();

        // Send email notification
        if (winneruserId) {
            // Winner is a user
            const user = await User.findById(winneruserId);
            if (user) {
                const mailOptions = {
                    from: "tektaitheoriginals@gmail.com",
                    to: user.email,
                    subject: 'Congratulations! You are the winner!',
                    text: `Dear ${user.fullname},
                
                Congratulations! You have won the challenge "${challenge.name}".
                
                Please contact us at +216 56 55 84 02 to claim your reward.
                
                Congratulations again!
                
                Best regards,`
                };
                
                await transporter.sendMail(mailOptions);
            }
        } else if (winnerteamId) {
            // Winner is a team
            const team = await Team.findById(winnerteamId).populate('creator');
            if (team && team.creator) {
                const mailOptions = {
                    from: "tektaitheoriginals@gmail.com",
                    to: team.creator.email,
                    subject: 'Congratulations! Your team has won the challenge!',
                    text: `Dear ${team.creator.fullname},
                           Congratulations! You have won the challenge "${challenge.name}".
                
                           Please contact us at +216 56 55 84 02 to claim your reward.
                
                           Congratulations again!
                
                           Best regards,`
                };
                                
                await transporter.sendMail(mailOptions);
            }
        }

        res.status(201).json({ message: 'Winner added successfully', winner });
    } catch (error) {
        if (error.response && error.response.status === 400) {
            res.status(400).json({ message: 'Non' });
        } else if (error.response && error.response.status === 500) {
            res.status(500).json({ message: 'Failed to add winner' });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred', error });
        }
    }
};
// Update winner information for a given challenge
exports.updateWinner = async (req, res) => {
    try {
        const { winnerId } = req.params;
        const { winnerteamId, winneruserId } = req.body;

        if (!winnerteamId && !winneruserId) {
            return res.status(400).json({ message: 'Please provide either a team ID or a user ID as the winner.' });
        }
        if (winnerteamId && winneruserId) {
            return res.status(400).json({ message: 'Please provide only one of team ID or user ID as the winner.' });
        }

        const winner = await Winner.findByIdAndUpdate(winnerId, {
            winnerteamId,
            winneruserId
        }, { new: true });

        if (!winner) {
            return res.status(404).json({ message: 'Winner not found' });
        }

        res.status(200).json({ message: 'Winner updated successfully', winner });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update winner', error });
    }
};

// Delete a winner by winnerId
exports.deleteWinner = async (req, res) => {
    try {
        const { winnerId } = req.params;

        const winner = await Winner.findByIdAndDelete(winnerId);

        if (!winner) {
            return res.status(404).json({ message: 'Winner not found' });
        }

        res.status(200).json({ message: 'Winner deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete winner', error });
    }
};

// Find a winner by challengeId
exports.findWinnerByChallengeId = async (req, res) => {
    try {
        const { challengeId } = req.params;

        const winner = await Winner.find({ challengeId });

        if (!winner) {
            return res.status(404).json({ message: 'Winner not found for this challenge' });
        }

        res.status(200).json(winner);
    } catch (error) {
        res.status(500).json({ message: 'Failed to find winner by challenge ID', error });
    }
};

// Find a winner by winnerId
exports.findWinnerById = async (req, res) => {
    try {
        const { winnerId } = req.params;

        const winner = await Winner.findById(winnerId);

        if (!winner) {
            return res.status(404).json({ message: 'Winner not found' });
        }

        res.status(200).json(winner);
    } catch (error) {
        res.status(500).json({ message: 'Failed to find winner by ID', error });
    }
};

// Find all winners
exports.findAllWinners = async (req, res) => {
    try {
        const winners = await Winner.find();

        res.status(200).json(winners);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve winners', error });
    }
};
