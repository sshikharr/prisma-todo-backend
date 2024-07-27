"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
// src/middlewares/authMiddleware.ts
const jwt_1 = require("../utils/jwt");
async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new Error('Token not provided');
        }
        const decode = (0, jwt_1.verifyToken)(token);
        req.user = { id: decode.userId };
        next();
    }
    catch (err) {
        res.status(401).json({
            message: "Token not valid"
        });
    }
}
