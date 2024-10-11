import { z } from "zod";

const createStudentValidationSchema = z.object({
  body: z.object({
    //TODO: make id dynamic (batch number wise)
    id: z.string({ required_error: "ID is required" }),
    name: z.string({ required_error: "Name is required" }),
    email: z
      .string({ required_error: "Email is required." })
      .email("Invalid email"),
    password: z.string(),
    profileImg: z.string().optional(),
    contactNo: z.string({ required_error: "Contact number is required" }),
    role: z.enum(["student"]).default("student"),
    status: z.enum(["active", "blocked"]).default("active"),
    address: z.string({ required_error: "Address is required" }),
    dateOfBirth: z.string({ required_error: "Date of birth is required" }),
    gender: z.enum(["male", "female", "other"], {
      required_error: "Gender is required",
    }),
  }),
});
const updateStudentValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    profileImg: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z
      .enum(["male", "female", "other"], {
        required_error: "Gender is required",
      })
      .optional(),
  }),
});

export const userValidation = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
