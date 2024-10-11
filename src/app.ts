/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
// import { StudentRoutes } from './app/modules/student/student.route';
<<<<<<< HEAD
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFoundErrorHandler } from './app/middleware/notFoundErrorHandler';
=======

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

// global error handler
app.use(globalErrorHandler);

<<<<<<< HEAD
// notFount error handler
app.use(notFoundErrorHandler);
=======
// Not Found Routes
app.use(notFound);
>>>>>>> 63df90eed13fc608717e555ee15efdc0cbefe8bb

export default app;
