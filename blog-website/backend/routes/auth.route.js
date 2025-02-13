import { Router } from "express";
import { handleLogin, handleSignup, handleUser } from "../controllers/auth.controller.js";
import {verifyToken} from '../helpers/verifyToken.js';
const authRouter = Router();

authRouter.post('/signup', handleSignup);
authRouter.post('/login', handleLogin);
authRouter.get('/user',verifyToken ,handleUser);

export default authRouter;