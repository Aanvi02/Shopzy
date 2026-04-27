import express from 'express'
import { isAuth, logout, register } from '../controllers/userController.js';
import authUser from '../controllers/middlewares/authUser.js';

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/is-auth', authUser, isAuth)
userRouter.post('/logout', authUser, logout)


export default userRouter