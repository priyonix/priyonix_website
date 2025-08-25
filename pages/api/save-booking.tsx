import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import Booking from '@/app/models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  await connectDB();
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
}
