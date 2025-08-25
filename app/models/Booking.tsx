import mongoose, { Schema, Document } from 'mongoose';

interface AdditionalInfo {
  collegeName?: string;
  department?: string;
  degree?: string;
  experience?: string;
  gapDuration?: string;
  highestQualification?: string;
  currentDomain?: string;
}

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  category: string;
  additionalInfo: AdditionalInfo;
  course: string;
  duration: string;
  amount: number;
  paymentStatus: 'pending' | 'success' | 'failed';
  paymentId?: string;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
    additionalInfo: { type: Object, default: {} },
    course: { type: String, required: true },
    duration: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, default: 'pending' },
    paymentId: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
