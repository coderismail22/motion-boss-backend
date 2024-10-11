import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    id: z
      .string({
        invalid_type_error: 'Id must be string',
      })
      .min(1, { message: 'Id must be more than 5 characters' }),

    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .min(4, { message: 'Password must be more than 4 characters' }),
  }),
});

export const userValidation = {
  userValidationSchema,
};
