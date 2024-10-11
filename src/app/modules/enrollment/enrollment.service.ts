import { TEnrollment } from './enrollment.interface';
import { Enrollment } from './enrollment.model';

const CreateEnrollmentService = async (payLoad: TEnrollment) => {
  const result = await Enrollment.create(payLoad);
  return result;
};

const getAllEnrollments = async () => {
  const result = await Enrollment.find();
  return result;
};

const getSingleEnrollment = async (id: string) => {
  const result = await Enrollment.findById(id);
  return result;
};

const updateEnrollment = async (id: string, payLoad: TEnrollment) => {
  const result = await Enrollment.findByIdAndUpdate(id, payLoad);
  return result;
};

const deleteEnrollment = async (id: string) => {
  const result = await Enrollment.findByIdAndDelete(id);
  return result;
};

export const EnrollmentServices = {
  CreateEnrollmentService,
  getAllEnrollments,
  getSingleEnrollment,
  updateEnrollment,
  deleteEnrollment,
};
