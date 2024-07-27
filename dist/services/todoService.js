"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCreate = todoCreate;
exports.todoUpdate = todoUpdate;
exports.todoDelete = todoDelete;
exports.todoGet = todoGet;
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function todoCreate(title, description, userId) {
    const newTodo = await prismaClient_1.default.todo.create({
        data: {
            title,
            description,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    });
    return newTodo;
}
async function todoUpdate(newTitle, newDescription, todoId, completed) {
    const updateTodo = await prismaClient_1.default.todo.update({
        where: {
            id: todoId
        },
        data: {
            title: newTitle,
            description: newDescription,
            completed: completed
        }
    });
    return updateTodo;
}
async function todoDelete(todoId) {
    const deleteTodo = await prismaClient_1.default.todo.delete({
        where: {
            id: todoId
        }
    });
    return deleteTodo;
}
async function todoGet(userId) {
    const todoList = await prismaClient_1.default.todo.findMany({
        where: {
            user_id: userId
        }
    });
    return todoList;
}
