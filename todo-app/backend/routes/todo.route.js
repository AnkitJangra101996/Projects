import { Router } from 'express';
import { create } from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.post('/create', create);
// router.get('/api/all-todos', getAllTodos);

export default todoRouter;
