import { Router } from "express";
import { ReviewController } from "./review.controller";
import validateRequest from "../../middleware/validateRequest";
import { ReviewValidation } from "./review.validation";

const router = Router();

router.post(
  "/create-review",
  validateRequest(ReviewValidation.reviewsValidationSchema),
  ReviewController.CreateReviewsController,
);
router.get("/", ReviewController.GetAllReviewController);
router.get("/:id", ReviewController.GetAllReviewController);
router.delete("/:id", ReviewController.DeleteSingleReviewsController);

export const ReviewRoutes = router;
