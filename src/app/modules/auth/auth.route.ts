import express from "express";
import { AuthValidations } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
// TODO: specify auth roles for specific routes
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "../user/user.constant";
import validateRequest from "../../middleware/validateRequest";
const router = express.Router();

// Login
router.post(
  "/login",
  validateRequest(AuthValidations.loginValidationSchema),
  AuthControllers.loginUser,
);

// Change Password
router.post(
  "/change-password",
  // auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

// Refresh Password
router.post(
  "/refresh-token",
  validateRequest(AuthValidations.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

// Forgot Password
router.post(
  "/forgot-password",
  validateRequest(AuthValidations.forgotPasswordValidationSchema),
  AuthControllers.forgotPassword,
);

// Forgot Password
router.post(
  "/reset-password",
  validateRequest(AuthValidations.resetPasswordValidationSchema),
  AuthControllers.resetPassword,
);

export const AuthRoutes = router;
