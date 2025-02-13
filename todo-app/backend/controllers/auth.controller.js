import { user } from "../models/auth.model.js";
import { assignToken } from "../utils/helpers.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) next(new Error('Provide Required Info..'));
        const newUser = new user({ name, email, password });
        const savedUser = await newUser.save();
        assignToken(savedUser.id, res);
    } catch (error) {
        next(new Error('Error', error));
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return next(new Error('Provide Required Info..'));
        const foundUser = await user.findOne({ email });
        if (!foundUser) return next(new Error('Invalid Credientials ...'));
        const matchPass = await bcrypt.compare(password, foundUser.password);
        console.log('matchPass ', matchPass);
        if (!matchPass) return next(new Error('Invalid Credientials ...'));
        assignToken(foundUser.id, res);
    } catch (error) {
        next(new Error('Error', error));
    }
};

export const profile = async (req, res, next) => {
    try {
        const { id } = req;
        console.log(req.id)
        if (!id) return next(new Error('User Id Not Found ...'));
        const matchedUser = await user.findById(id).select('-password');
        res.status(201).json({
            success: true,
            user: matchedUser,
        })
    } catch (error) {
        return next(new Error('Error', error));
    }
};
