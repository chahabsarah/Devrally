const express = require('express');
const multer = require('multer');
const router = express.Router();
const Team = require('../models/TeamsModel');
const User = require('../models/UserModel');
const nodemailer = require('nodemailer');
const Challenge = require('../models/ChallengeModel');
const { getRandomImage } = require('../randomImage');
const upload = multer(); // Multer instance to handle file uploads


const addImage = async (req) => {
  if (!req.file) {
    return null;
  }

  const base64Image = req.file.buffer.toString('base64');
  return {
    data: base64Image,
    contentType: req.file.mimetype,
  };
};
router.post('/teams', upload.single('image'), async (req, res) => {
  const { name, creatorId, inviteEmails, challengeId } = req.body;

  try {
    const creator = await User.findById(creatorId);
    if (!creator || !creator.userType.includes('challenger')) {
      return res.status(400).send('Invalid creator');
    }

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return res.status(404).send('Challenge not found');
    }

    const invitations = inviteEmails.map(email => ({
      email,
      code: Math.floor(100000 + Math.random() * 900000).toString(),
    }));

    let teamImage;

    if (req.file) {
      const base64Image = req.file.buffer.toString('base64');
      teamImage = {
        data: base64Image,
        contentType: req.file.mimetype,
      };
    } else {
      teamImage = getRandomImage();
    }

    const team = new Team({
      name,
      creator: creatorId,
      invitations,
      status: 'pending',
      image: teamImage,
    });

    await team.save();

    invitations.forEach(invitation => {
      sendInvitationEmail(invitation.email, invitation.code, challenge);
    });

    res.status(201).send({ message: 'Invitations sent, team pending creation.', teamId: team._id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

function sendInvitationEmail(email, code, challenge) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    transportMethod: "SMTP",
    secureConnection: false,
    port: 465,
    secure: true,
    auth: {
      user: "tektaitheoriginals@gmail.com",
      pass: "cvxv sflh anot dark",
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  const mailOptions = {
    from: "tektaitheoriginals@gmail.com",
    to: email,
    subject: 'Team Invitation',
    html: `<p>You have been invited to join a team. Use this code to join: ${code}</p>
           <p>Challenge Details:</p>
           <p>Challenge Name: ${challenge.name}</p>
           <p>Start Date: ${challenge.start_date}</p>
           <p>Description: ${challenge.description}</p>
           <p>Prize Amount: ${challenge.prizeAmount}</p>`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



function sendInvitationEmail(email, code, challenge) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    transportMethod: "SMTP",
    secureConnection: false,
    port: 465,
    secure: true,
    auth: {
      user: "tektaitheoriginals@gmail.com",
      pass: "cvxv sflh anot dark",
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  const mailOptions = {
    from: "tektaitheoriginals@gmail.com",
    to: email,
    subject: 'Team Invitation',
    html: `<p>You have been invited to join a team. Use this code to join: ${code}</p>
           <p>Challenge Details:</p>
           <p>Challenge Name: ${challenge.name}</p>
           <p>Start Date: ${challenge.start_date}</p>
           <p>Description: ${challenge.description}</p>
           <p>Prize Amount: ${challenge.prizeAmount}</p>`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

router.post('/join', async (req, res) => {
  const { email, code, userId } = req.body;

  try {
    // Find the team using the invitation email and code
    const team = await Team.findOne({
      'invitations.email': email,
      'invitations.code': code,
      'invitations.status': 'pending',
    });

    if (!team) {
      return res.status(400).send('Invalid invitation code');
    }

    // Update the invitation status to 'accepted'
    const invitation = team.invitations.find(invite => invite.email === email && invite.code === code);
    invitation.status = 'accepted';

    // Add the user to the team members
    team.members.push(userId);

    // Activate the team if it has 2 or more members
    if (team.members.length >= 2) {
      team.status = 'active';
    }

    // Save the updated team
    await team.save();

    // Update the user's teamId to reflect the joined team
    await User.findByIdAndUpdate(userId, { teamId: team._id });

    res.status(200).send({ message: 'Successfully joined the team', team });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/all', async (req, res) => {
  try {
    const teams = await Team.find().populate('creator members');
    res.status(200).send(teams);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/delete/:teamId', async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findByIdAndDelete(teamId);

    if (!team) {
      return res.status(404).send('Team not found');
    }

    res.status(200).send({ message: 'Team deleted' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get('/getTeamById/:teamId', async (req, res) => {
  const { teamId } = req.params;

  try {
    const team = await Team.findById(teamId).populate('creator members');
    
    if (!team) {
      return res.status(404).send('Team not found');
    }
    
    res.status(200).send(team);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;
