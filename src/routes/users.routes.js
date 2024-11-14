import { Router } from 'express';

import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';

const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

export default userRouter;
