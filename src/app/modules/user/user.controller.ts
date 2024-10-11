<<<<<<< HEAD
import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';
=======
import { UserService } from './user.service';
import { catchAsync } from '../../utils/catchAsync';

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await StudentServices.getAllStudentsFromDB();

//     res.status(200).json({
//       success: true,
//       message: 'Students are retrieved succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }
// };

const CreateUserController = catchAsync(async (req, res) => {
  const result = await UserService.createUserService(req.body);
  res.status(200).json({
    success: true,
    message: 'user is created successfully',
    data: result,
  });
});
>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb

const CreateStudentController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.createUserService(req.body);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  },
);

const GetAllUserController = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.GetAllUserService();
  res.status(200).json({
    succuss: true,
    message: 'All users are faced successfully',
    data: result,
  });
});

<<<<<<< HEAD
const GetSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.GetSingleUserService(id);
    res.status(200).json({
      success: true,
      message: 'User successfully  retrieved',
      data: result,
    });
  },
);

const DeleteUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.DeleteUserService(id);
  res.status(200).json({
    success: true,
    message: 'User successfully deleted',
    data: result,
  });
});

export const UserController = {
  CreateStudentController,
  GetAllUserController,
  GetSingleUserController,
  DeleteUserController
=======
export const UserController = {
  CreateUserController,
>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb
};
