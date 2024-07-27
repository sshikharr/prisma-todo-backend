// src/controllers/todoController.ts
import { todoCreate, todoDelete, todoUpdate, todoGet } from "../services/todoService";
import { todoInputSchema, todoSchema } from "../utils/validation";
import { Request, Response } from "express";

export async function controllerCreate(req: Request, res: Response) {
    try {
        const validation = todoInputSchema.parse(req.body);
        if (!req.user) {
            throw new Error('User not found');
        }
        const todo = await todoCreate(validation.title, validation.description, req.user.id);
        res.status(200).json({
            message: todo
        });
    } catch (err) {
        res.status(400).json({
            message: "Wrong User"
        });
    }
}

export async function controllerDelete(req: Request, res: Response) {
    try {
        
        const { id } = req.params;
        
        const deleteTodo = await todoDelete(parseInt(id));
        res.status(200).json({
            deletedTodo: deleteTodo
        });
    } catch (err) {
        res.status(401).json({
            message: "Can't delete"
        });
    }
}

export async function controllerUpdate(req: Request, res: Response) {
    try {
        console.log("Before id");
        const { id } = req.params;
        console.log(id);
        const validation = todoSchema.parse(req.body);
        const updateTodo = await todoUpdate(validation.title, validation.description, parseInt(id), validation.completed);
        res.status(200).json({
            updatedTodo: updateTodo
        });
    } catch (err) {
        res.status(401).json({
            message: "Can't update"
        });
    }
}

export async function controllerGet(req: Request, res: Response) {
    try {
        if (!req.user) {
            throw new Error('User not found');
        }

        const todos = await todoGet(req.user.id);
        res.json({
            todos: todos
        });
    } catch (err) {
        res.status(401).json({
            message: "Can't get"
        });
    }
}
