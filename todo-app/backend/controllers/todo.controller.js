import { Todo } from "../models/todo.model.js";

export const create = async (req, res, next) => {
    try {
        console.log(req.body);
        const { title, priority, deadline } = req.body;
        if (!title) return next(new Error('Enter Title..'));
        if (!priority) return next(new Error('Enter priority..'));
        if (!deadline) return next(new Error('Enter deadline..'));
        console.log(title, priority, deadline);
        const newTodo = await Todo.create({ title, priority, deadline });
        res.status(200).json({
            success: true,
            message: 'todo created',
            todo: newTodo,
        });
    } catch (error) {
        next(new Error(error));
    }
};

// export const getAllTodos = async (req, res, next) => {
//     try {
//     } catch (error) {
//         next(new Error(error));
//     }
// };
