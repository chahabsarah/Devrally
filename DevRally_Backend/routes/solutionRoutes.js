const express = require('express');
const router = express.Router();
const solutionController = require('../controllers/solutionController');
const authMiddleware = require('../middleware/authMiddleware');
const Solution = require('../models/SolutionModel')
// Route to add a new solution
router.post('/add', authMiddleware, solutionController.uploadFile, solutionController.addSolution);

// Route to update an existing solution
router.put('/update/:solutionId', authMiddleware, solutionController.uploadFile, solutionController.updateSolution);

// Route to delete a solution
router.delete('/delete/:solutionId', authMiddleware, solutionController.deleteSolution);
router.get('/byChallenge/:challengeId', authMiddleware, solutionController.getSolutionsByChallengeId);
router.get('/downloadSolutionFile/:solutionId', solutionController.downloadSolutionFile);
router.get('/team/:teamId', async (req, res) => {
    try {
        const { teamId } = req.params;
        const solutions = await Solution.find({ teamId }).populate('challengeId', 'name');
        if (!solutions || solutions.length === 0) {
            return res.status(404).json({ message: 'No solutions found for this team.' });
        }
        res.status(200).json(solutions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const solutions = await Solution.find({ userId }).populate('challengeId', 'name');
        if (!solutions || solutions.length === 0) {
            return res.status(404).json({ message: 'No solutions found for this user.' });
        }
        res.status(200).json(solutions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
