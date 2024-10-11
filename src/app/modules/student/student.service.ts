import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudent = async (payLoad: TStudent) => {
  const result = await Student.create(payLoad);
  return result;
};

const getAllStudents = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

const updateAStudent = async (id: string, payload: Partial<TStudent>) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudent = async (id: string) => {
  const result = await Student.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { runValidators: true, new: true },
  );
  return result;
};
export const StudentServices = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateAStudent,
  deleteStudent,
};
