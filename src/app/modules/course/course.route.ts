import { Router } from "express";
import { CourseController } from "./course.controller";
import validateRequest from "../../middleware/validateRequest";
import { CourseValidation } from "./course.validation";


const router = Router()

router.post('/create-course',validateRequest(CourseValidation.courseValidationSchema),CourseController.createCourseController)
router.get('/', CourseController.getAllCourseController)
router.get('/:id', CourseController.getSingleCourseController)
router.delete('/:id', CourseController.deleteCourseController)


export const CourseRoutes = router;