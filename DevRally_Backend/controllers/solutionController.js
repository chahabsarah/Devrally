const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Solution = require('../models/SolutionModel');
const Challenge = require('../models/ChallengeModel');

// Define allowed file types and their MIME types
const allowedTypes = [
  'application/zip',
      'application/x-zip-compressed',
      'application/x-compressed-zip',
      'application/x-rar-compressed',
      'application/vnd.rar',
      'application/rar'
];

// Set up storage engine (disk storage for handling large files)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save the files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Save the original filename
  }
});

// Initialize multer with file size and type validation
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only .zip and .rar files are allowed.'));
    }
  },
  limits: { fileSize: 250 * 1024 * 1024 } // 250 MB limit
});

// Middleware to handle file upload
exports.uploadFile = upload.single('sourceFile');

// Add a new solution

exports.addSolution = async (req, res) => {
  try {
    const { commitMessage, teamId, userId, challengeId } = req.body;
    const sourceFile = req.file;

    if (!sourceFile) {
      return res.status(400).json({ error: 'Source file is required' });
    }

    // Validate that either teamId or userId is provided
    if (!teamId && !userId) {
      return res.status(400).json({ error: 'A solution must have either a teamId or userId.' });
    }

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    // Check for existing solution by user or team for the given challenge
    const existingSolution = await Solution.findOne({
      challengeId,
      $or: [{ userId }, { teamId }]
    });

    if (existingSolution) {
      return res.status(400).json({ error: 'A solution has already been submitted for this challenge.' });
    }

    const newSolution = new Solution({
      commitMessage,
      sourceFile: {
        path: sourceFile.path, // Use path for disk storage
        originalname: sourceFile.originalname, // Save the original filename
        contentType: sourceFile.mimetype // Save the MIME type
      },
      teamId: teamId || null,
      userId: userId || null,
      challengeId
    });

    await newSolution.save();
    res.status(201).json({ message: 'Solution added successfully', solution: newSolution });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // Handle Multer-specific errors
      res.status(400).json({ error: error.message });
    } else {
      // Handle other errors
      res.status(500).json({ error: error.message });
    }
  }
};


// Update an existing solution
exports.updateSolution = async (req, res) => {
  try {
    const { solutionId } = req.params;
    const { commitMessage, teamId, userId } = req.body;
    const sourceFile = req.file;

    const solution = await Solution.findById(solutionId);
    if (!solution) {
      return res.status(404).json({ message: 'Solution not found' });
    }

    // Update solution fields
    if (commitMessage) solution.commitMessage = commitMessage;
    if (sourceFile) {
      solution.sourceFile = {
        path: sourceFile.path, // Use path for disk storage
        originalname: sourceFile.originalname, // Update the filename
        contentType: sourceFile.mimetype // Update MIME type
      };
    }
    if (teamId !== undefined) solution.teamId = teamId || null;
    if (userId !== undefined) solution.userId = userId || null;

    // Validate that either teamId or userId is provided
    if (!solution.teamId && !solution.userId) {
      return res.status(400).json({ error: 'A solution must have either a teamId or userId.' });
    }

    await solution.save();
    res.status(200).json({ message: 'Solution updated successfully', solution });
  } catch (error) {
    if (error instanceof multer.MulterError) {
      // Handle Multer-specific errors
      res.status(400).json({ error: error.message });
    } else {
      // Handle other errors
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a solution
exports.deleteSolution = async (req, res) => {
  try {
    const { solutionId } = req.params;

    const solution = await Solution.findById(solutionId);
    if (!solution) {
      return res.status(404).json({ message: 'Solution not found' });
    }

    // Delete the file from the server
    if (fs.existsSync(solution.sourceFile.path)) {
      fs.unlinkSync(solution.sourceFile.path);
    }

    await solution.remove();
    res.status(200).json({ message: 'Solution deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Download a solution file
exports.downloadSolutionFile = async (req, res) => {
  try {
    const { solutionId } = req.params;

    const solution = await Solution.findById(solutionId);
    if (!solution) {
      return res.status(404).json({ message: 'Solution not found' });
    }

    if (!solution.sourceFile) {
      return res.status(404).json({ message: 'No file associated with this solution' });
    }

    // Ensure the file type is allowed
    const allowedContentTypes = [
      'application/zip',
      'application/x-zip-compressed',
      'application/x-compressed-zip',
      'application/x-rar-compressed',
      'application/vnd.rar',
      'application/rar'
    ];

    if (!allowedContentTypes.includes(solution.sourceFile.contentType)) {
      return res.status(400).json({ message: 'File type not allowed' });
    }

    res.download(solution.sourceFile.path, solution.sourceFile.originalname); // Use res.download for disk storage
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get solutions by challenge ID
exports.getSolutionsByChallengeId = async (req, res) => {
  try {
    const { challengeId } = req.params;

    if (!challengeId) {
      return res.status(400).json({ error: 'Challenge ID is required' });
    }

    const solutions = await Solution.find({ challengeId });
    if (solutions.length === 0) {
      return res.status(404).json({ message: 'No solutions found for this challenge' });
    }

    res.status(200).json(solutions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
