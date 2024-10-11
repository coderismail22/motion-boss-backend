import { Router } from 'express';
import { BatchController } from './batch.controller';
import validateRequest from '../../middleware/validateRequest';
import { BatchValidation } from './batch.validation';

const router = Router();

router.post('/create-Batch',validateRequest(BatchValidation.BatchValidationSchema), BatchController.CreateBatchController);
router.get('/', BatchController.GetAllBatchController);
router.get('/:id', BatchController.GetAllBatchController);
router.delete('/:id', BatchController.DeleteSingleBatchController);

export const BatchRoutes = router;
