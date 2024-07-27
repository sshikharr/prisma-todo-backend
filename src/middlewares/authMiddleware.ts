// src/middlewares/authMiddleware.ts
import { verifyToken } from "../utils/jwt";
import { Request, Response, NextFunction } from "express";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new Error('Token not provided');
        }
        const decode = verifyToken(token) as { userId: number };
        
        req.user = { id: decode.userId };
        next();
    } catch (err) {
        res.status(401).json({
            message: "Token not valid"
        });
    }
}
