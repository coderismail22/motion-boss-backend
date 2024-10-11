import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { BatchService } from './batch.service';

const CreateBatchController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BatchService.CreateBatchService(req.body);
    res.status(200).json({
      success: true,
      message: 'Batch created successfully',
      data: result,
    });
  },
);
const GetAllBatchController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BatchService.GetAllBatchService();
    res.status(200).json({
      success: true,
      message: 'Batch faced successfully',
      data: result,
    });
  },
);
const GetSingleBatchController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BatchService.GetSingleBatchService(id);
    res.status(200).json({
      success: true,
      message: 'Batch faced successfully',
      data: result,
    });
  },
);

const DeleteSingleBatchController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BatchService.DeleteSingleBatchService(id);
    res.status(200).json({
      success: true,
      message: 'Batch deleted successfully',
      data: result,
    });
  },
);

export const BatchController = {
  CreateBatchController,
  GetAllBatchController,
  GetSingleBatchController,
  DeleteSingleBatchController,
};
