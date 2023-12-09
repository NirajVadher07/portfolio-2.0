import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get the email details from the request body
      const { name, email, message } = req.body;
            
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL, // Replace with your Gmail email address
          pass: process.env.PASSWORD, // Replace with your Gmail password or an App Password
        },
      });

      // Define the email options
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `Hello ${name}`,        
        text:`
        I have received your message:

        ${message}

        I will get back to you as soon as possible.

        Best Regards,
        Niraj Vadher
        `
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond with success message
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    // Respond with a method not allowed error for non-POST requests
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
