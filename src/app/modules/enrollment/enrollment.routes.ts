import { Router } from "express";
import { EnrollmentController } from "./enrollment.controller";
import validateRequest from "../../middleware/validateRequest";
import { EnrollmentValidation } from "./enrollment.validation";

const router = Router();

router.post(
  "/create",
  validateRequest(EnrollmentValidation.EnrollmentValidationSchema),
  EnrollmentController.CreateEnrollmentController,
);
router.get("/", EnrollmentController.GetAllEnrollmentController);
router.get("/:id", EnrollmentController.GetSingleEnrollmentController);
router.put("/:id", EnrollmentController.UpdateEnrollmentController);
router.delete("/:id", EnrollmentController.DeleteEnrollmentController);

export const EnrollmentRoutes = router;
