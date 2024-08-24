import { Router } from 'express';
import { allTodos, create, remove, update } from '../controllers/todo.controller.js';
import { verifyUser } from '../utils/helpers.js';

const todoRouter = Router();

todoRouter.post('/create', verifyUser, create);
todoRouter.get('/all', verifyUser, allTodos);
todoRouter.put('/update/:id', verifyUser, update);
todoRouter.delete('/delete/:id', verifyUser, remove);

export default todoRouter;
