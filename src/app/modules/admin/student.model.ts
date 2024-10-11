import { model, Schema } from "mongoose";
import { TStudent } from "./student.interface";

// Define the user schema
const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
    },
    address: {
      type: String,
      required: [true, "Present address is required"],
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    profileImg: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

studentSchema.pre("save", async function (next) {
  const isExistUser = await Student.findOne({
    email: this.email,
  });
  if (isExistUser) {
    throw new Error("User already exists");
  }
  next();
});

export const Student = model<TStudent>("Student", studentSchema);
