import { Schema, model } from 'mongoose';
import { TEnrollment } from './enrollment.interface';

const EnrollmentSchema = new Schema<TEnrollment>(
  {
    course: {
      type: Schema.Types.ObjectId,
      required: [true, 'Course name is required'],
      ref: 'Course',
    },
    batch: [
      {
        type: Schema.Types.ObjectId,
        required: [true, 'Batch number is required'],
        ref: 'Batch',
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User is required'],
      ref: 'User',
    },
    date: { type: String, required: [true, 'Date is require'] },
    totalAmount: { type: String, required: [true, 'Total Amount is require'] },
    isConfirmed: {
      type: String,
      enum: ['confirmed', 'unConfirmed', 'canceled'],
      default: 'unConfirmed',
    },
  },
  {
    timestamps: true,
  },
);

export const Enrollment = model<TEnrollment>('Enrollment', EnrollmentSchema);
