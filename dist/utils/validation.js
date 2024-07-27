"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    username: zod_1.default.string().min(3),
    name: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.signinSchema = zod_1.default.object({
    username: zod_1.default.string().min(3),
    password: zod_1.default.string().min(6)
});
exports.todoSchema = zod_1.default.object({
    title: zod_1.default.string().min(1),
    description: zod_1.default.string().min(1),
    completed: zod_1.default.boolean()
});
