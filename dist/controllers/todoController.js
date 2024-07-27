"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerCreate = controllerCreate;
exports.controllerDelete = controllerDelete;
exports.controllerUpdate = controllerUpdate;
exports.controllerGet = controllerGet;
// src/controllers/todoController.ts
const todoService_1 = require("../services/todoService");
const validation_1 = require("../utils/validation");
async function controllerCreate(req, res) {
    try {
        const validation = validation_1.todoSchema.parse(req.body);
        if (!req.user) {
            throw new Error('User not found');
        }
        const todo = await (0, todoService_1.todoCreate)(validation.title, validation.description, req.user.id);
        res.status(200).json({
            message: todo
        });
    }
    catch (err) {
        res.status(400).json({
            message: "Wrong User"
        });
    }
}
async function controllerDelete(req, res) {
    try {
        const { id } = req.params;
        const deleteTodo = await (0, todoService_1.todoDelete)(parseInt(id));
        res.status(200).json({
            deletedTodo: deleteTodo
        });
    }
    catch (err) {
        res.status(401).json({
            message: "Can't delete"
        });
    }
}
async function controllerUpdate(req, res) {
    try {
        const { id } = req.params;
        const validation = validation_1.todoSchema.parse(req.body);
        const updateTodo = await (0, todoService_1.todoUpdate)(validation.title, validation.description, parseInt(id), validation.completed);
        res.status(200).json({
            updatedTodo: updateTodo
        });
    }
    catch (err) {
        res.status(401).json({
            message: "Can't update"
        });
    }
}
async function controllerGet(req, res) {
    try {
        if (!req.user) {
            throw new Error('User not found');
        }
        const todos = await (0, todoService_1.todoGet)(req.user.id);
        res.json({
            todos: todos
        });
    }
    catch (err) {
        res.status(401).json({
            message: "Can't get"
        });
    }
}
