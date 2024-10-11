import { Types } from 'mongoose';

export type TEnrollment = {
  user: Types.ObjectId;
  course: Types.ObjectId;
  batch: Types.ObjectId;
  date: string;
  totalAmount: string;
  isConfirmed: 'confirmed' | 'unConfirmed' | 'canceled';
};
