<<<<<<< HEAD
import { TUser } from './user.interface';
=======

>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb
import { User } from './user.model';

const createUserService = async (payLoad: TUser) => {
  const result = await User.create(payLoad);
  return result;
};

const GetAllUserService = async () => {
  const result = await User.find();
  return result;
};

const GetSingleUserService = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const DeleteUserService = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
export const UserService = {
  createUserService,
  GetAllUserService,
  GetSingleUserService,
  DeleteUserService,
};
