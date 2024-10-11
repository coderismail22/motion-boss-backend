import { ObjectId } from 'mongoose';

export type TUser = {
  _id: ObjectId;
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'student' | 'teacher' | 'admin';
  status: 'in-progress' | 'blocked';
  name: string;
  email: string;
  contactNo: string;
  dateOfBirth?: string;
  address: string;
  gender: 'male' | 'female' | 'other';
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};
