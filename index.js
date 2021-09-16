import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sgMail  from '@sendgrid/mail';


import route1 from './routes/route1.js'

const app = express();
const PORT = process.env.PORT || 3000;  // Remove 3000 when sending into production

app.use(bodyParser.json());
app.use(cors());

// get config variables form env
dotenv.config();

app.get('/', (req, res) => {
    res.send("Welcome to Twilio Email Testing...");
})

app.use('/email', route1);

app.all('*', (req, res) => {
    res.send("You've tried reachin a route that doesn't exist...");
})

app.listen(PORT, (req, res) => {
    console.log(`Server running at ${PORT}...`);
})