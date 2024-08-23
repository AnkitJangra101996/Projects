import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Enter Title..."],
        unique: true,
        trim: true,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },
    deadline: {
        type: String,
    },
    completed: {
        type: 'boolean',
        default: false,
    }
}, { timestamps: true });

export const Todo = mongoose.model('Todo', TodoSchema);