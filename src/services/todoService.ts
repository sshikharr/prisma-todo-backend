import prisma from "../utils/prismaClient";
import dotenv from 'dotenv'

dotenv.config();

export async function todoCreate(title: string, description: string, userId: number){
    const newTodo = await prisma.todo.create({
        data:{
            title,
            description,
            user:{
                connect:{
                    id: userId
                }
            }
        }
    })
    return newTodo;
}

export async function todoUpdate(newTitle: string, newDescription: string, todoId: number, completed: boolean){
    const updateTodo = await prisma.todo.update({
        where:{
            id: todoId
        },
        data:{
            title: newTitle,
            description: newDescription,
            completed: completed
        }
    })
    return updateTodo;
}

export async function todoDelete(todoId: number){
    const deleteTodo = await prisma.todo.delete({
        where:{
            id: todoId
        }
    })
    return deleteTodo;
}

export async function todoGet(userId: number){
    const todoList = await prisma.todo.findMany({
        where: {
            user_id: userId
        }
    })
    return todoList;
}