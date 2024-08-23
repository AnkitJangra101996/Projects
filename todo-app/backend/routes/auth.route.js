import express from 'express';
import { login, profile, signup } from '../controllers/auth.controller.js';
import { verifyUser } from '../utils/helpers.js';
const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.get('/profile', verifyUser, profile);

export default authRouter;