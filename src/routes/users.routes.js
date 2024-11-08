import { Router } from 'express';

import { getUsers } from '../controllers/users.controller.js';
import { createTest } from '../controllers/test.controller.js';

const userRouter = Router();

userRouter.get('/users', getUsers);

userRouter.get('/test', createTest);

export default userRouter;
