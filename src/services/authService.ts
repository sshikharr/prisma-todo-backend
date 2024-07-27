import prisma from "../utils/prismaClient";
import { sign } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();


export async function signup( username: string, name: string, password: string){
    
    const user = await prisma.user.create({
        data:{
            username,
            name,
            password
        }
    })
    if(!user){
        throw new Error('Invalid Credentials')
    }
    return user;
}

export async function signin( username: string, password: string){
    
    const user = await prisma.user.findUnique({
        where:{
            username,
            password
        }
    })
    if(!user){
        throw new Error('Invalid Credentials')
    }
    const secret: string | undefined = process.env.JWT_SECRET;
    if(!secret){
        throw new Error('JWT_SECRET not defined')
    }
    const token = sign({userId: user.id}, secret)
    return token;
}
