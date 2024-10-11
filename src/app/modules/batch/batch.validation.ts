import { z } from 'zod';

const BatchValidationSchema =z.object({
  body:  z.object({
    course: z.string({
      invalid_type_error: 'course must be string',
      required_error: 'course is required',
    }),
    batchNumber: z.number({
      invalid_type_error: 'Date must be number',
      required_error: 'batchNumber is required',
    }),
  
  })
})

export const BatchValidation = {
  BatchValidationSchema,
};
