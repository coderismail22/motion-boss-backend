import { Response, Request } from 'express';
import { CourseService } from './course.service';
import catchAsync from '../../utils/catchAsync';

const createCourseController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.createCourseService(req.body);
    res.status(200).json({
      success: true,
      message: 'Course created successfully',
      data: result,
    });
  },
);

const getAllCourseController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.getAllCourseService();
    res.status(200).json({
      success: true,
      message: 'Course is retrieved successfully',
      data: result,
    });
  },
);

const getSingleCourseController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CourseService.getSingleCourseService(id);
    res.status(200).json({
      success: true,
      message: 'Course is retrieved successfully',
      data: result,
    });
  },
);

const deleteCourseController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await CourseService.deleteCourseService(id);
    res.status(200).json({
      success: true,
      message: 'Course is deleted successfully',
      data: result,
    });
  },
);

export const CourseController = {
  createCourseController,
  getAllCourseController,
  getSingleCourseController,
  deleteCourseController,
};
