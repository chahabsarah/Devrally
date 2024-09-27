const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
let jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');




exports.createUser = async (req, res) => {

  try {
      const { fullname, email, password, retypePassword, userType, website, domain } = req.body;
      
      // Vérification du type d'utilisateur et des champs obligatoires pour les entreprises
      if (userType === 'company' && (!website || !domain)) {
        return res.status(400).json({ message: 'Company must provide website and domain' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  
      const newUser = new User({
        fullname,
        email,
        password: hashedPassword,
        userType,
        website: (userType === 'company') ? website : undefined,
        domain: (userType === 'company') ? domain : undefined,
        verificationCode
      });
  
      await newUser.save();

    var smtpTransport = nodemailer.createTransport({
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

    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(201).json({ success: true, message: 'User created successfully. Please  your email.', user: newUser });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: 'Failed to create user', error: error.message });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    if (user.verificationCode !== code) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    user.verified = true;
    user.verificationCode = null;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (!user.verified) {
      return res.status(403).json({ message: 'Email not verified' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
   
    let accessToken = createAccessToken({ id: user._id });
    res.status(200).json({ message: 'Login successful', user,accessToken, userType: user.type  });
  } catch (error) {
    res.status(401).json({ message: 'Login failed', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error: error.message });
  }
};

exports.googleLogin = async (req, res) => {
  try {
    const { email, given_name, family_name, picture } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.fullname = `${given_name} ${family_name}`;
      existingUser.picture = picture;
      await existingUser.save();
      let accessToken = createAccessToken({ id: existingUser._id });
      return res.json({ message: 'User logged in successfully', user: existingUser, accessToken });
    }
    const newUser = new User({
      email,
      fullname: `${given_name} ${family_name}`,
      picture: picture
    });

    await newUser.save();
    let accessToken = createAccessToken({ id: newUser._id });
    res.json({ message: 'User created and logged in successfully', user: newUser, accessToken });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: 'Failed to log in with Google', error: error.message });
  }
};


exports.getCurrentUser = async (req, res) => {
  try {
    const currentUser = req.user;
    let findUser=await User.findById(req.user.id)
    
    res.json({result:findUser});
  } catch (error) {
   
    res.status(500).json({ message: 'Failed to fetch current user', error: error.message });
  }
};
exports.logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Logout failed', error: error.message });
  }
};

exports.addRole = async (req, res) => {
  try {
    const { email, newRole, website, domain } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (newRole === 'company' && (!website || !domain)) {
      return res.status(400).json({ message: 'Company must provide website and domain' });
    }

    if (user.userType.includes(newRole)) {
      return res.status(400).json({ message: 'User already has this role' });
    }

    user.userType.push(newRole);

    if (newRole === 'company') {
      user.website = website;
      user.domain = domain;
    }

    await user.save();
    res.status(200).json({ message: 'Role added successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add role', error: error.message });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, "sarroura", {
    expiresIn: "1d",
  });
};

