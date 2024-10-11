import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { CourseRoutes } from "../modules/course/course.route";
import { ReviewRoutes } from "../modules/reviews/review.route";
import { BatchRoutes } from "../modules/batch/batch.routes";
import { EnrollmentRoutes } from "../modules/enrollment/enrollment.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/student",
    routes: StudentRoutes,
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
