import sgMail  from '@sendgrid/mail';

export const emailLogic = async (sender, email_template1) => {
    
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