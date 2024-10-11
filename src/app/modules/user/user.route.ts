import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';

const router = express.Router();

<<<<<<< HEAD
router.post('/create-user',validateRequest(userValidation.userValidationSchema),UserController.CreateStudentController);
router.get('/',UserController.GetAllUserController)
router.get('/:id',UserController.GetSingleUserController)
router.get('/:id',UserController.DeleteUserController)
=======
router.post('/create-user',UserController.CreateUserController);
>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb


export const UserRoutes = router;
