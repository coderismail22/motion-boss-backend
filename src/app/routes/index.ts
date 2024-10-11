import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CourseRoutes } from "../modules/course/course.route";
import { ReviewRoutes } from "../modules/reviews/review.route";
import { BatchRoutes } from "../modules/batch/batch.routes";
import { EnrollmentRoutes } from "../modules/enrollment/enrollment.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    routes: UserRoutes,
  },
  {
    path: "/course",
    routes: CourseRoutes,
  },
  {
    path: "/reviews",
    routes: ReviewRoutes,
  },
  {
    path: "/batch",
    routes: BatchRoutes,
  },
  {
    path: "/enrollment",
    routes: EnrollmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
