import sgMail  from '@sendgrid/mail';

import {emailLogic} from './emailLogic.js'



/***************Email Testing template with Twilio*****************/

export const sendEmail1 = async (req, res) => {
    const {sender_email, email_template1 } = req.body;

    console.log(sender_email);
    console.log(email_template1);

    const sender = sender_email;
    // const sender = 'souravmishra110@gmail.com';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: sender, // Change to your recipient
      from: 'raphaelstryker110@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: email_template1,
    }
    sgMail
      .send(msg)
      .then(() => {
        res.send('Email sent')
      })
      .catch((error) => {
        res.send(error)
      })
}


export const sendissue = async (req, res) => {
    const { name, email, issue_type, message } = req.body;

    console.log(name);
    console.log(email);
    console.log(issue_type);
    console.log(message);

    // Create Result
    const finalMessage = `name: ${name},\n email: ${email},\n issue_type: ${issue_type},\n message: ${message}`;
    console.log(finalMessage);

    // const sender = sender_email;
    const sender = 'souravmishra110@gmail.com';

    // emailLogic(sender, finalMessage);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: sender, // Change to your recipient
      from: 'raphaelstryker110@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: finalMessage,
    }
    sgMail
      .send(msg)
      .then(() => {
        res.send('Email sent')
      })
      .catch((error) => {
        res.send(error)
      })
}


/**********************************/