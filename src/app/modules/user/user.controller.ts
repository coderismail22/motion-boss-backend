import { Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const CreateUserController = catchAsync(async (req, res) => {
  const result = await UserService.createUserService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user is created successfully",
    data: result,
  });
});

const GetAllUserController = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.GetAllUserService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All users are retrieved successfully",
    data: result,
  });
});

const GetSingleUserController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.GetSingleUserService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User successfully retrieved",
      data: result,
    });
  },
);

const DeleteUserController = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.DeleteUserService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User successfully deleted",
    data: result,
  });
});

export const UserController = {
  CreateUserController,
  GetAllUserController,
  GetSingleUserController,
  DeleteUserController,
};
