import jwt from "jsonwebtoken";
import { createHashPassword } from "../helpers/helpers.js";
import { User } from "../models/auth.model.js";
import bcrypt from 'bcrypt';

export const handleSignup = async (req, res, next) => {
    try {
        const { name, email, password, image } = req.body;
        console.log(req.body)
        console.log(name, email, password, image);
        if (!name || !email || !password || !image) {
            return res.status(500).json({
                message: 'Please Provide Full Info...',
                success: false,
            });
        }
        const isEmailExist = await User.findOne({ email });
        if (isEmailExist) {
            return res.status(500).json({
                message: 'Email Already Registered With Us',
                success: false,
            });
        }
        const hashPassword = await createHashPassword(password);
        const newUser = new User({ name, email, password: hashPassword, image });
        await newUser.save();
        return res.status(201).json({
            message: 'Successfully registered with us..',
            success: true,
            user: newUser
        })
    } catch (error) {
        console.log(`Error While Signup`, error);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
        });
    }
}

export const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).json({
                message: 'Please Provide Full Info...',
                success: false,
            });
        }
        const currentUser = await User.findOne({ email });
        if (!currentUser) {
            return res.status(500).json({
                message: 'Email Is Not Registered With Us',
                success: false,
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, currentUser.password);
        if (!isPasswordMatch) {
            return res.status(500).json({
                message: 'Wrong Email Or Password',
                success: false,
            });
        }
        const { _id } = currentUser;
        const token = jwt.sign({ _id }, process.env.TOKEN_SECRET);
        console.log(token);
        res.status(200).cookie('authcookie', token, { maxAge: 900000, httpOnly: true }).json({
            message: 'Successfully logged in..',
            success: true,
            token
        })
    } catch (error) {
        console.log(`Error While Login`, error);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
        });
    }
}

export const handleUser = async (req, res, next) => {
    const { user } = req;
    const userData = await User.findById(user).select('-password');
    if (!userData) {
        res.status(401).json({
            message: 'User not found with this id...',
            success: false,
        });
    }
    return res.status(200).json({
        message: 'User Found...',
        success: true,
        user: userData,
    });
}