const express = require('express');
const http = require("http");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require("passport");
const cookieSession = require("cookie-session");
const userRoutes = require('./routes/User.Routes');
const challengeRoutes = require('./routes/ChallengeRoutes');
const solutionRoutes = require('./routes/solutionRoutes');
const winnerRoutes = require('./routes/winnerRoutes');
const teamRoutes = require('./routes/TeamRoutes');
const stripeRoutes = require('./routes/Stripe.Routes');

const app = express();
const server = http.createServer(app);
const stripe = require('stripe')('sk_test_51P9W2TJY1ZtideJd27RJ8XeWyToqw8QXyIXvaYVKkFOt98sUGDOZ8SPgYwhjVaKVnKrqxWfBcuHUUOsTdOW6LqLT00XqOvwVh8');


app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
    name: "session",
    keys: ["*"],
    maxAge: 24 * 60 * 60 * 1000, 
}));

app.use(passport.initialize());
app.use(passport.session());


const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DevRally', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connecté à MongoDB avec succès !');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB :', error);
    }
};

connectToMongo();
app.post('/api/stripe/create-checkout-session', async (req, res) => {
    const { products, success_url } = req.body; // Extract success_url from request body
    const prizeAmount = Math.round(products.prizeAmount); // Convert to number
    if (isNaN(prizeAmount)) {
        console.error('Invalid amount:', products.prizeAmount);
    } else {
        const lineItems = [{
            price_data: {
                currency: "usd",
                product_data: {
                    name: "sarrour",
                },
                unit_amount:prizeAmount, // Hardcoded value for testing
            },
            quantity: 1
        }];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: success_url, // Include the success_url parameter
            cancel_url: success_url, // Specify a cancel URL as well
        });
        res.json({ id: session.id });
    }
});

app.use('/user', userRoutes);
app.use('/challenge', challengeRoutes);
app.use('/team', teamRoutes);
app.use('/solutions', solutionRoutes);
app.use('/winners', winnerRoutes)
app.use('/api/stripe', stripeRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
