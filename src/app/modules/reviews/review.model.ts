import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Reviews = model<TReview>('Review', reviewSchema);
