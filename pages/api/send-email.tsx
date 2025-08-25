import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, name, course, amount } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Course Booking Confirmation',
    html: `<h2>Hi ${name},</h2><p>Your booking for <b>${course}</b> is successful.</p><p>Amount Paid: ₹${amount}</p>`
  };

  await transporter.sendMail(mailOptions);
  res.status(200).json({ success: true });
}
