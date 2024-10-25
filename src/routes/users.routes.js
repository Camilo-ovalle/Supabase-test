import { Router } from 'express';

import { getUsers, pingUsers } from '../controllers/users.controller.js';

const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.post('/ping', pingUsers);

export default userRouter;
