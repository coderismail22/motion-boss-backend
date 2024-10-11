import { ObjectId } from "mongoose";

export type TStudent = {
  _id: ObjectId;
  id: string;
  password: string;
  role: "student" | "teacher" | "admin";
  status: "active" | "blocked";
  name: string;
  email: string;
  contactNo: string;
  dateOfBirth?: string;
  address: string;
  gender: "male" | "female" | "other";
  profileImg?: string;
  isDeleted: boolean;
};
