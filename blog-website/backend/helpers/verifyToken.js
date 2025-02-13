import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authCookie = req.cookies['authcookie'];
    console.log(authCookie);
    if (!authCookie) {
        return res.status(401).json({
            message: 'Unauthorized user or token not found ...',
            success: false,
        });
    }
    jwt.verify(authCookie, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({
                message: 'Unauthorized user or token not found ...',
                success: false,
            });
        }
        console.log(user._id);
        req.user = user._id;
        next();
    })
};