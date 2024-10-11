import { z } from 'zod';

const courseValidationSchema = z.object({
  body: z.object({
    id: z.enum(['101', '102', '103', '104', '105', '106'], {
      invalid_type_error: 'id must be one of the specified string values',
      required_error: 'course id is required',
    }),
    courseName: z.enum(
      [
        'Video Editing',
        'Motion Graphics',
        'Web Development',
        'Graphics Design',
        'Digital Marketing',
      ],
      {
        invalid_type_error: 'please fill up course name section',
        required_error: 'courseName is required',
      },
    ),
    totalClass: z.number({
      invalid_type_error: 'Total Class must be a number',
      required_error: 'Total Class is required',
    }),
    amount: z.number({
      invalid_type_error: 'Amount must be a number',
      required_error: 'Amount is required',
    }),
    classDuration: z.enum(
      ['2 Month', '3 Month', '4 Month', '5 Month', '6 Month'],
      { 
        invalid_type_error: 'please fill up course duration section',
        required_error: 'Class Duration is required',
      },
    ),
  }),
});

export const CourseValidation = {
  courseValidationSchema,
};
