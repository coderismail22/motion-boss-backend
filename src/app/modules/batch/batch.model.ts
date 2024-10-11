import { Schema, model } from 'mongoose';
import { TBatch } from './batch.interface';

const batchSchema = new Schema<TBatch>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  batchNumber: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  batchTime: {
    type: String,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});


export const Batch = model<TBatch>('Batch',batchSchema)