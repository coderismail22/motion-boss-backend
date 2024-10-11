import { z } from 'zod';

const reviewsValidationSchema = z.object({
  title: z
    .string({ invalid_type_error: 'reviews title must be given' })
    .max(20, { message: 'Review title must be at least 20 characters' }),
  description: z
    .string({ invalid_type_error: 'reviews description must be given' })
    .max(60, { message: 'Review title must be at least 20 characters' }),
});

export const ReviewValidation = {
  reviewsValidationSchema,
};
