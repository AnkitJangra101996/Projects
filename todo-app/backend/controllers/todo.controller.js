import { Todo } from "../models/todo.model.js";

export const create = async (req, res, next) => {
    try {
        const { body: { title, priority, deadline }, id } = req;
        if (!title) return next(new Error('Enter Title..'));
        if (!priority) return next(new Error('Enter priority..'));
        if (!deadline) return next(new Error('Enter deadline..'));
        if (!id) return next(new Error('User Id Not Found..'));
        console.log(title, priority, deadline, id);
        const newTodo = await Todo.create({ title, priority, deadline, userId: id });
        res.status(200).json({
            success: true,
            message: 'todo created',
            todo: newTodo,
        });
    } catch (error) {
        next(new Error(error));
    }
};

export const allTodos = async (req, res, next) => {
    try {
        const { id } = req;
        if (!id) return next(new Error('User Id Not Found..'));
        const todos = await Todo.find({ userId: id });
        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        return next(new Error(error));
    }
};

export const update = async (req, res, next) => {
    try {
        const { body: { title, priority, deadline }, params: { id: _id } } = req;
        const doc = await Todo.findByIdAndUpdate(_id, { title, priority, deadline }, { new: true });
        return res.status(201).json({
            success: true,
            todo: doc
        });
    } catch (error) {
        return next(new Error(error));
    }
};

export const remove = async (req, res, next) => {
    try {
        const { params: { id: _id } } = req;
        const doc = await Todo.findByIdAndDelete(_id);
        return res.status(201).json({
            success: true,
            todo: doc
        });
    } catch (error) {
        return next(new Error(error));
    }
};

