import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ReviewService } from './review.service';

const CreateReviewsController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ReviewService.CreateReviewService(req.body);
    res.status(200).json({
      success: true,
      message: 'Reviews created successfully',
      data: result,
    });
  },
);
const GetAllReviewController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ReviewService.GetAllReviewsService();
    res.status(200).json({
      success: true,
      message: 'Reviews faced successfully',
      data: result,
    });
  },
);
const GetSingleReviewController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ReviewService.GetSingleReviewsService(id);
    res.status(200).json({
      success: true,
      message: 'Reviews faced successfully',
      data: result,
    });
  },
);

const DeleteSingleReviewsController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ReviewService.DeleteSingleReviewsService(id);
    res.status(200).json({
      success: true,
      message: 'Review deleted successfully',
      data: result,
    });
  },
);

export const ReviewController = {
  CreateReviewsController,
  GetAllReviewController,
  GetSingleReviewController,
  DeleteSingleReviewsController,
};
