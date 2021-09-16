import express from 'express'
import { sendEmail1, sendissue } from '../controllers/tester1.js'

const router = express.Router();

// Route for sending email
router.post('/sendemail', sendEmail1);


// Route for sending issue
router.post('/sendissue', sendissue);

export default router;