"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = signup;
exports.signin = signin;
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function signup(username, name, password) {
    const user = await prismaClient_1.default.user.create({
        data: {
            username,
            name,
            password
        }
    });
    if (!user) {
        throw new Error('Invalid Credentials');
    }
    return user;
}
async function signin(username, password) {
    const user = await prismaClient_1.default.user.findUnique({
        where: {
            username,
            password
        }
    });
    if (!user) {
        throw new Error('Invalid Credentials');
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET not defined');
    }
    const token = (0, jsonwebtoken_1.sign)({ userId: user.id }, secret);
    return token;
}
