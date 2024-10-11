import { z } from 'zod';

const EnrollmentValidationSchema = z.object({
  course: z.string({
    invalid_type_error: 'course must be string',
    required_error: 'course is required',
  }),
  batch: z.string({
    invalid_type_error: 'batch must be string',
    required_error: 'batch is required',
  }),
  user: z.string({
    invalid_type_error: 'User must be string',
    required_error: 'User is required',
  }),

  date: z.string({
    invalid_type_error: 'Date must be string',
    required_error: 'Date is required',
  }),
  totalAmount:z.string({
    invalid_type_error: 'Total amount must be string',
    required_error: 'Total amount must be given '
  })
});

export const EnrollmentValidation = {
  EnrollmentValidationSchema,
};
