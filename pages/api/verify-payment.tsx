import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import Booking from '@/app/models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  await connectDB();

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

  const sign = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest('hex');

  if (expectedSign === razorpay_signature) {
    await Booking.findByIdAndUpdate(bookingId, {
      paymentStatus: 'success',
      paymentId: razorpay_payment_id
    });
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid signature' });
  }
}
