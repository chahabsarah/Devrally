const express = require('express');
const router = express.Router();
const winnerController = require('../controllers/winnerController');

// Add a new winner (either team or user) for a given challenge
router.post('/add', winnerController.addWinner);

// Update an existing winner
router.put('/update/:winnerId', winnerController.updateWinner);

// Delete a winner by winnerId
router.delete('/delete/:winnerId', winnerController.deleteWinner);

// Find a winner by challengeId
router.get('/challenge/:challengeId', winnerController.findWinnerByChallengeId);

// Find a winner by winnerId
router.get('/id/:winnerId', winnerController.findWinnerById);

// Find all winners
router.get('/all', winnerController.findAllWinners);

module.exports = router;
