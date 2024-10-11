import express from "express";
import { StudentControllers } from "./student.controller";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./student.validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(userValidation.createStudentValidationSchema),
  StudentControllers.createStudent,
);
router.get("/", StudentControllers.getAllStudents);
router.get("/:id", StudentControllers.getSingleStudent);
router.patch(
  "/:id",
  validateRequest(userValidation.updateStudentValidationSchema),
  StudentControllers.updateSingleStudent,
);
router.delete("/:id", StudentControllers.deleteStudent);

export const StudentRoutes = router;
