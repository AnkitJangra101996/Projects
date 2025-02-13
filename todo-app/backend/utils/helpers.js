/* eslint-disable no-undef */
import jwt from "jsonwebtoken";

export const assignToken = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    console.log(token, options);
    res.status(200).cookie('token', token, options).json({
        success: true,
        token
    });
};

export const verifyUser = async (req, res, next) => {
    const token = req.header('token');
    if (!token) return next(new Error('Token Not Found...'));
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return next(new Error('Invalid Token...'));
        console.log('decoded');
        console.log(decoded);
        req.id = decoded.id;
        next();
    } catch (err) {
        return next(new Error('Error While Verifing User...', err));
    }
};