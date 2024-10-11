import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';

const router = express.Router();

router.post('/create-user',validateRequest(userValidation.userValidationSchema),UserController.CreateStudentController);
router.get('/',UserController.GetAllUserController)
router.get('/:id',UserController.GetSingleUserController)
router.get('/:id',UserController.DeleteUserController)


export const UserRoutes = router;
