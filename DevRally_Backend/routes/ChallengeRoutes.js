const express = require('express');
const router = express.Router();
const multer = require('multer');
const ChallengeController = require('../controllers/ChallengeCtrl');
const authMiddleware = require('../middleware/authMiddleware');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/addChallenge', upload.single('picture'), ChallengeController.createChallenge);
router.get('/getChallenges', ChallengeController.getAllChallenges);
router.get('/getChallengeById/:id', ChallengeController.getChallengeById);
router.put('/updateChallenge/:id', upload.single('picture'), ChallengeController.updateChallenge);
router.delete('/deleteChallenge/:id', ChallengeController.deleteChallenge);
router.post('/participateSolo/:id', authMiddleware, ChallengeController.participateAsSoloChallenger);
router.post('/participateTeam/:id', ChallengeController.participateAsTeam);
router.get('/viewSoloParticipants/:id', ChallengeController.viewSoloParticipants);
router.get('/viewTeamParticipants/:id', ChallengeController.viewTeamParticipants);
router.get('/isParticipating/:id', authMiddleware, ChallengeController.isParticipating);

router.get('/isUserParticipating/:challengeId/:userId', async (req, res) => {
    try {
        const { challengeId, userId } = req.params;
        const isUserParticipating = await ChallengeController.findUserIdByChallengeId(challengeId, userId);
        res.status(200).json({ isUserParticipating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/isTeamParticipating/:challengeId/:teamId', async (req, res) => {
    try {
        const { challengeId, teamId } = req.params;
        const isTeamParticipating = await ChallengeController.findTeamIdByChallengeId(challengeId, teamId);
        res.status(200).json({ isTeamParticipating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
