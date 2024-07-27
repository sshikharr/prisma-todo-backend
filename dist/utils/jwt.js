"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = require("jsonwebtoken");
require('dotenv').config();
function verifyToken(token) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET not defined');
    }
    const decode = (0, jsonwebtoken_1.verify)(token, secret);
    return decode;
}
