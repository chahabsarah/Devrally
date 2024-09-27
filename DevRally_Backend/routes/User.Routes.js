const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const userController = require('../controllers/UserCtrl');
const passport = require("passport");
let jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware/authMiddleware');
const validate = require ("../middleware/validate")


let createAccessToken = (user) => {
  return jwt.sign(user, "sarroura", {
    expiresIn: "1h",
  });
}
let createAccessToken2 = (user) => {
  return jwt.sign({id:user?._id,email:user?.email}, "sarroura", {
    expiresIn: "1h",
  });
}
router.post('/addRole', userController.addRole);

router.delete('/delete/:id', userController.deleteUser);

router.get('/currentUserProfile',authMiddleware, async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let userProfile = null;

    if (user.isCompany) {
      const company = await Company.findById(user.isCompany);
      if (!company) {
        return res.status(404).json({ message: 'Company not found' });
      }
      userProfile = company;
    } else {
      // If the user is not associated with a company, return the user profile
      userProfile = user;
    }

    res.status(200).json({ userProfile });
  } catch (error) {
    console.error('Error fetching current user profile:', error);
    res.status(500).json({ message: 'Failed to fetch current user profile', error: error.message });
  }
});
router.get('/current',authMiddleware,userController.getCurrentUser);

router.get('/findUserByEmail/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User found', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to find user by email', error: error.message });
  }
});
router.get('/user/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: 'Failed to fetch user', error: error.message });
  }
});
router.post('/register',userController.createUser);

router.get('/getAllUsers', userController.getAllUsers);
router.post('/logout', userController.logoutUser);
 
router.post('/login', userController.authenticateUser);
  
router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
      
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get("/google/callback",passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.get("/logoutgoogle", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

router.post("/login/success", async (req, res) => {
  try {
    const { email, given_name, family_name,picture ,profession } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.firstname = given_name;
      existingUser.lastname = family_name;
     
      await existingUser.save();
      let accessToken = createAccessToken({ id: existingUser._id });
      return res.json({ message: 'User logged in successfully', user: existingUser,accessToken, userType: existingUser.type  });
    }

    const newUser = new User({
      email,
      firstname: given_name,
      lastname: family_name,
      picture,
      profession,
    });
    await newUser.save();
    let accessToken = createAccessToken({ id: newUser._id });
    res.json({ message: 'User created and logged in successfully', user: newUser,accessToken, userType: newUser.type  });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).json({ message: 'Failed to log in with Google', error: error.message });
  }
});

router.post("/forgot-password", async (req, res) => {
  let { email } = req.body;
  try {
   
    const oldUser =  await User.findOne({ email });
    if (!oldUser) {
      return res.status(302).json({ msg: "User Not Exists!!" });}
      else{
        const secret = process.env.JWT_SECRET_KEY + oldUser.password;
      let token = createAccessToken2({ id: oldUser._id });

    console.log(token)
;
        return  res.send({oldUser,token})
      }


} catch (error) { 
  return res.status(500).json({msg:error.message})
}
});
router.post('/sendmail',async(req,res)=>{
  try {
    const { id, token,email } = req.body;
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
        // do not fail on invalid certs
        rejectUnauthorized: false
      },
});  


var mailOptions = {
  from: 'tektaitheoriginals@gmail.com',
  to: email,
  subject: "reset mdp",
  html: `<p>Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe :</p>
  <a href="http://localhost:3001/reset-password/${id}/${token}"
   class="btn btn-primary" style="display:inline-block;background-color:#007bff;
   color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px;"
   >Réinitialiser le mot de passe</a>
   <br />  <br />  <br />  <br />  <br />
   <img src="https://www.dropbox.com/s/okntir3yovac85uc2y6k0/originlogo.svg?dl=1" alt="logo" />
   `,

};

smtpTransport.sendMail(mailOptions, (error, info) => {
  if (error) {
      return res.send("Error while sending mail: " + error);
  } else {
    return  res.send('Message sent: %s', info.messageId);
  }
 
}); 

  } catch (error) {
    return res.status(500).json({msg:error.message})
    
  }
})

router.get("/reset-password/:id", async (req, res) => {
      const { id } = req.params;
      console.log(req.params);
      const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = process.env.JWT_SECRET_KEY + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: oldUser.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
    });

router.post("/reset-password/:id/:token", async (req, res) => {
      const { id, token } = req.params;
      const { password } = req.body;
    
      try {
        const oldUser = await User.findById({ _id: id });
        if (!oldUser) {
          return res.json({ status: "User Not Exists!!" });
        }
    
        // Vérifier si le nouveau mot de passe est différent de l'ancien mot de passe
       
    
        // Mettre à jour le mot de passe
        await User.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              password: encryptedPassword,
            },
          }
        );
    
        res.send({ result: "update" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Something Went Wrong" });
      }
    });
router.post('/verifyEmail', userController.verifyEmail);



module.exports = router;
