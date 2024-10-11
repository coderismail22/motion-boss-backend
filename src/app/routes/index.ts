import { Router } from 'express';
<<<<<<< HEAD
import { UserRoutes } from '../modules/user/user.route';
import { CourseRoutes } from '../modules/course/course.route';
import { ReviewRoutes } from '../modules/reviews/review.route';
import { BatchRoutes } from '../modules/batch/batch.routes';
import { EnrollmentRoutes } from '../modules/enrollment/enrollment.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/course',
    routes: CourseRoutes,
  },
  {
    path: '/reviews',
    routes: ReviewRoutes,
  },
  {
    path: '/batch',
    routes: BatchRoutes,
  },
  {
    path: '/environment',
    routes: EnrollmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
=======
import { UserRouter } from '../modules/user/user.route';

const router = Router();
const modelRoutes = [
  {
    path: 'users',
    route: UserRouter,
  },
];
modelRoutes.forEach((route) => router.use(route.path, route.route));

>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb
export default router;
