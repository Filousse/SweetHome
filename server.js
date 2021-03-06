const express = require("express");
const userRoutes = require('./routes/user.routes');
const guestRoutes = require('./routes/guest.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' });
require("./config/db");
// const { checkUser, requireAuth } = require('./middleware/auth.middleware')
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Origin', 'kid', 'jwt'],
    'exposedHeaders': ['sessionId', 'kid', 'jwt'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTION',
    'preflightContinue': true
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// JWT have problem in prod!  status:503 
// app.get("*", checkUser);
// app.get('/jwtid', requireAuth, (req, res) => {
//     res.status(200).send(res.locals.user.id)
// })

// routes
app.use('/api/user', userRoutes)
app.use('/api/guest', guestRoutes)

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})