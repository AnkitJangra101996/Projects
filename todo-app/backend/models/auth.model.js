import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter Name...'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Enter Email...'],
        trim: true,
        // unique: true,
    },
    password: {
        type: String,
        required: [true, 'Enter Password...'],
        trim: true,
    },
});

userSchema.pre('save', async function (next) {
    console.log(this, this.password);
    this.password = await bcrypt.hash(this.password, 8);
    console.log(this.password);
    next();
});

export const user = mongoose.model('user', userSchema)