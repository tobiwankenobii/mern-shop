import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization;

    if (token && token.startswith('Bearer')) {
        try {
            const decoded = jwt.verify(
                token.split(' ')[1],
                process.env.JWT_SECRET
            );

            req.user = await (await User.findById(decoded.id)).selected(
                '-password'
            );

            next();
        } catch (error) {
            res.status(401);
            throw new Error(error.message);
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, wrong token');
    }
});

export { protect };
